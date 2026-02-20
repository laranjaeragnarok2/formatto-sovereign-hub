"use client";
import { motion } from "framer-motion";
import { ArrowRight, Printer, Shield, Globe, BarChart } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-zinc-50">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-formatto-blue/5 skew-x-12 translate-x-1/4" />
      
      <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-3 py-1 bg-formatto-blue/10 text-formatto-blue text-xs font-bold tracking-widest uppercase mb-6 rounded">
            Líder em Comunicação Visual B2B
          </span>
          <h1 className="text-7xl md:text-8xl font-headline text-formatto-dark leading-none mb-6">
            TECNOLOGIA QUE <br />
            <span className="text-formatto-blue">IMPULSIONA</span> <br />
            SUA MARCA.
          </h1>
          <p className="text-xl text-zinc-600 mb-8 max-w-lg leading-relaxed">
            Unimos a melhor infraestrutura de impressão do Sudoeste Goiano com inteligência agêntica para entregas que superam o padrão de mercado.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <button className="btn-primary flex items-center gap-2">
              ORÇAMENTO B2B <ArrowRight className="w-4 h-4" />
            </button>
            <button className="px-8 py-4 border-2 border-formatto-blue text-formatto-blue font-bold hover:bg-formatto-blue hover:text-white transition-all">
              CONHECER EQUIPAMENTOS
            </button>
          </div>
          
          <div className="mt-12 flex items-center gap-8 grayscale opacity-60">
            <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Atendimento Regional:</span>
            <span className="text-sm font-bold">RIO VERDE</span>
            <span className="text-sm font-bold">JATAÍ</span>
            <span className="text-sm font-bold">MINEIROS</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 1 }}
          className="relative"
        >
          <div className="aspect-[4/5] bg-zinc-200 rounded-lg overflow-hidden shadow-2xl relative">
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop" 
              alt="High-end Printing" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-formatto-dark/60 to-transparent" />
            
            {/* Agente Nix Overlay */}
            <div className="absolute bottom-6 left-6 right-6 glass-panel p-6 rounded-none border-l-4 border-luxury-gold">
               <div className="flex items-center gap-3 mb-2">
                 <div className="w-2 h-2 bg-green-500 rounded-full animate-ping" />
                 <span className="text-[10px] font-mono font-bold text-formatto-blue">AGENTE NIX: ONLINE</span>
               </div>
               <p className="text-sm font-medium text-zinc-800">
                 "Otimizando 46 novos projetos de expansão no Sudoeste Goiano hoje."
               </p>
            </div>
          </div>
          
          {/* Badge de Soberania */}
          <div className="absolute -top-6 -right-6 w-32 h-32 bg-luxury-gold flex items-center justify-center rounded-full shadow-2xl rotate-12">
            <div className="text-center">
              <span className="block text-xs font-black text-black leading-none">TECH</span>
              <span className="block text-2xl font-bold text-black tracking-tighter">ELITE</span>
              <span className="block text-[8px] font-bold text-black opacity-60">SOVEREIGN</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
