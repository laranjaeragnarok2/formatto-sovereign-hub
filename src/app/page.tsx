"use client";
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import { motion } from "framer-motion";
import { ArrowRight, MessageSquare, Phone, MapPin } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-white selection:bg-formatto-red selection:text-white">
      {/* Header Corporativo High-End */}
      <header className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm border-b border-zinc-100 h-24 flex items-center">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex flex-col">
            <span className="text-3xl font-headline tracking-tighter text-formatto-blue leading-none">FORMATTO</span>
            <span className="text-[9px] font-black uppercase tracking-[0.4em] text-formatto-red">Arte e Impressão</span>
          </div>
          
          <nav className="hidden lg:flex gap-10 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">
            <a href="#" className="hover:text-formatto-blue transition-colors">Portfólio 2026</a>
            <a href="#" className="hover:text-formatto-blue transition-colors">Tecnologia UV</a>
            <a href="#" className="hover:text-formatto-blue transition-colors">Expansão Regional</a>
            <a href="#" className="text-formatto-red">Área B2B</a>
          </nav>
          
          <div className="flex items-center gap-6">
            <div className="hidden sm:flex flex-col items-end">
              <span className="text-[9px] font-bold text-zinc-400 uppercase tracking-widest">Rio Verde - GO</span>
              <span className="text-xs font-black text-formatto-blue">(64) 3612-7777</span>
            </div>
            <button className="text-[10px] font-black uppercase tracking-widest px-8 py-4 bg-formatto-blue text-white hover:bg-formatto-red transition-all duration-500 shadow-lg shadow-formatto-blue/20">
              Fale com Especialista
            </button>
          </div>
        </div>
      </header>

      <Hero />
      <Features />

      {/* Seção de Expansão e Inteligência */}
      <section className="section-padding bg-zinc-950 text-white overflow-hidden relative">
         <div className="absolute top-0 right-0 w-full h-full opacity-5 pointer-events-none">
            <div className="grid grid-cols-12 h-full">
              {[...Array(12)].map((_, i) => (
                <div key={i} className="border-r border-white h-full" />
              ))}
            </div>
         </div>
         
         <div className="container mx-auto relative z-10 grid lg:grid-cols-2 gap-24">
            <div>
              <span className="label-red mb-6 block w-fit">Relatório Sudoeste</span>
              <h2 className="text-6xl md:text-8xl font-headline mb-8 leading-[0.9]">Mapeamento <br /> de Mercado.</h2>
              <p className="text-zinc-400 text-lg mb-12 leading-relaxed font-light">
                A Formatto não apenas imprime; nós lideramos. Através do **Diamante-OS**, já mapeamos 46 oportunidades estratégicas no Sudoeste Goiano que exigem nossa qualidade monumental.
              </p>
              
              <div className="grid grid-cols-2 gap-10">
                 <div className="border-l-2 border-formatto-red pl-6">
                    <span className="block text-4xl font-headline text-white">46+</span>
                    <span className="text-[10px] uppercase tracking-widest text-zinc-500">Empresas Monitoradas</span>
                 </div>
                 <div className="border-l-2 border-formatto-accent pl-6">
                    <span className="block text-4xl font-headline text-white">100%</span>
                    <span className="text-[10px] uppercase tracking-widest text-zinc-500">Cura UV Garantida</span>
                 </div>
              </div>
            </div>
            
            <div className="bg-white/5 border border-white/10 p-12 backdrop-blur-sm relative">
               <div className="absolute top-0 right-0 w-24 h-24 bg-formatto-blue/20 blur-3xl" />
               <h3 className="text-3xl font-headline mb-6 text-white tracking-wider">Expandir Marca B2B</h3>
               <form className="space-y-4">
                  <input type="text" placeholder="Empresa" className="w-full bg-white/5 border border-white/10 p-4 text-sm focus:border-formatto-accent transition-colors outline-none text-white" />
                  <input type="email" placeholder="E-mail" className="w-full bg-white/5 border border-white/10 p-4 text-sm focus:border-formatto-accent transition-colors outline-none text-white" />
                  <textarea placeholder="Descreva seu projeto monumental..." rows={4} className="w-full bg-white/5 border border-white/10 p-4 text-sm focus:border-formatto-accent transition-colors outline-none text-white"></textarea>
                  <button className="btn-primary w-full flex items-center justify-center gap-3">
                    SOLICITAR ANALISE TECNICA <ArrowRight className="w-4 h-4" />
                  </button>
               </form>
               <p className="mt-6 text-[9px] uppercase tracking-[0.3em] text-center text-zinc-600">
                 System Orchestrated by Nix Agêntico
               </p>
            </div>
         </div>
      </section>

      {/* Agente de Atendimento Nix */}
      <div className="fixed bottom-8 right-8 z-[100]">
         <motion.button 
            whileHover={{ scale: 1.05 }}
            className="w-16 h-16 bg-formatto-blue text-white rounded-none flex items-center justify-center shadow-2xl group relative"
         >
            <MessageSquare className="w-6 h-6" />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-formatto-red rounded-full" />
            
            <div className="absolute right-20 bg-white text-formatto-blue px-6 py-3 text-[10px] font-black uppercase tracking-widest whitespace-nowrap shadow-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-5 group-hover:translate-x-0">
              Consultoria Nix: Online
            </div>
         </motion.button>
      </div>

      <footer className="py-20 bg-white text-center border-t border-zinc-100">
         <div className="container mx-auto px-6">
            <div className="text-3xl font-headline tracking-tighter text-formatto-blue mb-4">FORMATTO</div>
            <p className="text-[10px] text-zinc-400 uppercase tracking-[0.3em]">
              © 2026 • Formatto Arte e Impressão • Rio Verde, GO • Especialistas em Grande Formato
            </p>
         </div>
      </footer>
    </main>
  );
}
