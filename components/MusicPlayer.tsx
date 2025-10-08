"use client"

import { Button } from "@/components/ui/button"
import { Play, SkipBack, SkipForward, Volume2, Pause } from "lucide-react"
import { useState } from "react"

export function MiniPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50">
      {/* Glassmorphism background */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-2xl border-t border-white/10" />

      {/* Subtle gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 py-3">
        <div className="flex items-center justify-between gap-6">
          {/* Track Info */}
          <div className="flex items-center gap-4 flex-1 min-w-0">
            <div className="relative w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex-shrink-0 shadow-lg shadow-purple-500/20 border border-white/10">
              <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-black/40 to-transparent" />
            </div>
            <div className="min-w-0">
              <h4 className="text-white font-semibold truncate text-sm">Midnight Dreams</h4>
              <p className="text-white/60 text-xs truncate">Luna Wave</p>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              className="text-white/70 hover:text-white hover:bg-white/10 h-8 w-8 transition-all"
            >
              <SkipBack className="h-4 w-4 fill-current" />
            </Button>
            <Button
              size="icon"
              onClick={() => setIsPlaying(!isPlaying)}
              className="bg-white/90 hover:bg-white text-black rounded-full h-10 w-10 shadow-lg hover:scale-105 transition-all"
            >
              {isPlaying ? <Pause className="h-5 w-5 fill-black" /> : <Play className="h-5 w-5 fill-black ml-0.5" />}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-white/70 hover:text-white hover:bg-white/10 h-8 w-8 transition-all"
            >
              <SkipForward className="h-4 w-4 fill-current" />
            </Button>
          </div>

          {/* Volume */}
          <div className="hidden md:flex items-center gap-3 flex-1 justify-end">
            <Volume2 className="h-4 w-4 text-white/60" />
            <div className="w-24 h-1 bg-white/10 rounded-full overflow-hidden backdrop-blur-sm">
              <div className="w-2/3 h-full bg-white/90 rounded-full shadow-sm" />
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mt-3 h-1 bg-white/10 rounded-full overflow-hidden backdrop-blur-sm">
          <div className="w-1/3 h-full bg-white/90 rounded-full shadow-sm transition-all" />
        </div>

        {/* Time indicators */}
        <div className="flex justify-between mt-1 text-[10px] text-white/50 font-medium">
          <span>1:23</span>
          <span>3:45</span>
        </div>
      </div>
    </div>
  )
}
