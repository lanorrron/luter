import Link from "next/link";
import Image from "next/image";

export default function Header() {
    return (
        <header className="sticky top-0 z-50 flex items-center justify-between border-b border-border bg-background/80 backdrop-blur-md px-6 md:px-16 ">
            {/* LOGO */}
            <div className="my-3" >
                <Image alt="logo" src="/luter.png" width={120} height={40}
                    priority
                    className="h-10 w-auto" />
            </div>


            {/* NAV */}
            <div className="flex flex-1 justify-end items-center gap-10">
                <nav className="hidden md:flex items-center gap-10">
                    <Link
                        href="/"
                        className="text-xs font-bold uppercase tracking-widest text-foreground/60 hover:text-primary transition-colors"
                    >
                        Tienda
                    </Link>

                    <Link
                        href="/personalizar"
                        className="text-xs font-bold uppercase tracking-widest text-primary border-b border-primary pb-1"
                    >
                        Personalizar
                    </Link>
                </nav>
            </div>
        </header>
    );
}
