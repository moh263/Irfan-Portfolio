import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, X, Eye } from 'lucide-react';
import { portfolioData, type Project } from '../../config/portfolioData';
import { StickyTape, RubberStampBadge, RegistrationCross, HandDrawnArrow } from '../common/DecorativeElements';

export const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section
      id="projects"
      className="relative py-24 px-4 sm:px-6 lg:px-8 bg-grid-paper border-b-2 border-[#111111] overflow-hidden scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header Meta */}
        <div className="flex items-center justify-between border-b border-[#111111]/20 pb-4 mb-8 font-mono text-xs">
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 bg-[#FF1111]" />
            <span className="font-bold tracking-widest text-[#111111]">SECTION // 02</span>
            <span className="text-neutral-500">/ SELECTED ARCHIVE</span>
          </div>
          <div className="flex items-center space-x-3">
            <RegistrationCross className="w-4 h-4 text-neutral-500" />
            <span className="hidden sm:inline text-neutral-500">EXHIBITION 2024—2026</span>
          </div>
        </div>

        {/* Section Title Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="font-mono text-xs font-bold text-[#FF1111] tracking-widest uppercase mb-1">
              THE STUDIO ARCHIVES
            </div>
            <h2 className="font-display font-black text-4xl xs:text-5xl sm:text-7xl lg:text-8xl tracking-tight uppercase text-[#111111] leading-none break-words">
              SELECTED WORK
            </h2>
          </div>
          
          {/* Editorial note & arrow */}
          <div className="max-w-xs flex items-start space-x-3">
            <HandDrawnArrow className="w-8 xs:w-10 h-6 xs:h-7 text-[#FF1111] shrink-0 mt-1" direction="curved" />
            <p className="font-mono text-[11px] sm:text-xs text-neutral-600 leading-normal">
              SCATTERED EDITORIAL CARDS & POLAROID BOARDS. CLICK ANY ARTIFACT FOR DOSSIER SPECS.
            </p>
          </div>
        </div>

        {/* ================= OVERLAPPING EDITORIAL COLLAGE BOARD ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 relative">
          
          {portfolioData.projects.map((project, idx) => {
            const isEven = idx % 2 === 0;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: idx * 0.12 }}
                onClick={() => setSelectedProject(project)}
                className={`group relative cursor-pointer ${project.rotation ? `sm:${project.rotation}` : ''} transition-all duration-300 hover:rotate-0 hover:z-30 hover:-translate-y-2`}
              >
                {/* Physical Polaroid / Poster Card Container */}
                <div className="bg-white border-2 border-[#111111] p-4 sm:p-5 brutalist-shadow group-hover:brutalist-shadow-lg transition-all">
                  
                  {/* Tape strip on alternating cards */}
                  {isEven ? (
                    <StickyTape className="-top-3 left-10" angle="-rotate-3" width="w-20" />
                  ) : (
                    <StickyTape className="-top-3 right-10" angle="rotate-4" width="w-20" />
                  )}

                  {/* Card Top Meta */}
                  <div className="flex items-center justify-between font-mono text-[11px] pb-3 border-b border-[#111111]/15 mb-3">
                    <span className="font-bold text-[#FF1111] uppercase tracking-wider">
                      {project.category}
                    </span>
                    <span className="bg-[#111111] text-white px-2 py-0.5 text-[10px] font-bold">
                      {project.year}
                    </span>
                  </div>

                  {/* Image Frame (Polaroid style) */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-neutral-900 border border-[#111111] group">
                    <img
                      src={project.image}
                      alt={project.title}
                      className={`w-full h-full object-cover group-hover:scale-105 transition-all duration-700 ${
                        project.image.endsWith('.svg')
                          ? ''
                          : 'grayscale contrast-115 group-hover:grayscale-0'
                      }`}
                    />

                    {/* Quick View Hover Overlay */}
                    <div className="absolute inset-0 bg-[#111111]/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-2">
                      <span className="bg-white text-[#111111] font-mono text-xs font-bold px-3 py-1.5 uppercase tracking-wider border-2 border-[#111111] flex items-center space-x-1 brutalist-shadow-red">
                        <Eye className="w-3.5 h-3.5 mr-1 text-[#FF1111]" />
                        OPEN DOSSIER
                      </span>
                    </div>

                    {/* Stamp in corner */}
                    {idx === 0 && (
                      <div className="absolute top-3 right-3 pointer-events-none">
                        <RubberStampBadge label="FEATURED" variant="red" angle="rotate-6" />
                      </div>
                    )}
                  </div>

                  {/* Project Info Bottom Panel */}
                  <div className="mt-4 pt-3 border-t border-[#111111]/15">
                    <div className="flex items-baseline justify-between">
                      <h3 className="font-headline font-bold text-xl sm:text-2xl text-[#111111] group-hover:text-[#FF1111] transition-colors uppercase">
                        {project.title}
                      </h3>
                      <ArrowUpRight className="w-5 h-5 text-[#111111] group-hover:text-[#FF1111] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </div>

                    <p className="mt-2 font-sans text-xs sm:text-sm text-[#444444] line-clamp-2">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {project.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="font-mono text-[10px] bg-[#F4F4F2] border border-[#111111]/30 px-2 py-0.5 text-[#333333]"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>

                    {/* Bottom Action Footer */}
                    <div className="mt-4 pt-2 border-t border-dashed border-[#111111]/20 flex items-center justify-between font-mono text-[10px] text-neutral-500">
                      <span>ROLE: {project.role}</span>
                      <span className="text-[#FF1111] font-bold uppercase group-hover:underline">
                        VIEW CASE STUDY →
                      </span>
                    </div>
                  </div>

                </div>
              </motion.div>
            );
          })}

        </div>

        {/* View All Archives / Callout Bar */}
        <div className="mt-16 bg-[#111111] text-white p-6 sm:p-8 border-2 border-[#111111] brutalist-shadow flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-[#FF1111] flex items-center justify-center text-white font-display font-black text-2xl shrink-0">
              *
            </div>
            <div>
              <h4 className="font-headline font-bold text-lg text-white uppercase tracking-wide">
                LOOKING FOR MORE WEB APPS & COMMERCIAL CODE?
              </h4>
              <p className="font-mono text-xs text-neutral-400 mt-0.5">
                Full-stack web applications, responsive client websites, and production repositories.
              </p>
            </div>
          </div>

          <a
            href="#contact"
            className="bg-white text-[#111111] px-6 py-3 font-mono text-xs font-bold tracking-wider uppercase border-2 border-white hover:bg-[#FF1111] hover:text-white transition-colors brutalist-shadow-white shrink-0"
          >
            DISCUSS A NEW PROJECT →
          </a>
        </div>

      </div>

      {/* ================= INTERACTIVE PROJECT DETAIL MODAL / DOSSIER ================= */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-3xl bg-[#F4F4F2] border-4 border-[#111111] brutalist-shadow-lg p-4 sm:p-8 max-h-[90vh] overflow-y-auto"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-3 right-3 p-2 bg-[#111111] text-white hover:bg-[#FF1111] border border-black transition-colors z-20"
                aria-label="Close Project Dossier"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Dossier Header */}
              <div className="flex items-center space-x-2 font-mono text-xs text-[#FF1111] font-bold mb-2">
                <span className="w-2 h-2 bg-[#FF1111]" />
                <span>CASE DOSSIER // {selectedProject.id.toUpperCase()}</span>
                <span className="text-neutral-400">({selectedProject.year})</span>
              </div>

              <h3 className="font-display font-black text-2xl xs:text-3xl sm:text-5xl uppercase text-[#111111] tracking-tight mb-4 break-words pr-8">
                {selectedProject.title}
              </h3>

              {/* Image Frame */}
              <div className="relative aspect-[16/9] overflow-hidden bg-neutral-900 border-2 border-[#111111] mb-6">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-2 left-2 bg-[#111111] text-white font-mono text-[10px] px-2 py-1 uppercase">
                  FIGURE SPEC. // {selectedProject.category}
                </div>
              </div>

              {/* Details & Specs */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono text-xs border-y-2 border-[#111111] py-4 mb-6">
                <div>
                  <span className="text-neutral-500 block text-[10px]">CATEGORY</span>
                  <span className="font-bold text-[#111111]">{selectedProject.category}</span>
                </div>
                <div>
                  <span className="text-neutral-500 block text-[10px]">ROLE</span>
                  <span className="font-bold text-[#111111]">{selectedProject.role}</span>
                </div>
                <div>
                  <span className="text-neutral-500 block text-[10px]">RECOGNITION</span>
                  <span className="font-bold text-[#FF1111]">{selectedProject.highlight || 'DEPLOYED'}</span>
                </div>
              </div>

              <div className="space-y-3 font-sans text-sm sm:text-base text-[#222222] leading-relaxed mb-6">
                <p>{selectedProject.description}</p>
                <p className="text-neutral-600 text-xs sm:text-sm">
                  Engineered with clean component-driven architecture, responsive mobile layouts, and performance optimization techniques for seamless real-time user experiences.
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {selectedProject.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="font-mono text-xs bg-white border border-[#111111] px-2.5 py-1 font-bold text-[#111111]"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Bottom Actions */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 border-t border-[#111111]/20 pt-4">
                <span className="font-mono text-xs text-neutral-500 self-center sm:self-auto">DOSSIER STATUS: VERIFIED</span>
                <div className="flex flex-col xs:flex-row gap-2">
                  {selectedProject.link && (
                    <a
                      href={selectedProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#FF1111] text-white px-6 py-2.5 font-mono text-xs font-bold uppercase tracking-wider hover:bg-[#111111] transition-colors brutalist-shadow inline-flex items-center justify-center gap-1.5"
                    >
                      VISIT LIVE SITE
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  )}
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="bg-[#111111] text-white px-6 py-2.5 font-mono text-xs font-bold uppercase tracking-wider hover:bg-[#FF1111] transition-colors brutalist-shadow"
                  >
                    CLOSE SPECIFICATION
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
};
