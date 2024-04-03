// Cursor.tsx
// use client

"use client";

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      if (cursorRef.current) {
        gsap.to(cursorRef.current, {
          x: e.clientX,
          y: e.clientY,
          stagger: 0.02,
        });
      }
    };

    window.addEventListener('mousemove', moveCursor);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  return <div ref={cursorRef} style={cursorStyles}></div>;
};

const cursorStyles: React.CSSProperties = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '20px',
  height: '20px',
  borderRadius: '50%',
  backgroundColor: '#fff',
  pointerEvents: 'none',
  zIndex: 9999,
  transform: 'translate(-50%, -50%)'
  
};

export default CustomCursor;
