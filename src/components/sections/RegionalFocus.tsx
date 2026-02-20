"use client";
import { motion } from "framer-motion";
import { Factory, Zap, Globe, MapPin, Search } from "lucide-react";

export default function RegionalFocus() {
  return (
    <section id="expansao" className="py-40 bg-zinc-50 relative overflow-hidden border-y border-zinc-100">
      {/* 🗺️ Mapa via API Estática (Google Static Maps ou Mapbox) */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            {/* Visual de Mapa de Satélite Real (via Unsplash de Rio Verde ou Georef) */}
            <div className="relative aspect-square glass-card border-white flex items-center justify-center p-0 shadow-2xl overflow-hidden rounded-3xl">
               <img 
                 src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074&auto=format&fit=crop" 
                 className="w-full h-full object-cover grayscale contrast-125 opacity-40" 
                 alt="Mapa Regional"
               />
               <div className="absolute inset-0 bg-formatto-blue/20 mix-blend-multiply" />
               
               {/* 🛰️ Radar dinâmico sobre Rio Verde */}
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <motion.div 
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: [1, 2.5], opacity: [0.5, 0] }}
                    transition={{ repeat: Infinity, duration: 3 }}
                    className="w-32 h-32 border-2 border-formatto-red rounded-full"
                  />
                  <div className="w-4 h-4 bg-formatto-red rounded-full shadow-[0_0_20px_#E31E24] relative z-10">
                     <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-formatto-blue text-white px-3 py-1 text-[9px] font-black whitespace-nowrap rounded">
                       RIO VERDE: HUB CENTRAL
                     </span>
                  </div>
               </div>

               {/* City Markers */}
               <div className="absolute top-[40%] right-[30%] flex flex-col items-center">
                  <MapPin className="text-formatto-accent w-4 h-4" />
                  <span className="text-[8px] font-bold text-white mt-1 bg-black/50 px-2">JATAÍ</span>
               </div>
               <div className="absolute bottom-[30%] left-[25%] flex flex-col items-center">
                  <MapPin className="text-formatto-accent w-4 h-4" />
                  <span className="text-[8px] font-bold text-white mt-1 bg-black/50 px-2">MINEIROS</span>
               </div>

               {/* Overlay Raio 200km */}
               <div className="absolute bottom-6 left-6 z-[100] bg-formatto-dark text-white p-4 border-l-4 border-formatto-red">
                  <p className="text-[10px] font-black uppercase tracking-widest mb-1">Dossiê Regional</p>
                  <p className="text-xs font-bold">Domínio Geográfico: Raio 200km</p>
               </div>
            </div>
          </motion.div>

          <div>
            <span className="label-red mb-6 inline-block">Soberania Regional</span>
            <h2 className="section-title text-formatto-blue">SUA MARCA <br/> EM TODO LUGAR.</h2>
            <p className="text-xl text-zinc-500 mb-12 font-light leading-relaxed">
              Atuamos em um raio estratégico de 200km. Nossa logística é desenhada para que a qualidade monumental da Formatto chegue intacta de Rio Verde a Mineiros.
            </p>
            
            <div className="grid grid-cols-2 gap-8 pt-6 border-t border-zinc-100">
               <div>
                  <h4 className="font-bold text-lg text-formatto-blue mb-2 tracking-tighter">DISTÂNCIA ZERO</h4>
                  <p className="text-sm text-zinc-400">Entrega rápida para todo o polo agroindustrial do Sudoeste.</p>
               </div>
               <div>
                  <h4 className="font-bold text-lg text-formatto-blue mb-2 tracking-tighter">QUALIDADE REAL</h4>
                  <p className="text-sm text-zinc-400">O mesmo padrão de elite em 100% da zona de cobertura.</p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
