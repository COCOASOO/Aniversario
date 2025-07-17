"use client"

import { useEffect } from "react"
import Image from "next/image"
import type { SpecialDay } from "@/types/SpecialDay"

interface ModalProps {
  day: SpecialDay
  onClose: () => void
}

export function Modal({ day, onClose }: ModalProps) {
  // Cerrar con tecla Escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose()
      }
    }

    document.addEventListener("keydown", handleEscape)
    document.body.style.overflow = "hidden"

    return () => {
      document.removeEventListener("keydown", handleEscape)
      document.body.style.overflow = "unset"
    }
  }, [onClose])

  return (
    <div
      className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border-4 border-pink-300 shadow-2xl animate-scaleIn relative overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Efecto de brillo tipo Oshi no Ko */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full animate-shimmer pointer-events-none" />

        {/* Botón cerrar */}
        <button
          onClick={onClose}
          className="absolute top-4 right-6 text-3xl text-pink-500 hover:text-pink-700 transition-colors z-10 hover:scale-110 transform"
        >
          ×
        </button>

        {/* Contenido del modal */}
        <div className="p-8">
          {/* Header */}
          <div className="text-center mb-6 border-b-2 border-pink-200 pb-4">
            <h2 className="font-dancing text-4xl font-bold text-pink-500 mb-2 drop-shadow-md">{day.title}</h2>
            <p className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-medium inline-block">
              {day.date}
            </p>
          </div>

          {/* Imágenes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {day.images.map((image, index) => (
              <div key={index} className="relative group">
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${day.title} - Imagen ${index + 1}`}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover rounded-2xl border-3 border-pink-300 shadow-lg group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-pink-500/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>

          {/* Descripción */}
          <div className="bg-pink-100/50 rounded-2xl p-6 border-l-4 border-pink-400">
            <p className="text-purple-700 leading-relaxed text-center text-lg">{day.description}</p>
          </div>

          {/* Decoración */}
          <div className="text-center mt-6 space-x-2">
            <span className="text-2xl animate-bounce">💕</span>
            <span className="text-2xl animate-bounce delay-200">✨</span>
            <span className="text-2xl animate-bounce delay-400">💖</span>
            <span className="text-xl animate-starPulse delay-600">⭐</span>
            <span className="text-xl animate-lotusFloat delay-800">🪷</span>
          </div>
        </div>
      </div>
    </div>
  )
}
