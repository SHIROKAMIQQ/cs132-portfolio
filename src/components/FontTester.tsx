import { useState } from "react";
import { motion } from "motion/react";
import { Check } from "lucide-react";

const fonts = [
  { name: "Space Grotesk", class: "font-display", description: "Current - Geometric, modern" },
  { name: "Poppins", class: "font-display-poppins", description: "Clean, geometric, versatile" },
  { name: "Outfit", class: "font-display-outfit", description: "Rounded, contemporary" },
  { name: "Manrope", class: "font-display-manrope", description: "Clean, versatile, modern" },
  { name: "Sora", class: "font-display-sora", description: "Tech-forward, futuristic" },
  { name: "Archivo Black", class: "font-display-archivo", description: "Bold, impactful, heavy" },
  { name: "Montserrat", class: "font-display-montserrat", description: "Classic, clean, professional" },
  { name: "Rubik", class: "font-display-rubik", description: "Rounded, friendly, approachable" },
  { name: "DM Sans", class: "font-display-dm", description: "Modern, minimal, elegant" },
  { name: "Raleway", class: "font-display-raleway", description: "Elegant, thin, sophisticated" },
  { name: "Bebas Neue", class: "font-display-bebas", description: "Condensed, bold, striking" },
  { name: "Exo 2", class: "font-display-exo", description: "Futuristic, tech, dynamic" },
  { name: "Clash Display", class: "font-display-clash", description: "Modern, display, editorial" },
  { name: "Urbanist", class: "font-display-urbanist", description: "Contemporary, geometric, sleek" },
  { name: "Plus Jakarta Sans", class: "font-display-jakarta", description: "Modern, rounded, clean" },
];

interface FontTesterProps {
  onSelectFont: (fontClass: string) => void;
  currentFont?: string;
}

export function FontTester({ onSelectFont, currentFont = "font-display" }: FontTesterProps) {
  const [selectedFont, setSelectedFont] = useState(currentFont);

  const handleSelect = (fontClass: string) => {
    setSelectedFont(fontClass);
    onSelectFont(fontClass);
  };

  return (
    <div className="fixed top-4 right-4 z-50 max-w-sm">
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        className="backdrop-blur-xl bg-slate-900/90 border border-blue-500/30 rounded-2xl p-6 shadow-2xl"
      >
        <h3 className="text-white mb-4 text-lg">Choose Header Font</h3>
        <div className="space-y-3 max-h-[70vh] overflow-y-auto pr-2">
          {fonts.map((font) => (
            <motion.button
              key={font.class}
              onClick={() => handleSelect(font.class)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`w-full text-left p-4 rounded-xl backdrop-blur-sm transition-all ${
                selectedFont === font.class
                  ? "bg-blue-500/30 border-2 border-blue-400"
                  : "bg-white/5 border border-white/10 hover:bg-white/10"
              }`}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1">
                  <div className={`${font.class} text-xl text-white mb-1`}>
                    Unemployment in the Philippines
                  </div>
                  <div className="text-xs text-slate-400">
                    {font.name} - {font.description}
                  </div>
                </div>
                {selectedFont === font.class && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="flex-shrink-0"
                  >
                    <Check className="w-5 h-5 text-blue-400" />
                  </motion.div>
                )}
              </div>
            </motion.button>
          ))}
        </div>
        <p className="text-xs text-slate-500 mt-4 text-center">
          Click to preview different fonts
        </p>
      </motion.div>
    </div>
  );
}
