// components/custom/studio/ProductPreview.tsx
export default function ProductPreview() {
  return (
    <div className="relative rounded-3xl border border-white/20 overflow-hidden shadow-[0_0_50px_rgba(13,223,242,0.15)] aspect-square studio-backdrop flex items-center justify-center p-8">

      {/* Iluminación */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />

      {/* Polera */}
      <img
        src="/tshirt-base.png"
        alt="Polera base"
        className="h-full w-auto object-contain tshirt-highlight drop-shadow-[0_20px_40px_rgba(0,0,0,0.6)]"
      />

      {/* Zona editable */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-1/2 aspect-[3/4] border-2 border-dashed border-primary/30 rounded-lg flex items-center justify-center bg-white/5">
          <span className="text-[10px] uppercase tracking-widest text-white/60">
            Área de diseño
          </span>
        </div>
      </div>

    </div>
  )
}
