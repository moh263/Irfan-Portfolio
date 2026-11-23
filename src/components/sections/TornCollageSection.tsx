import React from 'react';
import { motion, useReducedMotion, type Variants } from 'framer-motion';

// Reusable Marquee Unit with Words + Exact Graphic Symbols matching the reference image
const MarqueeUnit: React.FC = () => (
  <div className="flex items-center space-x-4 xs:space-x-6 sm:space-x-10 md:space-x-14 px-3 sm:px-6 md:px-8 shrink-0 select-none">
    {/* 1. WEB DEVELOPER */}
    <span
      className="font-black text-white uppercase text-[52px] xs:text-[70px] sm:text-[98px] md:text-[125px] lg:text-[150px] tracking-tight leading-none inline-block drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]"
      style={{ fontFamily: '"Archivo Black", var(--font-syne), sans-serif' }}
    >
      WEB DEVELOPER
    </span>

    {/* Graphic Symbols Pair matching user reference: 8-Point Starburst + 4-Point Diamond Star */}
    <div className="flex items-center space-x-2.5 xs:space-x-3 sm:space-x-5 md:space-x-6 text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)] shrink-0">
      {/* 8-Point Sharp Starburst */}
      <svg
        viewBox="0 0 100 100"
        className="w-5 h-5 xs:w-7 xs:h-7 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14"
        fill="currentColor"
      >
        <polygon points="50,0 59,34 85,15 66,41 100,50 66,59 85,85 59,66 50,100 41,66 15,85 34,59 0,50 34,41 15,15 41,34" />
      </svg>

      {/* 4-Point Curved Diamond Star */}
      <svg
        viewBox="0 0 100 100"
        className="w-5 h-5 xs:w-7 xs:h-7 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14"
        fill="currentColor"
      >
        <path d="M50 0 C50 34 66 50 100 50 C66 50 50 66 50 100 C50 66 34 50 0 50 C34 50 50 34 50 0 Z" />
      </svg>
    </div>

    {/* 2. DEVELOPER */}
    <span
      className="font-black text-white uppercase text-[52px] xs:text-[70px] sm:text-[98px] md:text-[125px] lg:text-[150px] tracking-tight leading-none inline-block drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]"
      style={{ fontFamily: '"Archivo Black", var(--font-syne), sans-serif' }}
    >
      DEVELOPER
    </span>

    {/* Graphic Symbols Pair */}
    <div className="flex items-center space-x-2.5 xs:space-x-3 sm:space-x-5 md:space-x-6 text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)] shrink-0">
      {/* 8-Point Sharp Starburst */}
      <svg
        viewBox="0 0 100 100"
        className="w-5 h-5 xs:w-7 xs:h-7 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14"
        fill="currentColor"
      >
        <polygon points="50,0 59,34 85,15 66,41 100,50 66,59 85,85 59,66 50,100 41,66 15,85 34,59 0,50 34,41 15,15 41,34" />
      </svg>

      {/* 4-Point Curved Diamond Star */}
      <svg
        viewBox="0 0 100 100"
        className="w-5 h-5 xs:w-7 xs:h-7 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14"
        fill="currentColor"
      >
        <path d="M50 0 C50 34 66 50 100 50 C66 50 50 66 50 100 C50 66 34 50 0 50 C34 50 50 34 50 0 Z" />
      </svg>
    </div>
  </div>
);

