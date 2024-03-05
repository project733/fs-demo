import React, { useEffect, useRef } from 'react';
import './ScrollIntoView.scss';

export const ScrollIntoView = ({ children }) => {
  const containerRef = useRef();

  useEffect(() => {
    const options = {
      root: null, // Use viewport as root
      rootMargin: '0px',
      threshold: 0.4, // Trigger when 40% of the element is visible
    };

    const callback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('inview'); // Add animation
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);

    // Observe each child of the container
    containerRef.current.childNodes.forEach((child) => {
      observer.observe(child);
    });

    return () => {
      // Cleanup observer on component unmount
      observer.disconnect();
    };
  }, []);

  return <div className='scrollinto' ref={containerRef}>{children}</div>;
};