"use client"

import { useEffect, useState } from "react"

interface ConnectingArrowProps {
  index: number
  isActive: boolean
  direction: "left" | "right"
}

export function ConnectingArrow({ index, isActive, direction }: ConnectingArrowProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, index * 200) // Aparición escalonada

    return () => clearTimeout(timer)
  }, [index])

  // Diferentes tipos de flechas para variedad
  const arrowTypes = ["curved", "wavy", "zigzag", "heart", "star"]

  const arrowType = arrowTypes[index % arrowTypes.length]

  return (
    <div
      className={`relative flex justify-center items-center py-8 transition-all duration-1000 ${
        isVisible ? "opacity-100 scale-100" : "opacity-0 scale-50"
      }`}
    >
      <div className={`relative transition-all duration-500 ${isActive ? "scale-110 animate-pulse" : "scale-100"}`}>
        {arrowType === "curved" && <CurvedArrow direction={direction} isActive={isActive} />}
        {arrowType === "wavy" && <WavyArrow direction={direction} isActive={isActive} />}
        {arrowType === "zigzag" && <ZigzagArrow direction={direction} isActive={isActive} />}
        {arrowType === "heart" && <HeartArrow direction={direction} isActive={isActive} />}
        {arrowType === "star" && <StarArrow direction={direction} isActive={isActive} />}
      </div>
    </div>
  )
}

function CurvedArrow({ direction, isActive }: { direction: "left" | "right"; isActive: boolean }) {
  return (
    <div className={`relative ${direction === "right" ? "rotate-0" : "rotate-180"}`}>
      <svg
        width="200"
        height="80"
        viewBox="0 0 200 80"
        className={`transition-all duration-300 ${isActive ? "stroke-pink-400" : "stroke-purple-300"}`}
      >
        <path d="M20 40 Q100 10 180 40" fill="none" strokeWidth="3" strokeLinecap="round" className="animate-pulse" />
        <polygon
          points="175,35 185,40 175,45"
          className={`transition-all duration-300 ${isActive ? "fill-pink-400" : "fill-purple-300"}`}
        />
      </svg>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl animate-bounce">
        ✨
      </div>
    </div>
  )
}

function WavyArrow({ direction, isActive }: { direction: "left" | "right"; isActive: boolean }) {
  return (
    <div className={`relative ${direction === "right" ? "rotate-0" : "rotate-180"}`}>
      <svg
        width="200"
        height="80"
        viewBox="0 0 200 80"
        className={`transition-all duration-300 ${isActive ? "stroke-pink-400" : "stroke-purple-300"}`}
      >
        <path
          d="M20 40 Q60 20 100 40 T180 40"
          fill="none"
          strokeWidth="3"
          strokeLinecap="round"
          className="animate-pulse"
        />
        <polygon
          points="175,35 185,40 175,45"
          className={`transition-all duration-300 ${isActive ? "fill-pink-400" : "fill-purple-300"}`}
        />
      </svg>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl animate-bounce delay-200">
        🌸
      </div>
    </div>
  )
}

function ZigzagArrow({ direction, isActive }: { direction: "left" | "right"; isActive: boolean }) {
  return (
    <div className={`relative ${direction === "right" ? "rotate-0" : "rotate-180"}`}>
      <svg
        width="200"
        height="80"
        viewBox="0 0 200 80"
        className={`transition-all duration-300 ${isActive ? "stroke-pink-400" : "stroke-purple-300"}`}
      >
        <path
          d="M20 40 L60 20 L100 60 L140 20 L180 40"
          fill="none"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="animate-pulse"
        />
        <polygon
          points="175,35 185,40 175,45"
          className={`transition-all duration-300 ${isActive ? "fill-pink-400" : "fill-purple-300"}`}
        />
      </svg>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl animate-bounce delay-300">
        ⭐
      </div>
    </div>
  )
}

function HeartArrow({ direction, isActive }: { direction: "left" | "right"; isActive: boolean }) {
  return (
    <div className={`relative ${direction === "right" ? "rotate-0" : "rotate-180"}`}>
      <svg
        width="200"
        height="80"
        viewBox="0 0 200 80"
        className={`transition-all duration-300 ${isActive ? "stroke-pink-400" : "stroke-purple-300"}`}
      >
        <path
          d="M20 40 Q70 15 100 40 Q130 15 180 40"
          fill="none"
          strokeWidth="3"
          strokeLinecap="round"
          className="animate-pulse"
        />
        <polygon
          points="175,35 185,40 175,45"
          className={`transition-all duration-300 ${isActive ? "fill-pink-400" : "fill-purple-300"}`}
        />
      </svg>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl animate-bounce delay-100">
        💕
      </div>
    </div>
  )
}

function StarArrow({ direction, isActive }: { direction: "left" | "right"; isActive: boolean }) {
  return (
    <div className={`relative ${direction === "right" ? "rotate-0" : "rotate-180"}`}>
      <svg
        width="200"
        height="80"
        viewBox="0 0 200 80"
        className={`transition-all duration-300 ${isActive ? "stroke-pink-400" : "stroke-purple-300"}`}
      >
        <path
          d="M20 40 Q100 20 180 40"
          fill="none"
          strokeWidth="3"
          strokeLinecap="round"
          className="animate-pulse"
          strokeDasharray="5,5"
        />
        <polygon
          points="175,35 185,40 175,45"
          className={`transition-all duration-300 ${isActive ? "fill-pink-400" : "fill-purple-300"}`}
        />
      </svg>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl animate-spin-slow">
        🌟
      </div>
    </div>
  )
}
