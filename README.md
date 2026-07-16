# 🚦 Adaptive Traffic Signal Control Using Deep Reinforcement Learning

![Python](https://img.shields.io/badge/Python-3.11-blue)
![TensorFlow](https://img.shields.io/badge/TensorFlow-Deep%20Learning-orange)
![SUMO](https://img.shields.io/badge/SUMO-Traffic%20Simulation-green)
![Reinforcement%20Learning](https://img.shields.io/badge/Reinforcement-Learning-red)

An AI-powered intelligent traffic management system that uses **Deep Q-Learning (DQN)** to optimize traffic signal timings dynamically based on real-time traffic conditions. The project is developed using **Python, TensorFlow, and SUMO Traffic Simulator** to reduce congestion, minimize vehicle waiting time, and improve traffic flow.

---

## 🎯 Problem

Traditional traffic lights operate using fixed timing schedules regardless of actual traffic conditions. This often leads to unnecessary waiting time, increased fuel consumption, and traffic congestion.

This project applies **Deep Reinforcement Learning (Deep Q-Network)** to enable traffic signals to learn optimal signal timings by interacting with a simulated traffic environment, reducing congestion and improving traffic efficiency.

---

## ✨ Features

- 🚦 Adaptive traffic signal control using Deep Q-Learning
- 🤖 Reinforcement Learning-based decision-making
- 🚗 Dynamic traffic signal timing
- 📊 Real-time traffic simulation using SUMO
- ⏱️ Reduced vehicle waiting time
- ⛽ Improved traffic flow and fuel efficiency
- 📈 AI learns optimal traffic policies through continuous interaction

---

## 🧠 How It Works

```text
Traffic Simulation (SUMO)
           │
           ▼
Collect Traffic State
(Vehicle Count, Speed, Queue Length)
           │
           ▼
Deep Q-Network (DQN)
           │
           ▼
Choose Best Traffic Signal Action
           │
           ▼
Traffic Environment Updates
           │
           ▼
Reward Calculation
           │
           ▼
Model Learns Better Policy
           │
           └───────────────► Repeat
```

---

## ⚙️ Technologies Used

- Python
- TensorFlow
- Keras
- SUMO Traffic Simulator
- Deep Q-Network (DQN)

---

## 📁 Project Structure

```text
├── traffic_light_control.py      # Main program
├── models/                       # Saved DQN models
├── simulation/                   # SUMO simulation files
├── data/                         # Training logs
├── requirements.txt
└── README.md
```

*(Modify the structure above if your repository contains different folders.)*

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/adaptive-traffic-signal-control.git
cd adaptive-traffic-signal-control
```

### 2. Install Dependencies

```bash
pip install tensorflow
pip install keras
```

or

```bash
pip install tensorflow-gpu
```

### 3. Install SUMO

Download and install **SUMO Traffic Simulator** from:

https://sumo.dlr.de/download/

Follow the installation instructions provided on the official website.

### 4. Run the Project

```bash
python traffic_light_control.py
```

---

## 📊 Workflow

1. SUMO simulates real-world traffic.
2. The environment provides the current traffic state.
3. The Deep Q-Network predicts the best traffic signal action.
4. The selected signal timing is applied.
5. A reward is calculated based on traffic efficiency.
6. The model updates its policy to maximize future rewards.
7. The process repeats continuously until the agent learns an optimized traffic control strategy.

---

## 📌 Why This Project Stands Out

Most traditional traffic signal systems rely on fixed timing schedules that cannot adapt to changing traffic conditions.

This project demonstrates how **Artificial Intelligence and Reinforcement Learning** can be used to build an adaptive traffic control system capable of learning optimal traffic signal policies through interaction with a simulated environment.

The project combines **Machine Learning, Simulation, and Optimization** to solve a real-world smart city problem, making it highly relevant for intelligent transportation systems.

---

## 🚀 Future Improvements

- Multi-intersection traffic optimization
- Real-time camera-based vehicle detection
- Integration with IoT traffic sensors
- Multi-agent reinforcement learning
- Cloud-based deployment
- Traffic prediction using Deep Learning

---

## 🙌 Acknowledgements

- SUMO Traffic Simulator
- TensorFlow
- Keras
- Deep Reinforcement Learning research community
