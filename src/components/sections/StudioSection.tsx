import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { StickyTape } from '../common/DecorativeElements';
import { Maximize2, X } from 'lucide-react';

interface PolaroidItem {
  id: string;
  image: string;
  caption: string;
  rotation: string;
  note: string;
}

export const StudioSection: React.FC = () => {
  const [activePolaroid, setActivePolaroid] = useState<PolaroidItem | null>(null);

  const polaroids: PolaroidItem[] = [
    {
      id: 'polaroid-1',
      image: '/images/workspace/workstation.jpg',
      caption: 'DEV WORKSTATION // 01',
      rotation: '-rotate-3',
      note: 'React & VS Code workspace, dual display dev setup, debugging console & Git terminal.'
    },
    {
      id: 'polaroid-2',
      image: '/images/workspace/workflow.jpg',
      caption: 'DEV WORKFLOW // 02',
      rotation: 'rotate-1',
      note: 'Component prototyping, API integration, Tailwind design system & performance profiling.'
    },
    {
      id: 'polaroid-3',
      image: '/images/workspace/tech-rig.jpg',
      caption: 'TECH RIG // 03',
      rotation: 'rotate-3',
      note: 'Node.js APIs, Prisma + database tooling & multi-device responsive testing.'
    }
  ];

  return (
    <section
      id="studio"
      className="relative pt-12 pb-20 px-4 sm:px-6 lg:px-8 bg-[#EDEAE4] text-[#111111] overflow-hidden bg-grid-paper border-b-2 border-[#111111] scroll-mt-24"
    >
      {/* Paper Texture Overlay */}
      <div className="absolute inset-0 paper-creases pointer-events-none opacity-40 z-0" />
      <div className="absolute inset-0 paper-grain pointer-events-none opacity-30 z-0" />

      <div className="relative z-10 max-w-5xl mx-auto">

        {/* Section Header: THE STUDIO (Matching "THE STU" in reference) */}
        <div className="text-center mb-10 select-none px-2">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-[#111111] uppercase leading-none"
            style={{ fontFamily: 'var(--font-syne), "Archivo Black", sans-serif' }}
          >
            THE WORKSPACE
          </h2>
          <p className="mt-2 font-mono text-[10px] sm:text-xs text-[#555555] tracking-widest uppercase">
            SOFTWARE DEVELOPMENT ENVIRONMENT & CODE LAB // 2026
          </p>
        </div>

        {/* Polaroid Showcase Fan / Cards */}
        <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 pt-4 pb-6">
          {polaroids.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.6 }}
              whileHover={{ scale: 1.05, rotate: 0, zIndex: 30 }}
              className={`relative bg-white p-3 sm:p-4 pb-5 sm:pb-6 shadow-xl border border-neutral-300 ${item.rotation} cursor-pointer transition-all duration-300 group w-[240px] xs:w-[260px] sm:max-w-[280px] max-w-[85vw]`}
              onClick={() => setActivePolaroid(item)}
            >
              {/* Scotch Tape graphic at top */}
              <StickyTape className="-top-3 left-1/2 -translate-x-1/2" angle={idx % 2 === 0 ? '-rotate-3' : 'rotate-2'} width="w-20" />

              {/* Photo Canvas */}
              <div className="relative aspect-[4/3] overflow-hidden bg-neutral-900 border border-neutral-200">
                <img
                  src={item.image}
                  alt={item.caption}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Hover overlay hint */}
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full bg-white/90 text-[#111111] flex items-center justify-center shadow">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>
              </div>

              {/* Handwritten style / Monospace caption at bottom */}
              <div className="mt-3 text-center">
                <div className="font-mono text-xs font-black tracking-wider text-[#111111] uppercase">
                  {item.caption}
                </div>
                <div className="font-sans text-[11px] text-neutral-500 mt-1 line-clamp-1">
                  {item.note}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Interactive Lightbox Modal */}
      <AnimatePresence>
        {activePolaroid && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4"
            onClick={() => setActivePolaroid(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative bg-white p-4 sm:p-7 max-w-lg w-[92vw] sm:w-full brutalist-shadow-lg"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActivePolaroid(null)}
                className="absolute top-2.5 right-2.5 p-2 bg-[#111111] text-white hover:bg-[#FF1111] transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="aspect-[4/3] bg-neutral-900 overflow-hidden mb-4 border border-neutral-300">
                <img
                  src={activePolaroid.image}
                  alt={activePolaroid.caption}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="font-mono">
                <h3 className="text-lg font-black text-[#111111] uppercase">
                  {activePolaroid.caption}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 mt-2 leading-relaxed">
                  {activePolaroid.note}
                </p>
                <div className="mt-4 pt-3 border-t border-neutral-200 flex justify-between text-[11px] text-neutral-400 uppercase">
                  <span>MOHAMED IRFAN S</span>
                  <span>2026 ARCHIVE</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
