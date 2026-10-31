import React, { useEffect, useRef, useState } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'fade-up' | 'zoom-in' | 'slide-left' | 'slide-right';
  delay?: number;
  delayMs?: number;
  once?: boolean;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  className = '',
  variant = 'fade-up',
  delay,
  delayMs,
  once = false,
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(true);
  const [hasMounted, setHasMounted] = useState(false);

  const effectiveDelay = delayMs ?? delay ?? 0;

  useEffect(() => {
    setHasMounted(true);
    const el = ref.current;
    if (!el) return;

    if (typeof IntersectionObserver === 'undefined') {
      setIsVisible(true);
      return;
    }

    // Check immediately if element is already in or above the viewport
    const rect = el.getBoundingClientRect();
    const vh = window.innerHeight || document.documentElement.clientHeight;
    if (rect.top < vh - 10) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting || entry.boundingClientRect.top < vh * 0.92) {
          setIsVisible(true);
          if (once) observer.unobserve(el);
        } else if (!once && entry.boundingClientRect.top >= vh) {
          // Only reset when the element is completely below the viewport,
          // so sections/cards NEVER turn blank while scrolling down or while partially visible.
          setIsVisible(false);
        }
      },
      {
        threshold: 0,
        rootMargin: '40px 0px -10px 0px',
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [once]);

  const hiddenTransform = {
    'fade-up': 'translate3d(0, 24px, 0) scale(0.985)',
    'zoom-in': 'translate3d(0, 14px, 0) scale(0.94)',
    'slide-left': 'translate3d(-24px, 0, 0)',
    'slide-right': 'translate3d(24px, 0, 0)',
  }[variant];

  const show = !hasMounted || isVisible;

  return (
    <div
      ref={ref}
      style={{
        opacity: show ? 1 : 0,
        transform: show ? 'translate3d(0, 0, 0) scale(1)' : hiddenTransform,
        transition: `opacity 450ms cubic-bezier(0.22, 1, 0.36, 1) ${effectiveDelay}ms, transform 480ms cubic-bezier(0.22, 1, 0.36, 1) ${effectiveDelay}ms`,
        willChange: 'opacity, transform',
      }}
      className={className}
    >
      {children}
    </div>
  );
};
