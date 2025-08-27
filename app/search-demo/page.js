'use client';

import SearchFilter from '../../components/SearchFilter';

export default function SearchDemoPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="fluid-container py-12">
        <h1 className="text-3xl font-bold mb-8" style={{ color: '#16214a', fontFamily: 'Sharp Grotesk Medium 25' }}>
          Menu de Recherche avec Filtre
        </h1>
        
        <div className="mb-8">
          <SearchFilter />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Projets de démonstration */}
          {Array.from({ length: 6 }, (_, i) => (
            <div
              key={i}
              className="aspect-[3/4] flex items-center justify-center overflow-hidden"
              style={{ 
                background: `linear-gradient(135deg, ${getProjectColor(i + 1).from}, ${getProjectColor(i + 1).to})`
              }}
            >
              <div className="text-center text-white">
                <div className="text-xs font-light tracking-widest mb-3 opacity-90">{getProjectIcon(i + 1)}</div>
                <div className="text-sm font-semibold mb-2">Projet {i + 1}</div>
                <div className="text-xs opacity-70">CATÉGORIE</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Fonctions utilitaires pour les couleurs et icônes
const getProjectColor = (id) => {
  const colors = {
    1: { from: '#FF6B6B', to: '#FF8E8E' },
    2: { from: '#4ECDC4', to: '#6EE7DF' },
    3: { from: '#FFE66D', to: '#FFF2A3' },
    4: { from: '#A8E6CF', to: '#C8F7D4' },
    5: { from: '#FFB3BA', to: '#FFD1D9' },
    6: { from: '#B8E6B8', to: '#D4F7D4' }
  };
  return colors[id] || { from: '#95A5A6', to: '#BDC3C7' };
};

const getProjectIcon = (id) => {
  const icons = {
    1: 'RESTAURANT',
    2: 'YOGA',
    3: 'FROMAGE',
    4: 'CHEF',
    5: 'BOUGIE',
    6: 'ARCHITECTURE'
  };
  return icons[id] || 'PROJET';
};
