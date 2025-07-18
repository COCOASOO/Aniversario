"use client"

import { useEffect, useState } from "react"

interface SimpleConnectionProps {
  index: number
  isActive: boolean
}

export function SimpleConnection({ index, isActive }: SimpleConnectionProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, index * 100)

    return () => clearTimeout(timer)
  }, [index])

  return (
    <div
      className={`relative flex justify-center items-center py-8 transition-all duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="relative w-full max-w-md mx-auto h-8 flex items-center">
        {/* Línea principal - igual que en tu imagen */}
        <div
          className={`w-full h-0.5 rounded-full transition-all duration-700 ${
            isActive
              ? "bg-gradient-to-r from-transparent via-pink-400 to-transparent opacity-70"
              : "bg-gradient-to-r from-transparent via-pink-300 to-transparent opacity-40"
          }`}
        />

        {/* Efecto de brillo sutil cuando está activo */}
        {isActive && (
          <div className="absolute inset-0 w-full h-0.5 bg-gradient-to-r from-transparent via-white to-transparent rounded-full animate-pulse opacity-30" />
        )}
      </div>
    </div>
  )
}
