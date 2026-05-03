import { PlatformNavigation } from '../../components/platform/PlatformNavigation';
import { PlatformHero } from '../../components/platform/PlatformHero';
import { PlatformCTA } from '../../components/platform/PlatformCTA';
import { DollarSign, PieChart, TrendingDown, AlertTriangle, Target, FileText, CheckCircle2 } from 'lucide-react';
import { FinOpsDashboard } from '../../components/dashboards';
import { finOpsComprehensiveDashboardImage, finOpsAnomalyDetectionImage } from '../../config/platformImages';

export default function FinOps() {
  const capabilities = [
    {
      icon: DollarSign,
      title: 'Cost Attribution',
      description: 'Track costs down to individual jobs, models, teams, and projects with granular accuracy',
    },
    {
      icon: PieChart,
      title: 'Budget Management',
      description: 'Set budgets at any level and receive alerts before overspending occurs',
    },
    {
      icon: TrendingDown,
      title: 'Waste Detection',
      description: 'Automatically identify idle resources, zombie jobs, and optimization opportunities',
    },
    {
      icon: AlertTriangle,
      title: 'Anomaly Alerts',
      description: 'Get notified of unexpected cost spikes before they impact your budget',
    },
    {
      icon: Target,
      title: 'Cost Optimization',
      description: 'Receive AI-powered recommendations to reduce costs without sacrificing performance',
    },
    {
      icon: FileText,
      title: 'Chargeback Reports',
      description: 'Generate detailed cost allocation reports for internal billing and showback',
    },
  ];

  const useCases = [
    {
      title: 'Multi-Team Cost Allocation',
      scenario: 'Unable to track which teams are driving infrastructure costs',
      solution: 'Automatic cost attribution to teams, projects, and individual ML jobs',
      metrics: ['100% cost visibility', '40% waste reduction'],
    },
    {
      title: 'Budget Enforcement',
      scenario: 'Teams regularly exceeding allocated budgets without warning',
      solution: 'Real-time budget tracking with automated alerts and enforcement policies',
      metrics: ['95% budget compliance', 'Zero surprise bills'],
    },
    {
      title: 'Cloud Cost Optimization',
      scenario: '$500K+ monthly cloud spend with hidden waste',
      solution: 'AI-powered recommendations identify idle resources and right-sizing opportunities',
      metrics: ['35% cost reduction', '$175K+ monthly savings'],
    },
  ];

  const features = [
    'Real-time cost tracking at job, user, team, and project level',
    'Multi-cloud cost aggregation (AWS, Azure, GCP, on-prem)',
    'Budget alerts with configurable thresholds and escalation',
    'Cost forecasting based on historical usage patterns',
    'Idle resource detection and automatic cleanup',
    'Spot instance and reserved capacity optimization',
    'Detailed cost allocation reports and dashboards',
    'Integration with financial systems and ERPs',
  ];

  const technicalSpecs = [
    { label: 'Cost Granularity', value: 'Per-job level' },
    { label: 'Update Frequency', value: 'Real-time' },
    { label: 'Cloud Platforms', value: 'AWS, Azure, GCP' },
    { label: 'Historical Data', value: '24 months' },
    { label: 'Budget Types', value: 'Unlimited hierarchies' },
    { label: 'Report Generation', value: '<30 seconds' },
  ];

  return (
    <div className="bg-white">
      <PlatformNavigation />
      
      <PlatformHero
        subtitle="FinOps Module"
        title="Financial Operations"
        description="Granular cost tracking, optimization, and governance across all AI infrastructure. Understand exactly where every dollar goes and optimize automatically."
        stats={[
          { value: '30-50%', label: 'Cost Reduction' },
          { value: 'Real-time', label: 'Cost Tracking' },
          { value: 'Per-job', label: 'Attribution' },
          { value: '24mo', label: 'History' },
        ]}
      />

      {/* Problem Statement */}
      <section className="py-6 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-green-600 font-bold text-xs uppercase tracking-[0.3em] mb-2 block">
              The Challenge
            </span>
            <h2 className="text-3xl font-bold text-black mb-3">
              AI Infrastructure Costs Are Spiraling
            </h2>
            <p className="text-base text-gray-700 mb-4 leading-relaxed">
              GPU costs are exploding, but most organizations have no visibility into where their money goes. Traditional cloud cost tools can't attribute costs to specific ML jobs or teams.
            </p>
            <p className="text-base text-gray-700 leading-relaxed">
              Nexus FinOps gives you granular cost tracking down to the job level, with automated optimization and budget enforcement.
            </p>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-6 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="text-green-600 font-bold text-xs uppercase tracking-[0.3em] mb-2 block">
              Key Capabilities
            </span>
            <h2 className="text-3xl font-bold text-black mb-3">
              Complete Cost Visibility
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {capabilities.map((capability, index) => {
              const Icon = capability.icon;
              return (
                <div
                  key={index}
                  className="bg-white border-2 border-zinc-200 hover:border-green-500 rounded-lg p-5 transition-all duration-300"
                >
                  <div className="w-11 h-11 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg flex items-center justify-center mb-3">
                    <Icon className="w-5 h-5 text-black" />
                  </div>
                  <h3 className="text-lg font-bold text-black mb-2">
                    {capability.title}
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {capability.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-6 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="text-green-400 font-bold text-xs uppercase tracking-[0.3em] mb-2 block">
              Use Cases
            </span>
            <h2 className="text-3xl font-bold mb-3">
              Take Control of Costs
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="bg-zinc-900 border-2 border-zinc-800 hover:border-green-500 rounded-lg p-5 transition-all duration-300"
              >
                <h3 className="text-lg font-bold text-white mb-3">
                  {useCase.title}
                </h3>
                <div className="mb-3">
                  <div className="text-gray-500 text-xs font-semibold uppercase mb-1">Scenario</div>
                  <p className="text-gray-400 text-sm mb-2">{useCase.scenario}</p>
                  <div className="text-gray-500 text-xs font-semibold uppercase mb-1">Solution</div>
                  <p className="text-gray-400 text-sm mb-3">{useCase.solution}</p>
                </div>
                <div className="space-y-2 pt-3 border-t border-zinc-800">
                  {useCase.metrics.map((metric, i) => (
                    <div key={i} className="flex items-center space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-green-400" />
                      <span className="text-green-400 text-sm font-semibold">{metric}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI-Powered Anomaly Detection Visualization */}
      <section className="py-3 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-4 items-start">
            <div>
              <span className="text-green-400 font-bold text-xs uppercase tracking-[0.3em] mb-1 block">
                Intelligent Monitoring
              </span>
              <h2 className="text-2xl font-bold text-white mb-2">
                AI-Powered Anomaly Detection
              </h2>
              <p className="text-gray-300 text-sm mb-3 leading-snug">
                Detect cost anomalies before they impact your budget. Our ML-powered system monitors spending patterns across all cloud providers and training workloads, automatically alerting you to unusual spikes and optimization opportunities.
              </p>
              <div className="space-y-1">
                {[
                  'Real-time anomaly detection with ML-based pattern recognition',
                  'AWS cost spike alerts with $13.37k variance tracking',
                  'Azure ML workspace spend monitoring ($9.45k tracked)',
                  'Multi-cloud cost correlation and trend analysis',
                  'Automated root cause identification',
                  'Historical baseline comparisons',
                  'Predictive cost forecasting',
                  'Integration with billing systems and Slack/PagerDuty',
                ].map((feature, i) => (
                  <div key={i} className="flex items-center space-x-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-400 text-xs">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-zinc-800 border-2 border-zinc-700 rounded-lg p-1.5 hover:border-green-500 transition-all duration-300">
              <img
                src={finOpsAnomalyDetectionImage}
                alt="AI-Powered Anomaly Detection - Cost Intelligence Dashboard"
                className="w-full rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-6 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <span className="text-green-600 font-bold text-xs uppercase tracking-[0.3em] mb-2 block">
                Features
              </span>
              <h2 className="text-3xl font-bold text-black mb-3">
                Comprehensive Cost Management
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-3">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-6 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="text-green-600 font-bold text-xs uppercase tracking-[0.3em] mb-2 block">
              Technical Specs
            </span>
            <h2 className="text-3xl font-bold text-black mb-3">
              Enterprise Cost Intelligence
            </h2>
          </div>

          <div className="max-w-4xl mx-auto bg-white border-2 border-zinc-200 rounded-lg p-6">
            <div className="grid md:grid-cols-2 gap-5">
              {technicalSpecs.map((spec, index) => (
                <div key={index} className="flex justify-between items-center pb-3 border-b border-zinc-200 last:border-0">
                  <span className="text-gray-700 font-semibold text-sm">{spec.label}</span>
                  <span className="text-green-600 font-bold text-sm">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive FinOps Dashboard Visualization */}
      <section className="py-3 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-4 items-start">
            <div className="bg-zinc-900 border-2 border-zinc-800 rounded-lg p-1.5 hover:border-green-500 transition-all duration-300">
              <img
                src={finOpsComprehensiveDashboardImage}
                alt="Enterprise FinOps Platform - Comprehensive Cost Intelligence"
                className="w-full rounded-lg"
              />
            </div>
            <div>
              <span className="text-green-400 font-bold text-xs uppercase tracking-[0.3em] mb-1 block">
                End-to-End Platform
              </span>
              <h2 className="text-2xl font-bold text-white mb-2">
                Complete Cloud Cost Optimization
              </h2>
              <p className="text-gray-300 text-sm mb-3 leading-snug">
                Visualize every aspect of your cloud costs with our enterprise FinOps platform. From multi-cloud spend to AI/ML workload details, infrastructure deep dives, and data consumption analysis—all in one unified dashboard.
              </p>
              <div className="space-y-1">
                {[
                  'Multi-cloud cost intelligence across AWS, Azure, GCP',
                  'Cost distribution by category with optimization potential',
                  'Infrastructure deep dive with granular breakdowns',
                  'AI/ML workload cost tracking and optimization',
                  'Data consumption monitoring and analysis',
                  'Total optimization summary with savings potential',
                ].map((feature, i) => (
                  <div key={i} className="flex items-center space-x-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-400 text-xs">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <PlatformCTA />
    </div>
  );
}