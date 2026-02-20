"use client";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, LayoutGrid, Maximize, Printer, Box, ShieldCheck, Zap } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden bg-white">
      {/* 🎨 Fundo de Cores Explosivas (Inspirado na Capa do FB) */}
      <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none explosive-color-bg blur-[120px]" />
      
      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-100 rounded-sm mb-8">
            <span className="w-2 h-2 rounded-full bg-formatto-red animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-formatto-blue">
              Sudoeste Goiano | Tecnologia e Cor
            </span>
          </div>
          
          <h1 className="text-6xl md:text-[130px] font-headline text-formatto-blue leading-[0.78] mb-8 tracking-tighter">
            IMPRESSÃO <br />
            <span className="text-formatto-red italic">VIBRANTE</span>. <br />
            QUALIDADE <br />
            <span className="text-formatto-accent">SOBERANA</span>.
          </h1>
          
          <p className="text-xl text-zinc-600 mb-10 max-w-lg leading-relaxed font-light">
            Especialistas em <span className="font-bold text-formatto-blue uppercase">Fachadas, Adesivos e Toldos</span>. Unimos a explosão de cores da Formatto à precisão do <span className="text-formatto-red font-bold">Diamante-OS</span>.
          </p>
          
          <div className="flex flex-wrap gap-5">
            <button className="btn-primary flex items-center gap-3 group">
              SOLICITAR ORÇAMENTO
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="btn-outline">
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
          {/* Mosaico de Cores e Produtos */}
          <div className="grid grid-cols-2 gap-4">
             <div className="space-y-4">
                <div className="h-80 rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                   <img 
                     src="https://scontent.frvd6-1.fna.fbcdn.net/v/t39.30808-6/470692133_618119397547349_8275584201228905445_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=2a1932&_nc_ohc=ZfP9jGnKNfYQ7kNvwHZsKF4&_nc_oc=AdmAtQPp2dJRFLEfiHt7Vz7AhQxMGM1f4oGrlgy_o2b_HwwhiBhE7dYB_ac-RBxXPIUvqJwUYp_Flu1gdC3g5QRQ&_nc_zt=23&_nc_ht=scontent.frvd6-1.fna&_nc_gid=MOW_UFf2TA5_6UXN0h6Cyg&oh=00_Afutt2QmDFfZHuGgA1PE55LFHuVMvbgMNpik6IUR6HCuLg&oe=699EC617" 
                     className="w-full h-full object-cover" 
                     alt="Explosão de Cores Formatto" 
                   />
                </div>
                <div className="h-40 bg-formatto-blue rounded-2xl p-8 flex flex-col justify-end">
                   <h3 className="text-white font-headline text-3xl leading-none">FACHADAS <br/> ACM</h3>
                </div>
             </div>
             <div className="space-y-4 pt-12">
                <div className="h-40 bg-formatto-red rounded-2xl p-8 flex flex-col justify-end">
                   <h3 className="text-white font-headline text-3xl leading-none">LONAS E <br/> BANNERS</h3>
                </div>
                <div className="h-80 rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                   <img 
                     src="https://images.unsplash.com/photo-1572044162444-ad60f128bdea?q=80&w=2070&auto=format&fit=crop" 
                     className="w-full h-full object-cover" 
                     alt="Comunicação Visual" 
                   />
                </div>
             </div>
          </div>
          
          {/* Nix Badge Overlay */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-6 shadow-2xl border-b-4 border-formatto-accent hidden md:block">
             <div className="flex items-center gap-3">
                <Zap className="text-formatto-red w-5 h-5 fill-current" />
                <span className="text-[10px] font-black text-formatto-blue uppercase tracking-[0.3em]">AI Optimized Production</span>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
