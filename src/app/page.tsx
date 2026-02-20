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
    <main className="min-h-screen bg-white selection:bg-formatto-magenta selection:text-white">
      {/* Scroll Progress Bar */}
      <motion.div className="fixed top-0 left-0 right-0 h-1.5 cmyk-gradient z-[100] origin-left" style={{ scaleX }} />

      {/* Header Corporativo High-End */}
      <header className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm border-b border-zinc-100 h-24 flex items-center">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex flex-col group cursor-pointer">
            <span className="text-3xl font-headline tracking-tighter text-formatto-black leading-none group-hover:text-formatto-blue transition-colors">FORMATTO</span>
            <span className="text-[9px] font-black uppercase tracking-[0.4em] text-zinc-400">Comunicação Visual</span>
          </div>
          
          <nav className="hidden lg:flex gap-10 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">
            <a href="#portfolio" className="hover:text-formatto-magenta transition-colors">Portfólio Industrial</a>
            <a href="#tecnologia" className="hover:text-formatto-magenta transition-colors">Maquinário</a>
            <a href="#expansao" className="hover:text-formatto-magenta transition-colors">Cobertura Sudoeste</a>
            <a href="#b2b" className="text-formatto-blue">Unidade B2B</a>
          </nav>
          
          <div className="flex items-center gap-6">
            <div className="hidden sm:flex flex-col items-end">
              <span className="text-[9px] font-bold text-zinc-300 uppercase tracking-widest text-right">Rio Verde - GO</span>
              <span className="text-xs font-black text-formatto-black hover:text-formatto-blue transition-colors cursor-pointer">(64) 3612-7777</span>
            </div>
            <button className="text-[10px] font-black uppercase tracking-widest px-8 py-4 bg-formatto-black text-white hover:bg-formatto-magenta transition-all duration-500 shadow-xl">
              Falar com Especialista
            </button>
          </div>
        </div>
      </header>

      <div className="space-y-0 pt-24">
        <Hero />
        <Features />
        <MissionVisionValues />
        <RegionalFocus />

        {/* Seção de Expansão B2B */}
        <section id="b2b" className="py-40 bg-formatto-black text-white overflow-hidden relative">
           <div className="absolute top-0 right-0 w-full h-full opacity-5 pointer-events-none">
              <div className="grid grid-cols-12 h-full">
                {[...Array(12)].map((_, i) => (
                  <div key={i} className="border-r border-white h-full" />
                ))}
              </div>
           </div>
           
           <div className="container mx-auto relative z-10 grid lg:grid-cols-2 gap-24 px-6">
              <div>
                <span className="bg-formatto-magenta text-white px-3 py-1 text-[10px] font-black uppercase tracking-widest mb-6 block w-fit">Relatório Estratégico</span>
                <h2 className="text-6xl md:text-[100px] font-headline mb-8 leading-[0.85] tracking-tighter">TRANSFORME <br /> SEU PONTO.</h2>
                <p className="text-zinc-400 text-xl mb-12 leading-relaxed font-light max-w-lg">
                  Lideramos a comunicação visual do Sudoeste Goiano com entregas monumentais. Sua marca merece a visibilidade que só a nossa infraestrutura industrial pode oferecer.
                </p>
                
                <div className="grid grid-cols-2 gap-10">
                   <div className="border-l-2 border-formatto-magenta pl-6">
                      <span className="block text-4xl font-headline text-white">200KM</span>
                      <span className="text-[10px] uppercase tracking-widest text-zinc-500">Raio de Atendimento</span>
                   </div>
                   <div className="border-l-2 border-formatto-blue pl-6">
                      <span className="block text-4xl font-headline text-white">100%</span>
                      <span className="text-[10px] uppercase tracking-widest text-zinc-500">Qualidade Garantida</span>
                   </div>
                </div>
              </div>
              
              <div className="bg-white/[0.03] border border-white/10 p-12 backdrop-blur-xl relative shadow-2xl">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-formatto-blue/10 blur-[80px]" />
                 <h3 className="text-4xl font-headline mb-8 text-white tracking-wider uppercase leading-none">Análise Visual <br/> de Marca B2B</h3>
                 <form className="space-y-6">
                    <div>
                      <label className="text-[10px] font-black uppercase text-zinc-500 mb-2 block tracking-widest">Sua Empresa</label>
                      <input type="text" placeholder="EX: EMPRESA AGRO" className="w-full bg-white/5 border border-white/10 p-5 text-sm focus:border-formatto-blue transition-all outline-none text-white uppercase tracking-widest font-bold" />
                    </div>
                    <div>
                      <label className="text-[10px] font-black uppercase text-zinc-500 mb-2 block tracking-widest">E-mail Corporativo</label>
                      <input type="email" placeholder="CONTATO@EMPRESA.COM.BR" className="w-full bg-white/5 border border-white/10 p-5 text-sm focus:border-formatto-blue transition-all outline-none text-white uppercase tracking-widest font-bold" />
                    </div>
                    <div>
                      <label className="text-[10px] font-black uppercase text-zinc-500 mb-2 block tracking-widest">Descreva sua Necessidade</label>
                      <textarea placeholder="FACHADA, ADESIVAÇÃO DE FROTA, LETREIROS..." rows={3} className="w-full bg-white/5 border border-white/10 p-5 text-sm focus:border-formatto-blue transition-all outline-none text-white uppercase tracking-widest font-bold"></textarea>
                    </div>
                    <button className="w-full bg-white text-formatto-black flex items-center justify-center gap-3 font-black py-6 hover:bg-formatto-magenta hover:text-white transition-all duration-500 shadow-xl">
                      SOLICITAR CONSULTORIA <ArrowRight className="w-5 h-5" />
                    </button>
                 </form>
              </div>
           </div>
        </section>
      </div>

      {/* Footer Industrial */}
      <footer className="bg-white border-t border-zinc-100">
         <div className="container mx-auto px-6 py-24">
            <div className="grid md:grid-cols-4 gap-16">
               <div>
                  <div className="flex flex-col mb-8">
                    <span className="text-4xl font-headline tracking-tighter text-formatto-black leading-none">FORMATTO</span>
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-300">Rio Verde - GO</span>
                  </div>
                  <p className="text-sm text-zinc-400 font-light leading-relaxed mb-8">
                    A maior infraestrutura industrial de comunicação visual do Sudoeste. Qualidade monumental em cada pixel impresso.
                  </p>
                  <div className="flex gap-4">
                     <a href="#" className="w-10 h-10 border border-zinc-100 flex items-center justify-center text-formatto-black hover:bg-formatto-blue hover:text-white transition-all"><Instagram className="w-4 h-4" /></a>
                     <a href="#" className="w-10 h-10 border border-zinc-100 flex items-center justify-center text-formatto-black hover:bg-formatto-blue hover:text-white transition-all"><Facebook className="w-4 h-4" /></a>
                  </div>
               </div>

               <div>
                  <h4 className="text-[10px] font-black uppercase text-zinc-300 tracking-[0.3em] mb-8">Nossa Expertise</h4>
                  <ul className="space-y-4 text-xs font-bold uppercase tracking-widest text-zinc-500">
                     <li><a href="#" className="hover:text-formatto-blue transition-colors">Fachadas em ACM</a></li>
                     <li><a href="#" className="hover:text-formatto-blue transition-colors">Adesivos de Alta Cura</a></li>
                     <li><a href="#" className="hover:text-formatto-blue transition-colors">Letreiros Luminosos</a></li>
                     <li><a href="#" className="hover:text-formatto-blue transition-colors">Plotagem de Frotas</a></li>
                  </ul>
               </div>

               <div>
                  <h4 className="text-[10px] font-black uppercase text-zinc-300 tracking-[0.3em] mb-8">Canais de Vendas</h4>
                  <ul className="space-y-6">
                     <li className="flex gap-4">
                        <Phone className="w-4 h-4 text-formatto-magenta" />
                        <div>
                           <p className="text-[10px] font-black text-zinc-300 uppercase tracking-widest">Matriz Rio Verde</p>
                           <p className="text-sm font-bold text-formatto-black">(64) 3612-7777</p>
                        </div>
                     </li>
                     <li className="flex gap-4">
                        <Mail className="w-4 h-4 text-formatto-magenta" />
                        <div>
                           <p className="text-[10px] font-black text-zinc-300 uppercase tracking-widest">Orcamentos</p>
                           <p className="text-sm font-bold text-formatto-black">formato@formatocomunicacaovisual.com.br</p>
                        </div>
                     </li>
                  </ul>
               </div>

               <div>
                  <h4 className="text-[10px] font-black uppercase text-zinc-300 tracking-[0.3em] mb-8">Onde Estamos</h4>
                  <li className="flex gap-4 list-none">
                     <MapPin className="w-4 h-4 text-formatto-magenta shrink-0" />
                     <p className="text-xs text-zinc-400 font-bold leading-relaxed uppercase tracking-tighter">
                        Rua Joaquim Custódio Araújo, 969 <br/> Jardim Bela Vista <br/> CEP 75906-440
                     </p>
                  </li>
                  <div className="mt-8 p-4 bg-zinc-50 border border-zinc-100 flex items-center gap-3">
                     <Shield className="w-4 h-4 text-formatto-blue" />
                     <span className="text-[9px] font-black text-zinc-400 uppercase tracking-widest">Infraestrutura Blindada 2026</span>
                  </div>
               </div>
            </div>

            <div className="mt-24 pt-12 border-t border-zinc-50 flex flex-col md:flex-row justify-between items-center gap-8">
               <p className="text-[9px] font-bold text-zinc-300 uppercase tracking-[0.4em]">© 2026 Formatto Arte e Impressão • Sudoeste Goiano • Brasil</p>
               <div className="flex items-center gap-4">
                  <div className="flex -space-x-1">
                    <div className="w-2 h-2 rounded-full bg-formatto-blue" />
                    <div className="w-2 h-2 rounded-full bg-formatto-magenta" />
                    <div className="w-2 h-2 rounded-full bg-formatto-yellow" />
                    <div className="w-2 h-2 rounded-full bg-formatto-black" />
                  </div>
                  <span className="text-[9px] font-black text-formatto-black uppercase tracking-widest">CMYK Precision Standard</span>
               </div>
            </div>
         </div>
      </footer>

      {/* Floating Action Center */}
      <div className="fixed bottom-8 right-8 z-[100]">
         <motion.button 
            whileHover={{ scale: 1.05 }}
            className="w-16 h-16 bg-formatto-black text-white rounded-none flex items-center justify-center shadow-2xl group relative"
         >
            <MessageSquare className="w-6 h-6" />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-formatto-magenta rounded-full" />
            
            <div className="absolute right-20 bg-formatto-black text-white px-6 py-3 text-[10px] font-black uppercase tracking-widest whitespace-nowrap shadow-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-5 group-hover:translate-x-0 border-l-4 border-formatto-blue">
              Consultoria B2B
            </div>
         </motion.button>
      </div>
    </main>
  );
}
