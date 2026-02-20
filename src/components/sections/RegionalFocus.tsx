"use client";
import { motion } from "framer-motion";
import { Map, Zap, Factory, Globe, MapPin } from "lucide-react";

export default function RegionalFocus() {
  return (
    <section id="expansao" className="py-40 bg-white relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="w-full h-full" style={{ backgroundImage: 'radial-gradient(#0A1F44 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            {/* Visual Coverage Area Map - Estilo Goiás Minimalist */}
            <div className="relative aspect-square glass-card border-zinc-200 flex items-center justify-center p-4 shadow-2xl overflow-hidden rounded-3xl bg-zinc-50/50">
               
               {/* Goiás Shape Outline (Abstract) */}
               <svg viewBox="0 0 200 200" className="absolute w-[90%] h-[90%] opacity-10 text-formatto-blue fill-current">
                  <path d="M40,60 L160,30 L180,120 L140,180 L60,170 L20,120 Z" />
               </svg>

               {/* Radius Pulse */}
               <motion.div 
                 initial={{ scale: 0.5, opacity: 0 }}
                 whileInView={{ scale: 1.5, opacity: [0, 0.2, 0] }}
                 transition={{ repeat: Infinity, duration: 4, ease: "easeOut" }}
                 className="absolute w-64 h-64 border border-formatto-red rounded-full" 
               />
               
               {/* Map Content */}
               <div className="text-center relative z-20">
                  <div className="mb-6 relative inline-block">
                    <div className="w-20 h-20 bg-formatto-blue rounded-2xl rotate-45 flex items-center justify-center shadow-2xl">
                       <Globe className="w-10 h-10 text-white -rotate-45" />
                    </div>
                    <motion.div 
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ repeat: Infinity, duration: 2 }}
                      className="absolute -top-2 -right-2 w-6 h-6 bg-formatto-red rounded-full flex items-center justify-center"
                    >
                      <MapPin className="w-3 h-3 text-white" />
                    </motion.div>
                  </div>
                  
                  <h3 className="text-5xl font-headline text-formatto-blue mb-2 tracking-tighter uppercase leading-none">Logística <br/> Soberana</h3>
                  <p className="text-[10px] font-black text-formatto-red uppercase tracking-[0.3em] mb-8 bg-white/80 py-1 px-4 border border-zinc-100 inline-block">
                    Raio de Atuação: 200KM
                  </p>
                  
                  <div className="grid grid-cols-1 gap-3 max-w-[200px] mx-auto text-left">
                     {[
                       { city: "RIO VERDE", type: "HUB CENTRAL", color: "text-formatto-red" },
                       { city: "JATAÍ", type: "PONTO TÉCNICO", color: "text-zinc-500" },
                       { city: "MINEIROS", type: "EXPANSÃO B2B", color: "text-zinc-500" }
                     ].map((item) => (
                       <div key={item.city} className="flex items-center justify-between border-b border-zinc-200/50 pb-1">
                          <span className="text-[11px] font-black text-formatto-blue tracking-widest">{item.city}</span>
                          <span className={`text-[8px] font-bold uppercase ${item.color}`}>{item.type}</span>
                       </div>
                     ))}
                  </div>
               </div>
               
               {/* Background Glow */}
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-radial-gradient from-formatto-blue/[0.03] to-transparent pointer-events-none" />
            </div>

            {/* Distance Info Tag */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-formatto-dark text-white px-8 py-3 text-[9px] font-mono tracking-[0.4em] uppercase shadow-2xl">
               Dominação Regional: Sudoeste Goiano
            </div>
          </motion.div>

          <div>
            <span className="label-red mb-6 inline-block">Proximidade Industrial</span>
            <h2 className="section-title">SUA FÁBRICA <br/> NO SUDOESTE.</h2>
            <p className="text-xl text-zinc-500 mb-12 font-light leading-relaxed">
              Estrategicamente posicionados em Rio Verde, reduzimos custos de frete e prazos de instalação para todo o sudoeste do estado. Sua marca não espera.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-10">
               <div className="group">
                  <div className="w-14 h-14 bg-zinc-100 flex items-center justify-center mb-6 group-hover:bg-formatto-blue group-hover:text-white transition-all duration-500">
                     <Factory className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-xl text-formatto-blue mb-3">Produção Local</h4>
                  <p className="text-sm text-zinc-500 leading-relaxed italic">"Nossa infraestrutura em Rio Verde é o seu maior diferencial competitivo."</p>
               </div>
               <div className="group">
                  <div className="w-14 h-14 bg-zinc-100 flex items-center justify-center mb-6 group-hover:bg-formatto-red group-hover:text-white transition-all duration-500">
                     <Zap className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-xl text-formatto-blue mb-3">Velocidade Nix</h4>
                  <p className="text-sm text-zinc-500 leading-relaxed italic">"Logística roteirizada por IA para instalações precisas e em tempo recorde."</p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
