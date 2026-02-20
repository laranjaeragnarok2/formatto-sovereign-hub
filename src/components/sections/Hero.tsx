"use client";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, LayoutGrid, Maximize, Printer, Hammer, Box, ShieldCheck, Zap } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden bg-white hero-gradient">
      {/* Top Brand Stripe */}
      <div className="absolute top-0 left-0 w-full h-1.5 bg-formatto-blue" />
      <div className="absolute top-0 left-0 w-1/3 h-1.5 bg-formatto-red z-10" />
      
      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-100 rounded-sm mb-8">
            <span className="w-2 h-2 rounded-full bg-formatto-red animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-formatto-blue">
              Sudoeste Goiano | Autoridade em Impressão
            </span>
          </div>
          
          <h1 className="text-6xl md:text-[120px] font-headline text-formatto-blue leading-[0.8] mb-8 tracking-tighter">
            ARTE QUE <br />
            <span className="text-formatto-red italic">IMPRIME</span>. <br />
            QUALIDADE <br />
            <span className="text-formatto-accent">EXTREMA</span>.
          </h1>
          
          <p className="text-xl text-zinc-600 mb-10 max-w-lg leading-relaxed font-light">
            Da <span className="font-bold text-formatto-blue">Comunicação Visual</span> monumental ao adesivo de precisão. O ecossistema B2B da Formatto une tecnologia industrial e inteligência agêntica para dominar sua região.
          </p>
          
          <div className="flex flex-wrap gap-5">
            <button className="btn-primary flex items-center gap-3 group">
              SOLICITAR ORÇAMENTO
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="btn-outline">
              Ver Portfólio
            </button>
          </div>

          <div className="mt-16 grid grid-cols-2 gap-x-8 gap-y-4 pt-10 border-t border-zinc-100">
             {[
               "Adesivos e Rótulos", "Banners e Lonas", 
               "Fachadas em ACM", "Toldo Cortina",
               "Corte CNC/Laser", "Plotagem de Frota"
             ].map((item, i) => (
               <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="text-formatto-accent w-4 h-4" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400">{item}</span>
               </div>
             ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 1 }}
          className="relative grid grid-cols-12 gap-4"
        >
          {/* Visual Evidence Mosaic */}
          <div className="col-span-8 h-[500px] bg-zinc-100 relative group overflow-hidden shadow-2xl border-b-8 border-formatto-blue">
             <img 
               src="https://images.unsplash.com/photo-1562654501-a0ccc0af3fb1?q=80&w=2070&auto=format&fit=crop" 
               className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale hover:grayscale-0" 
               alt="Industrial Print" 
             />
             <div className="absolute inset-0 bg-gradient-to-t from-formatto-blue/90 via-transparent to-transparent opacity-80" />
             <div className="absolute bottom-8 left-8">
                <span className="label-red mb-3 block w-fit">Tecnologia UV</span>
                <h3 className="text-white font-headline text-5xl leading-none">FACHADAS <br/> DE ALTO IMPACTO</h3>
             </div>
          </div>
          
          <div className="col-span-4 flex flex-col gap-4">
             <div className="h-60 bg-formatto-red p-6 flex flex-col justify-between shadow-xl">
                <Maximize className="text-white w-8 h-8" />
                <div className="text-white font-headline text-2xl leading-none">LONAS E <br/> TOLDOS</div>
             </div>
             <div className="h-[224px] bg-formatto-accent p-6 flex flex-col justify-between shadow-xl">
                <LayoutGrid className="text-white w-8 h-8" />
                <div className="text-white font-headline text-2xl leading-none">ADESIVOS <br/> PREMIUM</div>
             </div>
          </div>

          <div className="col-span-12 mt-4 glass-card p-8 border-l-8 border-formatto-red flex items-center justify-between">
             <div className="flex items-center gap-5">
                <div className="w-12 h-12 rounded-none bg-formatto-blue flex items-center justify-center">
                   <Zap className="text-white w-6 h-6" />
                </div>
                <div>
                   <p className="text-[10px] font-black uppercase text-zinc-400 tracking-[0.2em]">Soberania Regional</p>
                   <p className="text-lg font-headline text-formatto-blue">46 PROJETOS EM ANALISE NO SUDOESTE GOIANO</p>
                </div>
             </div>
             <div className="hidden xl:block text-right">
                <span className="text-[9px] font-mono text-zinc-400 uppercase tracking-[0.4em]">Powered by Nix Agêntico</span>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
