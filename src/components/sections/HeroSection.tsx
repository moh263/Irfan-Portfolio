import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../../config/portfolioData';
import { GraphicSymbolTrio } from '../common/DecorativeElements';
import {
  SoftwareIconHtml,
  SoftwareIconCss,
  SoftwareIconTailwind,
  SoftwareIconJs,
  SoftwareIconReact,
  SoftwareIconNode,
  SoftwareIconExpress,
  SoftwareIconMysql,
  SoftwareIconPostgres,
  SoftwareIconMongo,
  SoftwareIconPrisma,
  SoftwareIconGithub,
  SoftwareIconRedux,
} from '../common/SoftwareBadges';
import { Showcase360Interactive } from '../common/Showcase360Interactive';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative pt-28 sm:pt-36 md:pt-48 lg:pt-60 pb-8 sm:pb-12 px-4 sm:px-6 lg:px-12 bg-[#EDEAE4] text-[#111111] overflow-hidden bg-grid-paper">
      {/* Authentic Crumpled Paper Lighting & Crease Overlay */}
      <div className="absolute inset-0 paper-creases pointer-events-none opacity-40 z-0" />
      <div className="absolute inset-0 paper-grain pointer-events-none opacity-30 z-0" />

      <div className="relative z-10 max-w-5xl mx-auto">

        {/* ================= 1. TOP METADATA BAR ================= */}
        <div className="flex items-center justify-between text-[11px] sm:text-xs md:text-sm font-extrabold tracking-wider text-[#111111] uppercase select-none pb-4">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center space-x-2"
          >
            <span>{portfolioData.personal.role}</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-bold tracking-widest text-[#111111]"
          >
            {portfolioData.personal.year}
          </motion.div>
        </div>

        {/* ================= 2. THE ICONIC "PORTFOLIO" HERO TITLE ================= */}
        <div className="pt-2 pb-6 text-center select-none flex flex-col items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center justify-center max-w-full"
          >
            {/* Unified H1 with perfectly aligned PORTF, Avatar Doodle, and LIO */}
            <h1
              className="inline-flex items-center justify-center font-black text-[#111111] uppercase leading-none tracking-tight text-[9.5vw] xs:text-[10.5vw] sm:text-[12vw] md:text-[10vw] lg:text-[110px] whitespace-nowrap"
              style={{ fontFamily: 'var(--font-syne), "Archivo Black", sans-serif' }}
            >
              <span className="inline-block leading-none">PORTF</span>

              {/* THE ILLUSTRATED HEAD DOODLE (Replaces the "O") */}
              <span className="relative inline-flex flex-col items-center justify-center mx-1 sm:mx-2 md:mx-3 shrink-0 self-center">
                <motion.span
                  whileHover={{ scale: 1.08, rotate: [0, -3, 3, 0] }}
                  transition={{ duration: 0.3 }}
                  className="relative cursor-pointer inline-flex items-center justify-center"
                >
                  <img
                    src="/images/mockup/illustrated_avatar_centered.png"
                    alt="Illustrated Avatar Face"
                    className="w-[8.5vw] xs:w-[9.5vw] sm:w-[10.5vw] md:w-[8.5vw] lg:w-[96px] h-auto object-contain filter drop-shadow-md select-none block"
                    draggable={false}
                  />
                </motion.span>

                {/* Hand-drawn arrow pointing up towards the head */}
                <span className="absolute -bottom-4 sm:-bottom-7 left-1/2 -translate-x-1/2 pointer-events-none inline-block">
                  <img
                    src="/images/mockup/doodle_arrow_clean.png"
                    alt="Hand-drawn arrow"
                    className="w-3.5 sm:w-5 md:w-6 h-auto object-contain block"
                    draggable={false}
                  />
                </span>
              </span>

              <span className="inline-block leading-none">LIO</span>
            </h1>
          </motion.div>

          {/* Centered Graphic Symbols Trio: Starburst, Diamond, 4-Petal Clover */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mt-5 sm:mt-8 flex items-center justify-center"
          >
            <GraphicSymbolTrio size="w-4 h-4 sm:w-5 sm:h-5 text-[#111111]" />
          </motion.div>
        </div>

        {/* ================= 3. THE 3-COLUMN BIO & SPEC GRID ================= */}
        <div className="mt-6 sm:mt-12 grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10 items-start">

          {/* ----- COLUMN 1 (LEFT): PORTRAIT / INTERACTIVE SHOWCASE IN FIGMA TRANSFORM BOUNDING BOX ----- */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="md:col-span-3 flex justify-center md:justify-start"
          >
            {/* The Red Selection Bounding Box with 8 white square handles */}
            <div className="relative inline-block transform-box bg-white/40 p-0.5 shadow-sm group">
              {/* Top-left handle */}
              <span className="transform-handle top-0 left-0" />
              {/* Top-mid handle */}
              <span className="transform-handle top-0 left-1/2" />
              {/* Top-right handle */}
              <span className="transform-handle top-0 left-full" />
              {/* Mid-left handle */}
              <span className="transform-handle top-1/2 left-0" />
              {/* Mid-right handle */}
              <span className="transform-handle top-1/2 left-full" />
              {/* Bottom-left handle */}
              <span className="transform-handle top-full left-0" />
              {/* Bottom-mid handle */}
              <span className="transform-handle top-full left-1/2" />
              {/* Bottom-right handle */}
              <span className="transform-handle top-full left-full" />

              {/* Interactive 360-Degree Mouse Drag Rotation Showcase */}
              <div className="w-48 xs:w-52 sm:w-60 md:w-full max-w-[240px] md:max-w-none overflow-hidden bg-white shadow-inner">
                <Showcase360Interactive />
              </div>
            </div>
          </motion.div>

          {/* ----- COLUMN 2 (CENTER): "HELLO" BIO & EDUCATION ----- */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="md:col-span-5 flex flex-col space-y-6"
          >
            {/* Giant "HELLO" Header */}
            <h2
              className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#111111] leading-none uppercase"
              style={{ fontFamily: 'var(--font-syne), "Archivo Black", sans-serif' }}
            >
              HELLO
            </h2>

            {/* Bio Body Text from CV */}
            <div className="font-sans text-xs sm:text-[13px] leading-relaxed text-[#222222] space-y-3 font-medium">
              <p className="font-bold text-[#111111]">
                {portfolioData.personal.bioIntro}
              </p>
              <p>
                {portfolioData.personal.bioParagraph1}
              </p>
              <p>
                {portfolioData.personal.bioParagraph2}
              </p>
              <p>
                {portfolioData.personal.bioParagraph3}
              </p>
            </div>

            {/* EDUCATION SUB-BLOCK */}
            <div className="pt-2">
              <h3
                className="text-lg sm:text-xl font-black tracking-tight text-[#111111] uppercase mb-3"
                style={{ fontFamily: 'var(--font-syne), "Archivo Black", sans-serif' }}
              >
                EDUCATION
              </h3>
              <div className="space-y-3 text-xs sm:text-[13px]">
                {portfolioData.education.map((edu, idx) => (
                  <div key={idx} className="border-l-2 border-[#FF1111] pl-3 py-0.5">
                    <div className="font-bold text-[#111111]">
                      {edu.degree}
                    </div>
                    <div className="text-[#555555] font-medium mt-0.5">
                      {edu.institution} | <span className="font-semibold text-[#111111]">{edu.year}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ----- COLUMN 3 (RIGHT): SKILLS SOFTWARE GRID & EXPERIENCE ----- */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="md:col-span-4 flex flex-col space-y-6"
          >
            {/* SKILLS SUB-BLOCK */}
            <div>
              <h3
                className="text-lg sm:text-xl font-black tracking-tight text-[#111111] uppercase mb-3"
                style={{ fontFamily: 'var(--font-syne), "Archivo Black", sans-serif' }}
              >
                SKILLS
              </h3>

              {/* Skills Software Icon Grid */}
              <div className="grid grid-cols-4 gap-2 max-w-[240px]">
                <div className="hover:scale-110 transition-transform cursor-pointer" title="HTML5">
                  <SoftwareIconHtml className="w-11 h-11" />
                </div>
                <div className="hover:scale-110 transition-transform cursor-pointer" title="CSS3">
                  <SoftwareIconCss className="w-11 h-11" />
                </div>
                <div className="hover:scale-110 transition-transform cursor-pointer" title="Tailwind CSS">
                  <SoftwareIconTailwind className="w-11 h-11" />
                </div>
                <div className="hover:scale-110 transition-transform cursor-pointer" title="JavaScript (ES6+)">
                  <SoftwareIconJs className="w-11 h-11" />
                </div>
                <div className="hover:scale-110 transition-transform cursor-pointer" title="React.js">
                  <SoftwareIconReact className="w-11 h-11" />
                </div>
                <div className="hover:scale-110 transition-transform cursor-pointer" title="Redux">
                  <SoftwareIconRedux className="w-11 h-11" />
                </div>
                <div className="hover:scale-110 transition-transform cursor-pointer" title="Node.js">
                  <SoftwareIconNode className="w-11 h-11" />
                </div>
                <div className="hover:scale-110 transition-transform cursor-pointer" title="Express">
                  <SoftwareIconExpress className="w-11 h-11" />
                </div>
                <div className="hover:scale-110 transition-transform cursor-pointer" title="MySQL">
                  <SoftwareIconMysql className="w-11 h-11" />
                </div>
                <div className="hover:scale-110 transition-transform cursor-pointer" title="PostgreSQL">
                  <SoftwareIconPostgres className="w-11 h-11" />
                </div>
                <div className="hover:scale-110 transition-transform cursor-pointer" title="MongoDB">
                  <SoftwareIconMongo className="w-11 h-11" />
                </div>
                <div className="hover:scale-110 transition-transform cursor-pointer" title="Prisma">
                  <SoftwareIconPrisma className="w-11 h-11" />
                </div>
                <div className="hover:scale-110 transition-transform cursor-pointer" title="GitHub">
                  <SoftwareIconGithub className="w-11 h-11" />
                </div>
              </div>
            </div>

            {/* EXPERIENCE SUB-BLOCK */}
            <div className="pt-2">
              <h3
                className="text-lg sm:text-xl font-black tracking-tight text-[#111111] uppercase mb-3"
                style={{ fontFamily: 'var(--font-syne), "Archivo Black", sans-serif' }}
              >
                EXPERIENCE
              </h3>

              <div className="space-y-4">
                {portfolioData.experience.map((exp, idx) => (
                  <div key={idx} className="text-xs sm:text-[13px] border-l-2 border-[#111111] pl-3 py-0.5">
                    <div className="font-extrabold text-[#FF1111] tracking-wide text-[11px]">
                      {exp.period}
                    </div>
                    <div className="font-bold text-[#111111]">
                      {exp.role}
                    </div>
                    <div className="text-[#555555] font-medium">
                      {exp.company}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

