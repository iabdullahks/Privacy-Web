import React from 'react';
import { cn } from '@/lib/utils';

interface ContactCardProps {
  title: string;
  icon: React.ReactNode;
  details: React.ReactNode;
  className?: string;
}

export function ContactCard({ title, icon, details, className }: ContactCardProps) {
  return (
    <div className={cn("bg-white rounded-2xl p-6 border border-border shadow-sm flex items-start gap-4 hover-lift", className)}>
      <div className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center text-primary shrink-0">
        {icon}
      </div>
      <div>
        <h4 className="font-heading font-semibold text-lg text-primary mb-2">{title}</h4>
        <div className="text-muted-foreground">{details}</div>
      </div>
    </div>
  );
}
