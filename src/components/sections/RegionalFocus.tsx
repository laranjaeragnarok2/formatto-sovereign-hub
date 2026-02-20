"use client";
import { motion } from "framer-motion";
import { Map, Zap, Factory, Globe } from "lucide-react";

export default function RegionalFocus() {
  return (
    <section className="py-32 bg-white relative overflow-hidden">
      {/* Abstract Map Grid Background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="w-full h-full" style={{ backgroundImage: 'radial-gradient(#0A1F44 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="relative aspect-square glass-card border-none flex items-center justify-center p-12">
               <div className="absolute inset-0 bg-formatto-blue/[0.02] rounded-full animate-pulse" />
               <div className="text-center">
                  <Globe className="w-32 h-32 text-formatto-blue/10 mx-auto mb-8" />
                  <h3 className="text-5xl font-headline text-formatto-blue mb-4 tracking-tighter">O EPICENTRO <br/> DO SUDOESTE</h3>
                  <div className="flex justify-center gap-4">
                     {["RIO VERDE", "JATAÍ", "MINEIROS"].map((city) => (
                       <span key={city} className="text-[10px] font-black border border-zinc-200 px-3 py-1 rounded-full text-zinc-400">
                         {city}
                       </span>
                     ))}
                  </div>
               </div>
               
               {/* Decorative "GPS" Pointers */}
               <motion.div animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 3 }} className="absolute top-1/4 right-1/4 w-3 h-3 bg-formatto-red rounded-full shadow-[0_0_15px_#E31E24]" />
               <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 4 }} className="absolute bottom-1/3 left-1/4 w-3 h-3 bg-formatto-accent rounded-full shadow-[0_0_15px_#00AEEF]" />
            </div>
          </motion.div>

          <div>
            <span className="label-red mb-6 inline-block">Regional B2B</span>
            <h2 className="section-title">SUA MARCA <br/> EM TODO LUGAR.</h2>
            <p className="text-xl text-zinc-500 mb-10 font-light leading-relaxed">
              Nossa logística é otimizada pelo **Diamante-OS** para garantir que sua comunicação visual chegue com integridade e velocidade em qualquer ponto do Sudoeste Goiano.
            </p>
            
            <div className="space-y-8">
               <div className="flex gap-6">
                  <div className="w-12 h-12 bg-zinc-100 flex items-center justify-center shrink-0">
                     <Factory className="w-6 h-6 text-formatto-blue" />
                  </div>
                  <div>
                     <h4 className="font-bold text-lg text-formatto-blue">Parque Industrial em Rio Verde</h4>
                     <p className="text-sm text-zinc-400">Visite nosso Showroom e veja a precisão de nossos equipamentos de perto.</p>
                  </div>
               </div>
               <div className="flex gap-6">
                  <div className="w-12 h-12 bg-zinc-100 flex items-center justify-center shrink-0">
                     <Map className="w-6 h-6 text-formatto-blue" />
                  </div>
                  <div>
                     <h4 className="font-bold text-lg text-formatto-blue">Cobertura Regional</h4>
                     <p className="text-sm text-zinc-400">Instalação técnica especializada em Jataí, Mineiros, Santa Helena e Quirinópolis.</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
