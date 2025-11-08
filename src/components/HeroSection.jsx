import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Map, ShoppingBag, MessageCircle } from 'lucide-react';

const HeroSection = ({ onGoExplore, onGoChat, onGoShop }) => {
  return (
    <section className="relative w-full h-[75vh] overflow-hidden bg-gradient-to-b from-sky-900 via-slate-900 to-black">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/hGDm7Foxug7C6E8s/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Overlay content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="backdrop-blur-sm/0">
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight drop-shadow-sm">
              Samosir-Verse
            </h1>
            <p className="mt-3 md:mt-4 text-sky-100/90 max-w-2xl">
              Terbang, Jelajahi, dan Hidupkan Kembali Warisan Samosir. Platform imersif yang
              menghubungkan budaya Batak, geospasial 3D, dan ekonomi kreatif lokal.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <button
                onClick={onGoExplore}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-sky-500 hover:bg-sky-400 text-white transition"
              >
                <Map size={18} /> Jelajah 3D
              </button>
              <button
                onClick={onGoChat}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-rose-500 hover:bg-rose-400 text-white transition"
              >
                <MessageCircle size={18} /> AI Cultural Guide
              </button>
              <button
                onClick={onGoShop}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-amber-500 hover:bg-amber-400 text-white transition"
              >
                <ShoppingBag size={18} /> Beli dari Desa
              </button>
            </div>
            <div className="mt-4 text-xs uppercase tracking-wider text-sky-200/70 flex items-center gap-2">
              <Rocket size={14} /> Fly – Interact – Buy
            </div>
          </div>
        </div>
      </div>

      {/* Gradient overlay that doesn't block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
    </section>
  );
};

export default HeroSection;
