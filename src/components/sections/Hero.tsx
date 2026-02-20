"use client";
import { motion } from "framer-motion";
import { Zap, ShieldCheck, Cpu } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Orbs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-luxury-cobalt/10 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-luxury-gold/5 rounded-full blur-[100px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1 rounded-full border border-luxury-cobalt/30 bg-luxury-cobalt/5 text-luxury-cobalt text-xs font-mono tracking-widest uppercase mb-6">
              Sudoeste Goiano | Tecnologia B2B
            </span>
            <h1 className="text-6xl md:text-8xl font-headline text-white mb-6 leading-none">
              A Autoridade <span className="text-luxury-gold gold-glow">Visual</span> <br /> 
              da Próxima Geração
            </h1>
            <p className="text-xl md:text-2xl text-zinc-400 font-light mb-10 max-w-3xl mx-auto">
              Seu projeto merece a precisão do <span className="text-white font-medium">Diamante-OS</span>. 
              A Formatto agora opera o maior hub tecnológico de impressão regional.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <button className="px-10 py-4 bg-luxury-gold text-black font-bold rounded-sm hover:bg-white transition-all duration-300 tracking-tighter">
              ANALISAR MEU PROJETO
            </button>
            <button className="px-10 py-4 border border-white/10 hover:bg-white/5 transition-all duration-300 font-medium">
              EXPLORAR HUB
            </button>
          </motion.div>

          <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
             {[
               { icon: <Cpu className="w-6 h-6" />, title: "IA Optimized", desc: "Orçamentos instantâneos via Agente Nix." },
               { icon: <Zap className="w-6 h-6" />, title: "Precision Gear", desc: "Equipamentos CNC e Laser de 1ª linha." },
               { icon: <ShieldCheck className="w-6 h-6" />, title: "Sovereign Link", desc: "Gestão de arquivos criptografada." }
             ].map((item, i) => (
               <motion.div 
                 key={i}
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ delay: 0.8 + (i * 0.2) }}
                 className="glass-card p-8 text-left group hover:neon-blue-border transition-all duration-500"
               >
                 <div className="text-luxury-cobalt mb-4">{item.icon}</div>
                 <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                 <p className="text-zinc-500 text-sm">{item.desc}</p>
               </motion.div>
             ))}
          </div>
        </div>
      </div>
    </section>
  );
}
