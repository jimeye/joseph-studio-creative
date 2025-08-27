'use client';

import { useState } from 'react';
import { Search, Filter, ChevronDown } from 'lucide-react';
import SearchFilter from '../../components/SearchFilter';

export default function RealisationsPage() {
  const [selectedFilter, setSelectedFilter] = useState('Tous');
  const [searchTerm, setSearchTerm] = useState('');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Fonction pour obtenir les couleurs des projets
  const getProjectColor = (id) => {
    const colors = {
      1: { from: '#FF6B6B', to: '#FF8E8E' }, // La Boulette Ibiza - Rouge
      2: { from: '#4ECDC4', to: '#6EE7DF' }, // Mandala Project - Turquoise
      3: { from: '#FFE66D', to: '#FFF2A3' }, // SapRiSti! - Jaune
      4: { from: '#A8E6CF', to: '#C8F7D4' }, // Chef Gastronomique - Vert
      5: { from: '#FFB3BA', to: '#FFD1D9' }, // Bougies Artisanales - Rose
      6: { from: '#B8E6B8', to: '#D4F7D4' }, // Architecture Moderne - Vert clair
      7: { from: '#FFD93D', to: '#FFE566' }, // Restaurant Familial - Jaune doré
      8: { from: '#6C5CE7', to: '#8B7CF6' }  // Boutique Mode - Violet
    };
    return colors[id] || { from: '#95A5A6', to: '#BDC3C7' };
  };

  // Fonction pour obtenir les icônes des projets
  const getProjectIcon = (id) => {
    const icons = {
      1: 'RESTAURANT', // La Boulette Ibiza
      2: 'YOGA', // Mandala Project
      3: 'FROMAGE', // SapRiSti!
      4: 'CHEF', // Chef Gastronomique
      5: 'BOUGIE', // Bougies Artisanales
      6: 'ARCHITECTURE', // Architecture Moderne
      7: 'RESTAURANT', // Restaurant Familial
      8: 'MODE'  // Boutique Mode
    };
    return icons[id] || 'PROJET';
  };

  const filters = [
    'Tous',
    'JOURNÉE INTENSIVE',
    'SHOPIFY',
    'SQUARESPACE',
    'SUR MESURE'
  ];

  const projects = [
    {
      id: 1,
      title: 'La Boulette Ibiza',
      category: 'SUR MESURE',
      image: '/projects/restaurant-1.jpg',
      description: 'Site web moderne pour restaurant gastronomique',
      hasImage: true
    },
    {
      id: 2,
      title: 'Mandala Project',
      category: 'SQUARESPACE',
      image: '/projects/yoga-1.jpg',
      description: 'Site web pour retraites holistiques',
      hasImage: true
    },
    {
      id: 3,
      title: 'SapRiSti!',
      category: 'SHOPIFY',
      image: '/projects/cheese-1.jpg',
      description: 'Boutique en ligne de fromages artisanaux',
      hasImage: true
    },
    {
      id: 4,
      title: 'Chef Gastronomique',
      category: 'JOURNÉE INTENSIVE',
      image: '/projects/chef-1.jpg',
      description: 'Site web express pour chef cuisinier',
      hasImage: true
    },
    {
      id: 5,
      title: 'Bougies Artisanales',
      category: 'SHOPIFY',
      image: '/projects/candle-1.jpg',
      description: 'Boutique en ligne de bougies faites main',
      hasImage: true
    },
    {
      id: 6,
      title: 'Architecture Moderne',
      category: 'SQUARESPACE',
      image: '/projects/architecture-1.jpg',
      description: 'Site web pour cabinet d\'architecture',
      hasImage: true
    },
    {
      id: 7,
      title: 'Restaurant Familial',
      category: 'SUR MESURE',
      image: '/projects/restaurant-2.jpg',
      description: 'Site web pour restaurant traditionnel',
      hasImage: true
    },
    {
      id: 8,
      title: 'Boutique Mode',
      category: 'SHOPIFY',
      image: '/projects/fashion-1.jpg',
      description: 'Boutique en ligne de vêtements',
      hasImage: true
    }
  ];

  const filteredProjects = projects.filter(project => {
    const matchesFilter = selectedFilter === 'Tous' || project.category === selectedFilter;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-white">


      {/* Main Content */}
      <main className="w-full px-4 py-6">
        {/* Hero Section */}
        <div className="mb-6">
          <div className="text-base mb-3" style={{ color: '#d92f35', fontFamily: 'Sharp Grotesk Medium 24', fontWeight: '400' }}>
            PROJETS
          </div>
          <h1 className="text-base mb-2" style={{ color: '#16214a', fontFamily: 'Sharp Grotesk Medium 24', fontWeight: '400' }}>
            Ils nous font confiance
          </h1>

          <p className="text-base leading-relaxed max-w-2xl mb-2" style={{ color: '#16214a', fontFamily: 'Sharp Grotesk Medium 20' }}>
            Nous proposons des solutions digitales personnalisées pour faire grandir votre business.
          </p>
          <p className="text-base leading-relaxed max-w-xl" style={{ color: '#16214a', fontFamily: 'Sharp Grotesk Medium 20' }}>
            Nous réalisons le sites web sur mesure et facile à utiliser dont vous avez besoin.<br />
            Notre équipe est composée d'experts <strong>Squarespace et Shopify</strong>, deux plateformes performantes et simples d'utilisation.
          </p>
        </div>

        {/* Filter and Search Section */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <SearchFilter />
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden bg-gray-100 hover:shadow-lg transition-all duration-300 cursor-pointer"
            >
              {/* Project Image - Format Portrait */}
              <div className="aspect-[3/4] flex items-center justify-center overflow-hidden" style={{ 
                background: `linear-gradient(135deg, ${getProjectColor(project.id).from}, ${getProjectColor(project.id).to})`
              }}>
                <div className="text-center text-white">
                  <div className="text-xs font-light tracking-widest mb-3 opacity-90">{getProjectIcon(project.id)}</div>
                  <div className="text-sm font-semibold mb-2">{project.title}</div>
                  <div className="text-xs opacity-70">{project.category}</div>
                </div>
              </div>
              
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center p-4">
                  <h3 className="font-semibold text-lg mb-2">{project.title}</h3>
                  <p className="text-sm mb-3">{project.description}</p>
                  <span className="inline-block px-3 py-1 bg-white text-black rounded-full text-xs font-medium">
                    {project.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No results message */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <div className="text-2xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold mb-2" style={{ color: '#16214a' }}>
              Aucun projet trouvé
            </h3>
            <p style={{ color: '#16214a' }}>
              Essayez de modifier vos filtres ou votre recherche
            </p>
          </div>
        )}
      </main>
    </div>
  );
}
