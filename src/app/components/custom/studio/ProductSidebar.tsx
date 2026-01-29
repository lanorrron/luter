import { useProductStore } from "@/store/useProductStore"

export default function ProductSidebar() {
    const price = useProductStore(state => state.price)
    
    return (
        <div className="space-y-8 sticky top-32">

            {/* Info */}
            <div>
                <span className="text-[11px] font-bold text-primary tracking-[0.4em] uppercase">
                    Premium Essentials
                </span>
                <h2 className="text-5xl font-black italic uppercase leading-tight">
                    Algodón de<br />Alta Densidad
                </h2>
                <div className="flex items-center gap-5 pt-4">
                    <span className="text-4xl font-bold">Bs {price.toFixed(2)}</span>
                    <span className=" flex  gap-2 items-center px-3 py-1.5 bg-primary/20 text-primary text-[10px] font-black rounded-full">
                        Envío a Todo Bolivia
                        <img src="https://flagcdn.com/w20/bo.png" alt="Bandera de Bolivia" className="w-5 h-5 rounded-sm" />
                    </span>
                </div>
            </div>

            {/* Specs */}
            <div className="space-y-4">

                <div className="flex items-center gap-4 p-5 glass-panel rounded-2xl border border-white/10 bg-white/5">
                    <span className="material-symbols-outlined text-primary">fiber_manual_record</span>
                    <div>
                        <p className="text-xs font-black uppercase tracking-widest">100% Algodón Premium</p>
                        <p className="text-[10px] text-white/40">
                            Algodón peruano de alta calidad, suave y duradero al tacto
                        </p>
                    </div>
                </div>

                <div className="flex items-center gap-4 p-5 glass-panel rounded-2xl border border-white/10 bg-white/5">
                    <span className="material-symbols-outlined text-primary">layers</span>
                    <div>
                        <p className="text-xs font-black uppercase tracking-widest">Grosor 240 GSM</p>
                        <p className="text-[10px] text-white/40">
                            Tela de densidad media-alta, ideal para una caída elegante y confortable
                        </p>
                    </div>
                </div>

                <div className="flex items-center gap-4 p-5 glass-panel rounded-2xl border border-white/10 bg-white/5">
                    <span className="material-symbols-outlined text-primary">high_quality</span>
                    <div>
                        <p className="text-xs font-black uppercase tracking-widest">Impresión ecológica</p>
                        <p className="text-[10px] text-white/40">
                            Impresión a base de agua, respetuosa con el medio ambiente y resistente al lavado
                        </p>
                    </div>
                </div>

                <div className="flex items-center gap-4 p-5 glass-panel rounded-2xl border border-white/10 bg-white/5">
                    <span className="material-symbols-outlined text-primary">place</span>
                    <div>
                        <p className="text-xs font-black uppercase tracking-widest">Hecho en Bolivia</p>
                        <p className="text-[10px] text-white/40">
                            Confeccionado a mano por expertos locales, apoyando la producción nacional
                        </p>
                    </div>
                </div>
            </div>

            <div className="space-y-4 pt-4">
                <button className="w-full flex items-center justify-center gap-4 rounded-full h-20 bg-[#25D366] text-white hover:scale-[1.02] active:scale-95 transition-all shadow-[0_15px_35px_rgba(37,211,102,0.3)] group relative overflow-hidden cursor-pointer">
                    <svg className="size-7 fill-current relative z-10" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"></path>
                    </svg>
                    <span className="text-lg font-black uppercase tracking-widest relative z-10">Pedir por WhatsApp</span>
                </button>
                <p className="text-white/30 text-[10px] text-center uppercase tracking-[0.2em]">
                    Confirma tu diseño y talla con un asesor experto.
                </p>
            </div>
        </div>
    )
}

