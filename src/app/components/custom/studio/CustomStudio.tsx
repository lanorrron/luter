// components/custom/studio/CustomStudio.tsx
import ProductPreview from "./ProductPreview"
import StudioActions from "./StudioActions"
import ProductSidebar from "./ProductSidebar"



export default function CustomStudio() {


    return (
        <section className="w-full py-12">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

                {/* IZQUIERDA */}
                <div className="lg:col-span-7 space-y-6">
                    <ProductPreview />
                    <StudioActions />
                </div>

                {/* DERECHA */}
                <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-32">
                    <ProductSidebar  />
                </div>

            </div>
        </section>
    )
}
