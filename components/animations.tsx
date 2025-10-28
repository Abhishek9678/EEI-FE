'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function ScrollAnimations({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only run on client-side
    if (typeof window === 'undefined') return;

    // Smooth scroll behavior
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    };

    // Initialize smooth scroll
    const html = document.documentElement;
    html.style.scrollBehavior = 'smooth';
    
    // Scroll to top on initial load
    scrollToTop();

    // Get all sections with data-animate attribute
    const sections = containerRef.current?.querySelectorAll('[data-animate]');
    
    sections?.forEach((section) => {
      const delay = section.getAttribute('data-delay') || 0;
      const y = section.getAttribute('data-y') || '20';
      const duration = section.getAttribute('data-duration') || '0.8';
      const stagger = section.getAttribute('data-stagger') || '0.1';
      
      // Set initial state
      gsap.set(section, { opacity: 0, y: y });
      
      // Animate on scroll into view
      gsap.to(section, {
        opacity: 1,
        y: 0,
        duration: parseFloat(duration),
        delay: parseFloat(delay as string),
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      });
      
      // Handle staggered children
      const staggerItems = section.querySelectorAll('[data-stagger-item]');
      if (staggerItems.length > 0) {
        gsap.from(staggerItems, {
          opacity: 0,
          y: 20,
          duration: 0.6,
          stagger: parseFloat(stagger),
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
          },
        });
      }
    });

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      // Reset scroll behavior on unmount
      document.documentElement.style.scrollBehavior = '';
    };
  }, []);

  return <div ref={containerRef}>{children}</div>;
}

export function HeroAnimations() {
  useEffect(() => {
    // Only run on client-side
    if (typeof window === 'undefined') return;

    // Hero text animation
    gsap.from('.hero-text', {
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: 'power3.out',
    });

    // Hero button animation
    gsap.from('.hero-button', {
      y: 30,
      opacity: 0,
      duration: 0.8,
      delay: 0.5,
      stagger: 0.1,
      ease: 'back.out(1.4)',
    });

    // Cleanup
    return () => {
      gsap.killTweensOf(['.hero-text', '.hero-button']);
    };
  }, []);

  return null;
}
