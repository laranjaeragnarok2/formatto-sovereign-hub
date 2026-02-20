"use client";
import { MapContainer, TileLayer, Circle, Marker, Popup } from "react-leaflet";
import L from "leaflet";

// Absolute fix for Leaflet marker icons in Next.js
const defaultIcon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41]
});

L.Marker.prototype.options.icon = defaultIcon;

export default function RegionalMap() {
  // Coordenadas Reais:
  // Rio Verde: -17.7915, -50.9201
  // Mineiros: -17.5623, -52.5511
  // Jataí: -17.8814, -51.7144
  
  const rioVerdePos: [number, number] = [-17.7915, -50.9201];
  const mineirosPos: [number, number] = [-17.5623, -52.5511];
  const jataiPos: [number, number] = [-17.8814, -51.7144];

  return (
    <div className="w-full h-full min-h-[500px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white relative z-10 bg-zinc-100">
      <MapContainer 
        center={rioVerdePos} 
        zoom={7} 
        scrollWheelZoom={false} 
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        {/* Raio de 200km */}
        <Circle
          center={rioVerdePos}
          pathOptions={{ 
            fillColor: '#E31E24', 
            color: '#E31E24', 
            weight: 2, 
            opacity: 0.6, 
            fillOpacity: 0.15,
            dashArray: '10, 10'
          }}
          radius={200000} 
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
         <p className="text-xl font-headline tracking-widest">RAIO 200KM</p>
      </div>
    </div>
  );
}
