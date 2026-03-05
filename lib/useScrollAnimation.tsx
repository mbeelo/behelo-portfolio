'use client';

import React, { useEffect, useRef, useState } from 'react';

interface ScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
  delay?: number;
}

export function useScrollAnimation(options: ScrollAnimationOptions = {}) {
  const {
    threshold = 0.1,
    rootMargin = '0px 0px -50px 0px',
    triggerOnce = true,
    delay = 0
  } = options;

  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
            if (triggerOnce) {
              observer.disconnect();
            }
          }, delay);
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin, triggerOnce, delay]);

  return { ref, isVisible };
}

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
  staggerChildren?: boolean;
  childrenDelay?: number;
}

export function AnimatedSection({
  children,
  className,
  style,
  delay = 0,
  staggerChildren = false,
  childrenDelay = 80
}: AnimatedSectionProps) {
  const { ref, isVisible } = useScrollAnimation({ delay });

  const sectionStyle: React.CSSProperties = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
    transition: 'opacity 0.7s cubic-bezier(0.22, 1, 0.36, 1), transform 0.7s cubic-bezier(0.22, 1, 0.36, 1)',
    ...style
  };

  if (staggerChildren) {
    return (
      <section ref={ref} className={className} style={sectionStyle}>
        {React.Children.map(children, (child, index) => {
          if (React.isValidElement(child)) {
            const childStyle: React.CSSProperties = {
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
              transition: `opacity 0.7s cubic-bezier(0.22, 1, 0.36, 1) ${index * childrenDelay}ms, transform 0.7s cubic-bezier(0.22, 1, 0.36, 1) ${index * childrenDelay}ms`,
              ...child.props.style
            };

            return React.cloneElement(child, {
              style: childStyle
            });
          }
          return child;
        })}
      </section>
    );
  }

  return (
    <section ref={ref} className={className} style={sectionStyle}>
      {children}
    </section>
  );
}

// Utility function for manual scroll animations
export function useStaggeredAnimation(itemCount: number, delay: number = 80) {
  const { ref, isVisible } = useScrollAnimation();

  const getItemStyle = (index: number): React.CSSProperties => ({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
    transition: `opacity 0.7s cubic-bezier(0.22, 1, 0.36, 1) ${index * delay}ms, transform 0.7s cubic-bezier(0.22, 1, 0.36, 1) ${index * delay}ms`
  });

  return { ref, isVisible, getItemStyle };
}