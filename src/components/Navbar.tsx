import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Eats", href: "/food", emoji: "🍕" },
    { name: "Melody", href: "/music", emoji: "🎵" },
    { name: "Play", href: "/games", emoji: "🎮" },
    { name: "Stories", href: "/experiences", emoji: "🌟" },
    { name: "Woods", href: "/school", emoji: "🎒" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b-2 border-disney-purple/30 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 w-full">
          {/* Logo - left aligned */}
          <a href="/" className="flex items-center -ml-6 sm:-ml-10 md:-ml-20 lg:-ml-28">
            <img
              src="/ssj.png"
              alt="Fairy Heaven Logo"
              className="h-20 w-auto object-contain"
            />
          </a>

          {/* Desktop Navigation - right aligned */}
          <div className="hidden md:flex items-center space-x-4 ml-auto">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="fairy-nav-button flex items-center space-x-1"
              >
                <span className="text-xs">{item.emoji}</span>
                <span className="text-xs font-pixel">{item.name}</span>
              </a>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden ml-auto">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="fairy-nav-button p-2"
            >
              {isOpen ? <X size={16} /> : <Menu size={16} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-sm border-t border-disney-purple/20 px-4">
          <div className="pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="fairy-nav-button flex items-center space-x-2 w-full"
                onClick={() => setIsOpen(false)}
              >
                <span>{item.emoji}</span>
                <span className="font-pixel">{item.name}</span>
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
