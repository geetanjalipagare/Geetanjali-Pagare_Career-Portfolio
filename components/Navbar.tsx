import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Experience', href: '#experience' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-neo-white border-b-4 border-black px-4 py-3">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a href="#" className="font-display font-black text-2xl uppercase tracking-tighter hover:text-neo-pink transition-colors">
          GP<span className="text-neo-blue">.</span>Portfolio
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-6">
          {navItems.map((item) => (
            <a 
              key={item.label}
              href={item.href}
              className="font-body font-bold text-lg hover:underline decoration-4 decoration-neo-blue underline-offset-4"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-1 border-2 border-black bg-neo-yellow shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-[2px] active:translate-y-[2px]"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-neo-white border-b-4 border-black md:hidden">
          <div className="flex flex-col p-4 gap-4">
            {navItems.map((item) => (
              <a 
                key={item.label}
                href={item.href}
                className="font-display font-bold text-xl uppercase p-2 hover:bg-neo-blue border-2 border-transparent hover:border-black transition-all text-center"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;