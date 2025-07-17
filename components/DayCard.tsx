"use client"

import { useState } from "react"
import type { SpecialDay } from "@/types/SpecialDay"

interface DayCardProps {
  day: SpecialDay
  onClick: () => void
}

export function DayCard({ day, onClick }: DayCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className={`
        relative bg-gradient-to-br from-pink-100/80 to-purple-100/80 
        backdrop-blur-sm border-2 border-pink-200 rounded-3xl p-6 
        cursor-pointer transition-all duration-300 ease-out
        hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:shadow-pink-300/50
        hover:border-pink-300 group overflow-hidden
        ${isHovered ? "animate-pulse" : ""}
        ${day.id % 4 === 0 ? "hover:shadow-purple-300/50 hover:border-purple-300" : ""}
        ${day.id % 3 === 0 ? "hover:shadow-green-300/50 hover:border-green-300" : ""}
      `}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Efecto de brillo al hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />

      {/* Número del día */}
      <div className="font-dancing text-4xl font-bold text-pink-500 mb-2 text-center drop-shadow-md">Día {day.id}</div>

      {/* Título */}
      <h3 className="text-xl font-bold text-purple-700 mb-2 text-center">{day.title}</h3>

      {/* Preview */}
      <p className="text-purple-600 text-sm leading-relaxed mb-4 text-center">{day.preview}</p>

      {/* Fecha */}
      <div className="text-center">
        <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-xs font-medium">{day.date}</span>
      </div>

      {/* Decoración kawaii */}
      <div className="absolute top-2 right-2 text-pink-400 opacity-70 group-hover:opacity-100 transition-opacity">
        💕
      </div>

      {/* Decoraciones específicas de animes */}
      {day.id % 4 === 0 && (
        <div className="absolute top-2 left-2 text-purple-400 opacity-60 group-hover:opacity-100 transition-opacity animate-starPulse">
          ⭐
        </div>
      )}

      {day.id % 3 === 0 && (
        <div className="absolute bottom-2 left-2 text-green-400 opacity-60 group-hover:opacity-100 transition-opacity animate-lotusFloat">
          🪷
        </div>
      )}
    </div>
  )
}
