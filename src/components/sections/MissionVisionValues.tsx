"use client";
import { motion } from "framer-motion";
import { Target, Eye, ShieldCheck, Gem } from "lucide-react";

const principles = [
  {
    icon: <Target className="w-10 h-10" />,
    title: "MISSÃO",
    text: "Transformar a visão de nossos parceiros em realidade monumental, utilizando tecnologia de impressão de última geração e precisão industrial para gerar impacto imediato.",
    color: "bg-formatto-blue"
  },
  {
    icon: <Eye className="w-10 h-10" />,
    title: "VISÃO",
    text: "Ser o epicentro da comunicação visual B2B no Sudoeste Goiano, definindo o padrão de qualidade, velocidade e soberania tecnológica da região até 2027.",
    color: "bg-formatto-red"
  },
  {
    icon: <ShieldCheck className="w-10 h-10" />,
    title: "VALORES",
    text: "Precisão Cirúrgica, Soberania Técnica, Lealdade absoluta aos prazos e Inovação Agêntica através do Diamante-OS.",
    color: "bg-formatto-accent"
  }
];

export default function MissionVisionValues() {
  return (
    <section className="py-40 bg-zinc-50 overflow-hidden border-b border-zinc-100">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start justify-between mb-24 gap-12">
           <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-1 bg-formatto-magenta" />
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-400">Excelência B2B</span>
              </div>
              <h2 className="text-6xl md:text-8xl font-headline leading-[0.85] text-formatto-black mb-8 tracking-tighter">
                O DNA DA <br/> <span className="text-formatto-blue">QUALIDADE EXTREMA.</span>
              </h2>
              <p className="text-xl md:text-2xl text-zinc-500 font-light leading-relaxed">
                Não somos apenas uma gráfica. Somos o <span className="font-bold text-formatto-black">braço de execução estratégica</span> das maiores marcas do Sudoeste Goiano.
              </p>
           </div>
           <div className="hidden lg:flex items-center gap-4 opacity-10">
              <div className="w-1 h-32 bg-formatto-blue" />
              <div className="w-1 h-48 bg-formatto-magenta" />
              <div className="w-1 h-32 bg-formatto-yellow" />
           </div>
        </div>

        <div className="grid md:grid-cols-3 gap-16">
          {principles.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="relative group"
            >
              <div className={`w-16 h-16 ${p.color} flex items-center justify-center text-white mb-10 group-hover:scale-110 transition-transform duration-500 shadow-2xl rounded-sm`}>
                {p.icon}
              </div>
              <h3 className="text-3xl font-headline mb-6 text-formatto-black tracking-widest uppercase">{p.title}</h3>
              <p className="text-zinc-500 leading-relaxed font-normal text-sm border-l-2 border-zinc-200 pl-6 group-hover:border-formatto-blue transition-colors duration-500">
                {p.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
