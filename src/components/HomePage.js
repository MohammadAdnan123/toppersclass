import React, { useState, useEffect } from 'react';
import '../styles/HomePage.css';

export default function HomePage() {
  const testimonials = [
    {
      author: 'Mohamed Nady',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer bibendum enim eu nibh finibus',
    },
    {
      author: 'John Doe',
      text: 'Another testimonial goes here. This is a sample text for the second testimonial.',
    },
    {
      author: 'Jane Smith',
      text: 'Here is the third testimonial. You can add more testimonials as needed.',
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  useEffect(() => {
    // Ensure activeIndex remains within bounds
    if (activeIndex < 0) {
      setActiveIndex(testimonials.length - 1);
    } else if (activeIndex >= testimonials.length) {
      setActiveIndex(0);
    }
  }, [activeIndex, testimonials]);

  return (
    <div className="testimonial-carousel position-relative">
      <div className="testimonial">
        <p className="testimonial-text">{testimonials[activeIndex].text}</p>
        <p className="testimonial-author">- {testimonials[activeIndex].author}</p>
      </div>
      <div className="carousel-controls">
        <button onClick={handleNext} className="carousel-control-btn next">
          Next
        </button>
      </div>
    </div>
  );
}
