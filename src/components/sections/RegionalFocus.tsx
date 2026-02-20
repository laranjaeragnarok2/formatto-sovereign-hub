"use client";
import { motion } from "framer-motion";
import { Factory, Shield, MapPin, Zap, Globe } from "lucide-react";
import dynamic from "next/dynamic";

// Importação dinâmica para evitar erro de 'window is not defined' do Leaflet no SSR
const RegionalMap = dynamic(() => import("../ui/RegionalMap"), { 
  ssr: false,
  loading: () => (
    <div className="w-full h-full min-h-[500px] bg-zinc-100 animate-pulse flex items-center justify-center rounded-3xl border-4 border-white">
      <div className="text-center">
        <Globe className="w-12 h-12 text-zinc-300 mx-auto mb-4 animate-spin-slow" />
        <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Processando Coordenadas...</span>
      </div>
    </div>
  )
});

export default function RegionalFocus() {
  return (
    <section id="expansao" className="py-40 bg-zinc-50 relative overflow-hidden border-y border-zinc-100">
      {/* Background Grid Industrial */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="w-full h-full" style={{ backgroundImage: 'radial-gradient(#0A1F44 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            {/* O Mapa Real do Google via Leaflet agora é injetado aqui */}
            <RegionalMap />

            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 z-20 bg-formatto-blue text-white px-8 py-3 text-[9px] font-mono tracking-[0.4em] uppercase shadow-2xl">
               Sudoeste Operacional: RIO VERDE ↔ JATAÍ ↔ MINEIROS
            </div>
          </motion.div>

          <div>
            <span className="label-red mb-6 inline-block">Soberania Regional</span>
            <h2 className="section-title text-formatto-blue">SUA MARCA <br/> EM TODO LUGAR.</h2>
            <p className="text-xl text-zinc-500 mb-12 font-light leading-relaxed">
              Estrategicamente posicionados em Rio Verde, eliminamos as barreiras geográficas. Nossa inteligência logística garante que sua fachada monumental chegue com perfeição de Mineiros a Santa Helena.
            </p>
            
            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-zinc-100">
               <div>
                  <h4 className="font-bold text-lg text-formatto-blue mb-2 tracking-tighter uppercase">Distância Zero</h4>
                  <p className="text-sm text-zinc-400 font-light italic">"Entregas diárias para os polos do agronegócio e varejo goiano."</p>
               </div>
               <div>
                  <h4 className="font-bold text-lg text-formatto-blue mb-2 tracking-tighter uppercase">Padrão Único</h4>
                  <p className="text-sm text-zinc-400 font-light italic">"A mesma fidelidade cromática em 100% da área de cobertura."</p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
