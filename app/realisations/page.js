'use client';

import { useState } from 'react';

import { Search, Filter, ChevronDown } from 'lucide-react';

import Link from 'next/link';
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
      title: 'A | N | Y',
      category: 'SUR MESURE',
      image: '/images/any-paris.webp',

      description: 'Agence créative design',

      slug: 'any-paris'
    },
    {
      id: 2,
      title: 'ATN Soul',
      category: 'SUR MESURE',
      image: '/images/atn-soul-atnsoul-producer-paris-ultra-soul-ultrasoul-portrait-2.jpg',

      description: 'Music Producer',

      slug: 'atnsoul'
    },
    {
      id: 3,
      title: 'Blondie Paris',
      category: 'SUR MESURE',
      image: '/images/blondie.paris.webp',

      description: 'Relations presse',

      slug: 'blondie-paris'
    },
    {
      id: 4,
      title: 'Casa Azul Ibiza',
      category: 'SQUARESPACE',
      image: '/images/casa-azul-ibiza.webp',

      description: 'Guest house booking',

      slug: 'casa-azul-ibiza'
    },
    {
      id: 5,
      title: 'Estellon',
      category: 'SUR MESURE',
      image: '/images/estellon.webp',

      description: 'Boutique en ligne',

      slug: 'estellon'
    },
    {
      id: 6,
      title: 'La Boulette Ibiza',

      category: 'SUR MESURE',
      image: '/images/la-boulette-ibiza.webp',

      description: 'Boulettes & Piments 🌶️',
  
      slug: 'la-boulette-ibiza'
    },
    {
      id: 7,
      title: 'Nena Mala',
      category: 'SHOPIFY',
      image: '/images/nena-mala.webp',

      description: 'Upcycling Clothing',

      slug: 'nena-mala-upcycling'

    },
    {
      id: 8,
      title: 'Orphée Ritchie',
      category: 'SUR MESURE',
      image: '/images/orphee-ritchie.webp',

      description: 'Cabinet de psychologie',

      slug: 'orphee-ritchie-psychologue'

    },
    {
      id: 9,
      title: 'Time 2 Win',
      category: 'SUR MESURE',
      image: '/images/time-2-win.webp',

      description: 'Site web de lotterie',

      slug: 'time-2win'
    },
    {
      id: 10,
      title: 'El Meleh de la Paella',

      category: 'SUR MESURE',
      image: '/images/el-meleh-de-la-paella.webp',

      description: 'Restaurant de paella',

      slug: 'el-meleh-paella-ibiza'

    },
    {
      id: 11,
      title: 'Mélanie Elbaz',
      category: 'SUR MESURE',
      image: '/images/melanie-elbaz-photographe.webp',

      description: 'Photographe',

      slug: 'melanie-elbaz'
    },
    {
      id: 12,
      title: 'Mandala Project',
      category: 'SUR MESURE',
      image: '/images/mandala-project.webp',

      description: 'Retraite holistique et yoga',

      slug: 'mandala-project'
    }
  ];

  const filteredProjects = projects.filter(project => {

    const matchesFilter = selectedFilter === 'Tous' || project.category === selectedFilter;

    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||

                         project.description.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesFilter && matchesSearch;

  });

  return (
    <div className="min-h-screen bg-[#f9f3f3] pt-4 relative" style={{ zIndex: 1000 }}>

      {/* Main Content */}
      <main className="w-full px-4 relative" style={{ zIndex: 1001 }}>

        {/* Hero Section */}
        <div className="mb-4">
          <div className="text-base mb-3" style={{ color: '#F20000', fontFamily: 'Sharp Grotesk Medium 24', fontWeight: '400' }}>

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

        <div className="border-t border-gray-800 pt-4 mb-6">

          <SearchFilter />
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">

          {filteredProjects.map((project) => (

            <div
              key={project.id}
              className="bg-[#f9f3f3] p-6 border-2 transition-all duration-500 hover:transform hover:translate-x-1 hover:translate-y-1"

              style={{ boxShadow: '4px 4px 0px #16214a', borderColor: '#16214a', transform: 'rotateY(0deg)' }}

            >
              {/* Project Image */}

              <div className="mb-4 h-52 -mx-6 -mt-6 relative overflow-hidden transition-all duration-300 hover:transform hover:scale-110 hover:z-10">

                <img
                  src={project.image}

                  alt={project.title}

                  className="w-full h-full object-cover"

                />
              </div>

              {/* Project Info*/}

              <div className="mb-4">

                <h4 className="font-bold text-sm mb-1" style={{ color: '#16214a' }}>

                  {project.title}

                </h4>
                <p className="text-xs mb-2" style={{ color: '#16214a' }}>

                  {project.description}

                </p>
              </div>

              {/* Category Badge */}

              <div className="mb-4">

                <span className="px-2 py-1 border text-xs font-medium" style={{ borderColor: '#16214a', color: '#16214a', backgroundColor: '#f9f3f3' }}>

                  {project.category}

                </span>
              </div>

              {/* Action Button */}

              <div className="flex gap-2">

                <Link
                  href={`/projets/${project.slug}`}
                  className="flex-1 text-center px-4 py-2 text-sm font-bold transition-all duration-300 rounded-lg"
                  style={{
                    boxShadow: '4px 4px 0px #16214a',
                    color: '#f9f3f3',
                    borderColor: '#f9f3f3',
                    backgroundColor: '#16214a',
                    border: '2px solid #f9f3f3',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = '#f9fafb';
                    e.target.style.color = '#16214a';
                    e.target.style.borderColor = '#16214a';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = '#16214a';
                    e.target.style.color = '#f9f3f3';
                    e.target.style.borderColor = '#f9f3f3';
                  }}
                >
                  Voir le projet

                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* No results message*/}

        {filteredProjects.length === 0 && (

          <div className="text-center py-12 border-4" style={{ borderColor: 'pink' }}>

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
