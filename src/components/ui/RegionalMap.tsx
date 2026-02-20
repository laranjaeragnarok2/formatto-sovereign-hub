"use client";
import { useEffect, useState } from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Circle, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";

// Fix for default marker icons in Leaflet + Next.js
const icon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

export default function RegionalMap() {
  const rioVerdePos: [number, number] = [-17.7915, -50.9201];
  const mineirosPos: [number, number] = [-17.5623, -52.5511];
  const jataiPos: [number, number] = [-17.8814, -51.7144];

  return (
    <div className="w-full h-full min-h-[500px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white relative z-10">
      <MapContainer 
        center={rioVerdePos} 
        zoom={7} 
        scrollWheelZoom={false} 
        className="w-full h-full grayscale-[0.8] contrast-[1.2]"
      >
        {/* Dark Mode Tile Layer for Elite Aesthetic */}
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
        />
        
        {/* Coverage Circle - 200km Radius */}
        <Circle
          center={rioVerdePos}
          pathOptions={{ fillColor: '#E31E24', color: '#E31E24', weight: 1, opacity: 0.5, fillOpacity: 0.1 }}
          radius={200000} // 200km in meters
        />

        {/* Dynamic Pulse for Rio Verde */}
        <Marker position={rioVerdePos} icon={icon}>
          <Popup>
            <div className="font-bold text-formatto-blue">HUB CENTRAL: RIO VERDE</div>
            <div className="text-[10px] uppercase">Sede Formatto Arte e Impressão</div>
          </Popup>
        </Marker>

        <Marker position={mineirosPos} icon={icon}>
          <Popup>
            <div className="font-bold">POLO EXPANSÃO: MINEIROS</div>
            <div className="text-[10px] uppercase">Atendimento B2B Estratégico</div>
          </Popup>
        </Marker>

        <Marker position={jataiPos} icon={icon}>
          <Popup>
            <div className="font-bold">POLO TÉCNICO: JATAÍ</div>
          </Popup>
        </Marker>
      </MapContainer>

      {/* Map Legend Overlay */}
      <div className="absolute bottom-6 left-6 z-[1000] bg-zinc-950/80 backdrop-blur-md p-4 border-l-4 border-formatto-red text-white">
         <p className="text-[10px] font-black uppercase tracking-widest mb-1">Dossiê Geográfico</p>
         <p className="text-xs font-bold">Raio de Atuação Soberana: 200km</p>
      </div>
    </div>
  );
}
