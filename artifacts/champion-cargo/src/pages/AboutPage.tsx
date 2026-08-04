import React from 'react';
import { HeroSection } from '@/components/HeroSection';
import { SectionHeading } from '@/components/SectionHeading';
import { Target, Eye, Award, CheckCircle, Shield } from 'lucide-react';

export function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection
        title="About Champion Cargo"
        subtitle="Building the future of premium logistics through trust, reliability, and unparalleled service."
        bgImageUrl="https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=2874&auto=format&fit=crop"
        align="center"
      />

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <SectionHeading 
                title="Our Story" 
                subtitle="From a regional carrier to a nationwide logistics powerhouse, Champion Cargo LLC was founded on a simple principle: doing things right the first time."
              />
              <div className="prose prose-lg text-muted-foreground mt-6">
                <p>
                  At Champion Cargo, we understand that logistics is more than just moving boxes from point A to point B. It's about ensuring your business continues to operate smoothly, your customers remain satisfied, and your supply chain stays resilient in the face of challenges.
                </p>
                <p>
                  Our team consists of industry veterans who have managed complex logistics networks for some of the world's largest organizations. We bring that enterprise-grade expertise to every shipment we handle.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-8 rounded-2xl hover-lift border border-border">
                <Target className="text-secondary w-12 h-12 mb-4" />
                <h3 className="font-heading font-bold text-xl text-primary mb-2">Our Mission</h3>
                <p className="text-muted-foreground">To deliver flawless logistics execution while maintaining the highest standards of safety and transparency.</p>
              </div>
              <div className="bg-primary p-8 rounded-2xl hover-lift shadow-xl text-white">
                <Eye className="text-secondary w-12 h-12 mb-4" />
                <h3 className="font-heading font-bold text-xl mb-2">Our Vision</h3>
                <p className="text-white/80">To be the undisputed leader in premium freight transportation in North America.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading title="Core Values" centered />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              { title: "Safety First", desc: "No compromise when it comes to the safety of our drivers, cargo, and the public.", icon: Shield },
              { title: "Absolute Integrity", desc: "We do what we say we're going to do. Total transparency in all operations.", icon: Award },
              { title: "Data Protection", desc: "We protect your corporate information with the same vigilance as your physical assets.", icon: CheckCircle }
            ].map((val, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-border text-center">
                <div className="w-16 h-16 mx-auto bg-primary/5 rounded-full flex items-center justify-center text-primary mb-6">
                  <val.icon size={32} />
                </div>
                <h3 className="font-heading font-bold text-xl text-primary mb-4">{val.title}</h3>
                <p className="text-muted-foreground">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
