'use client';

import { useState } from 'react';
import { Search, ChevronDown, X } from 'lucide-react';

export default function SearchFilter() {
  const [selectedFilter, setSelectedFilter] = useState('Tous');
  const [searchTerm, setSearchTerm] = useState('');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const filters = [
    'Tous',
    'JOURNÉE INTENSIVE',
    'SHOPIFY',
    'SQUARESPACE',
    'SUR MESURE'
  ];

  return (
    <div className="w-full px-0">
      {/* Desktop: Filtre à gauche, Recherche à droite */}
      <div className="hidden md:flex w-full pb-2 mb-4 items-end">
        {/* Filtre à gauche */}
        <div className="flex-1 max-w-xs">
          <div className="relative">
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="text-xs font-medium hover:opacity-80 transition-opacity flex items-center justify-between w-full py-2 border-b border-black"
              style={{ color: '#16214a', fontFamily: 'Newsreader' }}
            >
              <span>FILTRER PAR OFFRE : {selectedFilter}</span>
              <span className="flex items-center opacity-100">
                <X size={18} className="mr-3" style={{ color: '#16214a', opacity: 1 }} />
                <ChevronDown 
                  size={18} 
                  className={`transition-transform duration-200 ${isFilterOpen ? 'rotate-180' : ''}`}
                  style={{ color: '#16214a', opacity: 1 }}
                />
              </span>
            </button>
            
            {isFilterOpen && (
              <div className="absolute top-full left-0 mt-1 w-48 bg-[#f9f7f2] border border-gray-800 z-10">
                {filters.map((filter) => (
                  <button
                    key={filter}
                    onClick={() => {
                      setSelectedFilter(filter);
                      setIsFilterOpen(false);
                    }}
                    className={`w-full text-left px-4 py-2 hover:bg-gray-50 transition-colors ${
                      selectedFilter === filter ? 'font-bold' : ''
                    }`}
                    style={{ color: '#16214a', fontFamily: 'Newsreader' }}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Recherche à droite */}
        <div className="flex-1 flex justify-end items-end">
          <div className="relative w-48">
            <Search size={16} className="absolute left-0 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="RECHERCHE"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-6 pr-4 py-1 focus:outline-none text-xs w-full border-b border-black"
              style={{ color: '#16214a', fontFamily: 'Newsreader' }}
            />
          </div>
        </div>
      </div>

      {/* Mobile: Filtre et Recherche empilés (inchangé) */}
      <div className="md:hidden">
        {/* Filtre */}
        <div className="w-full border-b border-black pb-2 mb-4">
          <div className="w-full">
            <div className="relative w-full">
              <button
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className="text-xs font-medium hover:opacity-80 transition-opacity flex items-center justify-between w-full py-2"
                style={{ color: '#16214a', fontFamily: 'Newsreader' }}
              >
                <span>FILTRER PAR OFFRE : {selectedFilter}</span>
                <span className="flex items-center opacity-100">
                  <X size={18} className="mr-3" style={{ color: '#16214a', opacity: 1 }} />
                  <ChevronDown 
                    size={18} 
                    className={`transition-transform duration-200 ${isFilterOpen ? 'rotate-180' : ''}`}
                    style={{ color: '#16214a', opacity: 1 }}
                  />
                </span>
              </button>
              
              {isFilterOpen && (
                <div className="absolute top-full left-0 mt-1 w-48 bg-[#f9f7f2] border border-gray-800 z-10">
                  {filters.map((filter) => (
                    <button
                      key={filter}
                      onClick={() => {
                        setSelectedFilter(filter);
                        setIsFilterOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2 hover:bg-gray-50 transition-colors ${
                        selectedFilter === filter ? 'font-bold' : ''
                      }`}
                      style={{ color: '#16214a', fontFamily: 'Newsreader' }}
                    >
                      {filter}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Recherche */}
        <div className="w-full border-b border-black pb-2">
          <div className="w-full">
            <div className="relative w-full">
              <Search size={16} className="absolute left-0 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="RECHERCHE"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-6 pr-4 py-1 focus:outline-none text-sm w-full"
                style={{ color: '#16214a', fontFamily: 'Newsreader' }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
