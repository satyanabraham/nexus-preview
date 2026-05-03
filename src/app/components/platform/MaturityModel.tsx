export function MaturityModel() {
  const stages = [
    {
      stage: 'Stage 1',
      title: 'Reactive',
      description: 'Manual infrastructure management with limited visibility',
      challenges: ['No automation', 'Frequent outages', 'Cost overruns'],
      color: 'bg-red-100 border-red-300 text-red-800',
    },
    {
      stage: 'Stage 2',
      title: 'Monitored',
      description: 'Basic monitoring and alerting systems in place',
      challenges: ['Disconnected tools', 'Data silos', 'Slow response'],
      color: 'bg-orange-100 border-orange-300 text-orange-800',
    },
    {
      stage: 'Stage 3',
      title: 'Automated',
      description: 'Automated processes with some orchestration',
      challenges: ['Partial integration', 'Manual intervention', 'Limited insights'],
      color: 'bg-yellow-100 border-yellow-300 text-yellow-800',
    },
    {
      stage: 'Stage 4',
      title: 'Optimized',
      description: 'Fully integrated platform with AI-driven optimization',
      challenges: ['Continuous improvement', 'Predictive analytics', 'Full automation'],
      color: 'bg-green-100 border-green-300 text-green-800',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Infrastructure Maturity Model
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nexus helps you progress from reactive management to fully optimized AI infrastructure
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stages.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-gray-200 hover:shadow-xl transition-shadow"
            >
              <div className={`inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4 ${item.color} border`}>
                {item.stage}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {item.description}
              </p>
              <div className="space-y-2">
                {item.challenges.map((challenge, idx) => (
                  <div key={idx} className="flex items-start space-x-2">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{challenge}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-gray-700 mb-4">
            <span className="font-semibold">Most organizations are at Stage 2-3.</span> Nexus accelerates your journey to Stage 4.
          </p>
        </div>
      </div>
    </section>
  );
}
