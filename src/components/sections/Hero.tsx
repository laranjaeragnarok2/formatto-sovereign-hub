"use client";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, LayoutGrid, Maximize, Printer, Hammer, Box, ShieldCheck, Zap } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden bg-white">
      {/* 🎨 Explosão de Cores (Estética Facebook) */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none explosive-color-bg blur-[100px]" />
      
      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-100 rounded-sm mb-8">
            <span className="w-2 h-2 rounded-full bg-formatto-red animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-formatto-blue">
              Sudoeste Goiano | Explosão de Qualidade
            </span>
          </div>
          
          <h1 className="text-6xl md:text-[110px] font-headline text-formatto-blue leading-[0.8] mb-8 tracking-tighter">
            CORES QUE <br />
            <span className="text-formatto-red italic">PULSAM</span>. <br />
            IMPRESSÃO <br />
            <span className="text-formatto-accent">MONUMENTAL</span>.
          </h1>
          
          <p className="text-xl text-zinc-600 mb-10 max-w-lg leading-relaxed font-light">
            Inspirados pela vibração das cores reais. O ecossistema B2B da <span className="font-bold text-formatto-blue">Formatto</span> transforma seu projeto em um marco visual inesquecível.
          </p>
          
          <div className="flex flex-wrap gap-5">
            <button className="btn-primary flex items-center gap-3 group">
              SOLICITAR ORÇAMENTO
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-10 py-4 border-2 border-formatto-blue text-formatto-blue font-bold hover:bg-formatto-blue hover:text-white transition-all duration-500 uppercase text-xs tracking-widest">
              Nossa Tecnologia
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 1 }}
          className="relative"
        >
          {/* Estética de Cores Vibrantes (Penas/Tintas) */}
          <div className="relative rounded-3xl overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.1)] border-8 border-white">
             <img 
               src="https://scontent.frvd6-1.fna.fbcdn.net/v/t39.30808-6/470692133_618119397547349_8275584201228905445_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=2a1932&_nc_ohc=ZfP9jGnKNfYQ7kNvwHZsKF4&_nc_oc=AdmAtQPp2dJRFLEfiHt7Vz7AhQxMGM1f4oGrlgy_o2b_HwwhiBhE7dYB_ac-RBxXPIUvqJwUYp_Flu1gdC3g5QRQ&_nc_zt=23&_nc_ht=scontent.frvd6-1.fna&_nc_gid=MOW_UFf2TA5_6UXN0h6Cyg&oh=00_Afutt2QmDFfZHuGgA1PE55LFHuVMvbgMNpik6IUR6HCuLg&oe=699EC617" 
               className="w-full h-auto" 
               alt="Formatto Cores Vibrantes" 
             />
             <div className="absolute inset-0 bg-gradient-to-t from-formatto-blue/40 to-transparent" />
          </div>
          
          <div className="absolute -bottom-10 -left-10 glass-card p-8 border-l-8 border-formatto-red max-w-[280px]">
             <Zap className="text-formatto-red w-8 h-8 mb-4 animate-bounce" />
             <p className="text-xs font-black uppercase text-formatto-blue tracking-widest mb-2">Fidelidade Cromática</p>
             <p className="text-[10px] text-zinc-500 leading-tight">O maior parque gráfico de Rio Verde garantindo 100% de precisão na sua marca.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
