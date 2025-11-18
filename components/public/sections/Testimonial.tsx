"use client"
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Client",
      rating: 5,
      text: "This platform changed how I find contractors. I hired an electrician within hours and the work was exceptional. The verification process gave me peace of mind.",
      image: "SJ"
    },
    {
      id: 2,
      name: "Michael Okonkwo",
      role: "Artisan",
      rating: 5,
      text: "As a carpenter, this platform tripled my client base. The booking system is seamless and payments are always on time. Best decision for my business.",
      image: "MO"
    },
    {
      id: 3,
      name: "Aisha Mohammed",
      role: "Client",
      rating: 5,
      text: "I found a reliable plumber for my home renovation. The review system helped me choose the right person, and the job was completed perfectly and on budget.",
      image: "AM"
    },
    {
      id: 4,
      name: "David Adebayo",
      role: "Artisan",
      rating: 5,
      text: "Being a welder, I struggled to find consistent work. SkillConnect helped me find clients. The is also platform is user-friendly.",
      image: "DA"
    },
    {
      id: 5,
      name: "Grace Okoro",
      role: "Client",
      rating: 5,
      text: "Finally, a platform that makes hiring skilled workers stress-free. The messaging feature let me discuss my project details before booking. Highly recommend!",
      image: "GO"
    },
    {
      id: 6,
      name: "Emmanuel Nwosu",
      role: "Artisan",
      rating: 5,
      text: "As a painter, finding consistent clients was always challenging. This platform has given me steady work and the ability to showcase my portfolio professionally.",
      image: "EN"
    }
  ];

  // Auto-rotate every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const goToSlide = (index:number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="bg-[#2f2f2f] mt-10 md:mt-20 py-10 text-white">
      <div className="max-w-[1440px] px-5 mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <p className="text-sm font-medium tracking-wider uppercase mb-6 opacity-50">
          our testimonials
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 capitalize">
            Words from users
          </h2>
        </div>
        {/* Testimonial Card Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 hidden lg:flex items-center justify-center w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 transition-all text-white z-10"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 hidden lg:flex items-center justify-center w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 transition-all text-white z-10"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Testimonial Card */}
          <div className="bg-white rounded-2xl shadow-2xl p-8 sm:p-12 md:p-16 transition-all duration-500">
            {/* Star Rating */}
            <div className="flex gap-1 mb-6">
              {[...Array(currentTestimonial.rating)].map((_, i) => (
                <svg
                  key={i}
                  className="w-6 h-6 fill-current text-[#f38049]"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>

            {/* Testimonial Text */}
            <p className="text-xl md:text-2xl text-gray-600 italic leading-relaxed mb-8">
              "{currentTestimonial.text}"
            </p>

            {/* Author Info */}
            <div className="flex items-center gap-4">
              {/* Avatar */}
              <div className="w-16 h-16 rounded-full bg-[#000c54] flex items-center justify-center text-white text-xl font-bold">
                {currentTestimonial.image}
              </div>
              
              {/* Name and Role */}
              <div>
                <h4 className="text-lg font-bold text-gray-900">
                  {currentTestimonial.name}
                </h4>
                <p className="text-gray-500">
                  {currentTestimonial.role}
                </p>
              </div>
            </div>
          </div>

          {/* Mobile Navigation Arrows */}
          <div className="flex lg:hidden justify-center gap-4 mt-6">
            <button
              onClick={goToPrevious}
              className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-all text-white"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={goToNext}
              className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-all text-white"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center gap-3 mt-10">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-[#f38049] w-8'
                  : 'bg-white/30 hover:bg-white/50'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;