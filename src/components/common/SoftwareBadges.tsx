import React from 'react';

// ================= WEB DEVELOPER TECH BADGES =================

export const SoftwareIconHtml: React.FC<{ className?: string }> = ({ className = "w-11 h-11" }) => (
  <svg viewBox="0 0 100 100" className={className}>
    <rect width="100" height="100" rx="22" fill="#1A0F0A" stroke="#E34F26" strokeWidth="4" />
    <text x="50" y="62" fill="#E34F26" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="900" fontSize="28" textAnchor="middle" letterSpacing="-1">
      HTML
    </text>
  </svg>
);

export const SoftwareIconCss: React.FC<{ className?: string }> = ({ className = "w-11 h-11" }) => (
  <svg viewBox="0 0 100 100" className={className}>
    <rect width="100" height="100" rx="22" fill="#0A1220" stroke="#1572B6" strokeWidth="4" />
    <text x="50" y="62" fill="#1572B6" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="900" fontSize="30" textAnchor="middle" letterSpacing="-1">
      CSS
    </text>
  </svg>
);

export const SoftwareIconReact: React.FC<{ className?: string }> = ({ className = "w-11 h-11" }) => (
  <svg viewBox="0 0 100 100" className={className}>
    <rect width="100" height="100" rx="22" fill="#0A1118" stroke="#61DAFB" strokeWidth="4" />
    <g transform="translate(50, 50) scale(0.65)" fill="none" stroke="#61DAFB" strokeWidth="6">
      <ellipse rx="42" ry="16" transform="rotate(0)" />
      <ellipse rx="42" ry="16" transform="rotate(60)" />
      <ellipse rx="42" ry="16" transform="rotate(120)" />
      <circle r="7" fill="#61DAFB" stroke="none" />
    </g>
  </svg>
);

export const SoftwareIconJs: React.FC<{ className?: string }> = ({ className = "w-11 h-11" }) => (
  <svg viewBox="0 0 100 100" className={className}>
    <rect width="100" height="100" rx="22" fill="#1C1A0D" stroke="#F7DF1E" strokeWidth="4" />
    <rect x="22" y="22" width="56" height="56" rx="10" fill="#F7DF1E" />
    <text x="50" y="66" fill="#000000" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="900" fontSize="36" textAnchor="middle" letterSpacing="-1">
      JS
    </text>
  </svg>
);

export const SoftwareIconTailwind: React.FC<{ className?: string }> = ({ className = "w-11 h-11" }) => (
  <svg viewBox="0 0 100 100" className={className}>
    <rect width="100" height="100" rx="22" fill="#081426" stroke="#38BDF8" strokeWidth="4" />
    <g transform="translate(18, 30) scale(0.64)">
      <path
        d="M26 12 C18 12, 10 20, 10 32 C13 22, 18 18, 25 18 C33.3 18, 38.3 26, 44.5 35 C50 43, 56.6 52, 70 52 C78 52, 86 44, 86 32 C83 42, 78 46, 71 46 C62.7 46, 57.7 38, 51.5 29 C46 21, 39.4 12, 26 12 Z"
        fill="#38BDF8"
      />
    </g>
  </svg>
);

export const SoftwareIconNode: React.FC<{ className?: string }> = ({ className = "w-11 h-11" }) => (
  <svg viewBox="0 0 100 100" className={className}>
    <rect width="100" height="100" rx="22" fill="#0C1A12" stroke="#68A063" strokeWidth="4" />
    <text x="50" y="62" fill="#68A063" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="900" fontSize="26" textAnchor="middle" letterSpacing="-1">
      Node
    </text>
  </svg>
);

export const SoftwareIconExpress: React.FC<{ className?: string }> = ({ className = "w-11 h-11" }) => (
  <svg viewBox="0 0 100 100" className={className}>
    <rect width="100" height="100" rx="22" fill="#141416" stroke="#FFFFFF" strokeWidth="4" />
    <text x="50" y="58" fill="#FFFFFF" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="900" fontSize="18" textAnchor="middle" letterSpacing="-0.5">
      Express
    </text>
  </svg>
);

