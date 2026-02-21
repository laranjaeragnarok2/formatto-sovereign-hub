"use client";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, LayoutGrid, Maximize, Printer, Hammer, Box, ShieldCheck, Zap } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden bg-white hero-vibrant-bg">
      {/* Top CMYK Strip */}
      <div className="absolute top-0 left-0 w-full h-1.5 cmyk-gradient" />

      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="flex -space-x-1">
              <div className="w-3 h-3 rounded-full bg-formatto-blue" />
              <div className="w-3 h-3 rounded-full bg-formatto-magenta" />
              <div className="w-3 h-3 rounded-full bg-formatto-yellow" />
              <div className="w-3 h-3 rounded-full bg-formatto-black" />
            </div>
            <span className="text-xs font-black uppercase tracking-[0.2em] text-zinc-500">
              Sua Gráfica Rápida Industrial no Sudoeste
            </span>
          </div>

          <h1 className="text-6xl md:text-[115px] font-headline text-formatto-black leading-[0.8] mb-8 tracking-tighter">
            SUA MARCA <br />
            <span className="cmyk-text-gradient italic">IMPRESSA</span> <br />
            SEM LIMITES.
          </h1>

          <p className="text-xl md:text-2xl text-zinc-600 mb-10 max-w-lg leading-relaxed font-light">
            Da <span className="font-bold text-formatto-black">gráfica rápida</span> às <span className="font-bold text-formatto-black">grandes fachadas e adesivos</span>. Entregamos agilidade, fidelidade de cores e durabilidade para quem não tem tempo a perder.
          </p>

          <div className="flex flex-wrap gap-5">
            <button className="btn-formatto flex items-center gap-3 group text-xs md:text-sm">
              ORÇAMENTO EXPRESSO (WHATSAPP)
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-10 py-5 border-2 border-zinc-200 text-formatto-black font-bold hover:bg-zinc-50 transition-all uppercase text-xs md:text-sm tracking-widest hover:border-formatto-blue">
              Ver Catálogo
            </button>
          </div>

          <div className="mt-16 grid grid-cols-2 gap-x-8 gap-y-4 pt-10 border-t border-zinc-100">
            {[
              "Impressão Digital Rápida", "Adesivos e Rótulos",
              "Lonas e Banners", "Fachadas e Letreiros",
              "Cartões e Papelaria", "Corte a Laser CNC"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <Zap className="text-formatto-magenta w-5 h-5" />
                <span className="text-xs font-bold uppercase tracking-wider text-zinc-600">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 1 }}
          className="relative"
        >
          {/* Mosaico de Cores Explosivas */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="h-80 rounded-sm overflow-hidden shadow-2xl border-4 border-white rotate-[-2deg] hover:rotate-0 transition-transform duration-500">
                <img
                  src="https://scontent.frvd6-1.fna.fbcdn.net/v/t39.30808-6/470692133_618119397547349_8275584201228905445_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=2a1932&_nc_ohc=ZfP9jGnKNfYQ7kNvwHZsKF4&_nc_oc=AdmAtQPp2dJRFLEfiHt7Vz7AhQxMGM1f4oGrlgy_o2b_HwwhiBhE7dYB_ac-RBxXPIUvqJwUYp_Flu1gdC3g5QRQ&_nc_zt=23&_nc_ht=scontent.frvd6-1.fna&_nc_gid=MOW_UFf2TA5_6UXN0h6Cyg&oh=00_Afutt2QmDFfZHuGgA1PE55LFHuVMvbgMNpik6IUR6HCuLg&oe=699EC617"
                  className="w-full h-full object-cover"
                  alt="Explosão de Cores Formatto"
                />
              </div>
              <div className="h-40 bg-formatto-blue rounded-sm p-8 flex flex-col justify-end">
                <h3 className="text-white font-headline text-3xl leading-none tracking-widest uppercase">Fachadas <br /> Premium</h3>
              </div>
            </div>
            <div className="space-y-4 pt-12">
              <div className="h-40 bg-formatto-magenta rounded-sm p-8 flex flex-col justify-end">
                <h3 className="text-white font-headline text-3xl leading-none tracking-widest uppercase">Lonas e <br /> Projetos</h3>
              </div>
              <div className="h-80 rounded-sm overflow-hidden shadow-2xl border-4 border-white rotate-[2deg] hover:rotate-0 transition-transform duration-500">
                <img
                  src="https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=2071&auto=format&fit=crop"
                  className="w-full h-full object-cover"
                  alt="Comunicação Visual B2B"
                />
              </div>
            </div>
          </div>

          {/* Quality Badge Overlay */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-8 shadow-[0_30px_60px_rgba(0,0,0,0.1)] border-b-8 border-formatto-yellow hidden md:block">
            <div className="text-center">
              <p className="text-xs font-black text-zinc-500 uppercase tracking-[0.3em] mb-2">Compromisso de Agilidade</p>
              <p className="text-base font-bold text-formatto-black">A MAIOR VELOCIDADE E QUALIDADE DA REGIÃO</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
