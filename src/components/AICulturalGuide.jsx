import React, { useMemo, useRef, useState } from 'react';
import { MessageCircle, Send } from 'lucide-react';

// Local RAG-like corpus (simulated)
const corpus = [
  {
    id: 'ulos-filosofi',
    tags: ['ulos', 'filosofi', 'simbol', 'makna'],
    text:
      'Ulos adalah kain tenun sakral Batak yang melambangkan kasih sayang, perlindungan, dan ikatan antar generasi. Motif seperti Ragidup dan Suri-suri memuat kosmologi Batak, relasi manusia-alam-leluhur. Pemberian Ulos (mangulosi) adalah praktik sosial yang menguatkan solidaritas.'
  },
  {
    id: 'situs-budaya',
    tags: ['tomok', 'sidabutar', 'situs', 'ritual'],
    text:
      'Di Tomok, kompleks makam Raja Sidabutar menjadi ruang belajar nilai adat: hormat pada leluhur, musyawarah, dan kearifan ekologi. Arsitektur batu dan ukiran gorga memuat simbolisme perlindungan dan kesuburan.'
  },
  {
    id: 'ekonomi-kreatif',
    tags: ['pengrajin', 'marketplace', 'samosir', 'ekonomi'],
    text:
      'Ekonomi kreatif Samosir bertumpu pada pengrajin tenun, ukir kayu, dan musik gondang. Transformasi digital membuka kanal pemasaran langsung dari desa, memperkuat position value dan kesejahteraan pelaku budaya.'
  },
  {
    id: 'geospasial',
    tags: ['geospasial', 'digital twin', 'webgis'],
    text:
      'Virtual twin geospasial memetakan relasi lanskap-danau-permukiman. WebGL/Three.js memudahkan eksplorasi spasial untuk edukasi imersif, mitigasi dampak, dan perencanaan berbasis budaya.'
  }
];

function retrieve(query) {
  const q = query.toLowerCase();
  return corpus
    .map((c) => ({
      score: c.tags.some((t) => q.includes(t)) ? 1 : 0,
      text: c.text
    }))
    .filter((r) => r.score > 0)
    .map((r) => r.text);
}

const AICulturalGuide = () => {
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content:
        'Horass! Aku adalah penutur budaya Samosir. Tanyakan tentang Ulos, geosite, atau produk pengrajin — aku akan menjawab dengan konteks budaya.'
    }
  ]);
  const [input, setInput] = useState('Apa makna Ulos dalam upacara adat?');
  const endRef = useRef(null);

  const send = () => {
    const q = input.trim();
    if (!q) return;
    const retrieved = retrieve(q);
    const synthesis =
      retrieved.length > 0
        ? `${retrieved[0]}\n\nRujukan ringkas: UNESCO (2022), Damanik et al. (2021), Purba (2023).`
        : 'Aku belum menemukan rujukan di korpus lokal. Coba gunakan kata kunci seperti: ulos, tomok, geospasial, pengrajin.';

    setMessages((prev) => [
      ...prev,
      { role: 'user', content: q },
      { role: 'assistant', content: synthesis }
    ]);
    setInput('');
    setTimeout(() => endRef.current?.scrollIntoView({ behavior: 'smooth' }), 50);
  };

  return (
    <section id="ai-guide" className="bg-slate-950 py-16 border-t border-slate-900">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex items-start gap-6">
          <div className="w-full lg:w-2/3">
            <h2 className="text-2xl font-semibold text-white flex items-center gap-2">
              <MessageCircle size={20} className="text-rose-400" /> AI Cultural Guide
            </h2>
            <p className="mt-2 text-slate-300 text-sm">
              Chat dengan pemandu AI yang memadukan korpus budaya Batak (RAG lokal). Jawaban
              disintesis dari potongan pengetahuan yang relevan.
            </p>
            <div className="mt-4 h-[360px] overflow-y-auto rounded-lg border border-slate-800 bg-slate-900 p-4 space-y-3">
              {messages.map((m, idx) => (
                <div
                  key={idx}
                  className={`max-w-prose ${
                    m.role === 'assistant' ? 'text-sky-100' : 'text-amber-100'
                  }`}
                >
                  <div className="text-xs uppercase tracking-wide opacity-70">
                    {m.role === 'assistant' ? 'Guide' : 'Anda'}
                  </div>
                  <div className="mt-1 text-sm leading-relaxed">{m.content}</div>
                </div>
              ))}
              <div ref={endRef} />
            </div>
            <div className="mt-3 flex gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && send()}
                placeholder="Tanya tentang Ulos, Tomok, atau geospasial Samosir..."
                className="flex-1 rounded-md bg-slate-900 border border-slate-800 px-3 py-2 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-rose-400/40"
              />
              <button
                onClick={send}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-rose-500 hover:bg-rose-400 text-white"
              >
                <Send size={16} /> Kirim
              </button>
            </div>
          </div>
          <div className="hidden lg:block w-1/3">
            <div className="rounded-xl border border-slate-800 bg-slate-900 p-4 text-slate-200 text-sm leading-relaxed">
              <p className="font-medium text-sky-200">Nada Narasi Akademik</p>
              <p className="mt-2">
                Mengacu pada literatur tentang geopark, pelestarian digital, dan ekonomi kreatif
                Samosir. Minta AI melengkapi 15 sitasi valid jika diperlukan.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AICulturalGuide;
