import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Clock, Link as LinkIcon, Printer, Download, Search, ChevronUp } from 'lucide-react';
import { ReadingProgressBar } from '@/components/ReadingProgressBar';
import { PrivacySidebar } from '@/components/PrivacySidebar';
import { PrivacySection } from '@/components/PrivacySection';
import { Button } from '@/components/Button';
import { useToast } from '@/hooks/use-toast';

const sections = [
  { id: "introduction", title: "Introduction", icon: "file" },
  { id: "information-we-collect", title: "Information We Collect", icon: "database" },
  { id: "how-we-use", title: "How We Use Information", icon: "activity" },
  { id: "cookies", title: "Cookies & Tracking", icon: "globe" },
  { id: "third-party", title: "Third-Party Services", icon: "users" },
  { id: "information-sharing", title: "Information Sharing", icon: "eye" },
  { id: "data-security", title: "Data Security", icon: "lock" },
  { id: "user-rights", title: "Your Privacy Rights", icon: "shield" },
  { id: "childrens-privacy", title: "Children's Privacy", icon: "users" },
  { id: "changes", title: "Changes to This Policy", icon: "bell" },
  { id: "contact", title: "Contact Information", icon: "server" }
];

export function PrivacyPolicyPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    toast({
      title: "Link Copied",
      description: "Privacy Policy link copied to clipboard.",
    });
  };

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    toast({
      title: "Processing PDF",
      description: "PDF document is being generated and will download shortly.",
    });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-50/50">
      <ReadingProgressBar />
      
      {/* Hero Section */}
      <section className="relative pt-40 pb-24 overflow-hidden border-b border-border bg-white">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent pointer-events-none" />
        
        {/* Background decorative elements */}
        <div className="absolute -right-20 -top-20 text-primary/5 pointer-events-none">
          <Shield size={400} strokeWidth={0.5} />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 text-sm font-semibold text-secondary mb-6 tracking-wider uppercase">
              <Shield className="w-5 h-5" /> 
              Corporate Compliance
            </div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-bold font-heading text-primary mb-6"
            >
              Privacy Policy
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl"
            >
              At Champion Cargo LLC, we protect your business data with the same uncompromising vigilance as the freight we haul. Complete transparency, zero compromises.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground"
            >
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary" />
                <span>Last Updated: October 15, 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                </div>
                <span>~8 min read</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-12">
        <div className="container mx-auto px-4 md:px-6">
          
          {/* Action Bar */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-12 bg-white p-4 rounded-2xl border border-border shadow-sm">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <input 
                type="text" 
                placeholder="Search policy..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-input focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-gray-50/50"
              />
            </div>
            <div className="flex items-center gap-2 w-full md:w-auto">
              <Button variant="ghost" size="sm" onClick={handleCopyLink} leftIcon={<LinkIcon size={16} />} className="flex-1 md:flex-none">
                Copy Link
              </Button>
              <Button variant="ghost" size="sm" onClick={handlePrint} leftIcon={<Printer size={16} />} className="flex-1 md:flex-none">
                Print
              </Button>
              <Button variant="outline" size="sm" onClick={handleDownload} leftIcon={<Download size={16} />} className="flex-1 md:flex-none">
                Download PDF
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 relative items-start">
            
            {/* Left Sidebar (Desktop) */}
            <div className="hidden lg:block lg:col-span-3">
              <PrivacySidebar sections={sections} />
            </div>

            {/* Right Content */}
            <div className="lg:col-span-9 max-w-4xl mx-auto lg:mx-0 w-full">
              
              <PrivacySection id="introduction" title="Introduction" iconType="file">
                <p>Champion Cargo LLC ("we," "us," or "our") is committed to protecting your personal and corporate information. This Privacy Policy outlines our practices regarding the collection, use, protection, and disclosure of information when you use our logistics services, website, and enterprise transportation portals.</p>
                <p>By engaging with Champion Cargo LLC, you entrust us with critical business intelligence. We view this trust as the foundation of our partnership and enforce stringent data protection protocols to maintain it.</p>
              </PrivacySection>

              <PrivacySection id="information-we-collect" title="Information We Collect" iconType="database">
                <p>We collect information essential to executing flawless logistics operations:</p>
                <ul>
                  <li><strong>Personal Information:</strong> Names, business email addresses, corporate phone numbers, and professional titles.</li>
                  <li><strong>Business & Freight Information:</strong> Shipping origins and destinations, cargo manifests, facility access protocols, and supply chain routing data.</li>
                  <li><strong>Technical Information:</strong> IP addresses, browser types, enterprise portal login timestamps, and API integration telemetry.</li>
                </ul>
              </PrivacySection>

              <PrivacySection id="how-we-use" title="How We Use Information" iconType="activity">
                <p>Your data is utilized strictly for operational excellence and service delivery:</p>
                <ul>
                  <li>Fulfilling freight transportation requests and managing supply chain logistics.</li>
                  <li>Providing real-time tracking, ETA updates, and proof-of-delivery documentation.</li>
                  <li>Processing enterprise billing, invoices, and customs documentation.</li>
                  <li>Enhancing our routing algorithms and predictive delivery models.</li>
                  <li>Complying with Department of Transportation (DOT) and federal regulations.</li>
                </ul>
              </PrivacySection>

              <PrivacySection id="cookies" title="Cookies & Tracking" iconType="globe">
                <p>Our digital platforms utilize enterprise-grade cookies to maintain secure sessions and ensure portal stability. We use:</p>
                <ul>
                  <li><strong>Strictly Necessary Cookies:</strong> Required for secure login to our client portals.</li>
                  <li><strong>Performance Cookies:</strong> Analytics to ensure our digital infrastructure maintains 99.99% uptime.</li>
                </ul>
                <p>We do not use targeting or advertising cookies on our secure client portals.</p>
              </PrivacySection>

              <PrivacySection id="third-party" title="Third-Party Services" iconType="users">
                <p>In the execution of complex supply chains, we occasionally partner with vetted third-party entities. These include:</p>
                <ul>
                  <li>Intermodal carriers and rail operators.</li>
                  <li>Enterprise payment processing gateways.</li>
                  <li>Customs brokers and international transit authorities.</li>
                </ul>
                <p>All third-party partners are bound by rigorous Non-Disclosure Agreements (NDAs) and must meet our internal security standards.</p>
              </PrivacySection>

              <PrivacySection id="information-sharing" title="Information Sharing" iconType="eye">
                <p><strong>We do not, and will never, sell your corporate or personal data.</strong></p>
                <p>Information is shared only under the following circumstances:</p>
                <ul>
                  <li>With authorized carriers strictly necessary to complete your shipment.</li>
                  <li>To comply with lawful requests from law enforcement or regulatory bodies (e.g., DOT, FMCSA).</li>
                  <li>During a corporate merger, acquisition, or asset sale, subject to confidentiality agreements.</li>
                </ul>
              </PrivacySection>

              <PrivacySection id="data-security" title="Data Security" iconType="lock">
                <p>Our data security infrastructure is designed to thwart modern cyber threats. We employ:</p>
                <ul>
                  <li>End-to-end AES-256 encryption for all data in transit and at rest.</li>
                  <li>Multi-factor authentication (MFA) for all internal system access.</li>
                  <li>Continuous vulnerability scanning and annual third-party penetration testing.</li>
                  <li>Strict Role-Based Access Control (RBAC) ensuring employees only access data necessary for their specific duties.</li>
                </ul>
              </PrivacySection>

              <PrivacySection id="user-rights" title="Your Privacy Rights" iconType="shield">
                <p>Depending on your jurisdiction, you or your organization may have the right to:</p>
                <ul>
                  <li>Access a copy of the personal information we hold about you.</li>
                  <li>Request correction of inaccurate or incomplete data.</li>
                  <li>Request deletion of your data (subject to legal data retention requirements for transportation records).</li>
                  <li>Export your data in a machine-readable format.</li>
                </ul>
                <p>To exercise these rights, contact your dedicated account manager or our privacy office.</p>
              </PrivacySection>

              <PrivacySection id="childrens-privacy" title="Children's Privacy" iconType="users">
                <p>Champion Cargo LLC is an enterprise B2B service provider. Our services are not directed toward individuals under the age of 18. We do not knowingly collect personal information from children.</p>
              </PrivacySection>

              <PrivacySection id="changes" title="Changes to This Policy" iconType="bell">
                <p>We may update this policy to reflect changes in regulatory requirements or operational practices. Significant material changes will be communicated via email to the primary administrative contact on your account 30 days prior to implementation.</p>
              </PrivacySection>

              <PrivacySection id="contact" title="Contact Information" iconType="server">
                <p>For questions or concerns regarding this Privacy Policy or our data security practices, please contact our Compliance Office:</p>
                <div className="bg-gray-50 p-6 rounded-xl border border-border mt-4 not-prose">
                  <p className="font-bold text-primary mb-1">Champion Cargo LLC Compliance Office</p>
                  <p className="text-muted-foreground mb-1">510 GREEN LEA WAY APT 1F</p>
                  <p className="text-muted-foreground mb-4">SUNBURY, OH 43074</p>
                  <p className="text-muted-foreground mb-1"><strong>Email:</strong> privacy@championcargo.com</p>
                  <p className="text-muted-foreground"><strong>Phone:</strong> 330-756-7732</p>
                </div>
              </PrivacySection>

            </div>
          </div>
        </div>
      </section>

      {/* Scroll to top button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 w-12 h-12 bg-primary text-white rounded-full shadow-xl flex items-center justify-center hover:bg-primary/90 transition-colors z-50 focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2"
            aria-label="Scroll to top"
          >
            <ChevronUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
