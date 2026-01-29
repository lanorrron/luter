'use client'

import { useProductStore } from "@/store/useProductStore";


export default function CutSelector() {
    const cutSelected = useProductStore(state => state.cutSelected);
    const setCut = useProductStore(state => state.setCut);



    return (
        <div className="mt-12">
            <div className="flex items-center justify-center gap-4 mb-6">
                <div className="h-[1px] w-12 bg-white/10"></div>
                <h3 className="text-[10px] font-bold text-white/50 uppercase tracking-[0.3em]">1. Selecciona el estilo</h3>
                <div className="h-[1px] w-12 bg-white/10"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
                <button onClick={() => setCut("regular")}  className={` flex flex-col items-center justify-center gap-3 p-6 ${cutSelected === "regular" ? "bg-primary/10 text-primary ring-2 ring-primary/20  border border-primary" : "bg-white/5 border border-white/10 "} rounded-2xl transition-all hover:bg-white/10 group cursor-pointer`} >
                    <span className="text-4xl group-hover:scale-110 transition-transform inline-block">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#0ddff2" width="36" height="36">
                            <path d="M6 18h12l-6-4.5zm4.625-11.1q-.125.275-.363.45t-.562.175q-.425 0-.712-.288T8.7 6.525q0-.125.013-.213t.062-.187q.425-.95 1.3-1.537T12 4q1.45 0 2.475 1.013T15.5 7.475q0 1.175-.687 2.1T13 10.85v.9l8.6 6.45q.2.125.3.338T22 19q0 .425-.287.713T21 20H3q-.425 0-.712-.288T2 19q0-.25.1-.462t.3-.338l8.6-6.45V10q0-.425.3-.712T12.025 9q.625 0 1.05-.45t.425-1.075t-.437-1.05T12 6q-.45 0-.825.238t-.55.662" />
                        </svg>
                    </span>
                    <div className="text-center ">
                        <p className="text-sm font-black uppercase tracking-widest">Corte Regular</p>
                        <p className="text-[10px] opacity-60 mt-1">Ajuste Clásico de Algodón</p>
                    </div>
                </button>

                <button onClick={() => setCut("oversize")} className={` flex flex-col items-center justify-center gap-3 p-6 ${cutSelected === "oversize" ? "bg-primary/10 text-primary ring-2 ring-primary/20  border border-primary" : "bg-white/5 border border-white/10 "} rounded-2xl transition-all hover:bg-white/10 group cursor-pointer`} >
                    <span className="inline-block text-4xl group-hover:scale-110 transition-transform">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="36"
                            height="36"
                            fill="#0ddff2"
                        >
                            <path d="M5 22q-.425 0-.712-.288T4 21t.288-.712T5 20h14q.425 0 .713.288T20 21t-.288.713T19 22zm7-3.425q-.2 0-.375-.062T11.3 18.3l-2.6-2.6q-.275-.275-.287-.687T8.7 14.3q.275-.275.688-.288t.712.263l.9.875v-6.3l-.9.875Q9.825 10 9.413 10T8.7 9.7q-.275-.275-.275-.7t.275-.7l2.6-2.6q.15-.15.325-.212T12 5.425t.375.063t.325.212l2.6 2.6q.275.275.287.688T15.3 9.7q-.275.275-.687.288t-.713-.263L13 8.85v6.3l.9-.875q.275-.275.688-.275t.712.3q.275.275.275.7t-.275.7l-2.6 2.6q-.15.15-.325.213t-.375.062M5 4q-.425 0-.712-.288T4 3t.288-.712T5 2h14q.425 0 .713.288T20 3t-.288.713T19 4z" />
                        </svg>
                    </span>

                    <div className="text-center">
                        <p className="text-sm font-black uppercase tracking-widest">Corte Oversize</p>
                        <p className="text-[10px] opacity-60 mt-1">Estilo Urbano Holgado</p>
                    </div>
                </button>
            </div>
        </div>
    )
}
