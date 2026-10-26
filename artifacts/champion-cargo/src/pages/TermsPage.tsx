import React, { useState } from 'react';
import { 
  FileText, 
  Truck, 
  MessageSquare, 
  Clock, 
  CreditCard, 
  StopCircle, 
  Headphones, 
  ShieldCheck, 
  Radio, 
  RefreshCw, 
  Mail, 
  Phone, 
  Globe, 
  Building, 
  Printer, 
  Copy, 
  Check, 
  CheckCircle2,
  ExternalLink 
} from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'wouter';

export function TermsPage() {
  const effectiveDate = "October 26, 2026";
  const [copied, setCopied] = useState(false);

  const sections = [
    { id: 'program-description', title: '1. Program Description', icon: Truck },
    { id: 'sms-consent', title: '2. SMS Message Consent', icon: MessageSquare },
    { id: 'message-frequency', title: '3. Message Frequency', icon: Clock },
    { id: 'rates', title: '4. Message and Data Rates', icon: CreditCard },
    { id: 'opt-out', title: '5. Opt-Out Instructions', icon: StopCircle },
    { id: 'customer-support', title: '6. Customer Support', icon: Headphones },
    { id: 'privacy-policy', title: '7. Privacy Policy', icon: ShieldCheck },
    { id: 'carrier-disclaimer', title: '8. Carrier Disclaimer', icon: Radio },
    { id: 'changes', title: '9. Changes to These Terms', icon: RefreshCw },
    { id: 'contact-info', title: '10. Contact Information', icon: Building },
  ];

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-gray-50/50">

      {/* Hero Section */}
      <section className="relative pt-40 pb-24 overflow-hidden border-b border-border bg-white">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent pointer-events-none" />
        <div className="absolute -right-20 -top-20 text-primary/5 pointer-events-none">
          <FileText size={400} strokeWidth={0.5} />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 text-sm font-semibold text-secondary mb-6 tracking-wider uppercase">
              <FileText className="w-5 h-5" />
              Legal & Compliance Terms
            </div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-bold font-heading text-primary mb-6"
            >
              Terms and Conditions
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-muted-foreground leading-relaxed max-w-2xl"
            >
              These Terms and Conditions govern your use of Champion Cargo LLC&apos;s transportation services and SMS messaging program.
            </motion.p>

            <div className="flex flex-wrap items-center gap-4 mt-8 pt-6 border-t border-gray-100">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
                Effective Date: {effectiveDate}
              </span>
              <div className="flex items-center gap-2">
                <button
                  onClick={handleCopyLink}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
                  aria-label="Copy page link"
                >
                  {copied ? <Check size={14} className="text-green-600" /> : <Copy size={14} />}
                  <span>{copied ? 'Link Copied!' : 'Copy Link'}</span>
                </button>
                <button
                  onClick={handlePrint}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
                  aria-label="Print terms"
                >
                  <Printer size={14} />
                  <span>Print</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">

            {/* Table of Contents - Sticky Sidebar */}
            <div className="hidden lg:block lg:col-span-1">
              <div className="sticky top-28 space-y-4">
                <h3 className="font-heading font-bold text-sm text-primary uppercase tracking-wider mb-4 pl-3">
                  Document Sections
                </h3>
                <nav className="flex flex-col gap-1 border-l border-border">
                  {sections.map((sec) => (
                    <a
                      key={sec.id}
                      href={`#${sec.id}`}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors py-1.5 pl-3 border-l-2 border-transparent hover:border-secondary hover:font-medium block"
                    >
                      {sec.title}
                    </a>
                  ))}
                </nav>

                {/* Quick Help Card */}
                <div className="bg-primary/5 rounded-2xl p-5 border border-primary/10 mt-8 space-y-3">
                  <div className="flex items-center gap-2 text-primary font-semibold text-sm">
                    <Headphones size={18} className="text-secondary" />
                    <span>Need Assistance?</span>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Have questions about these terms or our SMS updates?
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center text-xs font-semibold text-primary hover:text-secondary transition-colors underline underline-offset-4"
                  >
                    Contact Support &rarr;
                  </Link>
                </div>
              </div>
            </div>

            {/* Terms and Conditions Main Body */}
            <div className="col-span-1 lg:col-span-3 space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                className="bg-white rounded-3xl border border-border shadow-sm p-8 md:p-12 space-y-12"
              >

                {/* Company Overview Block */}
                <div className="bg-gradient-to-r from-primary/5 via-primary/[0.02] to-transparent rounded-2xl p-6 md:p-8 border border-primary/10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground block mb-1">Company Name</span>
                      <strong className="text-lg font-heading text-primary block">Champion Cargo LLC</strong>
                    </div>
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground block mb-1">Official Website</span>
                      <a
                        href="https://championcargo.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-secondary underline font-semibold flex items-center gap-1.5"
                      >
                        https://championcargo.com
                        <ExternalLink size={14} />
                      </a>
                    </div>
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground block mb-1">Contact Email</span>
                      <a
                        href="mailto:info@championcargo.com"
                        className="text-primary hover:text-secondary underline font-semibold flex items-center gap-1.5"
                      >
                        info@championcargo.com
                      </a>
                    </div>
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground block mb-1">Telephone</span>
                      <a
                        href="tel:330-756-7732"
                        className="text-primary hover:text-secondary underline font-semibold flex items-center gap-1.5"
                      >
                        330-756-7732
                      </a>
                    </div>
                  </div>
                </div>

                <hr className="border-border" />

                {/* 1. Program Description */}
                <section id="program-description" className="scroll-mt-28 space-y-4">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center shrink-0">
                      <Truck className="w-5 h-5 text-primary" />
                    </div>
                    <h2 className="text-2xl font-bold font-heading text-primary">1. Program Description</h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-base">
                    <strong className="text-primary">Champion Cargo LLC</strong> provides trucking, freight transportation, logistics, and related services. Customers may receive SMS text messages regarding shipment updates, delivery notifications, pickup and dispatch coordination, appointment reminders, service inquiries, and customer support.
                  </p>
                </section>

                <hr className="border-border" />

                {/* 2. SMS Message Consent */}
                <section id="sms-consent" className="scroll-mt-28 space-y-4">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center shrink-0">
                      <MessageSquare className="w-5 h-5 text-primary" />
                    </div>
                    <h2 className="text-2xl font-bold font-heading text-primary">2. SMS Message Consent</h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-base">
                    By providing your mobile phone number and explicitly opting in to receive SMS messages from <strong className="text-primary">Champion Cargo LLC</strong>, you agree to receive text messages related to the services you selected.
                  </p>
                  <div className="bg-gray-50 rounded-2xl p-5 border border-border space-y-2">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                      <p className="text-muted-foreground leading-relaxed text-sm">
                        <strong className="text-primary">Voluntary Participation:</strong> SMS consent is voluntary and is not a condition of purchasing any goods or services. You may use our services without consenting to receive SMS messages.
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                      <p className="text-muted-foreground leading-relaxed text-sm">
                        <strong className="text-primary">Targeted Communications:</strong> You will receive messages only for the categories of communication for which you have provided consent.
                      </p>
                    </div>
                  </div>
                </section>

                <hr className="border-border" />

                {/* 3. Message Frequency */}
                <section id="message-frequency" className="scroll-mt-28 space-y-4">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <h2 className="text-2xl font-bold font-heading text-primary">3. Message Frequency</h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-base">
                    Message frequency varies depending on your shipments, service requests, dispatch activity, and interactions with our company. You may receive recurring messages when necessary to provide the requested service.
                  </p>
                </section>

                <hr className="border-border" />

                {/* 4. Message and Data Rates */}
                <section id="rates" className="scroll-mt-28 space-y-4">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center shrink-0">
                      <CreditCard className="w-5 h-5 text-primary" />
                    </div>
                    <h2 className="text-2xl font-bold font-heading text-primary">4. Message and Data Rates</h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-base">
                    Message and data rates may apply to SMS messages sent to you by us and to messages you send to us. Please contact your wireless carrier for details about your messaging plan.
                  </p>
                </section>

                <hr className="border-border" />

                {/* 5. Opt-Out Instructions */}
                <section id="opt-out" className="scroll-mt-28 space-y-4">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center shrink-0">
                      <StopCircle className="w-5 h-5 text-primary" />
                    </div>
                    <h2 className="text-2xl font-bold font-heading text-primary">5. Opt-Out Instructions</h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-base">
                    You may opt out of receiving SMS messages at any time by replying <strong className="text-primary font-bold bg-primary/10 px-2 py-0.5 rounded text-sm">STOP</strong> to any message you receive from us.
                  </p>
                  <div className="bg-amber-50/60 rounded-2xl p-5 border border-amber-200/60">
                    <p className="text-amber-900 leading-relaxed text-sm">
                      After you send <strong className="font-bold">STOP</strong>, you will receive a confirmation message, and you will no longer receive messages from that messaging program unless you opt in again.
                    </p>
                  </div>
                </section>

                <hr className="border-border" />

                {/* 6. Customer Support */}
                <section id="customer-support" className="scroll-mt-28 space-y-4">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center shrink-0">
                      <Headphones className="w-5 h-5 text-primary" />
                    </div>
                    <h2 className="text-2xl font-bold font-heading text-primary">6. Customer Support</h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-base">
                    For assistance with our SMS messaging program, reply <strong className="text-primary font-bold bg-primary/10 px-2 py-0.5 rounded text-sm">HELP</strong> to any message you receive from us.
                  </p>
                  <p className="text-muted-foreground leading-relaxed text-base">
                    You may also contact us directly at:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                    <div className="bg-gray-50 rounded-2xl p-4 border border-border flex items-center gap-3">
                      <Mail className="text-secondary shrink-0" size={20} />
                      <div className="min-w-0">
                        <span className="text-xs uppercase font-semibold text-muted-foreground block">Email</span>
                        <a href="mailto:info@championcargo.com" className="text-sm font-medium text-primary hover:text-secondary underline truncate block">
                          info@championcargo.com
                        </a>
                      </div>
                    </div>
                    <div className="bg-gray-50 rounded-2xl p-4 border border-border flex items-center gap-3">
                      <Phone className="text-secondary shrink-0" size={20} />
                      <div className="min-w-0">
                        <span className="text-xs uppercase font-semibold text-muted-foreground block">Phone</span>
                        <a href="tel:330-756-7732" className="text-sm font-medium text-primary hover:text-secondary underline truncate block">
                          330-756-7732
                        </a>
                      </div>
                    </div>
                    <div className="bg-gray-50 rounded-2xl p-4 border border-border flex items-center gap-3">
                      <Globe className="text-secondary shrink-0" size={20} />
                      <div className="min-w-0">
                        <span className="text-xs uppercase font-semibold text-muted-foreground block">Website</span>
                        <a href="https://championcargo.com" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-primary hover:text-secondary underline truncate block">
                          championcargo.com
                        </a>
                      </div>
                    </div>
                  </div>
                </section>

                <hr className="border-border" />

                {/* 7. Privacy Policy */}
                <section id="privacy-policy" className="scroll-mt-28 space-y-4">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center shrink-0">
                      <ShieldCheck className="w-5 h-5 text-primary" />
                    </div>
                    <h2 className="text-2xl font-bold font-heading text-primary">7. Privacy Policy</h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-base">
                    Your privacy is important to us. We collect and use personal information in accordance with our{' '}
                    <Link href="/privacy" className="text-primary font-semibold underline underline-offset-4 hover:text-secondary transition-colors">
                      Privacy Policy
                    </Link>
                    .
                  </p>

                  {/* Strict Carrier & 10DLC Non-Sharing Compliance Box */}
                  <div className="bg-primary/5 rounded-2xl p-6 border border-primary/20 space-y-3">
                    <div className="flex items-center gap-2 text-primary font-bold">
                      <ShieldCheck size={20} className="text-secondary" />
                      <span>Strict Data Privacy Guarantee</span>
                    </div>
                    <p className="text-primary/90 leading-relaxed font-medium">
                      We do not sell or share SMS opt-in data, mobile phone numbers collected for SMS consent, or messaging consent information with third parties or affiliates for their marketing or promotional purposes.
                    </p>
                  </div>

                  <p className="text-muted-foreground leading-relaxed text-sm pt-2">
                    For additional details about how we collect, use, and protect personal information, please review our full Privacy Policy:{' '}
                    <Link
                      href="/privacy"
                      className="text-primary font-semibold underline underline-offset-4 hover:text-secondary transition-colors"
                    >
                      https://championcargo.com/privacy
                    </Link>
                  </p>
                </section>

                <hr className="border-border" />

                {/* 8. Carrier Disclaimer */}
                <section id="carrier-disclaimer" className="scroll-mt-28 space-y-4">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center shrink-0">
                      <Radio className="w-5 h-5 text-primary" />
                    </div>
                    <h2 className="text-2xl font-bold font-heading text-primary">8. Carrier Disclaimer</h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-base">
                    Wireless carriers are not liable for delayed or undelivered messages. Message delivery is subject to effective transmission by your wireless carrier and other factors outside our control.
                  </p>
                </section>

                <hr className="border-border" />

                {/* 9. Changes to These Terms */}
                <section id="changes" className="scroll-mt-28 space-y-4">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center shrink-0">
                      <RefreshCw className="w-5 h-5 text-primary" />
                    </div>
                    <h2 className="text-2xl font-bold font-heading text-primary">9. Changes to These Terms</h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-base">
                    We may update these Terms and Conditions from time to time. Any updated version will be published on our website with a revised effective date.
                  </p>
                </section>

                <hr className="border-border" />

                {/* 10. Contact Information */}
                <section id="contact-info" className="scroll-mt-28 space-y-4">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center shrink-0">
                      <Building className="w-5 h-5 text-primary" />
                    </div>
                    <h2 className="text-2xl font-bold font-heading text-primary">10. Contact Information</h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-base">
                    If you have questions about these Terms and Conditions, please contact us:
                  </p>

                  <div className="bg-gray-50 rounded-2xl p-6 border border-border mt-4 grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="space-y-1">
                      <h4 className="font-semibold text-primary text-sm uppercase tracking-wider">Company</h4>
                      <p className="text-muted-foreground text-sm font-medium">Champion Cargo LLC</p>
                      <p className="text-muted-foreground text-xs">
                        510 GREEN LEA WAY APT 1F<br />
                        SUNBURY, OH 43074
                      </p>
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-semibold text-primary text-sm uppercase tracking-wider">Email</h4>
                      <p className="text-sm">
                        <a href="mailto:info@championcargo.com" className="text-primary hover:text-secondary underline transition-colors font-medium">
                          info@championcargo.com
                        </a>
                      </p>
                      <h4 className="font-semibold text-primary text-sm uppercase tracking-wider pt-2">Phone</h4>
                      <p className="text-sm">
                        <a href="tel:330-756-7732" className="text-primary hover:text-secondary underline transition-colors font-medium">
                          330-756-7732
                        </a>
                      </p>
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-semibold text-primary text-sm uppercase tracking-wider">Website</h4>
                      <p className="text-sm">
                        <a href="https://championcargo.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-secondary underline transition-colors font-medium">
                          https://championcargo.com
                        </a>
                      </p>
                      <h4 className="font-semibold text-primary text-sm uppercase tracking-wider pt-2">Effective Date</h4>
                      <p className="text-muted-foreground text-sm font-medium">{effectiveDate}</p>
                    </div>
                  </div>
                </section>

              </motion.div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
