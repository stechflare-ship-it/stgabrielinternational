import React from 'react';
import { TestimonialSlider } from './TestimonialSlider';

export interface TestimonialsCarouselProps {
  title?: string;
  subtitle?: string;
  badge?: string;
  limitCategory?: 'parent' | 'student' | 'alumni';
}

/**
 * TestimonialsCarousel Component
 * Showcases authentic reviews and testimonials from parents, scholars, and alumni,
 * featuring interactive star ratings, category filters, autoplay controls,
 * and trust-building verified community metrics.
 */
export const TestimonialsCarousel: React.FC<TestimonialsCarouselProps> = (props) => {
  return <TestimonialSlider {...props} />;
};

export default TestimonialsCarousel;
