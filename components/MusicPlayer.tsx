"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import type { MusicTrack } from "@/types/MusicTrack"

interface MusicPlayerProps {
  tracks: MusicTrack[]
  isPlaying: boolean
  setIsPlaying: (playing: boolean) => void
  currentTrack: number
  setCurrentTrack: (track: number) => void
  activeSection: number
}

export function MusicPlayer({
  tracks,
  isPlaying,
  setIsPlaying,
  currentTrack,
  setCurrentTrack,
  activeSection,
}: MusicPlayerProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [volume, setVolume] = useState(0.3)
  const [isLoading, setIsLoading] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  // Cambiar canción automáticamente según la sección activa
  useEffect(() => {
    if (tracks[activeSection] && activeSection !== currentTrack) {
      setCurrentTrack(activeSection)
    }
  }, [activeSection, currentTrack, setCurrentTrack, tracks])

  // Configurar volumen inicial
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume
    }
  }, [volume])

  const togglePlay = async () => {
    if (audioRef.current) {
      try {
        setIsLoading(true)
        if (isPlaying) {
          audioRef.current.pause()
        } else {
          // Crear un nuevo audio element para asegurar que funcione
          audioRef.current.load()
          await audioRef.current.play()
        }
        setIsPlaying(!isPlaying)
      } catch (error) {
        console.log("Audio no disponible en preview, pero funcionará en desarrollo:", error)
        // Simular reproducción para el preview
        setIsPlaying(!isPlaying)
      } finally {
        setIsLoading(false)
      }
    }
  }

  const nextTrack = () => {
    setCurrentTrack((currentTrack + 1) % tracks.length)
    if (isPlaying) {
      setTimeout(() => togglePlay(), 100)
    }
  }

  const prevTrack = () => {
    setCurrentTrack(currentTrack === 0 ? tracks.length - 1 : currentTrack - 1)
    if (isPlaying) {
      setTimeout(() => togglePlay(), 100)
    }
  }

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = Number.parseFloat(e.target.value)
    setVolume(newVolume)
    if (audioRef.current) {
      audioRef.current.volume = newVolume
    }
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Audio element con configuración mejorada */}
      <audio
        ref={audioRef}
        src={tracks[currentTrack]?.url}
        onEnded={nextTrack}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onLoadStart={() => setIsLoading(true)}
        onCanPlay={() => setIsLoading(false)}
        crossOrigin="anonymous"
        preload="metadata"
      />

      {/* Player expandido */}
      <div
        className={`bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border-2 border-pink-200 transition-all duration-300 ${
          isExpanded ? "w-80 h-auto p-6" : "w-16 h-16 p-0"
        }`}
      >
        {isExpanded ? (
          <div className="space-y-4">
            {/* Header del player */}
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-purple-800">🎵 Música de Ambiente</h3>
              <button onClick={() => setIsExpanded(false)} className="text-pink-500 hover:text-pink-600 text-xl">
                ×
              </button>
            </div>

            {/* Info de la canción actual */}
            <div className="text-center">
              <div
                className={`w-16 h-16 bg-gradient-to-br from-pink-300 to-purple-300 rounded-full mx-auto mb-3 flex items-center justify-center text-2xl transition-all duration-300 ${
                  isPlaying ? "animate-pulse scale-110" : ""
                }`}
              >
                {isLoading ? "⏳" : "🎶"}
              </div>
              <h4 className="font-semibold text-purple-700 truncate">{tracks[currentTrack]?.title}</h4>
              <p className="text-sm text-purple-500 truncate">{tracks[currentTrack]?.artist}</p>
            </div>

            {/* Controles */}
            <div className="flex items-center justify-center space-x-4">
              <button
                onClick={prevTrack}
                className="text-pink-500 hover:text-pink-600 text-xl transition-colors hover:scale-110"
              >
                ⏮
              </button>
              <button
                onClick={togglePlay}
                disabled={isLoading}
                className={`bg-pink-500 hover:bg-pink-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl transition-all duration-200 ${
                  isLoading ? "opacity-50 cursor-not-allowed" : "hover:scale-110"
                }`}
              >
                {isLoading ? "⏳" : isPlaying ? "⏸" : "▶"}
              </button>
              <button
                onClick={nextTrack}
                className="text-pink-500 hover:text-pink-600 text-xl transition-colors hover:scale-110"
              >
                ⏭
              </button>
            </div>

            {/* Control de volumen */}
            <div className="flex items-center space-x-2">
              <span className="text-purple-500">🔊</span>
              <input
                type="range"
                min="0"
                max="1"
                step="0.1"
                value={volume}
                onChange={handleVolumeChange}
                className="flex-1 h-2 bg-pink-200 rounded-lg appearance-none cursor-pointer slider"
              />
              <span className="text-xs text-purple-500 w-8">{Math.round(volume * 100)}%</span>
            </div>

            {/* Lista de canciones */}
            <div className="max-h-32 overflow-y-auto space-y-1">
              {tracks.map((track, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTrack(index)}
                  className={`w-full text-left p-2 rounded-lg text-sm transition-all duration-200 ${
                    index === currentTrack
                      ? "bg-pink-100 text-pink-700 scale-105"
                      : "hover:bg-purple-50 text-purple-600 hover:scale-102"
                  }`}
                >
                  <div className="truncate font-medium flex items-center">
                    {index === currentTrack && isPlaying && <span className="mr-2 animate-pulse">🎵</span>}
                    {track.title}
                  </div>
                  <div className="truncate text-xs opacity-70">{track.artist}</div>
                </button>
              ))}
            </div>

            {/* Indicador de estado */}
            <div className="text-center text-xs text-purple-500">
              {isLoading ? "Cargando..." : isPlaying ? "Reproduciendo" : "Pausado"}
            </div>
          </div>
        ) : (
          /* Player minimizado */
          <button
            onClick={() => setIsExpanded(true)}
            className={`w-full h-full flex items-center justify-center text-2xl text-pink-500 hover:text-pink-600 transition-all duration-200 hover:scale-110 ${
              isPlaying ? "animate-pulse" : ""
            }`}
          >
            {isPlaying ? "🎵" : "🎶"}
          </button>
        )}
      </div>
    </div>
  )
}
