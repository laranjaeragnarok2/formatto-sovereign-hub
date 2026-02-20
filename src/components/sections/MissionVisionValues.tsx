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
    <section className="py-32 bg-zinc-50 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
           <div className="max-w-2xl">
              <span className="label-red mb-4 inline-block">Fundamentos</span>
              <h2 className="section-title">O DNA DA <br/> SOBERANIA.</h2>
              <p className="text-xl text-zinc-500 font-light">
                Não somos apenas uma gráfica. Somos o braço de execução visual das maiores marcas do estado.
              </p>
           </div>
           <div className="hidden lg:block">
              <Gem className="w-24 h-24 text-zinc-100 animate-pulse" />
           </div>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {principles.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="relative group"
            >
              <div className={`w-20 h-20 ${p.color} flex items-center justify-center text-white mb-8 group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                {p.icon}
              </div>
              <h3 className="text-3xl font-headline mb-4 text-formatto-blue tracking-wider">{p.title}</h3>
              <p className="text-zinc-600 leading-relaxed font-light italic">
                "{p.text}"
              </p>
              <div className="mt-8 h-1 w-0 bg-formatto-blue group-hover:w-full transition-all duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
