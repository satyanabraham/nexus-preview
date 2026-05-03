import { X, ArrowRight } from 'lucide-react';

export function ReplaceStack() {
  const oldStack = [
    'Multiple DCIM Tools',
    'Separate Monitoring Systems',
    'Disconnected Cost Tools',
    'Manual Kubernetes Management',
    'Fragmented AI Workflows',
    'Complex Integrations',
    'Data Silos',
    'High Operational Overhead',
  ];

  const nexusFeatures = [
    'Unified Platform',
    'Single Pane of Glass',
    'Integrated Cost Management',
    'Automated Orchestration',
    'End-to-End AI Pipeline',
    'Native Integrations',
    'Centralized Data',
    'Reduced Complexity',
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Replace Your Entire Tool Stack
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stop managing dozens of disconnected tools. Nexus provides everything you need in one unified platform.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Old Stack */}
          <div className="space-y-3">
            <h3 className="text-xl font-bold text-gray-900 mb-6">
              Before Nexus
            </h3>
            {oldStack.map((item, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 p-3 bg-red-50 border border-red-200 rounded-lg"
              >
                <X className="w-5 h-5 text-red-500 flex-shrink-0" />
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>

          {/* Arrow */}
          <div className="flex justify-center">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
              <ArrowRight className="w-10 h-10 text-white" />
            </div>
          </div>

          {/* New Stack */}
          <div className="space-y-3">
            <h3 className="text-xl font-bold text-gray-900 mb-6">
              With Nexus
            </h3>
            {nexusFeatures.map((item, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 p-3 bg-green-50 border border-green-200 rounded-lg"
              >
                <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xs">✓</span>
                </div>
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
