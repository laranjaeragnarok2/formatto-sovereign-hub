"use client";

export default function RegionalMap() {
  return (
    <div className="w-full h-full min-h-[500px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white relative z-10 bg-zinc-200 group">
      {/* Google Maps Embed via Iframe */}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120937.58434789505!2d-51.040224672661555!3d-17.794680877969854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9361d152a4208a8d%3A0xbd86241a877ff1b1!2sRio%20Verde%2C%20GO!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
        width="100%"
        height="100%"
        style={{ border: 0, minHeight: "500px" }}
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="absolute inset-0 grayscale-[20%] contrast-125 transition-all duration-700 group-hover:grayscale-0"
      ></iframe>

      {/* Dossiê de Cobertura */}
      <div className="absolute top-6 right-6 z-[1000] bg-formatto-blue text-white p-4 shadow-2xl pointer-events-none">
        <p className="text-[10px] font-black uppercase tracking-[0.2em] opacity-60">Status de Operação</p>
        <p className="text-xl font-headline tracking-widest">RAIO 300KM</p>
      </div>

      <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 z-20 bg-formatto-magenta text-white px-8 py-3 text-[9px] font-mono tracking-[0.4em] uppercase shadow-2xl pointer-events-none">
        HUB CENTRAL: RIO VERDE - GO
      </div>
    </div>
  );
}
