import React from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
  light?: boolean;
}

export function SectionHeading({ title, subtitle, centered = false, className, light = false }: SectionHeadingProps) {
  return (
    <div className={cn('mb-12', centered && 'text-center', className)}>
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className={cn(
          'text-3xl md:text-4xl font-bold tracking-tight mb-4',
          light ? 'text-white' : 'text-primary'
        )}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className={cn(
            'text-lg max-w-2xl',
            centered && 'mx-auto',
            light ? 'text-white/80' : 'text-muted-foreground'
          )}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
