# 🚦 Adaptive Traffic Signal Control Using Deep Reinforcement Learning

![Python](https://img.shields.io/badge/Python-3.x-blue?logo=python&logoColor=white)
![TensorFlow](https://img.shields.io/badge/TensorFlow-Deep%20Learning-orange?logo=tensorflow&logoColor=white)
![SUMO](https://img.shields.io/badge/SUMO-Traffic%20Simulation-green)
![DQN](https://img.shields.io/badge/Deep%20Q--Learning-DQN-purple)
![AI](https://img.shields.io/badge/AI-Smart%20Traffic%20Control-red)

An intelligent traffic signal control system that uses **Deep Reinforcement Learning (DQN)** to dynamically optimize traffic light decisions based on changing traffic conditions.

Built with **Python, TensorFlow/Keras, and SUMO Traffic Simulator**, the project demonstrates how reinforcement learning can be applied to a real-world **smart city and traffic optimization problem**.

---

## 🎯 Problem Statement

Traditional traffic signals commonly operate using predefined timing cycles that do not always respond effectively to changing traffic conditions.

This can result in:

- 🚗 Longer vehicle queues
- ⏱️ Increased waiting time
- 🚦 Inefficient signal utilization
- 🏙️ Increased traffic congestion

The goal of this project is to explore whether an intelligent traffic signal can **learn better signal-control decisions automatically** through interaction with a simulated traffic environment.

A **Deep Q-Network (DQN)** agent observes traffic conditions, selects traffic signal actions, receives feedback from the environment, and gradually learns a better traffic-control policy.

---

## 💡 Proposed Solution

The traffic intersection is modeled as a **Reinforcement Learning environment** using SUMO.

At every decision step:

1. 🚗 The agent observes the current traffic state.
2. 🧠 The Deep Q-Network evaluates possible actions.
3. 🚦 The agent selects a traffic signal action.
4. 🌐 SUMO updates the traffic environment.
5. 📊 The agent receives a reward based on traffic performance.
6. 🔄 The experience is used to improve future decisions.

Through repeated interaction, the agent learns a policy aimed at improving traffic flow and reducing unnecessary vehicle waiting.

---

## 🧠 How Deep Reinforcement Learning Works

```text
                 SUMO Traffic Environment
                           │
                           ▼
                  Observe Traffic State
                           │
                           ▼
                    Deep Q-Network
                           │
                           ▼
                  Select Signal Action
                           │
                           ▼
                  Apply Traffic Signal
                           │
                           ▼
                Environment Transitions
                           │
                           ▼
                    Calculate Reward
                           │
                           ▼
                  Update DQN / Policy
                           │
                           │
                           └──────────────► Repeat
```

The continuous **State → Action → Reward → Learning** cycle enables the agent to improve its traffic-control strategy over time.

---

## 🔑 Reinforcement Learning Components

### 🟦 State

The **state** represents information about the current traffic situation available to the agent.

Depending on the simulation configuration, this can include traffic-related information such as vehicle presence, position, speed, or queue conditions.

### 🟩 Action

The **action** represents the traffic signal decision selected by the reinforcement learning agent.

The agent evaluates available actions and chooses the one expected to produce the highest long-term reward.

### 🟨 Reward

The **reward function** provides feedback to the agent after an action is performed.

The objective is to encourage decisions that improve traffic conditions and discourage decisions that increase congestion or unnecessary waiting.

### 🧠 Deep Q-Network (DQN)

A neural network is used to approximate Q-values for different state-action combinations.

Instead of relying only on a traditional Q-table, DQN allows the system to handle more complex traffic-state representations.

---

## ✨ Key Features

- 🚦 Adaptive traffic signal control
- 🤖 Deep Q-Learning-based decision making
- 🚗 Traffic simulation using SUMO
- 🧠 Neural-network-based Q-value approximation
- 🔄 Continuous interaction between the agent and traffic environment
- 📊 Traffic-state-based signal decisions
- 🏙️ Smart-city-oriented traffic optimization
- 🧪 Simulation-based experimentation without requiring physical traffic infrastructure

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| **Python** | Core programming language |
| **TensorFlow** | Deep learning implementation |
| **Keras** | Neural network development |
| **SUMO** | Traffic simulation environment |
| **TraCI** | Communication between Python and SUMO |
| **Deep Q-Network (DQN)** | Reinforcement learning algorithm |

---

## 📁 Project Structure

```text
Adaptive-Traffic-Signal-Control-Using-Deep-Reinforcement-Learning/
│
├── cross3ltl.sumocfg          # SUMO simulation configuration
├── input_routes.rou.xml       # Vehicle routes and traffic flow definitions
├── net.net.xml                # SUMO road network and intersection definition
├── traffic_light_control.py   # Main reinforcement learning implementation
├── log.txt                    # Simulation / execution logs
├── requirements.txt           # Python dependencies
└── README.md                  # Project documentation
```

---

## ⚙️ System Workflow

```text
SUMO Network + Vehicle Routes
            │
            ▼
     Start Simulation
            │
            ▼
   Read Traffic Conditions
            │
            ▼
      DQN Agent Decision
            │
            ▼
    Change Traffic Signal
            │
            ▼
    Measure Traffic Response
            │
            ▼
      Calculate Reward
            │
            ▼
       Update Learning
            │
            └──────────────► Continue Simulation
```

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/mrshivam77/Adaptive-Traffic-Signal-Control-Using-Deep-Reinforcement-Learning.git
```

Move into the project directory:

```bash
cd Adaptive-Traffic-Signal-Control-Using-Deep-Reinforcement-Learning
```

---

### 2️⃣ Install Python Dependencies

If `requirements.txt` is available:

```bash
pip install -r requirements.txt
```

Alternatively, install the core dependencies manually:

```bash
pip install tensorflow keras
```

---

### 3️⃣ Install SUMO Traffic Simulator

The project requires **Simulation of Urban MObility (SUMO)**.

Download and install SUMO from the official SUMO website and ensure that the SUMO environment variables are configured correctly on your system.

---

### 4️⃣ Verify the SUMO Configuration

The repository contains the required SUMO simulation files:

```text
cross3ltl.sumocfg
input_routes.rou.xml
net.net.xml
```

These files define the simulation configuration, vehicle routes, and road network used by the project.

---

### 5️⃣ Run the Project

Execute:

```bash
python traffic_light_control.py
```

The Python program communicates with the SUMO simulation and allows the reinforcement learning agent to interact with the traffic environment.

---

## 📊 Learning Workflow

The overall learning process follows these steps:

1. **Initialize the SUMO traffic simulation**
2. **Observe the current traffic state**
3. **Pass the state to the DQN agent**
4. **Select an appropriate traffic signal action**
5. **Apply the action to the SUMO environment**
6. **Observe the resulting traffic conditions**
7. **Calculate the reward**
8. **Use the experience to improve the agent**
9. **Repeat the process throughout the simulation**

This allows the traffic controller to gradually learn which signal decisions perform better under different traffic conditions.

---

## 📌 Why This Project Stands Out

Many beginner machine learning projects focus on predicting values from static datasets.

This project takes a different approach by applying **Deep Reinforcement Learning to a dynamic simulation environment**, where an AI agent must continuously:

- Observe changing traffic conditions
- Make decisions
- Interact with the environment
- Receive feedback
- Improve its future decisions

It combines concepts from:

**Artificial Intelligence + Deep Learning + Reinforcement Learning + Traffic Simulation + Optimization**

This makes the project a practical demonstration of how AI can be applied to **intelligent transportation systems and smart-city challenges**.

---

## 🌍 Real-World Applications

The concepts demonstrated in this project can be extended toward:

- 🚦 Intelligent traffic management systems
- 🏙️ Smart city infrastructure
- 🚗 Adaptive intersection control
- 📡 IoT-enabled traffic monitoring
- 🚑 Emergency vehicle prioritization
- 🌐 Coordinated multi-intersection traffic networks

---

## 🔮 Future Improvements

- 🚦 Extend the system to multiple connected intersections
- 🤖 Implement Multi-Agent Reinforcement Learning (MARL)
- 📷 Integrate computer vision for real-time vehicle detection
- 📡 Connect with IoT-based traffic sensors
- 🚑 Add emergency vehicle prioritization
- 📊 Build a dashboard for real-time traffic monitoring
- 🧠 Experiment with advanced reinforcement learning algorithms
- 🌐 Explore real-world traffic datasets and larger road networks

---

## 🙌 Acknowledgements

This project utilizes:

- **SUMO (Simulation of Urban Mobility)** for traffic simulation
- **TensorFlow / Keras** for deep learning
- **Deep Q-Learning** concepts for adaptive traffic signal control

The project was developed as an exploration of applying **Artificial Intelligence and Reinforcement Learning to intelligent traffic management**.

---

<p align="center">
  <b>🚦 Smarter Signals • 🚗 Better Traffic Flow • 🧠 AI-Driven Decisions</b>
</p>

<p align="center">
⭐ If you find this project interesting, consider starring the repository!
</p>
