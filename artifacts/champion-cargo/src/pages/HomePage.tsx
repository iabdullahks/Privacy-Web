import React from 'react';
import { HeroSection } from '@/components/HeroSection';
import { ServiceCard } from '@/components/ServiceCard';
import { SectionHeading } from '@/components/SectionHeading';
import { Button } from '@/components/Button';
import { ArrowRight, PackageOpen, Globe, Shield, Clock, PhoneCall, TrendingUp } from 'lucide-react';
import { Link } from 'wouter';

export function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection
        title="Moving Your Business Forward with Precision."
        subtitle="Champion Cargo LLC delivers premium freight transportation and logistics solutions across the nation. Trusted by enterprise clients for reliability, security, and exceptional service."
        bgImageUrl="https://images.unsplash.com/photo-1586528116311-ad8ed7444ce2?q=80&w=2940&auto=format&fit=crop"
      >
        <Link href="/contact">
          <Button variant="gold" size="lg" rightIcon={<ArrowRight size={20} />}>
            Get a Quote
          </Button>
        </Link>
        <Link href="/services">
          <Button variant="outline" size="lg" className="bg-white text-primary border-transparent hover:bg-white/90">
            Explore Services
          </Button>
        </Link>
      </HeroSection>

      {/* Services Overview */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading 
            title="Comprehensive Logistics Solutions" 
            subtitle="We provide end-to-end supply chain management and transportation services tailored to your unique requirements."
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            <ServiceCard 
              title="Freight Transportation" 
              description="Reliable over-the-road freight shipping across the contiguous United States with full visibility."
              icon={<PackageOpen size={28} />}
              delay={0}
            />
            <ServiceCard 
              title="Supply Chain Support" 
              description="Strategic supply chain optimization to reduce costs and improve delivery timelines."
              icon={<Globe size={28} />}
              delay={0.1}
            />
            <ServiceCard 
              title="Time-Critical Deliveries" 
              description="Expedited shipping solutions when failure is not an option. We deliver on time, every time."
              icon={<Clock size={28} />}
              delay={0.2}
            />
          </div>
          <div className="mt-12 text-center">
            <Link href="/services">
              <Button variant="primary">View All Services</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeading 
                title="Why Enterprise Clients Trust Champion Cargo" 
                subtitle="We don't just move freight; we provide peace of mind. Our commitment to excellence sets the industry standard."
              />
              <div className="space-y-6 mt-8">
                {[
                  { title: "Uncompromising Security", desc: "Your cargo and data are protected by military-grade security protocols." },
                  { title: "Nationwide Network", desc: "A vast infrastructure ensuring we can reach any destination efficiently." },
                  { title: "24/7 Dedicated Support", desc: "Live support from logistics experts whenever you need it." }
                ].map((feature, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      <TrendingUp size={20} />
                    </div>
                    <div>
                      <h4 className="font-heading font-semibold text-lg text-primary">{feature.title}</h4>
                      <p className="text-muted-foreground">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl relative z-10">
                <img src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=2945&auto=format&fit=crop" alt="Logistics Operations" className="w-full h-auto object-cover" />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-white p-8 rounded-2xl shadow-xl z-20 border border-gray-100 max-w-xs hidden md:block">
                <div className="flex items-center gap-4 mb-4">
                  <Shield size={32} className="text-secondary" />
                  <span className="font-heading font-bold text-xl text-primary">Data Privacy</span>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  We treat your business data with the same level of care as your physical cargo. Fully compliant, highly secure.
                </p>
                <Link href="/privacy" className="text-sm font-semibold text-primary hover:text-secondary flex items-center gap-1 transition-colors">
                  Read our policy <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=2940&auto=format&fit=crop')] bg-cover bg-center opacity-10" />
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-bold font-heading text-white mb-6">Ready to elevate your logistics?</h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto mb-10">
            Partner with Champion Cargo today and experience the difference of premium transportation solutions.
          </p>
          <Link href="/contact">
            <Button variant="gold" size="lg" leftIcon={<PhoneCall size={20} />}>
              Contact Our Team
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
