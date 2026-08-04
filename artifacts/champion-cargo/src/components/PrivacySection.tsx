import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ShieldCheck, Database, Lock, Eye, Users, Bell, FileText, Server, CreditCard, Activity, Globe } from 'lucide-react';

interface PrivacySectionProps {
  id: string;
  title: string;
  iconType: string;
  children: React.ReactNode;
}

const iconMap: Record<string, React.ReactNode> = {
  shield: <ShieldCheck size={28} />,
  database: <Database size={28} />,
  activity: <Activity size={28} />,
  globe: <Globe size={28} />,
  users: <Users size={28} />,
  lock: <Lock size={28} />,
  server: <Server size={28} />,
  eye: <Eye size={28} />,
  bell: <Bell size={28} />,
  file: <FileText size={28} />,
  credit: <CreditCard size={28} />
};

export function PrivacySection({ id, title, iconType, children }: PrivacySectionProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-2xl p-8 md:p-10 border border-border shadow-sm hover-lift mb-8 scroll-mt-32"
    >
      <div className="flex items-center gap-4 mb-6 pb-6 border-b border-gray-100">
        <div className="w-12 h-12 rounded-xl bg-primary/5 text-primary flex items-center justify-center shrink-0">
          {iconMap[iconType] || <FileText size={28} />}
        </div>
        <h2 className="text-2xl md:text-3xl font-bold font-heading text-primary">{title}</h2>
      </div>
      
      <div className="prose prose-lg max-w-none text-muted-foreground prose-headings:text-primary prose-headings:font-heading prose-a:text-secondary prose-strong:text-foreground">
        {children}
      </div>
    </motion.section>
  );
}
