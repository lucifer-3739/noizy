"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { TextShimmerWave } from "./textwave"

interface LoaderProps {
  heading1?: string
  heading2?: string
  onComplete?: () => void
}

export const LoaderReveal: React.FC<LoaderProps> = ({ heading1 = "Welcome", heading2 = "To Noizy", onComplete }) => {
  const [isVisible, setIsVisible] = useState(true)
  const [counter, setCounter] = useState(0)
  const loaderRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const backgroundRef = useRef<HTMLDivElement>(null)
  const counterRef = useRef<HTMLDivElement>(null)
  const loadingTextRef = useRef<HTMLDivElement>(null)
  const progressBarRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const tl = gsap.timeline()

    // Initial state - set elements to invisible/scaled down
    gsap.set([backgroundRef.current, counterRef.current, loadingTextRef.current, loaderRef.current], {
      opacity: 0,
      scale: 0.9,
      y: 20,
    })

    // Animate container zoom in
    tl.to(containerRef.current, {
      scale: 1,
      duration: 1,
      ease: "power2.out",
    })

    // Animate elements in with stagger
    tl.to(
      backgroundRef.current,
      {
        opacity: 0.4,
        scale: 1,
        y: 0,
        duration: 1.2,
        ease: "power2.out",
      },
      "-=0.8",
    )

    tl.to(
      loaderRef.current,
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
      },
      "-=0.6",
    )

    tl.to(
      [counterRef.current, loadingTextRef.current],
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 1.1,
        ease: "power2.out",
        stagger: 0.1,
      },
      "-=0.4",
    )

    // Counter animation
    const counterInterval = setInterval(() => {
      setCounter((prev) => {
        if (prev >= 100) {
          clearInterval(counterInterval)
          gsap.to(containerRef.current, {
            scale: 1.1,
            opacity: 0,
            duration: 0.8,
            ease: "power2.inOut",
            onComplete: () => {
              setIsVisible(false)
              onComplete?.()
            },
          })
          return 100
        }
        return prev + 1
      })
    }, 50)

    // Animate progress bar
    gsap.to(progressBarRef.current, {
      width: "100%",
      duration: 5,
      ease: "power2.out",
    })

    return () => {
      clearInterval(counterInterval)
      tl.kill()
    }
  }, [onComplete])

  if (!isVisible) return null

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black text-white"
      style={{ transform: "scale(0.95)" }}
    >
      {/* Background content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div ref={backgroundRef} className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-wider">{heading1}</h1>
          <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-wider mt-2">{heading2}</h1>
        </div>
      </div>

      {/* Main loader */}
      <div className="relative w-[300px] h-[4px] bg-gray-800 overflow-hidden rounded-full" ref={loaderRef}>
        <div ref={progressBarRef} className="h-full bg-white" style={{ width: `${counter}%` }} />
      </div>

      {/* Counter */}
      <div ref={counterRef} className="absolute bottom-12 left-12">
        <div className="text-6xl md:text-7xl font-light tabular-nums">{counter.toString().padStart(2, "0")}</div>
      </div>

      {/* Loading text */}
      <div ref={loadingTextRef} className="absolute bottom-12 right-12">
        <div className="text-lg font-light tracking-widest uppercase">
          <TextShimmerWave
            className='[--base-color:#0D74CE] [--base-gradient-color:#5EB1EF]'
            duration={1}
            spread={1}
            zDistance={1}
            scaleDistance={1.1}
            rotateYDistance={20}
          >
            Loading .....
          </TextShimmerWave>
        </div>
      </div>
    </div>
  )
}
