import React from 'react';
import { AlertTriangle } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'wouter';

export function DisclaimerPage() {
  return (
    <div className="min-h-screen bg-gray-50/50">

      {/* Hero Section */}
      <section className="relative pt-40 pb-24 overflow-hidden border-b border-border bg-white">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent pointer-events-none" />
        <div className="absolute -right-20 -top-20 text-primary/5 pointer-events-none">
          <AlertTriangle size={400} strokeWidth={0.5} />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 text-sm font-semibold text-secondary mb-6 tracking-wider uppercase">
              <AlertTriangle className="w-5 h-5" />
              Legal Notice
            </div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-bold font-heading text-primary mb-6"
            >
              Disclaimer
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-muted-foreground leading-relaxed max-w-2xl"
            >
              Important information regarding SMS communications and your consent.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-2xl border border-border shadow-sm p-8 md:p-12"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center shrink-0">
                  <AlertTriangle className="w-5 h-5 text-secondary" />
                </div>
                <h2 className="text-2xl font-bold font-heading text-primary">SMS Communication Disclaimer</h2>
              </div>

              <p className="text-muted-foreground leading-relaxed text-lg mb-8">
                By providing my phone number to &ldquo;CHAMPION CARGO LLC&rdquo;, I agree and acknowledge that &ldquo;CHAMPION CARGO LLC&rdquo; may send text messages to my wireless phone number for any purpose. Message and data rates may apply. Message frequency will vary, and you will be able to Opt-out by replying &ldquo;STOP&rdquo;. For more information on how your data will be handled please see our{' '}
                <Link href="/privacy" className="text-primary font-semibold underline underline-offset-4 hover:text-secondary transition-colors">
                  Privacy Policy
                </Link>
                .
              </p>

              <div className="border-t border-border pt-8">
                <p className="text-sm text-muted-foreground">
                  If you have questions about this disclaimer or our SMS practices, please{' '}
                  <Link href="/contact" className="text-primary font-semibold underline underline-offset-4 hover:text-secondary transition-colors">
                    contact us
                  </Link>
                  .
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
}
