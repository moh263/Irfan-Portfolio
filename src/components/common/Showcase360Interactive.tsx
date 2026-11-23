import React, { useEffect, useRef, useState, useCallback } from 'react';

interface Showcase360InteractiveProps {
  className?: string;
}

export const Showcase360Interactive: React.FC<Showcase360InteractiveProps> = ({ className = '' }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const [isDragging, setIsDragging] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  // References to track rotation state without triggering unnecessary re-renders
  const isDraggingRef = useRef(false);
  const isVisibleRef = useRef(false);
  const startXRef = useRef(0);
  const startYRef = useRef(0);
  const startAngleTimeRef = useRef(0);
  const currentAngleTimeRef = useRef(0);
  const lastScrollYRef = useRef(0);
  const rafIdRef = useRef<number | null>(null);
  const isHorizontalSwipeRef = useRef<boolean | null>(null);

  const PIXELS_PER_FULL_ROTATION = 360;
  const SCROLL_PIXELS_PER_FULL_ROTATION = 600;

  // Initialize video: strictly paused at frame 0 (front facing)
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.pause();
    video.currentTime = 0;

    const handleLoadedMetadata = () => {
      video.pause();
      video.currentTime = 0;
    };

    video.addEventListener('loadedmetadata', handleLoadedMetadata);

    return () => {
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
      if (rafIdRef.current) {
        cancelAnimationFrame(rafIdRef.current);
      }
    };
  }, []);

  // Core seek function: wraps time within [0, duration) and ensures video remains strictly paused
  const seekToTime = useCallback((targetTime: number) => {
    const video = videoRef.current;
    if (!video) return;

    const duration = video.duration || 4.0;
    let normalized = targetTime % duration;
    if (normalized < 0) {
      normalized += duration;
    }

    currentAngleTimeRef.current = normalized;

    if (rafIdRef.current) {
      cancelAnimationFrame(rafIdRef.current);
    }

    rafIdRef.current = requestAnimationFrame(() => {
      if ('fastSeek' in video && typeof (video as any).fastSeek === 'function') {
        try {
          (video as any).fastSeek(normalized);
        } catch {
          video.currentTime = normalized;
        }
      } else {
        video.currentTime = normalized;
      }
      // Ensure video always remains strictly paused (no autoplay)
      if (!video.paused) {
        video.pause();
      }
    });
  }, []);

  // Drag rotation calculation: mouse/touch drag relative to start position
  const applyDragRotation = useCallback((deltaX: number) => {
    const video = videoRef.current;
    if (!video) return;

    const duration = video.duration || 4.0;
    const deltaSeconds = (deltaX / PIXELS_PER_FULL_ROTATION) * duration;
    seekToTime(startAngleTimeRef.current + deltaSeconds);
  }, [seekToTime]);

  // ================= 1. MOUSE DRAG HANDLERS (PRESERVED) =================
  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    isDraggingRef.current = true;
    startXRef.current = e.clientX;
    startAngleTimeRef.current = currentAngleTimeRef.current;
    setIsDragging(true);
    setHasInteracted(true);
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDraggingRef.current) return;
      const deltaX = e.clientX - startXRef.current;
      applyDragRotation(deltaX);
    };

    const handleMouseUp = () => {
      if (!isDraggingRef.current) return;
      isDraggingRef.current = false;
      setIsDragging(false);

      // Keep start angle synced to current frozen angle
      startAngleTimeRef.current = currentAngleTimeRef.current;

      // Ensure video is strictly paused after releasing
      if (videoRef.current && !videoRef.current.paused) {
        videoRef.current.pause();
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: false });
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [applyDragRotation]);

  // ================= 2. TOUCH DRAG HANDLERS (MOBILE PRESERVED) =================
  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length !== 1) return;
    isDraggingRef.current = true;
    startXRef.current = e.touches[0].clientX;
    startYRef.current = e.touches[0].clientY;
    startAngleTimeRef.current = currentAngleTimeRef.current;
    isHorizontalSwipeRef.current = null;
    setIsDragging(true);
    setHasInteracted(true);
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleNativeTouchMove = (e: TouchEvent) => {
      if (!isDraggingRef.current || e.touches.length !== 1) return;

      const currentX = e.touches[0].clientX;
      const currentY = e.touches[0].clientY;
      const deltaX = currentX - startXRef.current;
      const deltaY = currentY - startYRef.current;

      // Determine swipe intention (horizontal 360 rotate vs vertical page scroll)
      if (isHorizontalSwipeRef.current === null) {
        if (Math.abs(deltaX) > 6 || Math.abs(deltaY) > 6) {
          isHorizontalSwipeRef.current = Math.abs(deltaX) >= Math.abs(deltaY);
        }
      }

      // If user is rotating 360 horizontally, prevent page scroll and apply rotation
      if (isHorizontalSwipeRef.current) {
        if (e.cancelable) {
          e.preventDefault();
        }
        applyDragRotation(deltaX);
      }
    };

    container.addEventListener('touchmove', handleNativeTouchMove, { passive: false });
    return () => {
      container.removeEventListener('touchmove', handleNativeTouchMove);
    };
  }, [applyDragRotation]);

  const handleTouchEnd = () => {
    isDraggingRef.current = false;
    isHorizontalSwipeRef.current = null;
    setIsDragging(false);
    startAngleTimeRef.current = currentAngleTimeRef.current;

    if (videoRef.current && !videoRef.current.paused) {
      videoRef.current.pause();
    }
  };

  // ================= 3. SCROLL-CONTROLLED ROTATION (NEW FEATURE) =================
  // Observe container visibility so scroll rotation only occurs when relevant
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isVisibleRef.current = entry.isIntersecting;
        });
      },
      { threshold: 0.05 }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  // Window scroll listener: scroll down -> rotate right (clockwise), scroll up -> rotate left (anti-clockwise)
  useEffect(() => {
    lastScrollYRef.current = window.scrollY;

    const handleScroll = () => {
      const currentY = window.scrollY;
      const lastY = lastScrollYRef.current;
      lastScrollYRef.current = currentY;

      // Do not rotate via scroll if not visible or if currently dragging
      if (!isVisibleRef.current || isDraggingRef.current) {
        return;
      }

      const deltaY = currentY - lastY;
      if (deltaY === 0) return;

      const video = videoRef.current;
      const duration = video?.duration || 4.0;

      // Scroll Down (deltaY > 0) -> rotates right / clockwise (forward in video timeline)
      // Scroll Up (deltaY < 0) -> rotates left / anti-clockwise (backward in video timeline)
      const deltaSeconds = (deltaY / SCROLL_PIXELS_PER_FULL_ROTATION) * duration;
      const targetTime = currentAngleTimeRef.current + deltaSeconds;

      seekToTime(targetTime);

      // Keep startAngleTimeRef in sync so subsequent mouse dragging seamlessly continues
      startAngleTimeRef.current = currentAngleTimeRef.current;
      setHasInteracted(true);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [seekToTime]);

  return (
    <div
      ref={containerRef}
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onTouchCancel={handleTouchEnd}
      className={`relative w-full h-full bg-white select-none overflow-hidden touch-pan-y ${
        isDragging ? 'cursor-grabbing' : 'cursor-grab'
      }`}
      style={{ userSelect: 'none', WebkitUserSelect: 'none' }}
      title="Click and drag horizontally or scroll page to rotate 360°"
    >
      {/* Interactive Video Element - Strictly Paused on Load, Scrubbed via Mouse/Touch & Scroll */}
      <video
        ref={videoRef}
        src="/videos/fashion_showcase_interactive.mp4"
        poster="/videos/frame0.jpg"
        preload="auto"
        muted
        playsInline
        disablePictureInPicture
        disableRemotePlayback
        className={`w-full h-auto aspect-[9/16] object-contain select-none bg-white pointer-events-none ${className}`}
        aria-label="Interactive 360-degree showcase rotation of Mohamed Irfan S"
      />

      {/* Subtle Minimal Drag & Scroll Hint Overlay matching portfolio design */}
      <div
        className={`absolute bottom-2 left-1/2 -translate-x-1/2 pointer-events-none select-none px-2.5 py-1 rounded-full bg-[#111111]/85 backdrop-blur-md text-white text-[9px] sm:text-[10px] font-mono tracking-widest uppercase flex items-center space-x-1.5 shadow-md border border-white/10 transition-all duration-300 ${
          isDragging ? 'opacity-100 scale-105 bg-[#FF1111]' : hasInteracted ? 'opacity-40 hover:opacity-90' : 'opacity-90'
        }`}
      >
        <svg
          viewBox="0 0 24 24"
          className="w-3 h-3 text-white shrink-0"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.85.83 6.72 2.24L21 8" />
          <path d="M21 3v5h-5" />
        </svg>
        <span className="font-bold">
          {isDragging ? 'ROTATING 360°' : 'DRAG TO ROTATE'}
        </span>
      </div>
    </div>
  );
};
