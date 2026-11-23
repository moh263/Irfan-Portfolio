import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { portfolioData } from '../../config/portfolioData';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState('OVERVIEW');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { num: '01', label: 'OVERVIEW', href: '#overview' },
    { num: '02', label: 'ABOUT', href: '#about' },
    { num: '03', label: 'STUDIO', href: '#studio' },
    { num: '04', label: 'WORK', href: '#projects' },
    { num: '05', label: 'CONTACT', href: '#contact' },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace('#', '');

    if (!id || id === 'overview') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setActiveTab('OVERVIEW');
      setIsOpen(false);
      return;
    }

    const el = document.getElementById(id);
    if (!el) return;

    const navOffset = 88; // fixed glass pill navbar clearance
    const top = el.getBoundingClientRect().top + window.scrollY - navOffset;
    window.scrollTo({ top, behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 pt-2.5 sm:pt-4 px-2.5 sm:px-6 pointer-events-none flex flex-col items-center"
    >
      {/* 
        ==========================================================================
        DEEP DARK BLACK LIQUID GLASS PILL CONTAINER
        - Exact pill / capsule shape: rounded-full (border-radius: 9999px)
        - Deep rich black glass: rgba(5, 5, 7, 0.92) with frosted backdrop blur
        - Crisp luminous white rim highlight
        - Floating centered layout with smooth capsule hover states
        ==========================================================================
      */}
      <div
        className={`w-full max-w-5xl rounded-full transition-all duration-500 pointer-events-auto ${
          scrolled ? 'glass-pill-scrolled py-2 px-3 sm:px-6' : 'glass-pill py-1.5 sm:py-2.5 px-3 sm:px-6'
        }`}
      >
        <div className="flex items-center justify-between">
          
          {/* ================= BRAND MONOGRAM & IDENTITY ================= */}
          <a
            href="#overview"
            onClick={(e) => scrollToSection(e, '#overview')}
            className="flex items-center space-x-2 sm:space-x-2.5 group focus:outline-none shrink-0"
            aria-label="Back to top"
          >
            {/* Illustrated Curly Avatar Icon Badge */}
            <div className="relative w-7 h-7 xs:w-8 xs:h-8 sm:w-9 sm:h-9 shrink-0 flex items-center justify-center filter drop-shadow-[0_0_10px_rgba(255,17,17,0.55)] group-hover:scale-110 group-hover:drop-shadow-[0_0_16px_rgba(255,17,17,0.85)] transition-all duration-300">
              <img
                src="/images/avatar_curly.png"
                alt="Brand Avatar"
                className="w-full h-full object-contain select-none"
                draggable={false}
              />
            </div>

            <div className="flex flex-col">
              <span
                className="tracking-wider text-[11px] xs:text-xs sm:text-sm font-black text-white leading-none group-hover:text-[#FF1111] transition-colors duration-300"
                style={{ fontFamily: 'var(--font-syne), "Archivo Black", sans-serif' }}
              >
                {portfolioData.personal.name}
              </span>
              <span className="text-[8px] xs:text-[9px] font-mono tracking-widest text-white/50 uppercase mt-0.5">
                {portfolioData.personal.role}
              </span>
            </div>
          </a>

          {/* ================= NAV LINKS (DESKTOP PILL CAPSULES) ================= */}
          <nav className="hidden lg:flex items-center space-x-1 p-1 rounded-full bg-white/[0.04] border border-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.08)]">
            {navLinks.map((link) => {
              const isActive = activeTab === link.label;
              return (
                <a
                  key={link.num}
                  href={link.href}
                  onClick={(e) => {
                    setActiveTab(link.label);
                    scrollToSection(e, link.href);
                  }}
                  className={`group relative px-3.5 py-1.5 rounded-full text-xs font-mono font-bold tracking-wider transition-all duration-300 flex items-center space-x-1.5 ${
                    isActive
                      ? 'bg-white/15 text-white shadow-[inset_0_1px_1px_rgba(255,255,255,0.25),0_2px_8px_rgba(0,0,0,0.4)]'
                      : 'text-white/70 hover:text-white hover:bg-white/[0.08]'
                  }`}
                >
                  <span
                    className={`text-[9px] font-mono transition-opacity ${
                      isActive ? 'text-[#FF1111] opacity-100 font-bold' : 'text-[#FF1111] opacity-60 group-hover:opacity-100'
                    }`}
                  >
                    {link.num}
                  </span>
                  <span>{link.label}</span>
                </a>
              );
            })}
          </nav>

          {/* ================= RIGHT: CTA BUTTON & MOBILE TOGGLE ================= */}
          <div className="flex items-center space-x-2 sm:space-x-3 shrink-0">
            {/* Pill CTA Button (Compact on small mobile) */}
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, '#contact')}
              className="group relative hidden xs:inline-flex items-center space-x-1.5 bg-gradient-to-r from-[#FF1111] to-[#C40000] text-white px-3 sm:px-4 py-1.5 rounded-full font-mono text-[11px] sm:text-xs font-bold uppercase tracking-wider shadow-[0_0_16px_rgba(255,17,17,0.4)] hover:shadow-[0_0_24px_rgba(255,17,17,0.7)] hover:scale-105 active:scale-95 transition-all duration-300"
            >
              <span>COMMISSIONS</span>
              <ArrowUpRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-full text-white hover:text-[#FF1111] bg-white/[0.06] hover:bg-white/[0.12] border border-white/15 transition-colors focus:outline-none shrink-0"
              aria-label="Toggle Navigation Menu"
            >
              {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>

        </div>
      </div>

      {/* ================= MOBILE LIQUID GLASS DRAWER ================= */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop Dismissal */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-xs -z-10 pointer-events-auto lg:hidden"
            />

            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.96 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="lg:hidden w-full max-w-5xl mt-2 pointer-events-auto"
            >
              <div className="rounded-3xl bg-[#050507]/96 backdrop-blur-2xl border border-white/15 p-5 shadow-[0_25px_60px_rgba(0,0,0,0.95),inset_0_1px_1.5px_rgba(255,255,255,0.25)]">
                <div className="flex flex-col space-y-2 font-mono text-sm">
                  {navLinks.map((link) => (
                    <a
                      key={link.num}
                      href={link.href}
                      onClick={(e) => {
                        setActiveTab(link.label);
                        scrollToSection(e, link.href);
                      }}
                      className="flex items-center justify-between px-4 py-2.5 rounded-full text-white/80 hover:text-white hover:bg-white/[0.1] transition-all group active:bg-white/20"
                    >
                      <span className="font-bold tracking-wider">{link.label}</span>
                      <span className="text-xs text-[#FF1111] font-mono group-hover:translate-x-1 transition-transform">
                        {link.num} →
                      </span>
                    </a>
                  ))}

                  <div className="pt-3 border-t border-white/10 mt-2">
                    <a
                      href="#contact"
                      onClick={(e) => scrollToSection(e, '#contact')}
                      className="flex items-center justify-center space-x-2 w-full bg-gradient-to-r from-[#FF1111] to-[#C40000] text-white py-3 rounded-full font-bold text-xs uppercase tracking-widest shadow-[0_0_20px_rgba(255,17,17,0.4)] active:scale-98 transition-transform"
                    >
                      <span>START A PROJECT</span>
                      <Sparkles className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
