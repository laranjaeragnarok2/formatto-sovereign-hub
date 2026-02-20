"use client";
import { motion } from "framer-motion";
import { Map, Zap, Factory, Globe, MapPin } from "lucide-react";

export default function RegionalFocus() {
  return (
    <section id="expansao" className="py-32 bg-white relative overflow-hidden">
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
            className="relative"
          >
            {/* Visual Coverage Area Map */}
            <div className="relative aspect-square glass-card border-zinc-200 flex items-center justify-center p-4 shadow-2xl overflow-hidden rounded-full">
               {/* Radius Circle */}
               <motion.div 
                 initial={{ scale: 0 }}
                 whileInView={{ scale: 1 }}
                 transition={{ duration: 1.5, ease: "easeOut" }}
                 className="absolute w-[80%] h-[80%] border-2 border-dashed border-formatto-blue/20 rounded-full animate-[spin_20s_linear_infinite]" 
               />
               <div className="absolute w-[80%] h-[80%] bg-formatto-blue/[0.03] rounded-full" />
               
               <div className="text-center relative z-20 bg-white/40 p-10 backdrop-blur-xl rounded-full border border-white">
                  <h3 className="text-4xl font-headline text-formatto-blue mb-2 tracking-tighter">COBERTURA <br/> TOTAL</h3>
                  <p className="text-[10px] font-black text-formatto-red uppercase tracking-widest mb-6">Raio de ~200km</p>
                  <div className="space-y-2">
                     {["RIO VERDE", "JATAÍ", "MINEIROS"].map((city) => (
                       <div key={city} className="flex items-center justify-center gap-2">
                          <MapPin className="w-3 h-3 text-formatto-blue" />
                          <span className="text-[11px] font-bold text-zinc-500 uppercase tracking-widest">
                            {city}
                          </span>
                       </div>
                     ))}
                  </div>
               </div>
               
               {/* City Nodes */}
               {/* Rio Verde (Center) */}
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-formatto-red rounded-full shadow-[0_0_20px_#E31E24]" />
               
               {/* Jataí (~90km) */}
               <div className="absolute top-[40%] right-[35%] w-2 h-2 bg-formatto-blue rounded-full shadow-[0_0_15px_#0A1F44]" />
               
               {/* Mineiros (~200km) */}
               <div className="absolute bottom-[25%] left-[25%] w-2 h-2 bg-formatto-blue rounded-full shadow-[0_0_15px_#0A1F44]" />
            </div>

            {/* Distance Info Tag */}
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 bg-formatto-dark text-white px-6 py-2 text-[10px] font-mono tracking-widest uppercase">
               Rio Verde ➔ Mineiros: 200km de Soberania
            </div>
          </motion.div>

          <div>
            <span className="label-red mb-6 inline-block">Regional B2B</span>
            <h2 className="section-title">LOGÍSTICA <br/> DE ELITE.</h2>
            <p className="text-xl text-zinc-500 mb-10 font-light leading-relaxed">
              Atuamos em um raio estratégico de 200km ao redor de Rio Verde. Nossa frota própria garante que a qualidade industrial da Formatto chegue intacta aos grandes polos do Sudoeste.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-8">
               <div className="p-6 border-l-2 border-zinc-100 hover:border-formatto-blue transition-colors">
                  <Factory className="w-6 h-6 text-formatto-blue mb-4" />
                  <h4 className="font-bold text-formatto-blue mb-2">Polo Industrial</h4>
                  <p className="text-xs text-zinc-400">Produção centralizada em Rio Verde com tecnologia de cura UV.</p>
               </div>
               <div className="p-6 border-l-2 border-zinc-100 hover:border-formatto-blue transition-colors">
                  <Map className="w-6 h-6 text-formatto-blue mb-4" />
                  <h4 className="font-bold text-formatto-blue mb-2">Instalação Rápida</h4>
                  <p className="text-xs text-zinc-400">Equipes móveis em Jataí, Mineiros e Santa Helena de Goiás.</p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
