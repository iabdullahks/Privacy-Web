import React from 'react';
import { Link } from 'wouter';
import { Truck, Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 text-white">
              <Truck size={32} className="text-secondary" />
              <span className="font-heading font-bold text-2xl tracking-tight">CHAMPION CARGO</span>
            </div>
            <p className="text-white/80 leading-relaxed max-w-sm">
              Premium logistics and transportation solutions for enterprise clients. Designed with professionalism, precision, and trust in mind.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-secondary hover:text-primary transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-secondary hover:text-primary transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-secondary hover:text-primary transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-heading text-xl font-semibold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-4">
              {[
                { label: 'Home', href: '/' },
                { label: 'About', href: '/about' },
                { label: 'Services', href: '/services' },
                { label: 'Privacy Policy', href: '/privacy' },
                { label: 'Disclaimer', href: '/disclaimer' },
                { label: 'Contact', href: '/contact' },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-white/80 hover:text-secondary transition-colors inline-block"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading text-xl font-semibold mb-6 text-white">Our Services</h3>
            <ul className="space-y-4 text-white/80">
              <li>Freight Transportation</li>
              <li>Logistics Solutions</li>
              <li>Supply Chain Support</li>
              <li>Dedicated Transportation</li>
              <li>Time-Critical Deliveries</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading text-xl font-semibold mb-6 text-white">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-white/80">
                <MapPin size={20} className="text-secondary shrink-0 mt-1" />
                <span>510 GREEN LEA WAY APT 1F<br />SUNBURY, OH 43074</span>
              </li>
              <li className="flex items-center gap-3 text-white/80">
                <Phone size={20} className="text-secondary shrink-0" />
                <span>330-756-7732</span>
              </li>
              <li className="flex items-center gap-3 text-white/80">
                <Mail size={20} className="text-secondary shrink-0" />
                <span>info@championcargo.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-white/60 text-sm">
          <p>© {currentYear} Champion Cargo LLC. All rights reserved.</p>
          <p>Designed with professionalism and trust in mind.</p>
        </div>
      </div>
    </footer>
  );
}
