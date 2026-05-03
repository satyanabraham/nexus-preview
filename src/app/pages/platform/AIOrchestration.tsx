import { PlatformNavigation } from '../../components/platform/PlatformNavigation';
import { PlatformHero } from '../../components/platform/PlatformHero';
import { PlatformCTA } from '../../components/platform/PlatformCTA';
import { Brain, Workflow, Rocket, Database, GitBranch, Sparkles, CheckCircle2 } from 'lucide-react';

export default function AIOrchestration() {
  const capabilities = [
    {
      icon: Workflow,
      title: 'End-to-End Pipelines',
      description: 'Orchestrate complete AI workflows from data preprocessing to model deployment',
    },
    {
      icon: Brain,
      title: 'Model Training',
      description: 'Automated distributed training with checkpointing, resumption, and experiment tracking',
    },
    {
      icon: Rocket,
      title: 'Model Serving',
      description: 'Deploy and scale inference endpoints with automatic load balancing and versioning',
    },
    {
      icon: Database,
      title: 'Data Management',
      description: 'Efficient data pipeline orchestration with caching and versioning',
    },
    {
      icon: GitBranch,
      title: 'Experiment Tracking',
      description: 'Track experiments, hyperparameters, and results across your entire organization',
    },
    {
      icon: Sparkles,
      title: 'AutoML Integration',
      description: 'Automated hyperparameter tuning and neural architecture search',
    },
  ];

  const workflow = [
    {
      step: '1',
      title: 'Data Preparation',
      description: 'Ingest, validate, and preprocess training data with automated pipelines',
    },
    {
      step: '2',
      title: 'Model Training',
      description: 'Distributed training with automatic resource allocation and checkpointing',
    },
    {
      step: '3',
      title: 'Evaluation',
      description: 'Validate model performance against benchmarks and quality gates',
    },
    {
      step: '4',
      title: 'Deployment',
      description: 'Deploy models to production with automated scaling and monitoring',
    },
  ];

  const features = [
    'Visual pipeline builder with drag-and-drop interface',
    'Automated resource provisioning and scaling',
    'Built-in experiment tracking and versioning',
    'Integration with popular ML frameworks (PyTorch, TensorFlow, JAX)',
    'Automatic failure recovery and retry logic',
    'Cost-aware scheduling and optimization',
    'A/B testing and canary deployments',
    'Real-time monitoring and alerting',
  ];

  const technicalSpecs = [
    { label: 'Pipeline Execution', value: '<5 seconds startup' },
    { label: 'Concurrent Pipelines', value: '1,000+' },
    { label: 'Frameworks', value: 'PyTorch, TF, JAX' },
    { label: 'Scheduling', value: 'Cost-aware' },
    { label: 'Failure Recovery', value: 'Automatic' },
    { label: 'Integration', value: 'MLflow, W&B, Kubeflow' },
  ];

  return (
    <div className="bg-white">
      <PlatformNavigation />
      
      <PlatformHero
        subtitle="AI Orchestration Module"
        title="Automated AI Workload Orchestration"
        description="End-to-end ML pipeline orchestration from data prep to production deployment. Automate every step of your AI workflow with intelligent resource management and cost optimization."
        stats={[
          { value: '<5s', label: 'Pipeline Start' },
          { value: '1K+', label: 'Concurrent' },
          { value: 'Auto', label: 'Recovery' },
          { value: 'All Frameworks', label: 'Support' },
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
              Manual ML Workflows Don't Scale
            </h2>
            <p className="text-base text-gray-700 mb-4 leading-relaxed">
              Data scientists spend more time managing infrastructure than building models. Manual orchestration leads to errors, wasted resources, and slow iteration cycles.
            </p>
            <p className="text-base text-gray-700 leading-relaxed">
              Nexus AI Orchestration automates your entire ML pipeline, from data prep to production, with intelligent resource management.
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
              Complete Pipeline Automation
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

      {/* Workflow */}
      <section className="py-6 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="text-green-400 font-bold text-xs uppercase tracking-[0.3em] mb-2 block">
              Workflow
            </span>
            <h2 className="text-3xl font-bold mb-3">
              End-to-End Pipeline
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-4">
            {workflow.map((step, index) => (
              <div
                key={index}
                className="bg-zinc-900 border-2 border-zinc-800 hover:border-green-500 rounded-lg p-5 transition-all duration-300"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mb-3">
                  <span className="text-black font-bold text-lg">{step.step}</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-400 text-sm">
                  {step.description}
                </p>
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
                Production-Grade Orchestration
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
              Enterprise-Scale Automation
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

      <PlatformCTA />
    </div>
  );
}