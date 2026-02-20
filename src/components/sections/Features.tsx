"use client";
import { motion } from "framer-motion";
import { Truck, Cpu, Award, Zap } from "lucide-react";

const features = [
  {
    icon: <Cpu className="w-8 h-8" />,
    title: "Orquestração Nix",
    desc: "Nossa IA de B2B qualifica seu projeto e otimiza o fluxo de produção, garantindo prazos imbatíveis."
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Tecnologia CNC & Laser",
    desc: "Precisão micrométrica para cortes em ACM, acrílico e metais, elevando o padrão estético da sua fachada."
  },
  {
    icon: <Truck className="w-8 h-8" />,
    title: "Logística Regional",
    desc: "Frota própria e equipe de instalação dedicada para atender Rio Verde, Jataí, Mineiros e região."
  },
  {
    icon: <Award className="w-8 h-8" />,
    title: "Padrão Diamante",
    desc: "Cada entrega passa por um rigoroso controle de qualidade antes de sair de nossa fábrica inteligente."
  }
];

export default function Features() {
  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {features.map((f, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              <div className="text-formatto-blue mb-6 group-hover:scale-110 transition-transform duration-300">{f.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-formatto-dark">{f.title}</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
