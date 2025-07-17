"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import type { SpecialDay } from "@/types/SpecialDay"

interface TimelineItemProps {
  day: SpecialDay
  index: number
  isActive: boolean
  isLeft: boolean
}

export function TimelineItem({ day, index, isActive, isLeft }: TimelineItemProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)
  const [stickerRemoved, setStickerRemoved] = useState(false)
  const [stickerAnimation, setStickerAnimation] = useState("")
  const itemRef = useRef<HTMLDivElement>(null)

  // Animaciones aleatorias para las pegatinas
  const stickerAnimations = [
    "animate-peel-up",
    "animate-peel-right",
    "animate-peel-left",
    "animate-spin-away",
    "animate-bounce-away",
    "animate-fade-scale",
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    if (itemRef.current) {
      observer.observe(itemRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const handleStickerClick = () => {
    // Seleccionar animación aleatoria
    const randomAnimation = stickerAnimations[Math.floor(Math.random() * stickerAnimations.length)]
    setStickerAnimation(randomAnimation)

    // Después de la animación, remover la pegatina
    setTimeout(() => {
      setStickerRemoved(true)
    }, 800)
  }

  const handleCardClick = () => {
    if (stickerRemoved) {
      setIsExpanded(!isExpanded)
    }
  }

  return (
    <div
      ref={itemRef}
      className={`timeline-item relative flex items-center min-h-screen py-20 ${
        isLeft ? "justify-start" : "justify-end"
      }`}
    >
      {/* Punto de la timeline */}
      <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
        <div
          className={`w-6 h-6 rounded-full border-4 border-white shadow-lg transition-all duration-500 ${
            isActive ? "bg-pink-400 scale-150 shadow-pink-300/50" : "bg-purple-300 scale-100"
          }`}
        >
          {isActive && <div className="absolute inset-0 rounded-full bg-pink-400 animate-ping"></div>}
        </div>
      </div>

      {/* Contenido */}
      <div
        className={`w-full max-w-lg transition-all duration-700 ${
          isVisible
            ? `opacity-100 ${isLeft ? "translate-x-0" : "translate-x-0"}`
            : `opacity-0 ${isLeft ? "-translate-x-20" : "translate-x-20"}`
        } ${isLeft ? "mr-auto pr-16" : "ml-auto pl-16"}`}
      >
        <div
          className={`relative bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border-2 transition-all duration-500 overflow-hidden ${
            isActive ? "border-pink-300 shadow-pink-200/50 scale-105" : "border-purple-200 hover:border-pink-200"
          } ${isExpanded ? "shadow-2xl border-pink-400" : ""} ${stickerRemoved ? "cursor-pointer" : ""}`}
          onClick={handleCardClick}
        >
          {/* Pegatina encima del contenido */}
          {!stickerRemoved && (
            <div className={`absolute inset-0 z-20 cursor-pointer ${stickerAnimation}`} onClick={handleStickerClick}>
              {/* Fondo de la pegatina */}
              <div className="absolute inset-0 bg-gradient-to-br from-pink-300 via-purple-300 to-blue-300 rounded-3xl"></div>

              {/* Contenido de la pegatina */}
              <div className="relative h-full flex flex-col items-center justify-center text-white p-6">
                {/* Decoración superior */}
                <div className="absolute top-4 left-4 text-2xl animate-bounce">✨</div>
                <div className="absolute top-4 right-4 text-2xl animate-bounce delay-300">💫</div>

                {/* Número del día en la pegatina */}
                <div className="font-dancing text-6xl font-bold mb-4 drop-shadow-lg animate-pulse">{day.id}</div>

                {/* Texto de la pegatina */}
                <div className="text-center">
                  <h3 className="text-xl font-bold mb-2 drop-shadow-md">¡Sorpresa!</h3>
                  <p className="text-sm opacity-90 mb-4">Click para descubrir este momento especial</p>
                </div>

                {/* Decoración inferior */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  <span className="text-lg animate-bounce">💕</span>
                  <span className="text-lg animate-bounce delay-200">🎁</span>
                  <span className="text-lg animate-bounce delay-400">💖</span>
                </div>

                {/* Efecto de brillo */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full animate-shimmer"></div>

                {/* Esquinas despegables */}
                <div className="absolute top-2 right-2 w-6 h-6 bg-white/30 rounded-full animate-pulse"></div>
                <div className="absolute bottom-2 left-2 w-4 h-4 bg-white/20 rounded-full animate-pulse delay-500"></div>
              </div>
            </div>
          )}

          {/* Contenido real de la tarjeta */}
          <div className={`transition-all duration-500 ${stickerRemoved ? "opacity-100" : "opacity-0"}`}>
            {/* Header siempre visible */}
            <div className="p-6 pb-4">
              {/* Número del día */}
              <div className="flex items-center justify-between mb-4">
                <div className="font-dancing text-3xl font-bold text-pink-500">Día {day.id}</div>
                <div className="text-sm text-purple-600 bg-purple-100 px-3 py-1 rounded-full">{day.date}</div>
              </div>

              {/* Título */}
              <h3 className="text-2xl font-bold text-purple-800 mb-4">{day.title}</h3>

              {/* Preview */}
              <p className="text-purple-600 leading-relaxed mb-4">{day.preview}</p>

              {/* Indicador de expansión */}
              {stickerRemoved && (
                <div className="flex items-center justify-center">
                  <div
                    className={`flex items-center space-x-2 text-pink-500 transition-all duration-300 ${
                      isExpanded ? "rotate-180" : ""
                    }`}
                  >
                    <span className="text-sm font-medium">{isExpanded ? "Ocultar detalles" : "Ver detalles"}</span>
                    <span className="text-lg">↓</span>
                  </div>
                </div>
              )}
            </div>

            {/* Contenido expandible con animación */}
            <div
              className={`transition-all duration-700 ease-in-out ${
                isExpanded ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="px-6 pb-6">
                {/* Línea separadora */}
                <div className="w-full h-px bg-gradient-to-r from-transparent via-pink-300 to-transparent mb-6"></div>

                {/* Imágenes con animación de entrada */}
                <div
                  className={`grid grid-cols-2 gap-4 mb-6 transition-all duration-500 delay-200 ${
                    isExpanded ? "transform translate-y-0 opacity-100" : "transform translate-y-4 opacity-0"
                  }`}
                >
                  {day.images.slice(0, 2).map((image, imgIndex) => (
                    <div key={imgIndex} className="relative group overflow-hidden rounded-xl">
                      <Image
                        src={image || "/placeholder.svg"}
                        alt={`${day.title} - ${imgIndex + 1}`}
                        width={200}
                        height={150}
                        className="w-full h-32 object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-pink-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  ))}
                </div>

                {/* Descripción con animación de entrada */}
                <div
                  className={`transition-all duration-500 delay-300 ${
                    isExpanded ? "transform translate-y-0 opacity-100" : "transform translate-y-4 opacity-0"
                  }`}
                >
                  <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-6 border-l-4 border-pink-400">
                    <p className="text-purple-700 leading-relaxed text-lg">{day.description}</p>
                  </div>
                </div>

                {/* Decoración final con animación */}
                <div
                  className={`text-center mt-6 space-x-2 transition-all duration-500 delay-400 ${
                    isExpanded ? "transform translate-y-0 opacity-100" : "transform translate-y-4 opacity-0"
                  }`}
                >
                  <span className="text-xl animate-bounce">💕</span>
                  <span className="text-xl animate-bounce delay-200">✨</span>
                  <span className="text-xl animate-bounce delay-400">💖</span>
                </div>
              </div>
            </div>
          </div>

          {/* Efecto de confeti cuando se quita la pegatina */}
          {stickerRemoved && (
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-4 left-4 text-2xl animate-bounce opacity-70">🎉</div>
              <div className="absolute top-8 right-8 text-xl animate-bounce delay-200 opacity-70">✨</div>
              <div className="absolute bottom-4 left-8 text-lg animate-bounce delay-400 opacity-70">💫</div>
              <div className="absolute bottom-8 right-4 text-xl animate-bounce delay-600 opacity-70">🎊</div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
