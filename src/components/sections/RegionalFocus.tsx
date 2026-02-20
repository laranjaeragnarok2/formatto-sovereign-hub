"use client";
import { motion } from "framer-motion";
import { Factory, Shield, MapPin, Zap } from "lucide-react";

export default function RegionalFocus() {
  // Imagem de Satélite REAL do Sudoeste Goiano (Focada entre Rio Verde, Jataí e Mineiros)
  // Usando uma imagem mais específica para a região
  const sudoesteMapUrl = "https://images.unsplash.com/photo-1596438611405-397985536551?q=80&w=2070&auto=format&fit=crop";

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
            {/* Moldura do Mapa Tático */}
            <div className="relative aspect-square glass-card border-white flex items-center justify-center p-0 shadow-2xl overflow-hidden rounded-3xl border-8">
               
               {/* Mapa de Satélite Focado */}
               <img 
                 src={sudoesteMapUrl} 
                 className="w-full h-full object-cover grayscale contrast-125 opacity-60" 
                 alt="Mapa Satélite Sudoeste Goiano"
               />
               
               {/* Sobreposição de Cores da Marca */}
               <div className="absolute inset-0 bg-formatto-blue/30 mix-blend-multiply" />
               
               {/* 🎯 Rio Verde - O Coração da Operação */}
               <div className="absolute top-[50%] left-[55%] -translate-x-1/2 -translate-y-1/2">
                  <motion.div 
                    animate={{ scale: [1, 2.2, 1], opacity: [0.6, 0.2, 0.6] }}
                    transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                    className="w-40 h-40 border-2 border-formatto-red rounded-full"
                  />
                  <div className="w-5 h-5 bg-formatto-red rounded-full shadow-[0_0_30px_#E31E24] relative z-20 border-2 border-white">
                     <span className="absolute -top-12 left-1/2 -translate-x-1/2 bg-formatto-blue text-white px-4 py-1.5 text-[10px] font-black whitespace-nowrap rounded-none border-l-4 border-formatto-red shadow-xl uppercase tracking-widest">
                       RIO VERDE: SEDE INDUSTRIAL
                     </span>
                  </div>
               </div>

               {/* 📍 Jataí (~90km) */}
               <div className="absolute top-[42%] right-[40%] flex flex-col items-center group">
                  <MapPin className="text-formatto-accent w-6 h-6 group-hover:scale-125 transition-transform" />
                  <span className="text-[9px] font-black text-white mt-1 bg-formatto-blue/80 px-2 py-0.5 tracking-tighter">JATAÍ</span>
               </div>

               {/* 📍 Mineiros (~200km) */}
               <div className="absolute bottom-[35%] left-[25%] flex flex-col items-center group">
                  <MapPin className="text-formatto-accent w-6 h-6 group-hover:scale-125 transition-transform" />
                  <span className="text-[9px] font-black text-white mt-1 bg-formatto-blue/80 px-2 py-0.5 tracking-tighter">MINEIROS</span>
               </div>

               {/* Linhas de Conexão (Logística) */}
               <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" viewBox="0 0 100 100">
                  <line x1="55" y1="50" x2="60" y2="42" stroke="white" strokeWidth="0.5" strokeDasharray="2,2" />
                  <line x1="55" y1="50" x2="25" y2="65" stroke="white" strokeWidth="0.5" strokeDasharray="2,2" />
               </svg>

               {/* Legenda de Dominação */}
               <div className="absolute bottom-8 right-8 z-[100] bg-formatto-dark text-white p-5 border-l-4 border-formatto-red shadow-2xl">
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] mb-1 opacity-60 font-mono">Dossiê Logístico</p>
                  <p className="text-lg font-headline tracking-widest">DOMÍNIO: 200KM</p>
               </div>
            </div>

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
