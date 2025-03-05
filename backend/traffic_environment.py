import numpy as np
import gym
from gym import spaces
from collections import deque

class TrafficEnvironment(gym.Env):
    """Custom Environment that follows gym interface"""
    
    def __init__(self, max_steps=100):
        super().__init__()
        
        # Define action space (0: NS Green/EW Red, 1: NS Red/EW Green)
        self.action_space = spaces.Discrete(2)
        
        # Define observation space
        # [NS queue length, EW queue length, current phase duration]
        self.observation_space = spaces.Box(
            low=np.array([0, 0, 0]), 
            high=np.array([50, 50, 60]),
            dtype=np.float32
        )
        
        # Traffic simulation parameters
        self.arrival_rate_ns = 0.3  # Cars per second for North-South
        self.arrival_rate_ew = 0.2  # Cars per second for East-West
        self.service_rate = 0.5     # Cars per second when light is green
        self.min_phase_duration = 10  # Minimum green light duration
        self.max_phase_duration = 60  # Maximum green light duration
        self.yellow_duration = 3      # Yellow light duration
        
        self.max_steps = max_steps
        self.current_step = 0
        
        # Initialize queues and state
        self.reset()
        
    def reset(self):
        """Reset the environment to initial state"""
        self.ns_queue = deque()  # North-South queue
        self.ew_queue = deque()  # East-West queue
        self.current_phase = 0   # 0: NS Green/EW Red, 1: NS Red/EW Green
        self.phase_duration = 0  # Time spent in current phase
        self.current_step = 0
        self.waiting_times = {'ns': [], 'ew': []}
        
        return self._get_observation()
    
    def _get_observation(self):
        """Return current state observation"""
        return np.array([
            len(self.ns_queue),
            len(self.ew_queue),
            self.phase_duration
        ], dtype=np.float32)
    
    def _generate_arrivals(self):
        """Generate new vehicle arrivals based on arrival rates"""
        if np.random.random() < self.arrival_rate_ns:
            self.ns_queue.append(self.current_step)
        if np.random.random() < self.arrival_rate_ew:
            self.ew_queue.append(self.current_step)
    
    def _process_departures(self):
        """Process vehicle departures based on current signal phase"""
        if self.current_phase == 0:  # NS Green
            while len(self.ns_queue) > 0 and np.random.random() < self.service_rate:
                wait_time = self.current_step - self.ns_queue.popleft()
                self.waiting_times['ns'].append(wait_time)
        else:  # EW Green
            while len(self.ew_queue) > 0 and np.random.random() < self.service_rate:
                wait_time = self.current_step - self.ew_queue.popleft()
                self.waiting_times['ew'].append(wait_time)
    
    def step(self, action):
        """Execute one time step within the environment"""
        self.current_step += 1
        
        # Check if action changes the current phase
        if action != self.current_phase and self.phase_duration >= self.min_phase_duration:
            self.current_phase = action
            self.phase_duration = 0
        else:
            self.phase_duration += 1
        
        # Generate new arrivals and process departures
        self._generate_arrivals()
        self._process_departures()
        
        # Calculate reward (negative of total queue length)
        reward = -(len(self.ns_queue) + len(self.ew_queue))
        
        # Check if episode is done
        done = (self.current_step >= self.max_steps or 
                self.phase_duration >= self.max_phase_duration)
        
        return self._get_observation(), reward, done, {}
    
    def get_waiting_times(self):
        """Return average waiting times for both directions"""
        ns_avg = np.mean(self.waiting_times['ns']) if self.waiting_times['ns'] else 0
        ew_avg = np.mean(self.waiting_times['ew']) if self.waiting_times['ew'] else 0
        return ns_avg, ew_avg