import { Link, useLocation } from 'react-router';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Platform', path: '/platform' },
    { name: 'Solutions', path: '/solutions' },
    { name: 'Ecosystem', path: '/ecosystem' },
    { name: 'About', path: '/about' },
    { name: 'References', path: '/references' },
    { name: 'Demo', path: '/interactive-demo' },
  ];

  const isActive = (path: string) => {
    if (path === '/platform') {
      return location.pathname.startsWith('/platform');
    }
    return location.pathname === path;
  };

  // Dark nav for homepage and platform pages
  const isDarkNav = location.pathname === '/' || location.pathname.startsWith('/platform') || location.pathname === '/interactive-demo';

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 border-b transition-colors ${
      isDarkNav 
        ? 'bg-black/95 backdrop-blur-lg border-zinc-800' 
        : 'bg-white/95 backdrop-blur-md border-gray-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-emerald-500 rounded flex items-center justify-center group-hover:scale-110 transition-transform">
              <span className="text-black font-bold text-xl">N</span>
            </div>
            <span className={`text-xl font-bold tracking-tight ${isDarkNav ? 'text-white' : 'text-gray-900'}`}>
              NEXUS
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`transition-colors font-semibold text-sm uppercase tracking-wider ${
                  isActive(item.path)
                    ? isDarkNav ? 'text-green-400' : 'text-green-600'
                    : isDarkNav 
                      ? 'text-gray-400 hover:text-white' 
                      : 'text-gray-600 hover:text-green-600'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <button className={`px-6 py-2 rounded font-bold transition-all duration-300 uppercase tracking-wide text-sm ${
              isDarkNav
                ? 'bg-green-500 hover:bg-green-400 text-black'
                : 'bg-green-600 hover:bg-green-500 text-white'
            }`}>
              Get Access
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className={`w-6 h-6 ${isDarkNav ? 'text-white' : 'text-gray-900'}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isDarkNav ? 'text-white' : 'text-gray-900'}`} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className={`md:hidden py-4 border-t ${isDarkNav ? 'border-zinc-800' : 'border-gray-200'}`}>
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`px-4 py-2 transition-colors font-semibold text-sm uppercase tracking-wider ${
                    isActive(item.path)
                      ? isDarkNav 
                        ? 'text-green-400 bg-zinc-900' 
                        : 'text-green-600 bg-green-50'
                      : isDarkNav
                        ? 'text-gray-400 hover:text-white hover:bg-zinc-900'
                        : 'text-gray-600 hover:text-green-600 hover:bg-gray-50'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <button className="mx-4 px-6 py-2 bg-green-500 hover:bg-green-400 text-black rounded font-bold transition-colors text-center uppercase tracking-wide text-sm">
                Get Access
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}