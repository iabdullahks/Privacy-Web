import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay?: number;
}

export function ServiceCard({ title, description, icon, delay = 0 }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      className="group bg-white rounded-2xl p-8 border border-border shadow-sm hover-lift flex flex-col h-full"
    >
      <div className="w-14 h-14 bg-primary/5 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-bold font-heading text-primary mb-3">{title}</h3>
      <p className="text-muted-foreground leading-relaxed mb-6 flex-grow">{description}</p>
      
      <button className="flex items-center gap-2 text-sm font-semibold text-primary mt-auto group/btn">
        Learn More 
        <ArrowRight size={16} className="transform group-hover/btn:translate-x-1 transition-transform" />
      </button>
    </motion.div>
  );
}
