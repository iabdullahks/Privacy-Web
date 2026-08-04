import React from 'react';
import { Shield, Database, Eye, Smartphone, Share2, Lock, Info, MapPin, Phone, Mail, FileText } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'wouter';

export function PrivacyPolicyPage() {
  const lastUpdated = "August 4, 2026";

  const sections = [
    { id: 'collection', title: '1. Information We Collect' },
    { id: 'usage', title: '2. How We Use Your Information' },
    { id: 'sms-consent', title: '3. Consent to Receive SMS' },
    { id: 'sharing', title: '4. Sharing & Disclosure' },
    { id: 'security', title: '5. Data Security' },
    { id: 'rights', title: '6. Your Rights & Choices' },
    { id: 'third-party', title: '7. Third-Party Websites' },
    { id: 'sms-communication', title: '8. SMS Communication' },
    { id: 'children', title: '9. Children’s Privacy' },
    { id: 'changes', title: '10. Changes to Policy' },
    { id: 'contact', title: '11. Contact Us' },
    { id: 'sms-tos', title: '12. SMS Terms of Service' },
  ];

  return (
    <div className="min-h-screen bg-gray-50/50">

      {/* Hero Section */}
      <section className="relative pt-40 pb-24 overflow-hidden border-b border-border bg-white">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent pointer-events-none" />
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
              className="text-xl text-muted-foreground leading-relaxed max-w-2xl"
            >
              Champion Cargo LLC is committed to protecting your privacy and handling your information responsibly.
            </motion.p>
            <p className="text-sm text-muted-foreground mt-4">Last Updated: {lastUpdated}</p>
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
                <h3 className="font-heading font-bold text-sm text-primary uppercase tracking-wider mb-4 pl-3">Sections</h3>
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
              </div>
            </div>

            {/* Privacy Policy Text */}
            <div className="col-span-1 lg:col-span-3 space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                className="bg-white rounded-3xl border border-border shadow-sm p-8 md:p-12 space-y-12"
              >

                {/* Introduction */}
                <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
                  <p>
                    <strong className="text-primary">Champion Cargo LLC</strong> is committed to protecting your privacy. This Privacy Policy describes how we collect, use, disclose, and protect your information when you visit our website,{' '}
                    <a href="https://championcargo.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-secondary underline font-semibold transition-colors">
                      championcargo.com
                    </a>{' '}
                    (&ldquo;Website&rdquo;), or interact with us in any other manner.
                  </p>
                </div>

                <hr className="border-border" />

                {/* 1. Information We Collect */}
                <section id="collection" className="scroll-mt-28 space-y-4">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center shrink-0">
                      <Database className="w-5 h-5 text-primary" />
                    </div>
                    <h2 className="text-2xl font-bold font-heading text-primary">1. Information We Collect</h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    We may collect the following types of information from you:
                  </p>
                  <ul className="list-disc pl-6 space-y-3 text-muted-foreground">
                    <li>
                      <strong className="text-primary">Personal Information:</strong> When you contact us through our Website, phone, or email, we may collect personal information that you provide, including your full name, phone number, email address, and mailing address.
                    </li>
                    <li>
                      <strong className="text-primary">Automatically Collected Information:</strong> When you visit our Website, we may automatically collect certain information about your device and usage, including IP address, browser type, operating system, referring URLs, and pages viewed.
                    </li>
                  </ul>
                </section>

                <hr className="border-border" />

                {/* 2. How We Use Your Information */}
                <section id="usage" className="scroll-mt-28 space-y-4">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center shrink-0">
                      <Eye className="w-5 h-5 text-primary" />
                    </div>
                    <h2 className="text-2xl font-bold font-heading text-primary">2. How We Use Your Information</h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    We use the information we collect for the following purposes:
                  </p>
                  <ul className="list-disc pl-6 space-y-3 text-muted-foreground">
                    <li>
                      <strong className="text-primary">To Communicate with You:</strong> We use your contact information to respond to your inquiries, provide legal services, send administrative information, and keep you informed about your case or our services.
                    </li>
                    <li>
                      <strong className="text-primary">Legal Compliance:</strong> We may use your information to comply with applicable laws, regulations, or legal obligations, including responding to subpoenas, court orders, or legal requests.
                    </li>
                  </ul>
                </section>

                <hr className="border-border" />

                {/* 3. Consent to Receive Text Messages */}
                <section id="sms-consent" className="scroll-mt-28 space-y-4">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center shrink-0">
                      <Smartphone className="w-5 h-5 text-primary" />
                    </div>
                    <h2 className="text-2xl font-bold font-heading text-primary">3. Consent to Receive Text Messages</h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    You are not required to consent to receive text messages from <strong className="text-primary">Champion Cargo LLC</strong>. By providing your phone number and opting in, you consent to receive text messages from <strong className="text-primary">Champion Cargo LLC</strong> regarding your inquiry, our services, or related legal matters. Message and data rates may apply. Message frequency may vary.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    You can opt out of receiving text messages at any time by replying <strong className="text-primary">&ldquo;STOP&rdquo;</strong> to any text message you receive from us. Please note that opting out may limit our ability to communicate with you regarding your case or services.
                  </p>
                </section>

                <hr className="border-border" />

                {/* 4. Information Sharing and Disclosure */}
                <section id="sharing" className="scroll-mt-28 space-y-4">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center shrink-0">
                      <Share2 className="w-5 h-5 text-primary" />
                    </div>
                    <h2 className="text-2xl font-bold font-heading text-primary">4. Information Sharing and Disclosure</h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    We do not sell or rent your personal information to third parties. We do not sell, rent, release, or transfer your SMS consent or phone number to any third party for any third party marketing purposes. We may share your information in the following circumstances:
                  </p>
                  <ul className="list-disc pl-6 space-y-3 text-muted-foreground">
                    <li>
                      <strong className="text-primary">Service Providers:</strong> We may share your information with our service providers who perform services on our behalf, such as marketing, customer services, or technical support. These service providers are contractually obligated to protect your information and use it only for services they provide.
                    </li>
                    <li>
                      <strong className="text-primary">Legal Requirements:</strong> We may disclose your information if required by law, regulation, or legal process, or if we believe disclosure is necessary to protect our rights, property, or the safety of our users or others.
                    </li>
                  </ul>
                </section>

                <hr className="border-border" />

                {/* 5. Data Security */}
                <section id="security" className="scroll-mt-28 space-y-4">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center shrink-0">
                      <Lock className="w-5 h-5 text-primary" />
                    </div>
                    <h2 className="text-2xl font-bold font-heading text-primary">5. Data Security</h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    We implement reasonable security measures to protect your personal information from unauthorized access, use, disclosure, alteration, or destruction. However, no method of transmission over the internet or electronic storage is completely secure, and we cannot guarantee absolute security.
                  </p>
                </section>

                <hr className="border-border" />

                {/* 6. Your Rights and Choices */}
                <section id="rights" className="scroll-mt-28 space-y-4">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center shrink-0">
                      <Shield className="w-5 h-5 text-primary" />
                    </div>
                    <h2 className="text-2xl font-bold font-heading text-primary">6. Your Rights and Choices</h2>
                  </div>
                  <ul className="list-disc pl-6 space-y-3 text-muted-foreground">
                    <li>
                      <strong className="text-primary">Opting Out:</strong> You may opt out of receiving marketing communications from us by following the instructions in those communications or contacting us directly. If you opt out, we may still send you non-promotional communications related to your legal services or our ongoing business relationship.
                    </li>
                    <li>
                      <strong className="text-primary">Access and Update Information:</strong> You have the right to access, update, or correct your personal information. To do so, please contact us using the information provided below.
                    </li>
                  </ul>
                </section>

                <hr className="border-border" />

                {/* 7. Third-Party Websites */}
                <section id="third-party" className="scroll-mt-28 space-y-4">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center shrink-0">
                      <Info className="w-5 h-5 text-primary" />
                    </div>
                    <h2 className="text-2xl font-bold font-heading text-primary">7. Third-Party Websites</h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Our Website may contain links to third-party websites. We are not responsible for the privacy practices or content of these third-party sites. We encourage you to review the privacy policies of any third-party websites you visit.
                  </p>
                </section>

                <hr className="border-border" />

                {/* 8. SMS Message Communication */}
                <section id="sms-communication" className="scroll-mt-28 space-y-4">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center shrink-0">
                      <Smartphone className="w-5 h-5 text-primary" />
                    </div>
                    <h2 className="text-2xl font-bold font-heading text-primary">8. SMS Message Communication</h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    We may send communications regarding <strong className="text-primary">Champion Cargo LLC</strong>, either directly or via a third-party agent or authorized service provider, through your communication service provider in order to deliver it to you. You agree that your communication services provider is acting as your agent in this capacity.
                  </p>
                  <p className="text-muted-foreground leading-relaxed font-semibold">
                    No mobile information will be shared with third parties/affiliates for marketing/promotional purposes. All the above categories exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties.
                  </p>
                </section>

                <hr className="border-border" />

                {/* 9. Children’s Privacy */}
                <section id="children" className="scroll-mt-28 space-y-4">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center shrink-0">
                      <Shield className="w-5 h-5 text-primary" />
                    </div>
                    <h2 className="text-2xl font-bold font-heading text-primary">9. Children’s Privacy</h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Our website is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware that we have inadvertently collected personal information from a child under 13, we will take steps to delete such information.
                  </p>
                </section>

                <hr className="border-border" />

                {/* 10. Changes to This Privacy Policy */}
                <section id="changes" className="scroll-mt-28 space-y-4">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center shrink-0">
                      <FileText className="w-5 h-5 text-primary" />
                    </div>
                    <h2 className="text-2xl font-bold font-heading text-primary">10. Changes to This Privacy Policy</h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated &ldquo;Last Updated&rdquo; date. We encourage you to review this Privacy Policy periodically for any updates.
                  </p>
                </section>

                <hr className="border-border" />

                {/* 11. Contact Us */}
                <section id="contact" className="scroll-mt-28 space-y-4">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <h2 className="text-2xl font-bold font-heading text-primary">11. Contact Us</h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    If you have any questions or concerns about this Privacy Policy or our privacy practices, please contact us at:
                  </p>

                  <div className="bg-gray-50 rounded-2xl p-6 border border-border mt-4 grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="flex gap-3">
                      <MapPin className="text-secondary shrink-0 mt-1" size={20} />
                      <div>
                        <h4 className="font-semibold text-primary text-sm uppercase tracking-wider">Address</h4>
                        <p className="text-muted-foreground text-sm mt-1">
                          510 GREEN LEA WAY APT 1F<br />
                          SUNBURY, OH 43074
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <Phone className="text-secondary shrink-0 mt-1" size={20} />
                      <div>
                        <h4 className="font-semibold text-primary text-sm uppercase tracking-wider">Phone</h4>
                        <p className="text-muted-foreground text-sm mt-1">330-756-7732</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <Mail className="text-secondary shrink-0 mt-1" size={20} />
                      <div>
                        <h4 className="font-semibold text-primary text-sm uppercase tracking-wider">Email</h4>
                        <p className="text-muted-foreground text-sm mt-1">
                          <a href="mailto:info@championcargo.com" className="text-primary hover:text-secondary underline transition-colors">
                            info@championcargo.com
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                <hr className="border-border" />

                {/* 12. SMS Terms of Service */}
                <section id="sms-tos" className="scroll-mt-28 space-y-4">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <Smartphone className="w-5 h-5 text-primary" />
                    </div>
                    <h2 className="text-2xl font-bold font-heading text-primary">12. SMS Terms of Service</h2>
                  </div>
                  
                  <div className="bg-primary/5 rounded-2xl p-6 border border-primary/10 space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      By opting into SMS from a web form or other medium, you are agreeing to receive SMS messages from <strong className="text-primary">Champion Cargo LLC</strong>. This includes shipment updates and services. Message and data rates may apply. Message frequency may vary.
                    </p>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      See privacy policy at{' '}
                      <Link href="/privacy" className="text-primary font-semibold underline underline-offset-4 hover:text-secondary transition-colors">
                        championcargo.com/privacy
                      </Link>
                      . Message HELP for help. Reply STOP to any message to opt out.
                    </p>
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

