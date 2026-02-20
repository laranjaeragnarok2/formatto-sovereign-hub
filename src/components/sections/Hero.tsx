"use client";
import { motion } from "framer-motion";
import { Zap, ShieldCheck, Cpu, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-background">
      {/* Background Decorativo */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-luxury-cobalt/20 rounded-full blur-[150px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-luxury-gold/10 rounded-full blur-[130px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="flex justify-center mb-8">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-luxury-cobalt/30 bg-luxury-cobalt/10 text-luxury-cobalt text-[10px] font-mono tracking-[0.3em] uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-luxury-cobalt animate-ping" />
                Sudoeste Goiano | Hub B2B
              </span>
            </div>
            
            <h1 className="text-6xl md:text-[100px] font-headline text-white mb-6 leading-[0.9] tracking-tighter">
              A AUTORIDADE <span className="text-luxury-gold gold-glow">VISUAL</span> <br /> 
              DA PRÓXIMA GERAÇÃO
            </h1>
            
            <p className="text-xl md:text-2xl text-zinc-500 font-light mb-12 max-w-3xl mx-auto leading-relaxed">
              O ecossistema de impressão de elite orquestrado pelo <span className="text-white font-bold tracking-widest">DIAMANTE-OS</span>. 
              Transformamos marcas em soberanas regionais.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <button className="group relative px-10 py-5 bg-luxury-gold text-black font-black text-sm rounded-none hover:bg-white transition-all duration-500 uppercase tracking-widest flex items-center gap-3">
              Analisar meu Projeto
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-10 py-5 border border-white/10 hover:border-white/40 hover:bg-white/5 transition-all duration-500 font-bold text-sm uppercase tracking-widest">
              Explorar Hub Tecnológico
            </button>
          </motion.div>

          {/* Cards de Inteligência */}
          <div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-8">
             {[
               { icon: <Cpu className="w-8 h-8" />, title: "IA OPTIMIZED", desc: "Fluxos de orçamento e produção minerados pelo Agente Nix." },
               { icon: <Zap className="w-8 h-8" />, title: "PRECISION GEAR", desc: "O mais alto padrão de maquinário CNC e Laser do estado." },
               { icon: <ShieldCheck className="w-8 h-8" />, title: "SOVEREIGN DATA", desc: "Segurança total no armazenamento e gestão de seus ativos visuais." }
             ].map((item, i) => (
               <motion.div 
                 key={i}
                 initial={{ opacity: 0, scale: 0.95 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 viewport={{ once: true }}
                 transition={{ delay: 0.3 + (i * 0.1) }}
                 className="glass-card p-10 text-left border-white/5 hover:border-luxury-cobalt/30 transition-all duration-700 group relative"
               >
                 <div className="absolute top-0 left-0 w-1 h-0 bg-luxury-cobalt group-hover:h-full transition-all duration-700" />
                 <div className="text-luxury-gold mb-6 group-hover:text-luxury-cobalt transition-colors duration-500">{item.icon}</div>
                 <h3 className="text-xl font-headline text-white mb-3 tracking-wider">{item.title}</h3>
                 <p className="text-zinc-500 text-sm leading-relaxed">{item.desc}</p>
               </motion.div>
             ))}
          </div>
        </div>
      </div>
    </section>
  );
}