export const SoftwareIconMysql: React.FC<{ className?: string }> = ({ className = "w-11 h-11" }) => (
  <svg viewBox="0 0 100 100" className={className}>
    <rect width="100" height="100" rx="22" fill="#0A1520" stroke="#00758F" strokeWidth="4" />
    <text x="50" y="62" fill="#F29111" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="900" fontSize="22" textAnchor="middle" letterSpacing="-1">
      MySQL
    </text>
  </svg>
);

export const SoftwareIconPostgres: React.FC<{ className?: string }> = ({ className = "w-11 h-11" }) => (
  <svg viewBox="0 0 100 100" className={className}>
    <rect width="100" height="100" rx="22" fill="#0E1524" stroke="#336791" strokeWidth="4" />
    <text x="50" y="58" fill="#336791" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="900" fontSize="16" textAnchor="middle" letterSpacing="-0.5">
      Postgres
    </text>
  </svg>
);

export const SoftwareIconMongo: React.FC<{ className?: string }> = ({ className = "w-11 h-11" }) => (
  <svg viewBox="0 0 100 100" className={className}>
    <rect width="100" height="100" rx="22" fill="#0C1A12" stroke="#47A248" strokeWidth="4" />
    <text x="50" y="58" fill="#47A248" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="900" fontSize="18" textAnchor="middle" letterSpacing="-0.5">
      Mongo
    </text>
  </svg>
);

export const SoftwareIconPrisma: React.FC<{ className?: string }> = ({ className = "w-11 h-11" }) => (
  <svg viewBox="0 0 100 100" className={className}>
    <rect width="100" height="100" rx="22" fill="#0F1117" stroke="#2D3748" strokeWidth="4" />
    <text x="50" y="62" fill="#FFFFFF" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="900" fontSize="22" textAnchor="middle" letterSpacing="-1">
      Prisma
    </text>
  </svg>
);

export const SoftwareIconRedux: React.FC<{ className?: string }> = ({ className = "w-11 h-11" }) => (
  <svg viewBox="0 0 100 100" className={className}>
    <rect width="100" height="100" rx="22" fill="#1A0F24" stroke="#764ABC" strokeWidth="4" />
    <text x="50" y="62" fill="#764ABC" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="900" fontSize="22" textAnchor="middle" letterSpacing="-1">
      Redux
    </text>
  </svg>
);

export const SoftwareIconGithub: React.FC<{ className?: string }> = ({ className = "w-11 h-11" }) => (
  <svg viewBox="0 0 100 100" className={className}>
    <rect width="100" height="100" rx="22" fill="#141416" stroke="#FFFFFF" strokeWidth="4" />
    <g transform="translate(20, 20) scale(0.6)" fill="#FFFFFF">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M50 0C22.4 0 0 22.4 0 50c0 22.1 14.3 40.8 34.2 47.4 2.5.5 3.4-1.1 3.4-2.4 0-1.2-.1-5.2-.1-9.5-13.9 3-16.8-5.9-16.8-5.9-2.3-5.8-5.6-7.3-5.6-7.3-4.5-3.1.3-3 .3-3 5 .3 7.6 5.1 7.6 5.1 4.5 7.6 11.7 5.4 14.6 4.1.5-3.2 1.7-5.4 3.1-6.7-11.1-1.3-22.8-5.5-22.8-24.7 0-5.5 2-9.9 5.2-13.4-.5-1.3-2.3-6.4.5-13.3 0 0 4.2-1.3 13.8 5.1 4-1.1 8.3-1.7 12.5-1.7 4.2 0 8.5.6 12.5 1.7 9.6-6.5 13.8-5.1 13.8-5.1 2.8 6.8 1 12 .5 13.3 3.2 3.5 5.2 8 5.2 13.4 0 19.2-11.7 23.4-22.9 24.6 1.8 1.5 3.4 4.6 3.4 9.3 0 6.7-.1 12.1-.1 13.8 0 1.3.9 2.9 3.4 2.4C85.7 90.8 100 72.1 100 50c0-27.6-22.4-50-50-50z"
      />
    </g>
  </svg>
);
