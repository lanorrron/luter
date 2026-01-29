'use client'
import { PRODUCT_COLORS } from "@/constants/color";
import { useProductStore } from "@/store/useProductStore"
import { useState } from "react";

import { ChevronLeft, ChevronRight } from "lucide-react";

export default function StudioActions() {

    const colorSelected = useProductStore(state => state.colorSelected);
    const setColor = useProductStore(state => state.setColor);

    const [startIndex, setStartIndex] = useState<number>(0);
    const visibleCount = 3;

    const handlePrev = () => {
        setStartIndex(prev => Math.max(prev - 1, 0));
    }

    const handleNext = () => {
        setStartIndex(prev => Math.min(prev + 1, PRODUCT_COLORS.length - visibleCount));
    }

    const visibleColors = PRODUCT_COLORS.slice(startIndex, startIndex + visibleCount);

    return (
        <div className="grid grid-cols-3 gap-4">
            <button className="flex flex-col items-center justify-center gap-2 p-5 glass-panel rounded-2xl hover:border-primary/50 transition-all border border-white/10 bg-white/5">
                <span className="material-symbols-outlined text-primary">title</span>
                <span className="text-[10px] font-bold uppercase tracking-widest">Texto</span>
            </button>

            <button className="flex flex-col items-center justify-center gap-2 p-5 glass-panel rounded-2xl hover:border-primary/50 transition-all border border-white/10 bg-white/5">
                <span className="material-symbols-outlined text-primary">upload_file</span>
                <span className="text-[10px] font-bold uppercase tracking-widest">Imagen</span>
            </button>
            <div className="flex  items-center justify-center gap-2 p-5 glass-panel rounded-2xl hover:border-primary/50 transition-all border border-white/10 bg-white/5">

                {/* Flecha izquierda */}
                <button
                    onClick={handlePrev}
                    disabled={startIndex === 0}
                    className="text-white/40 hover:text-white transition-colors disabled:opacity-30 cursor-pointer disabled:cursor-not-allowed"
                >
                    <ChevronLeft size={20} />
                </button>

                {/* Colores visibles */}
                <div className="flex gap-3 overflow-hidden p-1">
                    {visibleColors.map(color => {
                        const isSelected = color.hex === colorSelected;
                        return (
                            <div
                                key={color.hex}
                                onClick={() => setColor(color.hex)}
                                className={`w-8 h-8 rounded-full border-2 cursor-pointer transition-transform
                  ${isSelected ? 'border-primary scale-110' : 'border-white/40'}`}
                                style={{ backgroundColor: color.hex }}
                            />
                        );
                    })}
                </div>

                {/* Flecha derecha */}
                <button
                    onClick={handleNext}
                    disabled={startIndex >= PRODUCT_COLORS.length - visibleCount}
                    className="text-white/40 hover:text-white transition-colors disabled:opacity-30 cursor-pointer disabled:cursor-not-allowed"
                >
                    <ChevronRight size={20} />
                </button>

            </div>

        </div>
    )
}
