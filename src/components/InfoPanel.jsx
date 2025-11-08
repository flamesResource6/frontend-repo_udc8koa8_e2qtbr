import React from 'react';
import { X, Play } from 'lucide-react';

const InfoPanel = ({ site, onClose, onShowProducts }) => {
  if (!site) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center p-4 z-50">
      <div className="w-full max-w-2xl rounded-xl bg-slate-950 border border-slate-800 overflow-hidden">
        <div className="flex items-center justify-between p-4 border-b border-slate-800">
          <div>
            <h3 className="text-white text-xl font-semibold">{site.name}</h3>
            <p className="text-slate-300 text-sm">{site.narrative}</p>
          </div>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-200">
            <X size={20} />
          </button>
        </div>
        <div className="grid md:grid-cols-2 gap-0">
          <img src={site.media.image} alt={site.name} className="w-full h-64 object-cover" />
          <div className="p-4">
            <div className="aspect-video w-full rounded-md overflow-hidden border border-slate-800">
              <iframe
                title={`video-${site.id}`}
                src={site.media.video}
                className="w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="mt-4 flex gap-2">
              <button
                onClick={() => onShowProducts?.(site.productsVillage)}
                className="px-4 py-2 rounded-md bg-amber-500 hover:bg-amber-400 text-white"
              >
                Lihat Produk dari Desa Ini
              </button>
              <a
                href="#ai-guide"
                className="px-4 py-2 rounded-md bg-rose-500 hover:bg-rose-400 text-white"
              >
                Tanya AI Guide
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoPanel;
