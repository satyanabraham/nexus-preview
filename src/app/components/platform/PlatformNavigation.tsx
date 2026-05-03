import { Link, useLocation } from 'react-router';

export function PlatformNavigation() {
  const location = useLocation();

  const navItems = [
    { name: 'Overview', path: '/platform' },
    { name: 'DCIM', path: '/platform/dcim' },
    { name: 'APM', path: '/platform/apm' },
    { name: 'FinOps', path: '/platform/finops' },
    { name: 'Kubernetes', path: '/platform/kubernetes' },
    { name: 'AI Orchestration', path: '/platform/ai-orchestration' },
    { name: 'Architecture', path: '/platform/architecture' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="sticky top-16 bg-black/95 backdrop-blur-lg border-b border-zinc-800 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex overflow-x-auto scrollbar-hide">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`px-6 py-4 whitespace-nowrap border-b-2 transition-all duration-300 font-semibold text-sm uppercase tracking-wider ${
                isActive(item.path)
                  ? 'border-green-400 text-green-400'
                  : 'border-transparent text-gray-500 hover:text-white hover:border-zinc-700'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
