"use client";
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import MissionVisionValues from "@/components/sections/MissionVisionValues";
import RegionalFocus from "@/components/sections/RegionalFocus";
import { motion, useScroll, useSpring } from "framer-motion";
import { ArrowRight, MessageSquare, Instagram, Facebook, Phone, Mail, MapPin, Shield } from "lucide-react";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <main className="min-h-screen bg-white selection:bg-formatto-red selection:text-white">
      {/* Scroll Progress Bar (Eyecandy) */}
      <motion.div className="fixed top-0 left-0 right-0 h-1.5 bg-formatto-red z-[100] origin-left" style={{ scaleX }} />

      {/* Header Corporativo High-End */}
      <header className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-zinc-100 h-24 flex items-center">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex flex-col">
            <span className="text-3xl font-headline tracking-tighter text-formatto-blue leading-none">FORMATTO</span>
            <span className="text-[9px] font-black uppercase tracking-[0.4em] text-formatto-red">Arte e Impressão</span>
          </div>
          
          <nav className="hidden lg:flex gap-10 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">
            <a href="#portfolio" className="hover:text-formatto-blue transition-colors">Portfólio 2026</a>
            <a href="#tecnologia" className="hover:text-formatto-blue transition-colors">Tecnologia UV</a>
            <a href="#expansao" className="hover:text-formatto-blue transition-colors">Expansão Regional</a>
            <a href="#b2b" className="text-formatto-red">Área B2B</a>
          </nav>
          
          <div className="flex items-center gap-6">
            <div className="hidden sm:flex flex-col items-end">
              <span className="text-[9px] font-bold text-zinc-400 uppercase tracking-widest text-right">Rio Verde - GO</span>
              <span className="text-xs font-black text-formatto-blue">(64) 3612-7777</span>
            </div>
            <button className="text-[10px] font-black uppercase tracking-widest px-8 py-4 bg-formatto-blue text-white hover:bg-formatto-red transition-all duration-500 shadow-lg shadow-formatto-blue/20">
              Fale com Especialista
            </button>
          </div>
        </div>
      </header>

      <div className="space-y-0 pt-24">
        <Hero />
        <Features />
        <MissionVisionValues />
        <RegionalFocus />

        {/* Seção de Expansão e Inteligência */}
        <section id="b2b" className="py-40 bg-zinc-950 text-white overflow-hidden relative">
           <div className="absolute top-0 right-0 w-full h-full opacity-5 pointer-events-none">
              <div className="grid grid-cols-12 h-full">
                {[...Array(12)].map((_, i) => (
                  <div key={i} className="border-r border-white h-full" />
                ))}
              </div>
           </div>
           
           <div className="container mx-auto relative z-10 grid lg:grid-cols-2 gap-24 px-6">
              <div>
                <span className="label-red mb-6 block w-fit">Relatório Sudoeste</span>
                <h2 className="text-6xl md:text-[100px] font-headline mb-8 leading-[0.85] tracking-tighter">MAPEAMENTO <br /> DE MERCADO.</h2>
                <p className="text-zinc-400 text-xl mb-12 leading-relaxed font-light max-w-lg">
                  Através do **Diamante-OS**, monitoramos oportunidades reais. Nossa tecnologia não apenas imprime; ela identifica onde sua marca deve brilhar no Sudoeste Goiano.
                </p>
                
                <div className="grid grid-cols-2 gap-10">
                   <div className="border-l-2 border-formatto-red pl-6">
                      <span className="block text-4xl font-headline text-white">46+</span>
                      <span className="text-[10px] uppercase tracking-widest text-zinc-500">Alvos Monitorados</span>
                   </div>
                   <div className="border-l-2 border-formatto-accent pl-6">
                      <span className="block text-4xl font-headline text-white">100%</span>
                      <span className="text-[10px] uppercase tracking-widest text-zinc-500">Cura UV Digital</span>
                   </div>
                </div>
              </div>
              
              <div className="bg-white/[0.03] border border-white/10 p-12 backdrop-blur-xl relative shadow-2xl">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-formatto-blue/20 blur-[80px]" />
                 <h3 className="text-4xl font-headline mb-8 text-white tracking-wider uppercase leading-none">Expandir Marca <br/> B2B Soberana</h3>
                 <form className="space-y-6">
                    <div>
                      <label className="text-[10px] font-black uppercase text-zinc-500 mb-2 block tracking-widest">Empresa</label>
                      <input type="text" placeholder="EX: AGROFORTE" className="w-full bg-white/5 border border-white/10 p-5 text-sm focus:border-formatto-accent transition-all outline-none text-white uppercase tracking-widest font-bold" />
                    </div>
                    <div>
                      <label className="text-[10px] font-black uppercase text-zinc-500 mb-2 block tracking-widest">E-mail Corporativo</label>
                      <input type="email" placeholder="CONTATO@EMPRESA.COM.BR" className="w-full bg-white/5 border border-white/10 p-5 text-sm focus:border-formatto-accent transition-all outline-none text-white uppercase tracking-widest font-bold" />
                    </div>
                    <div>
                      <label className="text-[10px] font-black uppercase text-zinc-500 mb-2 block tracking-widest">Projeto</label>
                      <textarea placeholder="DESCREVA SEU PROJETO MONUMENTAL..." rows={3} className="w-full bg-white/5 border border-white/10 p-5 text-sm focus:border-formatto-accent transition-all outline-none text-white uppercase tracking-widest font-bold"></textarea>
                    </div>
                    <button className="btn-primary w-full flex items-center justify-center gap-3 font-black py-6 shadow-xl shadow-formatto-red/10">
                      SOLICITAR ANÁLISE TÉCNICA <ArrowRight className="w-5 h-5" />
                    </button>
                 </form>
                 <p className="mt-8 text-[9px] uppercase tracking-[0.4em] text-center text-zinc-600 font-mono">
                   System Orchestrated by Nix Agêntico
                 </p>
              </div>
           </div>
        </section>
      </div>

      {/* Footer de Elite */}
      <footer className="bg-white border-t border-zinc-100">
         <div className="container mx-auto px-6 py-24">
            <div className="grid md:grid-cols-4 gap-16">
               <div className="col-span-1 md:col-span-1">
                  <div className="flex flex-col mb-8">
                    <span className="text-4xl font-headline tracking-tighter text-formatto-blue leading-none">FORMATTO</span>
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-formatto-red">Arte e Impressão</span>
                  </div>
                  <p className="text-sm text-zinc-400 font-light leading-relaxed mb-8">
                    A maior infraestrutura de comunicação visual do Sudoeste Goiano. Tecnologia industrial para marcas soberanas.
                  </p>
                  <div className="flex gap-4">
                     <a href="#" className="w-10 h-10 border border-zinc-100 flex items-center justify-center text-formatto-blue hover:bg-formatto-blue hover:text-white transition-all"><Instagram className="w-4 h-4" /></a>
                     <a href="#" className="w-10 h-10 border border-zinc-100 flex items-center justify-center text-formatto-blue hover:bg-formatto-blue hover:text-white transition-all"><Facebook className="w-4 h-4" /></a>
                  </div>
               </div>

               <div>
                  <h4 className="text-[10px] font-black uppercase text-zinc-300 tracking-[0.3em] mb-8">Navegação</h4>
                  <ul className="space-y-4 text-xs font-bold uppercase tracking-widest text-zinc-500">
                     <li><a href="#expansao" className="hover:text-formatto-blue transition-colors">Tecnologia UV</a></li>
                     <li><a href="#b2b" className="hover:text-formatto-blue transition-colors">Portfólio B2B</a></li>
                     <li><a href="#expansao" className="hover:text-formatto-blue transition-colors">Sudoeste Regional</a></li>
                     <li><a href="#" className="hover:text-formatto-blue transition-colors">Área Restrita</a></li>
                  </ul>
               </div>

               <div>
                  <h4 className="text-[10px] font-black uppercase text-zinc-300 tracking-[0.3em] mb-8">Contato Central</h4>
                  <ul className="space-y-6">
                     <li className="flex gap-4">
                        <Phone className="w-4 h-4 text-formatto-red" />
                        <div>
                           <p className="text-[10px] font-black text-zinc-300 uppercase tracking-widest">Atendimento</p>
                           <p className="text-sm font-bold text-formatto-blue">(64) 3612-7777</p>
                        </div>
                     </li>
                     <li className="flex gap-4">
                        <Mail className="w-4 h-4 text-formatto-red" />
                        <div>
                           <p className="text-[10px] font-black text-zinc-300 uppercase tracking-widest">E-mail</p>
                           <p className="text-sm font-bold text-formatto-blue">formato@formatocomunicacaovisual.com.br</p>
                        </div>
                     </li>
                  </ul>
               </div>

               <div>
                  <h4 className="text-[10px] font-black uppercase text-zinc-300 tracking-[0.3em] mb-8">Unidade Rio Verde</h4>
                  <li className="flex gap-4 list-none">
                     <MapPin className="w-4 h-4 text-formatto-red shrink-0" />
                     <p className="text-xs text-zinc-400 font-bold leading-relaxed uppercase tracking-tighter">
                        Rua Joaquim Custódio Araújo, 969 <br/> Jardim Bela Vista <br/> CEP 75906-440
                     </p>
                  </li>
                  <div className="mt-8 p-4 bg-zinc-50 border border-zinc-100">
                     <div className="flex items-center gap-3">
                        <Shield className="w-4 h-4 text-formatto-green" />
                        <span className="text-[8px] font-black text-zinc-400 uppercase tracking-widest">Site Protegido por Diamante-OS</span>
                     </div>
                  </div>
               </div>
            </div>

            <div className="mt-24 pt-12 border-t border-zinc-50 flex flex-col md:flex-row justify-between items-center gap-8">
               <p className="text-[9px] font-bold text-zinc-300 uppercase tracking-[0.4em]">© 2026 Formatto Comunicação Visual • Todos os direitos reservados</p>
               <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-[9px] font-black text-formatto-blue uppercase tracking-widest">Sudoeste Operational Network</span>
               </div>
            </div>
         </div>
      </footer>

      {/* Agente de Atendimento Nix */}
      <div className="fixed bottom-8 right-8 z-[100]">
         <motion.button 
            whileHover={{ scale: 1.05 }}
            className="w-20 h-20 bg-formatto-blue text-white rounded-none flex items-center justify-center shadow-2xl group relative"
         >
            <MessageSquare className="w-8 h-8" />
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-formatto-red rounded-full" />
            
            <div className="absolute right-24 bg-white text-formatto-blue px-8 py-4 text-[11px] font-black uppercase tracking-[0.2em] whitespace-nowrap shadow-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-5 group-hover:translate-x-0 border-l-4 border-formatto-red">
              Consultoria Nix: Online
            </div>
         </motion.button>
      </div>
    </main>
  );
}
