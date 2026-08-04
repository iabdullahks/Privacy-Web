import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  children?: React.ReactNode;
  bgImageUrl?: string;
  className?: string;
  overlayOpacity?: number;
  align?: 'left' | 'center';
}

export function HeroSection({ 
  title, 
  subtitle, 
  children, 
  bgImageUrl = "https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=2945&auto=format&fit=crop", 
  className,
  overlayOpacity = 0.7,
  align = 'left'
}: HeroSectionProps) {
  return (
    <section className={cn("relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden min-h-[60vh] flex items-center", className)}>
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${bgImageUrl})` }}
        />
        <div 
          className="absolute inset-0 bg-primary"
          style={{ opacity: overlayOpacity }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent opacity-80" />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className={cn(
          "max-w-4xl",
          align === 'center' ? 'mx-auto text-center' : ''
        )}>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight mb-6"
          >
            {title}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="text-lg md:text-xl text-white/90 max-w-2xl leading-relaxed mb-10"
            style={align === 'center' ? { margin: '0 auto 2.5rem' } : {}}
          >
            {subtitle}
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className={cn(
              "flex flex-wrap gap-4",
              align === 'center' ? 'justify-center' : ''
            )}
          >
            {children}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
