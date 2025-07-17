"use client"

import { useEffect, useState } from "react"

export function FloatingElements() {
  const [particles, setParticles] = useState<Array<{ id: number; emoji: string; left: number; delay: number }>>([])

  useEffect(() => {
    const particleEmojis = ["✨", "💖", "🌸", "💕", "⭐", "🌟", "💫", "🦋", "🏮", "🌺", "💊", "🔬"]
    const newParticles = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      emoji: particleEmojis[Math.floor(Math.random() * particleEmojis.length)],
      left: Math.random() * 100,
      delay: Math.random() * 6,
    }))
    setParticles(newParticles)
  }, [])

  return (
    <>
      {/* Partículas flotantes */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute text-xl opacity-60 animate-float"
            style={{
              left: `${particle.left}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${4 + Math.random() * 4}s`,
            }}
          >
            {particle.emoji}
          </div>
        ))}
      </div>

      {/* Corazones flotantes */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {[0, 1, 2, 3].map((i) => (
          <div
            key={i}
            className="absolute text-2xl opacity-60 animate-floatUp"
            style={{
              left: `${20 + i * 20}%`,
              animationDelay: `${i * 2}s`,
              animationDuration: "8s",
            }}
          >
            💕
          </div>
        ))}
      </div>

      {/* Elementos de The Apothecary Diaries */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {[0, 1, 2].map((i) => (
          <div
            key={`lotus-${i}`}
            className="absolute text-xl opacity-40 animate-sway"
            style={{
              left: `${15 + i * 30}%`,
              top: `${20 + i * 25}%`,
              animationDelay: `${i * 3}s`,
              animationDuration: "6s",
            }}
          >
            🪷
          </div>
        ))}
      </div>

      {/* Elementos de Oshi no Ko */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {[0, 1, 2, 3].map((i) => (
          <div
            key={`star-${i}`}
            className="absolute text-lg opacity-50 animate-pulse"
            style={{
              right: `${10 + i * 20}%`,
              top: `${10 + i * 20}%`,
              animationDelay: `${i * 1.5}s`,
              animationDuration: "3s",
            }}
          >
            ⭐
          </div>
        ))}
      </div>

      {/* Flores de cerezo */}
      <div className="fixed top-0 left-0 w-full pointer-events-none z-0">
        {[0, 1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="absolute text-lg opacity-50 animate-fall"
            style={{
              left: `${10 + i * 20}%`,
              animationDelay: `${i * 1.5}s`,
              animationDuration: "10s",
            }}
          >
            🌸
          </div>
        ))}
      </div>
    </>
  )
}