export const TornCollageSection: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  // Section reveal variants
  const sectionVariant: Variants = {
    hidden: { opacity: shouldReduceMotion ? 1 : 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.7,
        staggerChildren: shouldReduceMotion ? 0 : 0.15
      }
    }
  };

  const portraitVariant: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.75, delay: 0.2 }
    }
  };

  return (
    <div
      id="about"
      className="relative w-full overflow-hidden select-none bg-[#EDEAE4] bg-grid-paper pt-8 pb-14 sm:pt-12 sm:pb-20 scroll-mt-24"
    >
      {/* 
        ==========================================================================
        EXACT CRUMPLED BLACK TORN-PAPER SECTION
        - Reconstructed with the exact background from user's reference image
        - Real fibrous torn paper deckle edges at top and bottom
        - Moving white typography (DESIGNER ✷ ✦) sliding continuously in background
        - Centered high-resolution smiling portrait cutout with vibrant red sticker outline
        ==========================================================================
      */}

      {/* 3D Convex Barrel Section SVG ClipPath Definition (Left & Right small, Center curve increased) */}
      <svg className="absolute w-0 h-0 pointer-events-none" aria-hidden="true">
        <defs>
          <clipPath id="barrel-3d-curve" clipPathUnits="objectBoundingBox">
            <path d="M 0,0.16 Q 0.5,-0.16 1,0.16 L 1,0.84 Q 0.5,1.16 0,0.84 Z" />
          </clipPath>
        </defs>
      </svg>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariant}
        className="relative w-full overflow-visible"
      >
        {/* Container wrapping both the 3D curved black body and the centered portrait */}
        <div className="relative w-full my-6 sm:my-8 md:my-10">
          {/* ================= 1. THE 3D CURVED BARREL BLACK BODY ================= */}
          {/* 
            3D Convex Barrel Section:
            - Left & Right sides are tapered/smaller (68% height)
            - Center is tall & expanded (100% height) with an increased 3D curve
            - Left & Right flanks feature depth-of-field blur fields
          */}
          <div
            className="relative w-full overflow-hidden"
            style={{
              clipPath: 'url(#barrel-3d-curve)',
              WebkitClipPath: 'url(#barrel-3d-curve)',
              perspective: '1200px',
              background: 'radial-gradient(ellipse 75% 120% at 50% 50%, #1e1e1e 0%, #111111 40%, #080808 75%, #000000 100%)'
            }}
          >
            {/* REALISTIC BLACK CRINKLED PAPER TEXTURE & CREASES OVERLAY */}
            <div className="absolute inset-0 paper-grain opacity-45 pointer-events-none z-10" />
            <div
              className="absolute inset-0 pointer-events-none opacity-35 z-10"
              style={{
                backgroundImage:
                  'linear-gradient(125deg, rgba(255,255,255,0.09) 0%, transparent 25%, rgba(0,0,0,0.45) 50%, rgba(255,255,255,0.07) 75%, transparent 100%), linear-gradient(35deg, transparent 40%, rgba(255,255,255,0.06) 50%, transparent 60%)'
              }}
            />

            {/* 3D CONVEX CYLINDRICAL SPECULAR HORIZON */}
            <div
              className="absolute inset-x-0 top-0 h-1/2 pointer-events-none z-10 opacity-35"
              style={{
                background: 'radial-gradient(ellipse 80% 70% at 50% 0%, rgba(255,255,255,0.22) 0%, transparent 75%)'
              }}
            />

            {/* 3D AMBIENT DEPTH GLOW BEHIND PORTRAIT */}
            <div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[480px] md:w-[620px] lg:w-[780px] h-[85%] pointer-events-none z-10 opacity-80"
              style={{
                background: 'radial-gradient(ellipse 60% 75% at 50% 50%, rgba(255,17,17,0.16) 0%, rgba(255,255,255,0.05) 30%, transparent 70%)',
                filter: 'blur(32px)'
              }}
            />

            {/* ================= LEFT SIDE 3D DEPTH BLUR EFFECT ================= */}
            <div
              className="absolute left-0 top-0 bottom-0 w-24 sm:w-40 md:w-60 lg:w-80 pointer-events-none z-20"
              style={{
                background: 'linear-gradient(to right, rgba(8,8,8,0.98) 0%, rgba(8,8,8,0.85) 35%, rgba(8,8,8,0.3) 75%, transparent 100%)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                maskImage: 'linear-gradient(to right, black 0%, black 40%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to right, black 0%, black 40%, transparent 100%)'
              }}
            />

            {/* ================= RIGHT SIDE 3D DEPTH BLUR EFFECT ================= */}
            <div
              className="absolute right-0 top-0 bottom-0 w-24 sm:w-40 md:w-60 lg:w-80 pointer-events-none z-20"
              style={{
                background: 'linear-gradient(to left, rgba(8,8,8,0.98) 0%, rgba(8,8,8,0.85) 35%, rgba(8,8,8,0.3) 75%, transparent 100%)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                maskImage: 'linear-gradient(to left, black 0%, black 40%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to left, black 0%, black 40%, transparent 100%)'
              }}
            />

            {/* ================= 3D CURVED SPECULAR RIM EDGES ================= */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none z-25"
              viewBox="0 0 1000 1000"
              preserveAspectRatio="none"
            >
              {/* Top 3D curved rim highlight */}
              <path
                d="M 0,160 Q 500,-160 1000,160"
                fill="none"
                stroke="rgba(255,255,255,0.2)"
                strokeWidth="3"
              />
              {/* Bottom 3D curved shadow rim */}
              <path
                d="M 0,840 Q 500,1160 1000,840"
                fill="none"
                stroke="rgba(0,0,0,0.7)"
                strokeWidth="4"
              />
            </svg>

            {/* ================= 2. CONTINUOUS HORIZONTAL SLIDING MARQUEE ================= */}
            {/* Moving typography + symbols BEHIND the centered portrait, passing through 3D blur field */}
            <div
              className="relative w-full overflow-hidden py-12 sm:py-14 md:py-16 lg:py-20 z-10 flex items-center"
              style={{
                transformStyle: 'preserve-3d'
              }}
            >
              <div className="animate-marquee-track">
                {/* First half track */}
                <div className="flex items-center shrink-0">
                  <MarqueeUnit />
                  <MarqueeUnit />
                </div>
                {/* Second identical cloned track for mathematically seamless infinite loop */}
                <div className="flex items-center shrink-0" aria-hidden="true">
                  <MarqueeUnit />
                  <MarqueeUnit />
                </div>
              </div>
            </div>
          </div>

          {/* ================= 3. CENTERED PERSONAL PORTRAIT PERFECTLY PLACED ON CARD ================= */}
          {/* 
            PERFECT CARD PLACEMENT:
            - Anchored to the exact bottom of the card with overflow-hidden crop.
            - Lowered into the card so the shirt fills the vertical space down to the bottom curve.
            - Head and curly hair crest the top curve naturally, perfectly framing the centered face over "DESIGNER".
          */}
          <div className="absolute inset-x-0 bottom-0 -top-16 sm:-top-20 md:-top-24 lg:-top-28 overflow-hidden pointer-events-none z-30 flex justify-center items-end">
            <div className="relative pointer-events-auto -bottom-6 sm:-bottom-8 md:-bottom-10 lg:-bottom-12">
              <div className="relative group cursor-pointer">
                {/* SMILING PORTRAIT CUTOUT WITH INTEGRATED CLEAN RED STICKER OUTLINE */}
                <motion.div variants={portraitVariant} className="relative z-20">
                  <img
                    src="/images/mockup/portrait_smiling_cutout.png"
                    alt="Creative Portrait"
                    className="w-[240px] xs:w-[280px] sm:w-[380px] md:w-[460px] lg:w-[520px] max-w-[88vw] h-auto object-contain select-none filter drop-shadow-[0_12px_28px_rgba(0,0,0,0.9)] group-hover:scale-[1.02] transition-transform duration-500"
                    draggable={false}
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};
