export function InfrastructureMap() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            AI Infrastructure Map
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive visibility across your entire AI infrastructure stack
          </p>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 md:p-12 border-2 border-blue-200">
          <div className="space-y-6">
            {/* Layer 1 - AI Workloads */}
            <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-purple-600">
              <h3 className="text-xl font-bold text-gray-900 mb-2">AI Workload Layer</h3>
              <p className="text-gray-600 mb-3">Training, Inference, Model Management</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">LLM Training</span>
                <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">Model Serving</span>
                <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">Fine-tuning</span>
              </div>
            </div>

            {/* Layer 2 - Orchestration */}
            <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-blue-600">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Orchestration Layer</h3>
              <p className="text-gray-600 mb-3">Kubernetes, Scheduling, Resource Management</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">Kubernetes</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">GPU Scheduling</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">Auto-scaling</span>
              </div>
            </div>

            {/* Layer 3 - Compute */}
            <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-green-600">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Compute Layer</h3>
              <p className="text-gray-600 mb-3">GPU Clusters, Storage, Networking</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">H100 Clusters</span>
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">A100 GPUs</span>
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">NVMe Storage</span>
              </div>
            </div>

            {/* Layer 4 - Infrastructure */}
            <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-indigo-600">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Infrastructure Layer</h3>
              <p className="text-gray-600 mb-3">Data Center, Power, Cooling</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm">DCIM</span>
                <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm">Power Management</span>
                <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm">Thermal Control</span>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-lg font-semibold text-gray-800">
              Nexus provides unified visibility and control across all layers
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
