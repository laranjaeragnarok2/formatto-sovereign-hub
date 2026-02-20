"use client";
import { motion } from "framer-motion";
import { Truck, Printer, Award, Zap, Palette, Ruler } from "lucide-react";

const features = [
  {
    icon: <Palette className="w-8 h-8" />,
    title: "Precisão Cromática",
    desc: "Utilizamos o sistema CMYK de alta fidelidade para garantir que as cores da sua marca sejam impressas com perfeição absoluta."
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Tecnologia de Ponta",
    desc: "Maquinário industrial CNC e Laser para cortes milimétricos em ACM, acrílico, metais e grandes formatos."
  },
  {
    icon: <Truck className="w-8 h-8" />,
    title: "Logística Regional",
    desc: "Frota dedicada para instalações rápidas e seguras em Rio Verde, Jataí, Mineiros e toda a região sudoeste."
  },
  {
    icon: <Award className="w-8 h-8" />,
    title: "Durabilidade B2B",
    desc: "Materiais de primeira linha e impressão UV de alta cura, garantindo resistência máxima ao sol e intempéries."
  }
];

export default function Features() {
  return (
    <section className="py-40 px-6 md:px-12 lg:px-24 bg-white border-y border-zinc-100 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-8 py-2 border border-zinc-100 text-[10px] font-black uppercase tracking-[0.5em] text-zinc-300">
        Industrial Standard
      </div>

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
              <div className="text-formatto-blue mb-6 group-hover:text-formatto-magenta transition-colors duration-300">{f.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-formatto-black uppercase tracking-tight">{f.title}</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
