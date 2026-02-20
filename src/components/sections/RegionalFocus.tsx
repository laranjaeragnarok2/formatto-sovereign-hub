"use client";
import { motion } from "framer-motion";
import { Factory, Zap, Globe, Shield } from "lucide-react";
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
            <RegionalMap />
            
            {/* Distance Info Tag */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 z-20 bg-formatto-dark text-white px-8 py-3 text-[9px] font-mono tracking-[0.4em] uppercase shadow-2xl">
               Sudoeste Operacional: Rio Verde ↔ Mineiros
            </div>
          </motion.div>

          <div>
            <span className="label-red mb-6 inline-block">Proximidade Industrial</span>
            <h2 className="section-title">LOGÍSTICA <br/> DE ELITE.</h2>
            <p className="text-xl text-zinc-500 mb-12 font-light leading-relaxed">
              Atuamos em um raio estratégico de 200km ao redor de Rio Verde. Nossa frota própria garante que a qualidade industrial da Formatto chegue intacta aos grandes polos do Sudoeste.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-10">
               <div className="group">
                  <div className="w-14 h-14 bg-white shadow-md flex items-center justify-center mb-6 group-hover:bg-formatto-blue group-hover:text-white transition-all duration-500">
                     <Factory className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-xl text-formatto-blue mb-3 uppercase tracking-tighter">Parque Regional</h4>
                  <p className="text-sm text-zinc-400 leading-relaxed italic font-light">"Produção centralizada em Rio Verde para garantir a soberania do prazo."</p>
               </div>
               <div className="group">
                  <div className="w-14 h-14 bg-white shadow-md flex items-center justify-center mb-6 group-hover:bg-formatto-red group-hover:text-white transition-all duration-500">
                     <Shield className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-xl text-formatto-blue mb-3 uppercase tracking-tighter">Instalação Segura</h4>
                  <p className="text-sm text-zinc-400 leading-relaxed italic font-light">"Equipes técnicas especializadas em fachadas de alta complexidade."</p>
               </div>
            </div>
            
            <div className="mt-12 p-8 bg-white border border-zinc-100 flex items-center justify-between shadow-sm">
               <div className="flex items-center gap-4">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-ping" />
                  <span className="text-[10px] font-black uppercase text-formatto-blue tracking-widest">Atendimento Ativo agora</span>
               </div>
               <span className="text-xs font-bold text-zinc-300">200km de Cobertura</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
