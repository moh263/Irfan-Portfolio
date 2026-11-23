import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Copy, 
  Check, 
  ArrowUpRight, 
  ArrowUp, 
  Send,
  MessageSquare,
  Phone,
  MapPin,
  Loader2
} from 'lucide-react';
import { portfolioData } from '../../config/portfolioData';
import { 
  BarcodeGraphic, 
  RubberStampBadge, 
  RegistrationCross, 
  HandDrawnArrow, 
  StickyTape 
} from '../common/DecorativeElements';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formSent, setFormSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  const [formData, setFormData] = useState({ name: '', email: '', message: '', honey: '' });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(portfolioData.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.message || isSubmitting) return;

    // Honeypot: bots fill this hidden field — silently drop
    if (formData.honey) {
      setFormSent(true);
      return;
    }

    setIsSubmitting(true);
    setFormError(null);

    try {
      const response = await fetch(
        `https://formsubmit.co/ajax/${portfolioData.contact.email}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            message: formData.message,
            _subject: `Portfolio inquiry from ${formData.name || 'visitor'}`,
            _template: 'table',
            _captcha: 'false',
          }),
        }
      );

      const result = await response.json().catch(() => null);

      if (!response.ok) {
        throw new Error(
          (result && (result.message as string)) ||
            'Could not send message. Please try again or email me directly.'
        );
      }

      setFormSent(true);
      setFormData({ name: '', email: '', message: '', honey: '' });
      setTimeout(() => setFormSent(false), 5000);
    } catch (err) {
      setFormError(
        err instanceof Error
          ? err.message
          : 'Something went wrong. Please use COMPOSE or WhatsApp instead.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      id="contact"
      className="relative bg-[#F4F4F2] text-[#111111] border-t-4 border-[#111111] overflow-hidden scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12">
        
        {/* Editorial Top Border Tag */}
        <div className="flex items-center justify-between border-b border-[#111111]/20 pb-4 mb-12 font-mono text-xs">
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 bg-[#FF1111]" />
            <span className="font-bold tracking-widest uppercase">COLOPHON & ENQUIRIES</span>
            <span className="text-neutral-400">// FINAL PAGE</span>
          </div>
          <div className="flex items-center space-x-3">
            <RegistrationCross className="w-4 h-4 text-neutral-500" />
            <span className="hidden sm:inline text-neutral-500">PORTFOLIO ISSUE NO. 26</span>
          </div>
        </div>

        {/* ================= GIGANTIC HEADLINE ================= */}
        <div className="relative mb-12 sm:mb-16 select-none">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="font-display font-black text-4xl xs:text-6xl sm:text-8xl lg:text-9xl tracking-tight uppercase leading-[0.92] sm:leading-[0.88] text-[#111111] break-words">
              LET'S BUILD <br />
              <span className="text-[#FF1111]">SOMETHING</span> <br />
              GREAT.
            </h2>
          </motion.div>

          {/* Hand drawn arrow pointing to message box */}
          <div className="absolute top-10 right-4 sm:right-24 hidden lg:block">
            <HandDrawnArrow className="w-20 h-14 text-[#FF1111]" direction="curved" />
            <RubberStampBadge label="OPEN FOR ROLES" variant="black" angle="rotate-6" className="mt-2" />
          </div>
        </div>

        {/* ================= INTERACTION COLUMNS ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20 items-start">
          
          {/* Left Column: Email Copy & Socials */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Quick Email Interaction Card */}
            <div className="relative bg-white border-2 border-[#111111] p-4 xs:p-6 brutalist-shadow">
              <StickyTape className="-top-3 left-8" angle="-rotate-2" width="w-20" />

              <span className="font-mono text-xs font-bold text-[#FF1111] uppercase tracking-wider block mb-2">
                DIRECT TRANSMISSION & CONTACT
              </span>

              <div className="font-headline font-bold text-xl sm:text-2xl text-[#111111] break-all mb-2">
                {portfolioData.contact.email}
              </div>

              {/* Phone & Location line */}
              <div className="space-y-1.5 font-mono text-xs text-neutral-600 mb-5 border-y border-[#111111]/15 py-3">
                <div className="flex items-center space-x-2">
                  <Phone className="w-3.5 h-3.5 text-[#FF1111] shrink-0" />
                  <span className="font-bold text-[#111111]">{portfolioData.contact.phone}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-3.5 h-3.5 text-[#FF1111] shrink-0" />
                  <span>{portfolioData.contact.location}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2.5">
                {/* Copy Button */}
                <button
                  onClick={handleCopyEmail}
                  className="flex items-center space-x-2 bg-[#111111] text-white px-4 py-2.5 font-mono text-xs font-bold uppercase tracking-wider hover:bg-[#FF1111] transition-all brutalist-shadow"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-white" />
                      <span>COPIED TO CLIPBOARD!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>COPY EMAIL</span>
                    </>
                  )}
                </button>

                {/* Mailto link */}
                <a
                  href={`mailto:${portfolioData.contact.email}?subject=Web%20Development%20Inquiry`}
                  className="flex items-center space-x-2 bg-white text-[#111111] border-2 border-[#111111] px-4 py-2.5 font-mono text-xs font-bold uppercase tracking-wider hover:bg-[#111111] hover:text-white transition-all brutalist-shadow"
                >
                  <Mail className="w-4 h-4" />
                  <span>COMPOSE</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>

                {/* WhatsApp link */}
                <a
                  href={`https://wa.me/916382682141`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 bg-emerald-700 text-white border-2 border-[#111111] px-4 py-2.5 font-mono text-xs font-bold uppercase tracking-wider hover:bg-emerald-800 transition-all brutalist-shadow"
                >
                  <Phone className="w-4 h-4" />
                  <span>WHATSAPP</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Social Channels Editorial Cards */}
            <div className="bg-[#EAEAE6] border-2 border-[#111111] p-6">
              <div className="font-mono text-xs font-bold text-[#111111] uppercase tracking-wider mb-4 pb-2 border-b border-[#111111]/20">
                NETWORK CHANNELS & PROFILES
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs">
                {portfolioData.contact.socials.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-white border border-[#111111] p-3 flex items-center justify-between hover:bg-[#111111] hover:text-white transition-all"
                  >
                    <div>
                      <span className="font-bold text-[#111111] group-hover:text-white block uppercase">
                        {social.name}
                      </span>
                      <span className="text-[10px] text-neutral-500 group-hover:text-neutral-300">
                        {social.handle}
                      </span>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-[#111111] group-hover:text-[#FF1111] transition-colors" />
                  </a>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Direct Dispatch Message Form */}
          <div className="lg:col-span-6">
            <div className="relative bg-white border-2 border-[#111111] p-4 xs:p-6 sm:p-8 brutalist-shadow">
              <div className="flex items-center justify-between border-b border-[#111111]/20 pb-3 mb-6">
                <div className="flex items-center space-x-2">
                  <MessageSquare className="w-4 h-4 text-[#FF1111]" />
                  <span className="font-mono text-xs font-bold uppercase text-[#111111]">
                    TRANSMIT DISPATCH MESSAGE
                  </span>
                </div>
                <span className="font-mono text-[10px] text-neutral-500">EST. RESPONSE &lt; 24H</span>
              </div>

              {formSent ? (
                <div className="py-12 text-center space-y-3 bg-[#EAEAE6] border-2 border-[#111111] p-6">
                  <div className="w-12 h-12 bg-[#FF1111] text-white flex items-center justify-center mx-auto rounded-full font-bold">
                    ✓
                  </div>
                  <h4 className="font-display font-black text-2xl uppercase text-[#111111]">
                    MESSAGE RECEIVED
                  </h4>
                  <p className="font-sans text-xs sm:text-sm text-neutral-700 max-w-sm mx-auto">
                    Thank you for reaching out. Your dispatch has been logged in the studio queue. I will review and reply within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4 font-mono text-xs">
                  {/* Honeypot — hidden from users, catches bots */}
                  <input
                    type="text"
                    name="_honey"
                    value={formData.honey}
                    onChange={(e) => setFormData({ ...formData, honey: e.target.value })}
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                    className="absolute opacity-0 h-0 w-0 -z-10 pointer-events-none"
                  />

                  <div>
                    <label className="block text-neutral-700 font-bold mb-1 uppercase text-[11px]">
                      YOUR NAME // ALIAS
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Morgan"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      disabled={isSubmitting}
                      className="w-full bg-[#F4F4F2] border-2 border-[#111111] p-3 text-sm font-sans focus:outline-none focus:border-[#FF1111] focus:bg-white disabled:opacity-60"
                    />
                  </div>

                  <div>
                    <label className="block text-neutral-700 font-bold mb-1 uppercase text-[11px]">
                      YOUR EMAIL ADDRESS
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alex@studio.design"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      disabled={isSubmitting}
                      className="w-full bg-[#F4F4F2] border-2 border-[#111111] p-3 text-sm font-sans focus:outline-none focus:border-[#FF1111] focus:bg-white disabled:opacity-60"
                    />
                  </div>

                  <div>
                    <label className="block text-neutral-700 font-bold mb-1 uppercase text-[11px]">
                      PROJECT SCOPE / MESSAGE
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Tell me about your project, timeline, and vision..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      disabled={isSubmitting}
                      className="w-full bg-[#F4F4F2] border-2 border-[#111111] p-3 text-sm font-sans focus:outline-none focus:border-[#FF1111] focus:bg-white resize-none disabled:opacity-60"
                    />
                  </div>

                  {formError && (
                    <div className="bg-[#FF1111]/10 border-2 border-[#FF1111] p-3 text-[11px] text-[#111111] font-sans">
                      {formError}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#FF1111] text-white py-3.5 font-bold uppercase tracking-widest text-xs border-2 border-[#111111] brutalist-shadow hover:bg-[#111111] hover:text-white transition-all flex items-center justify-center space-x-2 disabled:opacity-70 disabled:pointer-events-none"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-3.5 h-3.5 animate-spin" />
                        <span>TRANSMITTING…</span>
                      </>
                    ) : (
                      <>
                        <span>SEND DISPATCH</span>
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

        {/* ================= FINAL MAGAZINE COLOPHON FOOTER ================= */}
        <div className="border-t-2 border-[#111111] pt-8 flex flex-col md:flex-row items-center justify-between gap-6 font-mono text-xs text-[#333333]">
          
          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 text-center sm:text-left">
            <span className="font-bold text-[#111111] uppercase tracking-wider">
              {portfolioData.contact.footerText}
            </span>
          </div>

          <div className="flex items-center space-x-6">
            <BarcodeGraphic text="MOHAMED-IRFAN-S-2026" />
            
            {/* Back to top button */}
            <button
              onClick={scrollToTop}
              className="p-2.5 bg-white border-2 border-[#111111] hover:bg-[#FF1111] hover:text-white transition-colors brutalist-shadow"
              title="Return to top"
              aria-label="Return to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </footer>
  );
};
