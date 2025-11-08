import React, { useMemo, useState } from 'react';
import { ShoppingBag, MapPin } from 'lucide-react';

const productsData = [
  {
    id: 'p1',
    name: 'Ulos Ragidup Premium',
    price: 1800000,
    village: 'tomok',
    image:
      'https://images.unsplash.com/photo-1556305238-0e3b14486a6a?q=80&w=1200&auto=format&fit=crop',
    desc: 'Tenun tangan motif Ragidup, serat katun lokal, pewarna alam.'
  },
  {
    id: 'p2',
    name: 'Ulos Suri-suri Harian',
    price: 650000,
    village: 'tuktuk',
    image:
      'https://images.unsplash.com/photo-1603252109303-2751441dd157?q=80&w=1200&auto=format&fit=crop',
    desc: 'Pilihan ringan untuk acara keluarga, nyaman dan elegan.'
  },
  {
    id: 'p3',
    name: 'Ukiran Gorga Kayu Nangka',
    price: 450000,
    village: 'ambarita',
    image:
      'https://images.unsplash.com/photo-1591604466107-ec97de577aff?q=80&w=1200&auto=format&fit=crop',
    desc: 'Panel gorga tradisional dengan finishing alami.'
  }
];

function formatIDR(n) {
  return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(n);
}

const Marketplace = ({ filterVillage }) => {
  const [village, setVillage] = useState(filterVillage || 'all');

  const products = useMemo(() => {
    const v = (filterVillage || village);
    if (v === 'all') return productsData;
    return productsData.filter((p) => p.village === v);
  }, [village, filterVillage]);

  return (
    <section id="marketplace" className="bg-gradient-to-b from-slate-950 to-black py-16">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex items-center justify-between gap-4">
          <h2 className="text-2xl font-semibold text-white flex items-center gap-2">
            <ShoppingBag size={20} className="text-amber-400" /> Marketplace Pengrajin
          </h2>
          <div className="flex items-center gap-2 text-sm">
            <MapPin size={16} className="text-sky-400" />
            <select
              value={filterVillage ? filterVillage : village}
              onChange={(e) => setVillage(e.target.value)}
              disabled={!!filterVillage}
              className="bg-slate-900 border border-slate-800 text-slate-200 rounded-md px-3 py-2"
            >
              <option value="all">Semua Desa</option>
              <option value="tuktuk">Tuktuk</option>
              <option value="tomok">Tomok</option>
              <option value="ambarita">Ambarita</option>
            </select>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p) => (
            <div key={p.id} className="rounded-xl overflow-hidden border border-slate-800 bg-slate-900">
              <img src={p.image} alt={p.name} className="h-48 w-full object-cover" />
              <div className="p-4">
                <div className="text-slate-100 font-medium">{p.name}</div>
                <div className="text-slate-400 text-sm">{p.desc}</div>
                <div className="mt-2 flex items-center justify-between">
                  <span className="text-amber-400 font-semibold">{formatIDR(p.price)}</span>
                  <button className="px-3 py-1.5 rounded-md bg-amber-500 text-white text-sm hover:bg-amber-400">
                    Beli Langsung dari Desa
                  </button>
                </div>
                <div className="mt-2 text-xs text-slate-500">Desa: {p.village}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Marketplace;
