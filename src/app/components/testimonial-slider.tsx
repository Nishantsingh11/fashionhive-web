"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import Image from "next/image"

interface Testimonial {
  id: number
  name: string
  role: string
  company: string
  content: string
  avatar: string
}

interface TestimonialSliderProps {
  testimonials: Testimonial[]
  autoRotateInterval?: number // in milliseconds
  className?: string
}

export default function TestimonialSlider({
  testimonials,
  autoRotateInterval = 5000,
  className,
}: TestimonialSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  // Reset the timer when the current index changes
  useEffect(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current)
    }

    if (!isPaused && autoRotateInterval > 0) {
      timerRef.current = setTimeout(nextSlide, autoRotateInterval)
    }

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current)
      }
    }
  }, [currentIndex, isPaused, autoRotateInterval])

  // Handle pause on hover/focus
  const handleMouseEnter = () => setIsPaused(true)
  const handleMouseLeave = () => setIsPaused(false)

  return (
    <div
      className={cn("relative w-full overflow-hidden", className)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocus={handleMouseEnter}
      onBlur={handleMouseLeave}
    >
      {/* Main slider */}
      <div className="relative h-full w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="w-full"
          >
            <div className="mx-auto max-w-4xl px-4 py-8 md:px-8">
              <div className="rounded-xl bg-white p-6 shadow-lg dark:bg-gray-800 md:p-8">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 h-16 w-16 overflow-hidden rounded-full border-2 border-primary">
                    
                    <Image
                      src={testimonials[currentIndex].avatar || "/placeholder.svg"}
                      alt={testimonials[currentIndex].name}
                      width={64}
                      height={64}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <blockquote className="mb-6 text-lg italic text-gray-700 dark:text-gray-300 md:text-xl">
                    `{testimonials[currentIndex].content}`
                  </blockquote>
                  <div className="mt-2">
                    <p className="font-semibold text-gray-900 dark:text-white">{testimonials[currentIndex].name}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {testimonials[currentIndex].role}, {testimonials[currentIndex].company}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 text-gray-800 shadow-md transition-all hover:bg-white dark:bg-gray-800/80 dark:text-white dark:hover:bg-gray-800 md:left-4"
        aria-label="Previous testimonial"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 text-gray-800 shadow-md transition-all hover:bg-white dark:bg-gray-800/80 dark:text-white dark:hover:bg-gray-800 md:right-4"
        aria-label="Next testimonial"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      {/* Dot indicators */}
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={cn(
              "h-2 w-2 rounded-full transition-all",
              index === currentIndex
                ? "bg-primary w-4"
                : "bg-gray-300 hover:bg-gray-400 dark:bg-gray-600 dark:hover:bg-gray-500",
            )}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
