import React, { useRef, useState } from 'react';
import HeroSection from './components/HeroSection';
import GeoScene from './components/GeoScene';
import AICulturalGuide from './components/AICulturalGuide';
import Marketplace from './components/Marketplace';
import InfoPanel from './components/InfoPanel';

function App() {
  const guideRef = useRef(null);
  const marketRef = useRef(null);
  const [selectedSite, setSelectedSite] = useState(null);
  const [villageFilter, setVillageFilter] = useState('all');

  const handleSelectSite = (site) => {
    setSelectedSite(site);
  };

  const handleShowProducts = (village) => {
    setVillageFilter(village || 'all');
    // scroll to marketplace
    document.getElementById('marketplace')?.scrollIntoView({ behavior: 'smooth' });
    setSelectedSite(null);
  };

  return (
    <div className="min-h-screen bg-black text-slate-100">
      <HeroSection
        onGoExplore={() => document.getElementById('geospatial')?.scrollIntoView({ behavior: 'smooth' })}
        onGoChat={() => document.getElementById('ai-guide')?.scrollIntoView({ behavior: 'smooth' })}
        onGoShop={() => document.getElementById('marketplace')?.scrollIntoView({ behavior: 'smooth' })}
      />
      <GeoScene onSelectSite={handleSelectSite} />
      <AICulturalGuide ref={guideRef} />
      <Marketplace ref={marketRef} filterVillage={villageFilter} />

      <footer className="py-10 bg-slate-950 border-t border-slate-900">
        <div className="container mx-auto px-6 max-w-6xl text-slate-400 text-sm">
          <div className="font-medium text-slate-300">Samosir-Verse</div>
          <p className="mt-1 max-w-2xl">
            Prototipe interaktif untuk pelestarian budaya Batak, eksplorasi geospasial 3D, dan ekonomi
            kreatif. Alur Fly – Interact – Buy dihadirkan dengan transisi lembut.
          </p>
        </div>
      </footer>

      <InfoPanel
        site={selectedSite}
        onClose={() => setSelectedSite(null)}
        onShowProducts={handleShowProducts}
      />
    </div>
  );
}

export default App;
