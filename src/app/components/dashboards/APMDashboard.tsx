import { Activity, Clock, CheckCircle, XCircle, TrendingUp, Zap } from 'lucide-react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from 'recharts';

export function APMDashboard() {
  // Training job performance
  const trainingPerf = [
    { epoch: '1', loss: 2.45, accuracy: 0.42 },
    { epoch: '5', loss: 1.82, accuracy: 0.58 },
    { epoch: '10', loss: 1.23, accuracy: 0.71 },
    { epoch: '15', loss: 0.87, accuracy: 0.82 },
    { epoch: '20', loss: 0.54, accuracy: 0.89 },
    { epoch: '25', loss: 0.32, accuracy: 0.93 },
    { epoch: '30', loss: 0.18, accuracy: 0.96 },
  ];

  // GPU utilization by job
  const jobUtilization = [
    { job: 'LLM-Training', gpu: 94, cpu: 78 },
    { job: 'Image-Gen', gpu: 87, cpu: 45 },
    { job: 'NLP-Fine-tune', gpu: 91, cpu: 62 },
    { job: 'CV-Training', gpu: 82, cpu: 71 },
    { job: 'Inference-A', gpu: 45, cpu: 28 },
  ];

  // Throughput over time
  const throughputData = [
    { time: '00:00', samples: 1240 },
    { time: '04:00', samples: 1580 },
    { time: '08:00', samples: 2100 },
    { time: '12:00', samples: 2450 },
    { time: '16:00', samples: 2280 },
    { time: '20:00', samples: 1920 },
    { time: '24:00', samples: 1650 },
  ];

  const metrics = [
    { icon: Activity, label: 'Active Jobs', value: '47', trend: '+12', color: 'text-green-400' },
    { icon: Clock, label: 'Avg Duration', value: '2.4h', trend: '-15%', color: 'text-green-400' },
    { icon: CheckCircle, label: 'Success Rate', value: '98.7%', trend: '+2.1%', color: 'text-green-400' },
    { icon: Zap, label: 'Throughput', value: '2.1K/s', trend: '+18%', color: 'text-green-400' },
  ];

  const activeJobs = [
    { name: 'GPT-4-Fine-Tune', status: 'running', progress: 73, gpu: 8, eta: '2.3h' },
    { name: 'Stable-Diffusion-XL', status: 'running', progress: 45, gpu: 4, eta: '4.1h' },
    { name: 'BERT-Large-Training', status: 'running', progress: 89, gpu: 4, eta: '0.8h' },
    { name: 'ResNet-50-Training', status: 'queued', progress: 0, gpu: 2, eta: 'Waiting' },
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
        {/* Training Performance */}
        <div className="bg-zinc-900 border-2 border-zinc-800 rounded-lg p-5">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-white">Training Performance</h3>
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-1">
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <span className="text-xs text-gray-400">Accuracy</span>
              </div>
              <div className="flex items-center space-x-1">
                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                <span className="text-xs text-gray-400">Loss</span>
              </div>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={trainingPerf}>
              <CartesianGrid strokeDasharray="3 3" stroke="#27272A" />
              <XAxis dataKey="epoch" stroke="#71717A" style={{ fontSize: '12px' }} />
              <YAxis stroke="#71717A" style={{ fontSize: '12px' }} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#18181B', 
                  border: '2px solid #27272A',
                  borderRadius: '8px',
                  color: '#FFF'
                }}
              />
              <Line type="monotone" dataKey="accuracy" stroke="#22C55E" strokeWidth={2} dot={{ fill: '#22C55E', r: 4 }} />
              <Line type="monotone" dataKey="loss" stroke="#EF4444" strokeWidth={2} dot={{ fill: '#EF4444', r: 4 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Job Utilization */}
        <div className="bg-zinc-900 border-2 border-zinc-800 rounded-lg p-5">
          <h3 className="text-lg font-bold text-white mb-4">GPU vs CPU Utilization by Job</h3>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={jobUtilization}>
              <CartesianGrid strokeDasharray="3 3" stroke="#27272A" />
              <XAxis dataKey="job" stroke="#71717A" style={{ fontSize: '11px' }} angle={-15} textAnchor="end" height={60} />
              <YAxis stroke="#71717A" style={{ fontSize: '12px' }} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#18181B', 
                  border: '2px solid #27272A',
                  borderRadius: '8px',
                  color: '#FFF'
                }}
              />
              <Bar dataKey="gpu" fill="#22C55E" radius={[8, 8, 0, 0]} />
              <Bar dataKey="cpu" fill="#3B82F6" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Throughput & Active Jobs */}
      <div className="grid md:grid-cols-2 gap-4">
        {/* Throughput Chart */}
        <div className="bg-zinc-900 border-2 border-zinc-800 rounded-lg p-5">
          <h3 className="text-lg font-bold text-white mb-4">Samples/Second Throughput</h3>
          <ResponsiveContainer width="100%" height={180}>
            <AreaChart data={throughputData}>
              <defs>
                <linearGradient id="apmThroughputGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#22C55E" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#22C55E" stopOpacity={0}/>
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
              <Area type="monotone" dataKey="samples" stroke="#22C55E" strokeWidth={2} fill="url(#apmThroughputGradient)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Active Jobs */}
        <div className="bg-zinc-900 border-2 border-zinc-800 rounded-lg p-5">
          <h3 className="text-lg font-bold text-white mb-4">Active Training Jobs</h3>
          <div className="space-y-3">
            {activeJobs.map((job, index) => (
              <div key={index} className="bg-zinc-800/50 border border-zinc-700 rounded-lg p-3">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    {job.status === 'running' ? (
                      <Activity className="w-4 h-4 text-green-400 animate-pulse" />
                    ) : (
                      <Clock className="w-4 h-4 text-yellow-400" />
                    )}
                    <span className="text-sm font-semibold text-white">{job.name}</span>
                  </div>
                  <span className="text-xs text-gray-400">{job.gpu} GPUs</span>
                </div>
                {job.status === 'running' ? (
                  <>
                    <div className="w-full bg-zinc-700 rounded-full h-2 mb-2">
                      <div 
                        className="bg-green-400 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${job.progress}%` }}
                      ></div>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-gray-400">{job.progress}% Complete</span>
                      <span className="text-gray-500">ETA: {job.eta}</span>
                    </div>
                  </>
                ) : (
                  <div className="text-xs text-yellow-400 font-semibold">Queued - Waiting for resources</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}