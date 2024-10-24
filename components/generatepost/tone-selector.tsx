import React, { useState } from "react";
import { Button } from "../ui/button";

const tones = [
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
];

export default function ToneSelector({ setTone }: { setTone: any }) {
  const [selectedTone, setSelectedTone] = useState<string | null>(null);

  const handleOnClick = (label: string) => {
    setSelectedTone(label);
    setTone(label);
  };

  return (
    <div className="w-full mt-4">
      {" "}
      <h2 className="text-2xl font-semi-Bold mb-2">
        Select your Tone of Voice
      </h2>
      <div className="flex flex-wrap gap-2">
        {tones.map((tone) => (
          <Button
            type="button"
            key={tone.label}
            variant={selectedTone === tone.label ? "default" : "outline"}
            className={`flex items-center gap-2 ${
              selectedTone === tone.label ? "" : "bg-background border-border"
            }`}
            onClick={() => handleOnClick(tone.label)}
          >
            <span role="img" aria-label={tone.label}>
              {tone.emoji}
            </span>
            {tone.label}
          </Button>
        ))}
      </div>
    </div>
  );
}
