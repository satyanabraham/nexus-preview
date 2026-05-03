import { Server, Cpu, Thermometer, Zap, TrendingUp, AlertCircle } from 'lucide-react';
import { LineChart, Line, BarChart, Bar, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

export function DCIMDashboard() {
  // GPU Utilization over time
  const gpuUtilData = [
    { time: '00:00', utilization: 45, temperature: 65 },
    { time: '04:00', utilization: 62, temperature: 71 },
    { time: '08:00', utilization: 78, temperature: 76 },
    { time: '12:00', utilization: 85, temperature: 79 },
    { time: '16:00', utilization: 92, temperature: 82 },
    { time: '20:00', utilization: 88, temperature: 80 },
    { time: '24:00', utilization: 76, temperature: 74 },
  ];

  // Power consumption by cluster
  const powerData = [
    { cluster: 'Cluster A', power: 125 },
    { cluster: 'Cluster B', power: 98 },
    { cluster: 'Cluster C', power: 142 },
    { cluster: 'Cluster D', power: 87 },
    { cluster: 'Cluster E', power: 156 },
  ];

  // Infrastructure health
  const healthData = [
    { name: 'Healthy', value: 847, color: '#22C55E' },
    { name: 'Warning', value: 43, color: '#EAB308' },
    { name: 'Critical', value: 8, color: '#EF4444' },
  ];

  const metrics = [
    { icon: Server, label: 'Active GPUs', value: '898/1024', trend: '+12%', color: 'text-green-400' },
    { icon: Cpu, label: 'Avg Utilization', value: '87.3%', trend: '+5.2%', color: 'text-green-400' },
    { icon: Thermometer, label: 'Avg Temp', value: '76°C', trend: '+2°C', color: 'text-yellow-400' },
    { icon: Zap, label: 'Power Draw', value: '608 kW', trend: '+8%', color: 'text-green-400' },
  ];

  return (
    <div className="space-y-5">
      {/* Real-time Metrics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {metrics.map((metric, index) => {
          const Icon = metric.icon;
          return (
            <div
              key={index}
              className="bg-zinc-900 border-2 border-zinc-800 rounded-lg p-4 hover:border-green-500 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-2">
                <Icon className="w-5 h-5 text-green-400" />
                <span className={`text-xs font-semibold ${metric.color}`}>{metric.trend}</span>
              </div>
              <div className="text-2xl font-bold text-white mb-1">{metric.value}</div>
              <div className="text-xs text-gray-400 uppercase tracking-wider">{metric.label}</div>
            </div>
          );
        })}
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {/* GPU Utilization Chart */}
        <div className="bg-zinc-900 border-2 border-zinc-800 rounded-lg p-5">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-white">GPU Utilization & Temperature</h3>
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-1">
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <span className="text-xs text-gray-400">Utilization</span>
              </div>
              <div className="flex items-center space-x-1">
                <div className="w-3 h-3 bg-orange-400 rounded-full"></div>
                <span className="text-xs text-gray-400">Temperature</span>
              </div>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={200}>
            <AreaChart data={gpuUtilData}>
              <defs>
                <linearGradient id="dcimUtilGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#22C55E" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#22C55E" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="dcimTempGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#FB923C" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#FB923C" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#27272A" />
              <XAxis dataKey="time" stroke="#71717A" style={{ fontSize: '12px' }} />
              <YAxis stroke="#71717A" style={{ fontSize: '12px' }} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#18181B', 
                  border: '2px solid #27272A',
                  borderRadius: '8px',
                  color: '#FFF'
                }}
              />
              <Area type="monotone" dataKey="utilization" stroke="#22C55E" strokeWidth={2} fill="url(#dcimUtilGradient)" />
              <Area type="monotone" dataKey="temperature" stroke="#FB923C" strokeWidth={2} fill="url(#dcimTempGradient)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Power Consumption Chart */}
        <div className="bg-zinc-900 border-2 border-zinc-800 rounded-lg p-5">
          <h3 className="text-lg font-bold text-white mb-4">Power Consumption by Cluster</h3>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={powerData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#27272A" />
              <XAxis dataKey="cluster" stroke="#71717A" style={{ fontSize: '12px' }} />
              <YAxis stroke="#71717A" style={{ fontSize: '12px' }} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#18181B', 
                  border: '2px solid #27272A',
                  borderRadius: '8px',
                  color: '#FFF'
                }}
              />
              <Bar dataKey="power" fill="#22C55E" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
          <div className="text-center mt-3">
            <span className="text-xs text-gray-400">Total: 608 kW</span>
          </div>
        </div>
      </div>

      {/* Infrastructure Health & Alerts */}
      <div className="grid md:grid-cols-2 gap-4">
        {/* Health Status */}
        <div className="bg-zinc-900 border-2 border-zinc-800 rounded-lg p-5">
          <h3 className="text-lg font-bold text-white mb-4">Infrastructure Health</h3>
          <div className="flex items-center justify-center">
            <ResponsiveContainer width="100%" height={180}>
              <PieChart>
                <Pie
                  data={healthData}
                  cx="50%"
                  cy="50%"
                  innerRadius={50}
                  outerRadius={70}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {healthData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#18181B', 
                    border: '2px solid #27272A',
                    borderRadius: '8px',
                    color: '#FFF'
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="flex justify-center space-x-4 mt-2">
            {healthData.map((item, index) => (
              <div key={index} className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                <span className="text-xs text-gray-400">{item.name}: {item.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Alerts */}
        <div className="bg-zinc-900 border-2 border-zinc-800 rounded-lg p-5">
          <h3 className="text-lg font-bold text-white mb-4">Recent Alerts</h3>
          <div className="space-y-3">
            <div className="flex items-start space-x-3 p-3 bg-red-500/10 border border-red-500/20 rounded-lg">
              <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
              <div className="flex-1">
                <div className="text-sm font-semibold text-red-400">GPU Temperature Critical</div>
                <div className="text-xs text-gray-400">Cluster C - GPU #847 - 89°C</div>
                <div className="text-xs text-gray-500 mt-1">2 minutes ago</div>
              </div>
            </div>
            <div className="flex items-start space-x-3 p-3 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
              <AlertCircle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
              <div className="flex-1">
                <div className="text-sm font-semibold text-yellow-400">Power Threshold Warning</div>
                <div className="text-xs text-gray-400">Cluster E approaching 90% capacity</div>
                <div className="text-xs text-gray-500 mt-1">15 minutes ago</div>
              </div>
            </div>
            <div className="flex items-start space-x-3 p-3 bg-green-500/10 border border-green-500/20 rounded-lg">
              <TrendingUp className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
              <div className="flex-1">
                <div className="text-sm font-semibold text-green-400">Utilization Optimized</div>
                <div className="text-xs text-gray-400">Cluster A reached 95% efficiency</div>
                <div className="text-xs text-gray-500 mt-1">1 hour ago</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}