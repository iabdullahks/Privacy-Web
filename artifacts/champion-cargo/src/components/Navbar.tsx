import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { Truck, Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './Button';
import { cn } from '@/lib/utils';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Privacy Policy', path: '/privacy' },
  { name: 'Contact', path: '/contact' },
];

export function Navbar() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group cursor-pointer" data-testid="link-home-logo">
            <div className={cn(
              "flex items-center justify-center w-10 h-10 rounded-xl transition-colors duration-300",
              isScrolled ? "bg-primary text-white" : "bg-white text-primary"
            )}>
              <Truck size={24} className="group-hover:-rotate-12 transition-transform duration-300" />
            </div>
            <span className={cn(
              "font-heading font-bold text-xl tracking-tight transition-colors duration-300",
              isScrolled ? "text-primary" : "text-primary md:text-white"
            )}>
              CHAMPION CARGO
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-8">
              {navLinks.map((link) => {
                const isActive = location === link.path;
                return (
                  <li key={link.path}>
                    <Link
                      href={link.path}
                      data-testid={`link-nav-${link.name.toLowerCase().replace(' ', '-')}`}
                      className={cn(
                        "text-sm font-medium transition-colors hover:text-secondary relative py-2",
                        isScrolled ? "text-foreground" : "text-white",
                        isActive && (isScrolled ? "text-primary font-semibold" : "text-secondary font-semibold")
                      )}
                    >
                      {link.name}
                      {isActive && (
                        <motion.div
                          layoutId="navbar-indicator"
                          className={cn(
                            "absolute bottom-0 left-0 right-0 h-0.5 rounded-full",
                            isScrolled ? "bg-primary" : "bg-secondary"
                          )}
                          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                        />
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <Link href="/contact">
              <Button 
                variant={isScrolled ? 'primary' : 'gold'} 
                rightIcon={<ArrowRight size={16} />}
                className="shadow-lg"
              >
                Get a Quote
              </Button>
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className={cn(
              "md:hidden p-2 rounded-lg transition-colors",
              isScrolled ? "text-primary hover:bg-gray-100" : "text-white hover:bg-white/20"
            )}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t overflow-hidden shadow-xl"
          >
            <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  className={cn(
                    "block px-4 py-3 rounded-xl text-base font-medium transition-colors",
                    location === link.path ? "bg-primary/5 text-primary" : "text-foreground hover:bg-gray-50"
                  )}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="px-4 pt-4 border-t border-gray-100">
                <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button className="w-full" size="lg">
                    Get a Quote
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
