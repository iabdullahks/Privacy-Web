import React from 'react';
import { HeroSection } from '@/components/HeroSection';
import { ServiceCard } from '@/components/ServiceCard';
import { SectionHeading } from '@/components/SectionHeading';
import { PackageOpen, Globe, Clock, Truck, Headphones, Layers } from 'lucide-react';

export function ServicesPage() {
  const services = [
    {
      title: "Freight Transportation",
      description: "Our core offering. We provide reliable, secure, and efficient over-the-road transportation for all types of dry freight across the contiguous United States.",
      icon: <PackageOpen size={28} />
    },
    {
      title: "Logistics Solutions",
      description: "End-to-end logistics planning and execution. We analyze your supply chain to find efficiencies, reduce costs, and improve delivery reliability.",
      icon: <Layers size={28} />
    },
    {
      title: "Supply Chain Support",
      description: "Comprehensive support for complex supply chains, including warehousing coordination, cross-docking, and inventory management strategies.",
      icon: <Globe size={28} />
    },
    {
      title: "Dedicated Transportation",
      description: "Guaranteed capacity with dedicated fleets. Secure the trucks and drivers you need, exactly when you need them, branded to your specifications if desired.",
      icon: <Truck size={28} />
    },
    {
      title: "Time-Critical Deliveries",
      description: "When failure is not an option. Expedited shipping solutions with dual-driver teams and priority routing to meet impossible deadlines.",
      icon: <Clock size={28} />
    },
    {
      title: "Enterprise Customer Support",
      description: "Every client receives a dedicated account manager. No call centers, no runarounds—just direct access to logistics experts 24/7.",
      icon: <Headphones size={28} />
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <HeroSection
        title="Premium Services for Premium Clients"
        subtitle="Explore our comprehensive suite of logistics and transportation solutions, designed specifically for the rigorous demands of modern enterprise."
        bgImageUrl="https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=2945&auto=format&fit=crop"
        align="center"
      />

      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading 
            title="What We Deliver" 
            subtitle="Beyond just moving freight, we deliver reliability, visibility, and peace of mind."
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {services.map((svc, index) => (
              <ServiceCard 
                key={index}
                title={svc.title}
                description={svc.description}
                icon={svc.icon}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
