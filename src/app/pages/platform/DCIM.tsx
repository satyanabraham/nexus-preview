import { PlatformNavigation } from '../../components/platform/PlatformNavigation';
import { PlatformHero } from '../../components/platform/PlatformHero';
import { PlatformCTA } from '../../components/platform/PlatformCTA';
import { Server, Thermometer, Zap, Eye, TrendingUp, AlertTriangle, CheckCircle2 } from 'lucide-react';
import { DCIMDashboard } from '../../components/dashboards';
const facilitiesFloorPlanImage = 'https://images.unsplash.com/photo-1642775196125-38a9eb496568?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwY2VudGVyJTIwZmxvb3IlMjBwbGFufGVufDF8fHx8MTc3MzkxNzI4MXww&ixlib=rb-4.1.0&q=80&w=1080';
const digitalTwinSimulatorImage = 'https://images.unsplash.com/photo-1634836466795-2b71a032821c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwdHdpbiUyMHRlY2hub2xvZ3klMjBzaW11bGF0aW9ufGVufDF8fHx8MTc3MzkxNzI4Mnww&ixlib=rb-4.1.0&q=80&w=1080';

export function DCIM() {
  const capabilities = [
    {
      icon: Server,
      title: 'GPU Cluster Monitoring',
      description: 'Real-time visibility into GPU utilization, temperature, and performance across all clusters',
    },
    {
      icon: Zap,
      title: 'Power Management',
      description: 'Track power consumption at rack, PDU, and device level with predictive alerts',
    },
    {
      icon: Thermometer,
      title: 'Thermal Management',
      description: 'Monitor cooling efficiency and prevent thermal throttling with intelligent controls',
    },
    {
      icon: Eye,
      title: 'Capacity Planning',
      description: 'Forecast infrastructure needs based on historical trends and growth patterns',
    },
    {
      icon: TrendingUp,
      title: 'Asset Management',
      description: 'Complete inventory tracking with automated discovery and lifecycle management',
    },
    {
      icon: AlertTriangle,
      title: 'Incident Management',
      description: 'Automated alerting and remediation workflows for infrastructure issues',
    },
  ];

  const useCases = [
    {
      title: 'GPU Cluster Operations',
      scenario: 'Managing 1000+ GPUs across multiple data centers',
      solution: 'Unified dashboard showing real-time utilization, health, and performance metrics',
      metrics: ['45% higher utilization', '60% less downtime'],
    },
    {
      title: 'Power Optimization',
      scenario: 'High power costs and approaching capacity limits',
      solution: 'ML-powered power forecasting and optimization recommendations',
      metrics: ['30% power reduction', '$2M capex delayed'],
    },
    {
      title: 'Thermal Management',
      scenario: 'Frequent thermal throttling affecting training workloads',
      solution: 'Intelligent cooling control and hot spot detection',
      metrics: ['99.5% incident reduction', '15% faster training'],
    },
  ];

  const features = [
    'Real-time telemetry collection from all infrastructure components',
    'GPU-specific metrics including utilization, memory, temperature',
    'Power consumption tracking at device, rack, and facility level',
    'Thermal mapping and hot spot detection',
    'Capacity forecasting and trend analysis',
    'Automated asset discovery and inventory management',
    'Integration with building management systems (BMS)',
    'Custom alerting and escalation workflows',
  ];

  const technicalSpecs = [
    { label: 'Metric Collection', value: 'Sub-second intervals' },
    { label: 'Supported Devices', value: '10,000+ per cluster' },
    { label: 'Data Retention', value: '90 days full resolution' },
    { label: 'Alert Latency', value: '<5 seconds' },
    { label: 'API Rate Limit', value: '10,000 req/min' },
    { label: 'Integrations', value: 'SNMP, IPMI, Redfish, BMC' },
  ];

  return (
    <div className="bg-white">
      <PlatformNavigation />
      
      <PlatformHero
        subtitle="DCIM Module"
        title="Data Center Infrastructure Management"
        description="Complete visibility and control over your AI data center infrastructure. Monitor, manage, and optimize your GPU clusters, power systems, and cooling infrastructure from a single platform."
        stats={[
          { value: '10K+', label: 'GPUs Monitored' },
          { value: '<1s', label: 'Metric Collection' },
          { value: '99.99%', label: 'Uptime SLA' },
          { value: '90 Days', label: 'Data Retention' },
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
              Traditional DCIM Wasn't Built for AI
            </h2>
            <p className="text-base text-gray-700 mb-4 leading-relaxed">
              AI workloads are pushing data centers to their limits. Traditional DCIM tools weren't designed for the unique requirements of GPU clusters, high-density compute, and the operational complexity of AI infrastructure.
            </p>
            <p className="text-base text-gray-700 leading-relaxed">
              Nexus DCIM provides the specialized capabilities you need to manage AI infrastructure at scale, from real-time GPU monitoring to intelligent power management.
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
              Built for AI Infrastructure
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
              Real-World Applications
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

      {/* Features */}
      <section className="py-6 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <span className="text-green-600 font-bold text-xs uppercase tracking-[0.3em] mb-2 block">
                Features
              </span>
              <h2 className="text-3xl font-bold text-black mb-3">
                Comprehensive Monitoring & Management
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
              Enterprise-Grade Performance
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

      {/* Live Demo Dashboard */}
      <section className="py-6 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="text-green-400 font-bold text-xs uppercase tracking-[0.3em] mb-2 block">
              Live Demo
            </span>
            <h2 className="text-3xl font-bold text-white mb-3">
              Interactive DCIM Dashboard
            </h2>
            <p className="text-gray-400 text-base max-w-2xl mx-auto">
              Real-time monitoring of GPU clusters, power consumption, thermal management, and infrastructure health
            </p>
          </div>

          <DCIMDashboard />
        </div>
      </section>

      {/* Facilities Floor Plan Visualization */}
      <section className="py-3 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-4 items-start">
            <div>
              <span className="text-green-400 font-bold text-xs uppercase tracking-[0.3em] mb-1 block">
                Facilities Management
              </span>
              <h2 className="text-2xl font-bold text-white mb-2">
                Interactive Floor Plan & Thermal Mapping
              </h2>
              <p className="text-gray-300 text-sm mb-3 leading-snug">
                Visualize your data center infrastructure with interactive floor plans and real-time thermal mapping. Monitor rack-level metrics, identify hot spots, and optimize cooling efficiency with our advanced DCIM visualization tools.
              </p>
              <div className="space-y-1">
                {[
                  'Interactive 3D floor plan with drag-and-drop rack placement',
                  'Real-time thermal heatmap overlays showing temperature gradients',
                  'Rack-level power, cooling, and capacity monitoring',
                  'Cable management and connectivity visualization',
                  'Historical trend analysis for capacity planning',
                  'Alert visualization for immediate issue identification',
                  'Multi-floor and multi-site management capabilities',
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
                src={facilitiesFloorPlanImage}
                alt="Facilities Floor Plan - Interactive DCIM Visualization"
                className="w-full rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* DCIM Visualization - 3D Digital Twin */}
      <section className="py-3 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-4 items-start">
            <div className="order-2 md:order-1 bg-zinc-900 border-2 border-zinc-800 rounded-lg p-1.5 hover:border-green-500 transition-all duration-300">
              <img
                src={digitalTwinSimulatorImage}
                alt="3D Digital Twin Simulator"
                className="w-full rounded-lg"
              />
            </div>
            <div className="order-1 md:order-2">
              <span className="text-green-400 font-bold text-xs uppercase tracking-[0.3em] mb-1 block">
                3D Visualization
              </span>
              <h2 className="text-2xl font-bold text-white mb-2">
                Digital Twin Simulator
              </h2>
              <p className="text-gray-300 text-sm mb-3 leading-snug">
                Experience production-grade 3D visualization of your data center infrastructure. Monitor rack health, trace power and network connections, and simulate scenarios with AR/VR support.
              </p>
              <div className="space-y-1">
                {[
                  'Isometric 3D floor plan view',
                  'Real-time rack status monitoring',
                  'Power chain visualization',
                  'Network cable path tracing',
                  'AR/VR ready for immersive experience',
                  'Interactive camera controls',
                  'Layer toggles for different systems',
                  'Thermal overlay and airflow CFD',
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