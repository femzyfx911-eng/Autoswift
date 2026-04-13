import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-midnight/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center gap-2">
            <Logo />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-accent ${
                  location.pathname === link.path ? 'text-accent' : 'text-slate-400'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="flex items-center gap-6 ml-4">
              <div className="text-right">
                <p className="text-[10px] text-slate-500 uppercase tracking-widest">Zangi ID</p>
                <p className="text-sm font-mono text-accent">1427846641</p>
              </div>
              <Link
                to="/contact"
                className="bg-accent text-midnight px-6 py-2 rounded-full font-bold text-sm hover:bg-white transition-colors"
              >
                Book Now
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-400 hover:text-white"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-midnight-light border-b border-white/5 px-4 pt-2 pb-6"
        >
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`text-lg font-medium ${
                  location.pathname === link.path ? 'text-accent' : 'text-slate-400'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 border-t border-white/5">
              <p className="text-[10px] text-slate-500 uppercase tracking-widest mb-1">Zangi ID</p>
              <p className="text-lg font-mono text-accent mb-4">1427846641</p>
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="block w-full bg-accent text-midnight text-center px-6 py-3 rounded-full font-bold"
              >
                Book Now
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
