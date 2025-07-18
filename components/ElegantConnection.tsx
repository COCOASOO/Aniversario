"use client"

import { useEffect, useState } from "react"

interface ElegantConnectionProps {
  index: number
  isActive: boolean
  direction: "left" | "right"
}

export function ElegantConnection({ index, isActive, direction }: ElegantConnectionProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, index * 200)

    return () => clearTimeout(timer)
  }, [index])

  // Diferentes tipos de conexiones elegantes
  const connectionTypes = ["wave", "dots", "gradient", "particles", "glow"]
  const connectionType = connectionTypes[index % connectionTypes.length]

  return (
    <div
      className={`relative flex justify-center items-center py-12 transition-all duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      {connectionType === "wave" && <WaveConnection direction={direction} isActive={isActive} />}
      {connectionType === "dots" && <DotsConnection direction={direction} isActive={isActive} />}
      {connectionType === "gradient" && <GradientConnection direction={direction} isActive={isActive} />}
      {connectionType === "particles" && <ParticlesConnection direction={direction} isActive={isActive} />}
      {connectionType === "glow" && <GlowConnection direction={direction} isActive={isActive} />}
    </div>
  )
}

function WaveConnection({ direction, isActive }: { direction: "left" | "right"; isActive: boolean }) {
  return (
    <div className="relative w-full max-w-lg mx-auto h-16">
      <svg width="100%" height="64" viewBox="0 0 500 64" className="absolute inset-0">
        <defs>
          <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#fce7f3" stopOpacity="0" />
            <stop offset="20%" stopColor="#f9a8d4" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#ec4899" stopOpacity="0.6" />
            <stop offset="80%" stopColor="#f9a8d4" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#fce7f3" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d="M0 32 Q125 16 250 32 T500 32"
          fill="none"
          stroke="url(#waveGradient)"
          strokeWidth={isActive ? "3" : "2"}
          className={`transition-all duration-500 ${direction === "left" ? "scale-x-[-1]" : ""}`}
        />
        {isActive && (
          <path
            d="M0 32 Q125 16 250 32 T500 32"
            fill="none"
            stroke="#ec4899"
            strokeWidth="1"
            strokeDasharray="4,8"
            className={`animate-pulse ${direction === "left" ? "scale-x-[-1]" : ""}`}
            opacity="0.4"
          />
        )}
      </svg>
    </div>
  )
}

function DotsConnection({ direction, isActive }: { direction: "left" | "right"; isActive: boolean }) {
  return (
    <div className="relative w-full max-w-lg mx-auto h-16 flex items-center justify-center">
      <div className="flex items-center space-x-4">
        {[...Array(7)].map((_, i) => (
          <div
            key={i}
            className={`rounded-full transition-all duration-500 ${
              isActive
                ? "bg-pink-400 w-3 h-3 animate-pulse"
                : i === 3
                  ? "bg-pink-300 w-2 h-2"
                  : "bg-pink-200 w-1.5 h-1.5"
            }`}
            style={{
              animationDelay: `${i * 0.1}s`,
              opacity: isActive ? 0.8 : 0.4,
            }}
          />
        ))}
      </div>
    </div>
  )
}

function GradientConnection({ direction, isActive }: { direction: "left" | "right"; isActive: boolean }) {
  return (
    <div className="relative w-full max-w-lg mx-auto h-16 flex items-center">
      <div
        className={`w-full h-1 rounded-full transition-all duration-700 ${
          isActive
            ? "bg-gradient-to-r from-transparent via-pink-400 to-transparent opacity-60"
            : "bg-gradient-to-r from-transparent via-pink-200 to-transparent opacity-30"
        }`}
      />
      {isActive && (
        <div className="absolute inset-0 w-full h-1 bg-gradient-to-r from-transparent via-white to-transparent rounded-full animate-shimmer opacity-40" />
      )}
    </div>
  )
}

function ParticlesConnection({ direction, isActive }: { direction: "left" | "right"; isActive: boolean }) {
  return (
    <div className="relative w-full max-w-lg mx-auto h-16">
      {/* Línea base sutil */}
      <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-200 to-transparent opacity-30" />

      {/* Partículas flotantes */}
      <div className="absolute inset-0">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 rounded-full transition-all duration-700 ${
              isActive ? "bg-purple-400 animate-float" : "bg-purple-200 animate-pulse"
            }`}
            style={{
              left: `${20 + i * 15}%`,
              top: `${50 + Math.sin(i) * 20}%`,
              animationDelay: `${i * 0.4}s`,
              opacity: isActive ? 0.7 : 0.3,
            }}
          />
        ))}
      </div>
    </div>
  )
}

function GlowConnection({ direction, isActive }: { direction: "left" | "right"; isActive: boolean }) {
  return (
    <div className="relative w-full max-w-lg mx-auto h-16 flex items-center">
      <div className="relative w-full">
        {/* Línea principal */}
        <div
          className={`w-full h-0.5 rounded-full transition-all duration-500 ${
            isActive
              ? "bg-gradient-to-r from-pink-300 via-purple-400 to-pink-300 shadow-lg shadow-pink-300/50"
              : "bg-gradient-to-r from-pink-200 via-purple-200 to-pink-200"
          }`}
        />

        {/* Efecto de brillo */}
        {isActive && (
          <div className="absolute inset-0 w-full h-0.5 bg-gradient-to-r from-transparent via-white to-transparent rounded-full animate-pulse opacity-60" />
        )}

        {/* Puntos de luz en los extremos */}
        <div
          className={`absolute left-0 top-1/2 transform -translate-y-1/2 w-2 h-2 rounded-full transition-all duration-500 ${
            isActive ? "bg-pink-400 shadow-lg shadow-pink-400/50 animate-pulse" : "bg-pink-200"
          }`}
        />
        <div
          className={`absolute right-0 top-1/2 transform -translate-y-1/2 w-2 h-2 rounded-full transition-all duration-500 ${
            isActive ? "bg-purple-400 shadow-lg shadow-purple-400/50 animate-pulse" : "bg-purple-200"
          }`}
        />
      </div>
    </div>
  )
}
