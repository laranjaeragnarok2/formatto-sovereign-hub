import Hero from "@/components/sections/Hero";

export default function Home() {
  return (
    <main className="min-h-screen bg-background selection:bg-luxury-gold selection:text-black">
      {/* Navbar Minimalista */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/[0.03] bg-background/50 backdrop-blur-md">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-2xl font-headline tracking-widest text-white">FORMATTO</div>
          <div className="hidden md:flex gap-10 text-xs font-mono tracking-widest uppercase text-zinc-500">
            <a href="#" className="hover:text-white transition-colors">Serviços</a>
            <a href="#" className="hover:text-white transition-colors">Portfólio</a>
            <a href="#" className="hover:text-white transition-colors">Regional</a>
            <a href="#" className="hover:text-white transition-colors text-luxury-gold">Diamante-OS</a>
          </div>
        </div>
      </nav>

      <Hero />

      {/* Footer Minimalista */}
      <footer className="py-20 border-t border-white/[0.03] text-center">
         <p className="text-xs font-mono text-zinc-600 uppercase tracking-widest">
           Powered by Diamante-OS Sovereign Core & Ferdinan-MSP.Group
         </p>
      </footer>
    </main>
  );
}
