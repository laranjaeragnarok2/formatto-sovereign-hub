"use client";
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import { motion } from "framer-motion";
import { ArrowRight, MessageSquare } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-50">
      {/* Header Corporativo */}
      <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-zinc-100 h-20 flex items-center">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-formatto-blue" />
            <span className="text-xl font-bold tracking-tighter text-formatto-dark">FORMATTO</span>
          </div>
          <nav className="hidden lg:flex gap-8 text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">
            <a href="#" className="hover:text-formatto-blue transition-colors">Infraestrutura</a>
            <a href="#" className="hover:text-formatto-blue transition-colors">Projetos B2B</a>
            <a href="#" className="hover:text-formatto-blue transition-colors">Sudoeste Digital</a>
            <a href="#" className="text-formatto-blue">Fale com Consultor</a>
          </nav>
          <button className="text-[10px] font-black uppercase tracking-widest px-6 py-3 border-2 border-formatto-dark hover:bg-formatto-dark hover:text-white transition-all">
            Área do Cliente
          </button>
        </div>
      </header>

      <Hero />
      <Features />

      {/* Seção de Expansão e Dados */}
      <section className="section-padding bg-formatto-dark text-white overflow-hidden relative">
         <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
            <div className="grid grid-cols-12 h-full">
              {[...Array(12)].map((_, i) => (
                <div key={i} className="border-r border-white h-full" />
              ))}
            </div>
         </div>
         
         <div className="container mx-auto relative z-10 grid lg:grid-cols-2 gap-24">
            <div>
              <h2 className="text-5xl md:text-7xl mb-8 leading-none">DOMINÂNCIA <br /> REGIONAL.</h2>
              <p className="text-zinc-400 text-lg mb-12 leading-relaxed">
                Nossa visão 2026: Tornar a Formatto o epicentro da comunicação visual no Sudoeste. Já mapeamos os 46 principais ativos regionais que exigem nossa qualidade.
              </p>
              
              <div className="space-y-6">
                 <div className="flex items-center gap-6">
                    <span className="text-4xl font-headline text-luxury-gold">100%</span>
                    <span className="text-xs uppercase tracking-widest text-zinc-300">Precisão em corte a laser</span>
                 </div>
                 <div className="flex items-center gap-6">
                    <span className="text-4xl font-headline text-luxury-gold">46+</span>
                    <span className="text-xs uppercase tracking-widest text-zinc-300">Empresas mapeadas no Sudoeste</span>
                 </div>
                 <div className="flex items-center gap-6">
                    <span className="text-4xl font-headline text-luxury-gold">24/7</span>
                    <span className="text-xs uppercase tracking-widest text-zinc-300">Orquestração agêntica NIX</span>
                 </div>
              </div>
            </div>
            
            <div className="bg-white/5 border border-white/10 p-12 backdrop-blur-xl">
               <h3 className="text-2xl font-bold mb-6">Inicie sua expansão agora</h3>
               <form className="space-y-4">
                  <input type="text" placeholder="Nome da sua empresa" className="w-full bg-white/5 border border-white/10 p-4 text-sm focus:border-luxury-gold transition-colors outline-none" />
                  <input type="email" placeholder="E-mail corporativo" className="w-full bg-white/5 border border-white/10 p-4 text-sm focus:border-luxury-gold transition-colors outline-none" />
                  <textarea placeholder="Fale sobre seu projeto" rows={4} className="w-full bg-white/5 border border-white/10 p-4 text-sm focus:border-luxury-gold transition-colors outline-none"></textarea>
                  <button className="btn-luxury w-full flex items-center justify-center gap-3">
                    SOLICITAR ANÁLISE TÉCNICA <ArrowRight className="w-4 h-4" />
                  </button>
               </form>
               <p className="mt-6 text-[9px] uppercase tracking-widest text-center text-zinc-500">
                 Sua marca protegida por Diamante-OS Sovereign Encryption
               </p>
            </div>
         </div>
      </section>

      {/* Lead Capture Floating Agent */}
      <div className="fixed bottom-8 right-8 z-[100]">
         <button className="w-16 h-16 bg-formatto-blue text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform group relative">
            <MessageSquare className="w-6 h-6" />
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full" />
            
            <div className="absolute right-20 bg-white text-zinc-800 px-4 py-2 text-xs font-bold whitespace-nowrap shadow-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none rounded">
              Olá! Sou o NIX. Vamos falar do seu projeto?
            </div>
         </button>
      </div>

      <footer className="py-20 bg-zinc-100 text-center border-t border-zinc-200">
         <div className="container mx-auto px-6">
            <div className="text-xl font-bold tracking-tighter text-formatto-dark mb-4">FORMATTO</div>
            <p className="text-xs text-zinc-400 uppercase tracking-widest">
              © 2026 • Formatto Comunicação Visual • Rio Verde, GO • 00.000.000/0001-00
            </p>
            <div className="mt-8 flex justify-center gap-6 text-[10px] font-bold text-zinc-500 uppercase tracking-widest">
               <a href="#" className="hover:text-formatto-blue">Políticas</a>
               <a href="#" className="hover:text-formatto-blue">LGPD</a>
               <a href="#" className="hover:text-formatto-blue">Acesso Restrito</a>
            </div>
         </div>
      </footer>
    </main>
  );
}
