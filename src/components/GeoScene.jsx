import React from 'react';
import { MapPin, Info } from 'lucide-react';

const sampleSites = [
  {
    id: 'tuktuk',
    name: 'Tuktuk Siadong',
    x: 68,
    y: 32,
    media: {
      image: 'https://images.unsplash.com/photo-1715099057615-9974949b4f2d?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxUdWt0dWslMjBTaWFkb25nfGVufDB8MHx8fDE3NjI2MDU0NDF8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
      video: 'https://www.youtube.com/embed/4q9o2mZq5RY',
    },
    narrative:
      'Gerbang wisata Samosir. Titik temu seni, musik, dan cerita rakyat di tepian Danau Toba.',
    productsVillage: 'tuktuk',
  },
  {
    id: 'tomok',
    name: 'Tomok',
    x: 28,
    y: 62,
    media: {
      image: 'https://images.unsplash.com/photo-1562686720-0b3a2de857ae?q=80&w=1200&auto=format&fit=crop',
      video: 'https://www.youtube.com/embed/DhZl6k3aX0M',
    },
    narrative:
      'Desa budaya dengan situs Raja Sidabutar, pusat ritual dan makna Ulos bagi masyarakat Batak.',
    productsVillage: 'tomok',
  },
];

const GeoScene = ({ onSelectSite }) => {
  return (
    <section id="geospatial" className="relative bg-slate-950 py-16">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Interactive pseudo-3D map */}
          <div className="w-full lg:w-2/3">
            <div className="relative h-[420px] rounded-xl overflow-hidden border border-slate-800 bg-gradient-to-br from-sky-900 via-indigo-900 to-slate-900">
              {/* Decorative island silhouette */}
              <div
                className="absolute inset-0 opacity-60"
                style={{
                  backgroundImage:
                    'radial-gradient(100% 60% at 60% 40%, rgba(255,255,255,0.15) 0%, rgba(0,0,0,0) 60%),
                     radial-gradient(70% 50% at 30% 70%, rgba(255,255,255,0.12) 0%, rgba(0,0,0,0) 60%)',
                }}
              />
              <svg
                className="absolute -left-10 top-8 scale-110 opacity-70"
                width="560"
                height="360"
                viewBox="0 0 560 360"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M120 260C60 220 40 150 90 110C140 70 210 60 270 80C330 100 420 80 460 120C500 160 510 210 470 250C430 290 360 320 280 310C200 300 180 300 120 260Z"
                  fill="#1d4ed8"
                  opacity="0.9"
                />
                <path
                  d="M135 240C85 205 73 160 110 130C150 98 210 92 265 108C320 124 395 110 430 140C465 170 472 205 441 235C410 266 350 289 285 281C220 273 210 274 135 240Z"
                  fill="#60a5fa"
                  opacity="0.5"
                />
              </svg>

              {/* Hotspots */}
              {sampleSites.map((s) => (
                <button
                  key={s.id}
                  onClick={() => onSelectSite?.(s)}
                  className="group absolute -translate-x-1/2 -translate-y-1/2"
                  style={{ left: `${s.x}%`, top: `${s.y}%` }}
                  aria-label={s.name}
                >
                  <span className="relative inline-flex h-4 w-4">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75 animate-ping" />
                    <span className="relative inline-flex rounded-full h-4 w-4 bg-amber-500" />
                  </span>
                  <div className="mt-1 text-xs px-2 py-1 rounded bg-black/60 border border-slate-800 text-slate-100 opacity-0 group-hover:opacity-100 transition">
                    {s.name}
                  </div>
                </button>
              ))}

              {/* Compass or hint */}
              <div className="absolute bottom-3 right-3 text-xs text-slate-300 bg-black/40 border border-slate-800 px-2 py-1 rounded">
                Klik penanda untuk narasi budaya
              </div>
            </div>
          </div>

          {/* Side panel text */}
          <div className="w-full lg:w-1/3">
            <h2 className="text-2xl font-semibold text-white flex items-center gap-2">
              <MapPin size={20} className="text-amber-400" /> Virtual Twin Geospasial
            </h2>
            <p className="mt-2 text-slate-300 text-sm leading-relaxed">
              Simulasi model 3D Pulau Samosir dalam bentuk peta interaktif. Titik panas mewakili
              geosite dan situs budaya. Setiap klik membuka panel info berisi narasi, foto dan video.
            </p>
            <div className="mt-4 p-3 rounded-lg border border-slate-800 bg-slate-900/70 text-slate-200 text-xs flex gap-2">
              <Info size={16} className="text-sky-400 shrink-0" /> Versi prototipe ringan tanpa dependensi map berat.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GeoScene;
