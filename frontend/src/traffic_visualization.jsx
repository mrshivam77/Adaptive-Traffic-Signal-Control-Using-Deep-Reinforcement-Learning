import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const TrafficVisualization = () => {
  const [trafficData, setTrafficData] = useState([]);
  const [currentPhase, setCurrentPhase] = useState(0);
  const [queueLengths, setQueueLengths] = useState({ ns: 0, ew: 0 });
  const [stats, setStats] = useState({
    avgWaitTime: 0,
    throughput: 0,
    phaseChanges: 0
  });

  // Simulated data updates (in real implementation, this would come from the Python backend)
  useEffect(() => {
    const interval = setInterval(() => {
      // Simulate new data point
      const newDataPoint = {
        time: trafficData.length + 1,
        nsQueue: Math.max(0, queueLengths.ns + Math.random() * 2 - (currentPhase === 0 ? 1 : 0)),
        ewQueue: Math.max(0, queueLengths.ew + Math.random() * 2 - (currentPhase === 1 ? 1 : 0)),
        waitTime: Math.random() * 20 + 10
      };

      setTrafficData(prev => [...prev.slice(-20), newDataPoint]);
      setQueueLengths({
        ns: newDataPoint.nsQueue,
        ew: newDataPoint.ewQueue
      });

      // Randomly change phase
      if (Math.random() < 0.1) {
        setCurrentPhase(prev => 1 - prev);
        setStats(prev => ({
          ...prev,
          phaseChanges: prev.phaseChanges + 1
        }));
      }

      // Update stats
      setStats(prev => ({
        ...prev,
        avgWaitTime: (prev.avgWaitTime * 0.9 + newDataPoint.waitTime * 0.1),
        throughput: prev.throughput + (Math.random() < 0.5 ? 1 : 0)
      }));
    }, 1000);

    return () => clearInterval(interval);
  }, [trafficData, currentPhase, queueLengths]);

  return (
    <div className="w-full max-w-6xl mx-auto p-4">
      <Card className="mb-4">
        <CardHeader>
          <CardTitle>Traffic Signal Control Dashboard</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Traffic Light Status */}
            <div className="p-4 border rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Current Signal Status</h3>
              <div className="flex justify-around">
                <div className="text-center">
                  <div className="text-lg font-bold">North-South</div>
                  <div className={`w-16 h-16 rounded-full ${currentPhase === 0 ? 'bg-green-500' : 'bg-red-500'}`}></div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold">East-West</div>
                  <div className={`w-16 h-16 rounded-full ${currentPhase === 1 ? 'bg-green-500' : 'bg-red-500'}`}></div>
                </div>
              </div>
            </div>

            {/* Current Queue Stats */}
            <div className="p-4 border rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Queue Lengths</h3>
              <div className="flex justify-around">
                <div className="text-center">
                  <div className="text-sm">North-South</div>
                  <div className="text-2xl font-bold">{Math.round(queueLengths.ns)}</div>
                </div>
                <div className="text-center">
                  <div className="text-sm">East-West</div>
                  <div className="text-2xl font-bold">{Math.round(queueLengths.ew)}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Performance Metrics */}
          <div className="mt-4">
            <h3 className="text-lg font-semibold mb-2">Performance Metrics</h3>
            <div className="grid grid-cols-3 gap-4">
              <div className="p-4 border rounded-lg text-center">
                <div className="text-sm">Avg Wait Time</div>
                <div className="text-2xl font-bold">{Math.round(stats.avgWaitTime)}s</div>
              </div>
              <div className="p-4 border rounded-lg text-center">
                <div className="text-sm">Total Throughput</div>
                <div className="text-2xl font-bold">{stats.throughput}</div>
              </div>
              <div className="p-4 border rounded-lg text-center">
                <div className="text-sm">Phase Changes</div>
                <div className="text-2xl font-bold">{stats.phaseChanges}</div>
              </div>
            </div>
          </div>

          {/* Queue Length Chart */}
          <div className="mt-4">
            <h3 className="text-lg font-semibold mb-2">Queue Length Over Time</h3>
            <LineChart width={800} height={300} data={trafficData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="time" label={{ value: 'Time (s)', position: 'bottom' }} />
              <YAxis label={{ value: 'Queue Length', angle: -90, position: 'left' }} />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="nsQueue" stroke="#8884d8" name="North-South Queue" />
              <Line type="monotone" dataKey="ewQueue" stroke="#82ca9d" name="East-West Queue" />
            </LineChart>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TrafficVisualization;