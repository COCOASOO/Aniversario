"use client"

import { useState, useEffect, useRef } from "react"
import { TimelineItem } from "@/components/TimelineItem"
import { MusicPlayer } from "@/components/MusicPlayer"
import { ScrollProgress } from "@/components/ScrollProgress"
import { FloatingElements } from "@/components/FloatingElements"
import { specialDays } from "@/data/specialDays"
import { musicTracks } from "@/data/musicTracks"

export default function Home() {
  const [activeSection, setActiveSection] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTrack, setCurrentTrack] = useState(0)
  const timelineRef = useRef<HTMLDivElement>(null)

  // Detectar sección activa basada en scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll(".timeline-item")
      const scrollPosition = window.scrollY + window.innerHeight / 2

      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect()
        const sectionTop = window.scrollY + rect.top
        const sectionBottom = sectionTop + rect.height

        if (scrollPosition >= sectionTop && scrollPosition <= sectionBottom) {
          setActiveSection(index)
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 via-purple-50 to-blue-50 relative">
      {/* Elementos flotantes decorativos */}
      <FloatingElements />

      {/* Barra de progreso */}
      <ScrollProgress />

      {/* Reproductor de música flotante */}
      <MusicPlayer
        tracks={musicTracks}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        currentTrack={currentTrack}
        setCurrentTrack={setCurrentTrack}
        activeSection={activeSection}
      />

      {/* Header principal */}
      <header className="min-h-screen flex flex-col justify-center items-center text-center px-4 relative z-10">
        <div className="mb-8 animate-pulse">
          <span className="text-4xl mx-4 animate-bounce">✨</span>
          <span className="text-4xl mx-2 animate-bounce delay-300">💖</span>
          <span className="text-4xl mx-4 animate-bounce delay-500">✨</span>
        </div>

        <h1 className="font-dancing text-6xl md:text-8xl font-bold text-pink-500 mb-6 animate-pulse drop-shadow-lg">
          Nuestro Primer Año
        </h1>

        <p className="text-purple-700 text-xl md:text-2xl font-medium mb-8 max-w-2xl">
          Una historia de amor contada a través de momentos mágicos
        </p>

        <div className="animate-bounce mt-8">
          <div className="w-6 h-10 border-2 border-pink-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-pink-400 rounded-full mt-2 animate-pulse"></div>
          </div>
          <p className="text-pink-400 text-sm mt-2">Scroll para comenzar</p>
        </div>
      </header>

      {/* Timeline principal */}
      <main className="relative" ref={timelineRef}>
        {/* Línea central de la timeline */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-pink-300 via-purple-300 to-blue-300 h-full z-0"></div>

        {/* Items de la timeline */}
        <div className="max-w-6xl mx-auto px-4">
          {specialDays.map((day, index) => (
            <TimelineItem
              key={day.id}
              day={day}
              index={index}
              isActive={activeSection === index}
              isLeft={index % 2 === 0}
            />
          ))}
        </div>

        {/* Final de la timeline */}
        <div className="relative text-center py-20">
          {/* Terminar la línea antes del círculo final */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-pink-300 via-purple-300 to-transparent h-10 -top-10 z-0"></div>

          {/* Círculo final sin línea atravesándolo */}
          <div className="relative z-10 mb-8">
            <div className="inline-block bg-gradient-to-r from-pink-400 to-purple-400 rounded-full p-8 shadow-2xl animate-pulse">
              <span className="text-5xl">💕</span>
            </div>
          </div>

          <h2 className="font-dancing text-4xl text-pink-500 mb-4">Y esto es solo el comienzo...</h2>
          <p className="text-purple-600 text-lg max-w-md mx-auto leading-relaxed">
            Cada día contigo es una nueva página en nuestra historia de amor
          </p>

          {/* Decoración final */}
          <div className="mt-8 flex justify-center space-x-4">
            <span className="text-2xl animate-bounce">✨</span>
            <span className="text-2xl animate-bounce delay-200">💖</span>
            <span className="text-2xl animate-bounce delay-400">✨</span>
          </div>
        </div>
      </main>
    </div>
  )
}
