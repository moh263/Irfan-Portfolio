import React from 'react';

// Hand-drawn arrow SVG pointing in various directions
export const HandDrawnArrow: React.FC<{
  className?: string;
  direction?: 'down-right' | 'right' | 'down' | 'curved';
  color?: string;
}> = ({ className = '', direction = 'down-right', color = '#FF1111' }) => {
  if (direction === 'curved') {
    return (
      <svg className={className} viewBox="0 0 100 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M10 15C35 8 70 12 85 45M85 45L72 40M85 45L80 30"
          stroke={color}
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (direction === 'down') {
    return (
      <svg className={className} viewBox="0 0 40 70" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M20 5V62M20 62L8 48M20 62L32 48"
          stroke={color}
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  return (
    <svg className={className} viewBox="0 0 80 50" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M5 25C25 24 55 26 72 38M72 38L58 28M72 38L64 45"
        stroke={color}
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

// Crosshair registration target mark
export const RegistrationCross: React.FC<{ className?: string; color?: string }> = ({
  className = '',
  color = '#111111'
}) => (
  <svg className={`w-6 h-6 ${className}`} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5">
    <circle cx="12" cy="12" r="8" strokeDasharray="2 2" />
    <circle cx="12" cy="12" r="3" />
    <path d="M12 2V22M2 12H22" strokeLinecap="square" />
  </svg>
);

// Modern Brutalist Barcode Graphic
export const BarcodeGraphic: React.FC<{ className?: string; text?: string; dark?: boolean }> = ({
  className = '',
  text = 'IRF-2026-ART',
  dark = false
}) => (
  <div className={`inline-flex flex-col items-center ${className}`}>
    <div className="flex items-stretch h-8 space-x-[2px]">
      <div className={`w-[2px] ${dark ? 'bg-white' : 'bg-[#111111]'}`} />
      <div className={`w-[1px] ${dark ? 'bg-white' : 'bg-[#111111]'}`} />
      <div className="w-[3px]" />
      <div className={`w-[3px] ${dark ? 'bg-white' : 'bg-[#111111]'}`} />
      <div className={`w-[1px] ${dark ? 'bg-white' : 'bg-[#111111]'}`} />
      <div className={`w-[4px] ${dark ? 'bg-[#FF1111]' : 'bg-[#FF1111]'}`} />
      <div className="w-[2px]" />
      <div className={`w-[2px] ${dark ? 'bg-white' : 'bg-[#111111]'}`} />
      <div className={`w-[1px] ${dark ? 'bg-white' : 'bg-[#111111]'}`} />
      <div className="w-[1px]" />
      <div className={`w-[3px] ${dark ? 'bg-white' : 'bg-[#111111]'}`} />
      <div className={`w-[2px] ${dark ? 'bg-white' : 'bg-[#111111]'}`} />
      <div className="w-[2px]" />
      <div className={`w-[4px] ${dark ? 'bg-white' : 'bg-[#111111]'}`} />
      <div className={`w-[1px] ${dark ? 'bg-white' : 'bg-[#111111]'}`} />
      <div className={`w-[2px] ${dark ? 'bg-[#FF1111]' : 'bg-[#FF1111]'}`} />
      <div className="w-[3px]" />
      <div className={`w-[2px] ${dark ? 'bg-white' : 'bg-[#111111]'}`} />
      <div className={`w-[3px] ${dark ? 'bg-white' : 'bg-[#111111]'}`} />
      <div className={`w-[1px] ${dark ? 'bg-white' : 'bg-[#111111]'}`} />
    </div>
    <span className={`text-[9px] font-mono tracking-widest mt-1 uppercase ${dark ? 'text-neutral-400' : 'text-neutral-600'}`}>
      {text}
    </span>
  </div>
);

// Sticky Tape Overlay element
export const StickyTape: React.FC<{
  className?: string;
  angle?: string;
  width?: string;
}> = ({ className = '', angle = '-rotate-6', width = 'w-24' }) => (
  <div
    className={`absolute pointer-events-none z-20 h-7 ${width} ${angle} bg-white/75 backdrop-blur-[1px] border-t border-b border-black/10 shadow-sm opacity-90 ${className}`}
    style={{
      clipPath: 'polygon(0% 10%, 4% 0%, 96% 0%, 100% 12%, 98% 88%, 94% 100%, 6% 98%, 0% 88%)'
    }}
  />
);

// Postal / Editorial Stamp Badge
export const RubberStampBadge: React.FC<{
  label: string;
  sublabel?: string;
  variant?: 'red' | 'black' | 'white';
  angle?: string;
  className?: string;
}> = ({ label, sublabel, variant = 'red', angle = '-rotate-3', className = '' }) => {
  const styles = {
    red: 'border-[#FF1111] text-[#FF1111] bg-transparent',
    black: 'border-[#111111] text-[#111111] bg-transparent',
    white: 'border-white text-white bg-transparent'
  };

  return (
    <div
      className={`inline-block border-2 border-dashed px-3 py-1 font-mono uppercase tracking-widest text-[11px] font-bold ${angle} ${styles[variant]} select-none ${className}`}
    >
      <div className="flex items-center space-x-1">
        <span className="w-1.5 h-1.5 rounded-full bg-current inline-block" />
        <span>{label}</span>
      </div>
      {sublabel && (
        <div className="text-[8px] tracking-normal border-t border-current/40 pt-0.5 mt-0.5">
          {sublabel}
        </div>
      )}
    </div>
  );
};

// The iconic 3 symbols from reference: 8-point Starburst, 4-point Diamond Star, 4-Petal Clover
export const GraphicSymbolTrio: React.FC<{
  className?: string;
  fillColor?: string;
  size?: string;
}> = ({
  className = '',
  fillColor = '#111111',
  size = 'w-6 h-6 sm:w-8 sm:h-8'
}) => (
  <div className={`flex items-center space-x-2.5 sm:space-x-4 ${className}`}>
    {/* 1. 8-Point Sharp Starburst (4 long cardinal, 4 medium diagonal points) */}
    <svg viewBox="0 0 100 100" className={size} fill={fillColor}>
      <polygon points="50,0 59,34 85,15 66,41 100,50 66,59 85,85 59,66 50,100 41,66 15,85 34,59 0,50 34,41 15,15 41,34" />
    </svg>
    {/* 2. 4-point Curved Diamond Star */}
    <svg viewBox="0 0 100 100" className={size} fill={fillColor}>
      <path d="M50 0 C50 34 66 50 100 50 C66 50 50 66 50 100 C50 66 34 50 0 50 C34 50 50 34 50 0 Z" />
    </svg>
    {/* 3. 4-Petal Rounded Clover / Club (tilted 45 degrees as in reference) */}
    <svg viewBox="0 0 100 100" className={size} fill={fillColor}>
      <g transform="translate(50,50) rotate(45) translate(-50,-50)">
        <circle cx="50" cy="27" r="19" />
        <circle cx="27" cy="50" r="19" />
        <circle cx="73" cy="50" r="19" />
        <circle cx="50" cy="73" r="19" />
        <circle cx="50" cy="50" r="15" />
      </g>
    </svg>
  </div>
);

