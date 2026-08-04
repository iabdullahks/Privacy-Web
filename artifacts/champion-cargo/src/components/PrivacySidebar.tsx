import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface Section {
  id: string;
  title: string;
}

interface PrivacySidebarProps {
  sections: Section[];
}

export function PrivacySidebar({ sections }: PrivacySidebarProps) {
  const [activeSection, setActiveSection] = useState<string>(sections[0]?.id || '');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -80% 0px' }
    );

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [sections]);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 120; // Accounts for sticky navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="sticky top-32 bg-white rounded-2xl border border-border shadow-sm p-6 hidden lg:block">
      <h3 className="font-heading font-bold text-lg text-primary mb-6">In this policy</h3>
      <nav className="flex flex-col gap-2">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => scrollTo(section.id)}
            className={cn(
              "text-left px-4 py-2.5 rounded-lg text-sm transition-all duration-200 border-l-2",
              activeSection === section.id
                ? "bg-primary/5 text-primary border-primary font-medium"
                : "text-muted-foreground border-transparent hover:bg-gray-50 hover:text-foreground"
            )}
          >
            {section.title}
          </button>
        ))}
      </nav>
    </div>
  );
}
