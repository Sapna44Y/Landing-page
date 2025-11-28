'use client'

import { useState } from 'react'
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react'
import { TESTIMONIALS } from '@/lib/constants'

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => 
      prev === TESTIMONIALS.length - 1 ? 0 : prev + 1
    )
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => 
      prev === 0 ? TESTIMONIALS.length - 1 : prev - 1
    )
  }

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-blue-900/20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.8))] dark:bg-grid-slate-800/20 dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.3))]" />
      <div className="absolute top-10 right-10 w-64 h-64 bg-purple-200/30 dark:bg-purple-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-blue-200/30 dark:bg-blue-600/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-md text-gray-700 dark:text-gray-300 text-sm font-medium mb-6 border border-gray-200/50 dark:border-gray-700/50">
            Customer Stories
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Trusted by Teams{' '}
            <span className="gradient-text">Worldwide</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Join thousands of satisfied customers who have transformed their workflow with CloudFlow.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="relative">
            {/* Main Testimonial Card */}
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-3xl p-8 sm:p-12 premium-shadow border border-white/50 dark:border-gray-700/50 relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-500/5 to-purple-500/5 rounded-bl-3xl" />
              
              <Quote className="absolute top-8 left-8 h-12 w-12 text-blue-100 dark:text-blue-900/20" />
              
              <div className="text-center relative z-10">
                {/* Rating */}
                <div className="flex justify-center mb-8">
                  {[...Array(TESTIMONIALS[currentTestimonial].rating)].map((_, i) => (
                    <Star 
                      key={i} 
                      className="h-7 w-7 text-yellow-400 fill-current transform hover:scale-110 transition-transform mx-1" 
                    />
                  ))}
                </div>

                {/* Testimonial Content */}
                <blockquote className="text-2xl sm:text-3xl lg:text-4xl text-gray-800 dark:text-gray-200 mb-12 leading-relaxed font-light max-w-4xl mx-auto">
                  "{TESTIMONIALS[currentTestimonial].content}"
                </blockquote>

                {/* Author */}
                <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg">
                      {TESTIMONIALS[currentTestimonial].name.charAt(0)}
                    </div>
                    <div className="text-left">
                      <div className="text-xl font-bold text-gray-900 dark:text-white">
                        {TESTIMONIALS[currentTestimonial].name}
                      </div>
                      <div className="text-gray-600 dark:text-gray-400 font-medium">
                        {TESTIMONIALS[currentTestimonial].role}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Navigation Arrows */}
              <div className="flex justify-between items-center mt-12">
                <button
                  onClick={prevTestimonial}
                  className="group p-4 rounded-2xl bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm border border-gray-200/50 dark:border-gray-600/50 hover:border-blue-500/50 dark:hover:border-blue-400/50 transition-all duration-300 transform hover:scale-110"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="h-6 w-6 text-gray-600 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
                </button>

                {/* Navigation Dots */}
                <div className="flex space-x-3">
                  {TESTIMONIALS.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentTestimonial(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-500 ${
                        index === currentTestimonial
                          ? 'bg-gradient-to-r from-blue-500 to-purple-500 w-12 shadow-lg'
                          : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                      }`}
                      aria-label={`View testimonial ${index + 1}`}
                    />
                  ))}
                </div>

                <button
                  onClick={nextTestimonial}
                  className="group p-4 rounded-2xl bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm border border-gray-200/50 dark:border-gray-600/50 hover:border-blue-500/50 dark:hover:border-blue-400/50 transition-all duration-300 transform hover:scale-110"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="h-6 w-6 text-gray-600 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}