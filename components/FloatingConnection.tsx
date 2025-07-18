"use client"

import { useEffect, useState } from "react"

interface FloatingConnectionProps {
  index: number
  isActive: boolean
  direction: "left" | "right"
}

export function FloatingConnection({ index, isActive, direction }: FloatingConnectionProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, index * 300)

    return () => clearTimeout(timer)
  }, [index])

  // Diferentes tipos de conexiones sutiles
  const connectionTypes = ["sakura", "stars", "hearts", "sparkles", "bubbles"]
  const connectionType = connectionTypes[index % connectionTypes.length]

  return (
    <div
      className={`relative flex justify-center items-center py-16 transition-all duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      {connectionType === "sakura" && <SakuraPath direction={direction} isActive={isActive} />}
      {connectionType === "stars" && <StarPath direction={direction} isActive={isActive} />}
      {connectionType === "hearts" && <HeartPath direction={direction} isActive={isActive} />}
      {connectionType === "sparkles" && <SparklePath direction={direction} isActive={isActive} />}
      {connectionType === "bubbles" && <BubblePath direction={direction} isActive={isActive} />}
    </div>
  )
}

function SakuraPath({ direction, isActive }: { direction: "left" | "right"; isActive: boolean }) {
  return (
    <div className="relative w-full max-w-md mx-auto">
      {/* Sendero curvo sutil */}
      <div className={`absolute inset-0 transition-all duration-500 ${direction === "right" ? "" : "scale-x-[-1]"}`}>
        <svg width="100%" height="120" viewBox="0 0 400 120" className="opacity-30">
          <path
            d="M50 60 Q200 20 350 60"
            fill="none"
            stroke="url(#sakuraGradient)"
            strokeWidth="2"
            strokeDasharray="3,3"
            className={`transition-all duration-500 ${isActive ? "opacity-60" : "opacity-30"}`}
          />
          <defs>
            <linearGradient id="sakuraGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ffb6c1" />
              <stop offset="50%" stopColor="#ffc0cb" />
              <stop offset="100%" stopColor="#e6e6fa" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Pétalos flotantes */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className={`absolute text-lg transition-all duration-700 ${isActive ? "animate-float" : "animate-pulse"}`}
            style={{
              left: `${15 + i * 15}%`,
              top: `${30 + Math.sin(i) * 20}px`,
              animationDelay: `${i * 0.5}s`,
            }}
          >
            🌸
          </div>
        ))}
      </div>
    </div>
  )
}

function StarPath({ direction, isActive }: { direction: "left" | "right"; isActive: boolean }) {
  return (
    <div className="relative w-full max-w-md mx-auto">
      {/* Constelación de estrellas */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className={`absolute transition-all duration-500 ${
              isActive ? "animate-starPulse text-yellow-400" : "text-purple-300 animate-pulse"
            }`}
            style={{
              left: `${10 + i * 12}%`,
              top: `${40 + Math.cos(i * 0.8) * 30}px`,
              animationDelay: `${i * 0.3}s`,
              fontSize: i % 2 === 0 ? "16px" : "12px",
            }}
          >
            ⭐
          </div>
        ))}
      </div>

      {/* Líneas de conexión sutiles entre estrellas */}
      <svg width="100%" height="120" viewBox="0 0 400 120" className="absolute inset-0 opacity-20">
        <path
          d="M40 60 L120 45 L200 70 L280 50 L360 65"
          fill="none"
          stroke="#9370db"
          strokeWidth="1"
          strokeDasharray="2,4"
          className={`transition-all duration-500 ${isActive ? "opacity-40" : "opacity-20"}`}
        />
      </svg>
    </div>
  )
}

function HeartPath({ direction, isActive }: { direction: "left" | "right"; isActive: boolean }) {
  return (
    <div className="relative w-full max-w-md mx-auto">
      {/* Corazones flotantes en patrón ondulado */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className={`absolute transition-all duration-700 ${
              isActive ? "animate-bounce text-pink-400" : "text-pink-300 animate-pulse"
            }`}
            style={{
              left: `${20 + i * 18}%`,
              top: `${50 + Math.sin(i * 1.2) * 25}px`,
              animationDelay: `${i * 0.4}s`,
              fontSize: i === 2 ? "20px" : "16px", // Corazón central más grande
            }}
          >
            💕
          </div>
        ))}
      </div>

      {/* Ondas suaves de fondo */}
      <svg width="100%" height="120" viewBox="0 0 400 120" className="absolute inset-0 opacity-10">
        <path
          d="M0 60 Q100 40 200 60 T400 60"
          fill="none"
          stroke="#ff69b4"
          strokeWidth="3"
          className={`transition-all duration-500 ${isActive ? "opacity-20" : "opacity-10"}`}
        />
      </svg>
    </div>
  )
}

function SparklePath({ direction, isActive }: { direction: "left" | "right"; isActive: boolean }) {
  return (
    <div className="relative w-full max-w-md mx-auto">
      {/* Brillos mágicos */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className={`absolute transition-all duration-500 ${
              isActive ? "animate-bounce text-yellow-300" : "text-purple-200 animate-pulse"
            }`}
            style={{
              left: `${8 + i * 10}%`,
              top: `${35 + Math.random() * 50}px`,
              animationDelay: `${i * 0.2}s`,
              fontSize: Math.random() > 0.5 ? "14px" : "10px",
            }}
          >
            ✨
          </div>
        ))}
      </div>

      {/* Estela de luz */}
      <div
        className={`absolute inset-0 bg-gradient-to-r from-transparent via-purple-100 to-transparent opacity-20 rounded-full h-2 top-1/2 transform -translate-y-1/2 transition-all duration-500 ${
          isActive ? "opacity-40 scale-110" : "opacity-20"
        }`}
      />
    </div>
  )
}

function BubblePath({ direction, isActive }: { direction: "left" | "right"; isActive: boolean }) {
  return (
    <div className="relative w-full max-w-md mx-auto">
      {/* Burbujas flotantes */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(7)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-4 h-4 rounded-full transition-all duration-700 ${
              isActive
                ? "bg-gradient-to-br from-blue-200 to-purple-200 animate-float"
                : "bg-gradient-to-br from-blue-100 to-purple-100 animate-pulse"
            }`}
            style={{
              left: `${15 + i * 12}%`,
              top: `${45 + Math.sin(i * 0.7) * 20}px`,
              animationDelay: `${i * 0.6}s`,
              opacity: 0.6,
            }}
          />
        ))}
      </div>

      {/* Pequeñas burbujas adicionales */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 rounded-full bg-white transition-all duration-500 ${
              isActive ? "opacity-40 animate-floatUp" : "opacity-20 animate-pulse"
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}px`,
              animationDelay: `${i * 0.3}s`,
            }}
          />
        ))}
      </div>
    </div>
  )
}
