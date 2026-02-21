"use client";
import { MapContainer, TileLayer, Circle, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect, useState } from "react";

export default function RegionalMap() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Fix for Leaflet default icons
    delete (L.Icon.Default.prototype as any)._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
      iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
      shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
    });
  }, []);

  const rioVerdePos: [number, number] = [-17.7946, -50.9208];
  const mineirosPos: [number, number] = [-17.5623, -52.5511];
  const jataiPos: [number, number] = [-17.8814, -51.7144];

  if (!mounted) return null;

  return (
    <div className="w-full h-full min-h-[500px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white relative z-10 bg-zinc-200">
      <MapContainer 
        center={rioVerdePos} 
        zoom={8} 
        scrollWheelZoom={false} 
        style={{ height: "100%", width: "100%" }}
      >
        {/* Google Maps Hybrid/Satellite Style Tiles via Leaflet */}
        <TileLayer
          attribution='&copy; Google Maps'
          url="https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}"
        />
        
        {/* Raio de 300km - Cobrindo Rio Verde até Mineiros */}
        <Circle
          center={rioVerdePos}
          pathOptions={{ 
            fillColor: '#E31E24', 
            color: '#E31E24', 
            weight: 3, 
            opacity: 0.8, 
            fillOpacity: 0.15,
          }}
          radius={300000} 
        />

        <Marker position={rioVerdePos}>
          <Popup>
            <div className="text-center">
              <strong className="text-formatto-blue">HUB CENTRAL: RIO VERDE</strong><br/>
              Sede Administrativa e Industrial
            </div>
          </Popup>
        </Marker>

        <Marker position={mineirosPos}>
          <Popup>
            <div className="text-center">
              <strong className="text-formatto-red">EXPANSÃO: MINEIROS</strong><br/>
              Polo Estratégico B2B
            </div>
          </Popup>
        </Marker>

        <Marker position={jataiPos}>
          <Popup>
            <div className="text-center">
              <strong>LOGÍSTICA: JATAÍ</strong>
            </div>
          </Popup>
        </Marker>
      </MapContainer>

      {/* Dossiê de Cobertura */}
      <div className="absolute top-6 right-6 z-[1000] bg-formatto-blue text-white p-4 shadow-2xl">
         <p className="text-[10px] font-black uppercase tracking-[0.2em] opacity-60">Status de Operação</p>
         <p className="text-xl font-headline tracking-widest">RAIO 300KM</p>
      </div>
    </div>
  );
}
