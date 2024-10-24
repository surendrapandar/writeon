"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

type Tone = {
  emoji: string
  label: string
}

const tones: Tone[] = [
  { emoji: "😃", label: "Excited" },
  { emoji: "💼", label: "Professional" },
  { emoji: "🌟", label: "Encouraging" },
  { emoji: "😂", label: "Funny" },
  { emoji: "🎭", label: "Dramatic" },
  { emoji: "📷", label: "Candid" },
  { emoji: "😎", label: "Casual" },
  { emoji: "🗣️", label: "Convincing" },
  { emoji: "🚨", label: "Urgent" },
  { emoji: "🤩", label: "Engaging" },
  { emoji: "🎨", label: "Creative" },
  { emoji: "😟", label: "Worried" },
  { emoji: "🔥", label: "Passionate" },
  { emoji: "📚", label: "Informative" },
]

export default function ToneSelector() {
  const [selectedTone, setSelectedTone] = useState<string | null>(null)

  return (
    <div className="w-full max-w-3xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Select your Tone of Voice</h2>
      <div className="flex flex-wrap gap-2">
        {tones.map((tone) => (
          <Button
            type="button"
            key={tone.label}
            variant={selectedTone === tone.label ? "default" : "outline"}
            className={`flex items-center gap-2 ${
              selectedTone === tone.label ? "bg-primary text-primary-foreground" : "bg-background"
            }`}
            onClick={() => setSelectedTone(tone.label)}
          >
            <span role="img" aria-label={tone.label}>
              {tone.emoji}
            </span>
            {tone.label}
          </Button>
        ))}
      </div>
    </div>
  )
}