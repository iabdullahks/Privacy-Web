import React, { useState } from 'react';
import { HeroSection } from '@/components/HeroSection';
import { SectionHeading } from '@/components/SectionHeading';
import { ContactCard } from '@/components/ContactCard';
import { Button } from '@/components/Button';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

export function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [smsConsent, setSmsConsent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate network request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-background">
      <HeroSection
        title="Get in Touch"
        subtitle="Our logistics experts are ready to assist you. Contact us today for a consultation or quote."
        bgImageUrl="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2940&auto=format&fit=crop"
        align="center"
      />

      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Contact Info */}
            <div className="lg:col-span-5 space-y-6">
              <SectionHeading 
                title="Contact Information" 
                subtitle="We're here to answer any questions you might have about our services."
              />
              
              <div className="flex flex-col gap-4 mt-8">
                <ContactCard 
                  title="Corporate Headquarters"
                  icon={<MapPin size={24} />}
                  details={<p>510 GREEN LEA WAY APT 1F<br />SUNBURY, OH 43074</p>}
                />
                <ContactCard 
                  title="Phone Support"
                  icon={<Phone size={24} />}
                  details={<p>330-756-7732</p>}
                />
                <ContactCard 
                  title="Email"
                  icon={<Mail size={24} />}
                  details={<p>info@championcargo.com<br />support@championcargo.com</p>}
                />
                <ContactCard 
                  title="Business Hours"
                  icon={<Clock size={24} />}
                  details={<p>Monday – Friday: 7am – 7pm CST<br />24/7 Support for Active Shipments</p>}
                />
              </div>

              {/* Map Placeholder */}
              <div className="mt-8 rounded-2xl overflow-hidden h-64 bg-gray-200 relative border border-border shadow-sm group">
                <div className="absolute inset-0 flex flex-col items-center justify-center text-muted-foreground group-hover:bg-gray-300 transition-colors">
                  <MapPin size={48} className="mb-2 text-primary opacity-50" />
                  <p className="font-medium">Interactive Map view</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
                <h3 className="font-heading font-bold text-3xl text-primary mb-8">Send us a Message</h3>
                
                {isSuccess ? (
                  <div className="bg-green-50 border border-green-200 text-green-800 rounded-xl p-8 text-center animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 text-green-600">
                      <Send size={32} />
                    </div>
                    <h4 className="font-heading font-bold text-2xl mb-2">Message Sent Successfully</h4>
                    <p>Thank you for reaching out to Champion Cargo. A logistics specialist will be in touch with you shortly.</p>
                    <Button 
                      variant="outline" 
                      className="mt-8"
                      onClick={() => setIsSuccess(false)}
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-primary">Full Name *</label>
                        <input required type="text" className="w-full h-12 px-4 rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all" placeholder="John Doe" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-primary">Company Name</label>
                        <input type="text" className="w-full h-12 px-4 rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all" placeholder="Acme Corp" />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-primary">Email Address *</label>
                        <input required type="email" className="w-full h-12 px-4 rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all" placeholder="john@example.com" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-primary">Phone Number</label>
                        <input type="tel" className="w-full h-12 px-4 rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all" placeholder="(555) 123-4567" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-primary">Cargo Type / Service Required</label>
                      <select className="w-full h-12 px-4 rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all">
                        <option>General Freight</option>
                        <option>Dedicated Fleet</option>
                        <option>Time-Critical</option>
                        <option>Supply Chain Consulting</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-primary">Message *</label>
                      <textarea required rows={5} className="w-full p-4 rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all resize-none" placeholder="Tell us about your logistics needs..."></textarea>
                    </div>

                    {/* SMS Consent Checkbox */}
                    <div className="rounded-2xl border border-border bg-gray-50 p-5 space-y-3">
                      <label className="flex items-start gap-3 cursor-pointer group">
                        <div className="relative mt-0.5 shrink-0">
                          <input
                            id="sms-consent"
                            type="checkbox"
                            required
                            checked={smsConsent}
                            onChange={(e) => setSmsConsent(e.target.checked)}
                            className="sr-only peer"
                          />
                          <div className="w-5 h-5 rounded border-2 border-input bg-white peer-checked:bg-primary peer-checked:border-primary transition-all flex items-center justify-center group-hover:border-secondary">
                            {smsConsent && (
                              <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 12 12" stroke="currentColor" strokeWidth={2.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2 6l3 3 5-5" />
                              </svg>
                            )}
                          </div>
                        </div>
                        <span className="text-sm text-muted-foreground leading-relaxed">
                          <span className="font-semibold text-primary">By checking this box</span> you consent to receive conversation (external) messages from{' '}
                          <span className="font-semibold text-primary">Champion Cargo LLC</span>.
                        </span>
                      </label>
                      <ul className="text-xs text-muted-foreground space-y-1.5 pl-8 list-disc">
                        <li>Messaging frequency may vary.</li>
                        <li>Message and data rates may apply.</li>
                        <li>You can opt out any time by texting <strong className="text-primary">STOP</strong>.</li>
                        <li>
                          For assistance, text <strong className="text-primary">HELP</strong> or visit our website at{' '}
                          <a href="https://championcargo.com" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-2 hover:text-secondary transition-colors font-medium">
                            championcargo.com
                          </a>.
                        </li>
                        <li>
                          Visit our{' '}
                          <a href="/privacy" className="text-primary underline underline-offset-2 hover:text-secondary transition-colors font-medium">Privacy Policy</a>{' '}
                          and{' '}
                          <a href="/disclaimer" className="text-primary underline underline-offset-2 hover:text-secondary transition-colors font-medium">Terms of Service</a>.
                        </li>
                        <li>We do not share or sell SMS opt-in, or phone numbers for the purpose of SMS.</li>
                      </ul>
                      {!smsConsent && (
                        <p className="text-xs text-amber-600 font-medium pl-8">* You must agree to the above to submit this form.</p>
                      )}
                    </div>

                    <Button type="submit" variant="primary" size="lg" className="w-full md:w-auto min-w-[200px]" isLoading={isSubmitting}>
                      Submit Inquiry
                    </Button>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
