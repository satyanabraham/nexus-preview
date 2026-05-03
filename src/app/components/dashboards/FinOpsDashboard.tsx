import { DollarSign, TrendingDown, TrendingUp, PieChart as PieIcon, AlertTriangle, CheckCircle } from 'lucide-react';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';

export function FinOpsDashboard() {
  // Cost trend over time
  const costTrend = [
    { month: 'Jan', actual: 245000, budget: 280000 },
    { month: 'Feb', actual: 268000, budget: 280000 },
    { month: 'Mar', actual: 312000, budget: 300000 },
    { month: 'Apr', actual: 289000, budget: 300000 },
    { month: 'May', actual: 256000, budget: 300000 },
    { month: 'Jun', actual: 234000, budget: 300000 },
  ];

  // Cost by team
  const teamCosts = [
    { team: 'ML Research', cost: 145000, color: '#22C55E' },
    { team: 'CV Team', cost: 98000, color: '#3B82F6' },
    { team: 'NLP Team', cost: 87000, color: '#A855F7' },
    { team: 'Infrastructure', cost: 62000, color: '#F59E0B' },
    { team: 'Other', cost: 42000, color: '#6B7280' },
  ];

  // Cost by resource type
  const resourceCosts = [
    { resource: 'GPU Compute', cost: 156000 },
    { resource: 'Storage', cost: 45000 },
    { resource: 'Networking', cost: 23000 },
    { resource: 'CPU Compute', cost: 18000 },
    { resource: 'Other', cost: 12000 },
  ];

  const metrics = [
    { icon: DollarSign, label: 'Monthly Spend', value: '$234K', trend: '-8.6%', color: 'text-green-400' },
    { icon: TrendingDown, label: 'Cost Savings', value: '$66K', trend: '+12%', color: 'text-green-400' },
    { icon: PieIcon, label: 'Budget Used', value: '78%', trend: '-5%', color: 'text-green-400' },
    { icon: AlertTriangle, label: 'Waste Detected', value: '$12K', trend: '-22%', color: 'text-green-400' },
  ];

  const costOptimizations = [
    { title: 'Idle GPU Cleanup', savings: '$8,400', status: 'Applied', icon: CheckCircle, color: 'text-green-400' },
    { title: 'Reserved Instances', savings: '$15,200', status: 'Recommended', icon: TrendingUp, color: 'text-blue-400' },
    { title: 'Spot Instance Usage', savings: '$6,800', status: 'In Progress', icon: AlertTriangle, color: 'text-yellow-400' },
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
        {/* Cost Trend */}
        <div className="bg-zinc-900 border-2 border-zinc-800 rounded-lg p-5">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-white">Cost Trend vs Budget</h3>
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-1">
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <span className="text-xs text-gray-400">Actual</span>
              </div>
              <div className="flex items-center space-x-1">
                <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                <span className="text-xs text-gray-400">Budget</span>
              </div>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={200}>
            <AreaChart data={costTrend}>
              <defs>
                <linearGradient id="finopsActualGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#22C55E" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#22C55E" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#27272A" />
              <XAxis dataKey="month" stroke="#71717A" style={{ fontSize: '12px' }} />
              <YAxis stroke="#71717A" style={{ fontSize: '12px' }} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#18181B', 
                  border: '2px solid #27272A',
                  borderRadius: '8px',
                  color: '#FFF'
                }}
                formatter={(value) => `$${(value as number / 1000).toFixed(0)}K`}
              />
              <Area type="monotone" dataKey="actual" stroke="#22C55E" strokeWidth={2} fill="url(#finopsActualGradient)" />
              <Area type="monotone" dataKey="budget" stroke="#6B7280" strokeWidth={2} fill="none" strokeDasharray="5 5" />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Cost by Team */}
        <div className="bg-zinc-900 border-2 border-zinc-800 rounded-lg p-5">
          <h3 className="text-lg font-bold text-white mb-4">Cost Attribution by Team</h3>
          <div className="flex items-center justify-center">
            <ResponsiveContainer width="100%" height={180}>
              <PieChart>
                <Pie
                  data={teamCosts}
                  cx="50%"
                  cy="50%"
                  innerRadius={50}
                  outerRadius={70}
                  paddingAngle={2}
                  dataKey="cost"
                >
                  {teamCosts.map((entry, index) => (
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
                  formatter={(value) => `$${(value as number / 1000).toFixed(0)}K`}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="grid grid-cols-2 gap-2 mt-3">
            {teamCosts.map((item, index) => (
              <div key={index} className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                <span className="text-xs text-gray-400">{item.team}: ${(item.cost / 1000).toFixed(0)}K</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Resource Costs & Optimizations */}
      <div className="grid md:grid-cols-2 gap-4">
        {/* Cost by Resource */}
        <div className="bg-zinc-900 border-2 border-zinc-800 rounded-lg p-5">
          <h3 className="text-lg font-bold text-white mb-4">Cost by Resource Type</h3>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={resourceCosts} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" stroke="#27272A" />
              <XAxis type="number" stroke="#71717A" style={{ fontSize: '12px' }} />
              <YAxis type="category" dataKey="resource" stroke="#71717A" style={{ fontSize: '11px' }} width={100} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#18181B', 
                  border: '2px solid #27272A',
                  borderRadius: '8px',
                  color: '#FFF'
                }}
                formatter={(value) => `$${(value as number / 1000).toFixed(0)}K`}
              />
              <Bar dataKey="cost" fill="#22C55E" radius={[0, 8, 8, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Cost Optimization Recommendations */}
        <div className="bg-zinc-900 border-2 border-zinc-800 rounded-lg p-5">
          <h3 className="text-lg font-bold text-white mb-4">Cost Optimizations</h3>
          <div className="space-y-3">
            {costOptimizations.map((opt, index) => {
              const Icon = opt.icon;
              return (
                <div key={index} className="bg-zinc-800/50 border border-zinc-700 rounded-lg p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-3">
                      <Icon className={`w-5 h-5 ${opt.color} flex-shrink-0 mt-0.5`} />
                      <div>
                        <div className="text-sm font-semibold text-white mb-1">{opt.title}</div>
                        <div className="text-xs text-gray-400">{opt.status}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-green-400">{opt.savings}</div>
                      <div className="text-xs text-gray-500">per month</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="mt-4 p-3 bg-green-500/10 border border-green-500/20 rounded-lg">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-400">Total Potential Savings</span>
              <span className="text-xl font-bold text-green-400">$30.4K/mo</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}