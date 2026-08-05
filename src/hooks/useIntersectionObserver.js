import { useEffect, useRef, useState } from 'react';

/**
 *  CUSTOM HOOK: useIntersectionObserver
 * 
 * Performance-optimized intersection observer for scroll animations
 * - Uses IntersectionObserver API (native browser API)
 * - Lazy loads content only when visible
 * - Reduces CPU usage by not animating off-screen elements
 * - Memory efficient with proper cleanup
 * 
 * USAGE:
 * const [ref, isVisible] = useIntersectionObserver();
 * <div ref={ref}> {isVisible && <Content />} </div>
 */
export function useIntersectionObserver({
  threshold = 0.1,
  rootMargin = '0px',
  triggerOnce = true,
} = {}) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Use native IntersectionObserver API (performance)
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) {
            observer.disconnect();
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    // Cleanup (memory leak prevention)
    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin, triggerOnce]);

  return [ref, isVisible];
}

export default useIntersectionObserver;