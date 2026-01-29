import { PRODUCT_COLORS } from "@/constants/color";
import { create } from "zustand";

export type CutType = "regular" | "oversize";

interface ProductState {
    cutSelected: CutType;
    colorSelected: string;
    price: number;
    setCut: (cut: "regular" | "oversize") => void;
    setColor: (colorHex: string) => void;
    availableColors: { name: string; hex: String }[];
}

export const useProductStore = create<ProductState>((set, get) => ({
    cutSelected: "regular",
    colorSelected: PRODUCT_COLORS[0].hex,
    price: 120,
    setCut: (cut) => {
        set({ cutSelected: cut });
        const newPrice = cut === "oversize" ? 130 : 120;
        set({ price: newPrice })
    },
    setColor: (colorHex) => set({ colorSelected: colorHex }),

    availableColors: PRODUCT_COLORS,
}))