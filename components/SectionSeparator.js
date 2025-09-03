export default function SectionSeparator({ sectionName, color = '#16214a' }) {
  return (
    <div className="w-full py-2 flex items-center justify-center" style={{ backgroundColor: '#f9fafb' }}>
      <div className="flex items-center space-x-4 w-full max-w-6xl px-4">
        {/* Ligne gauche */}
        <div className="flex-1 h-2" style={{ backgroundColor: color }}></div>
        
        {/* Nom de la section */}
        <div className="px-6 py-2">
          <span 
            className="text-lg font-bold uppercase tracking-wider"
            style={{ color: color }}
          >
            {sectionName}
          </span>
        </div>
        
        {/* Ligne droite */}
        <div className="flex-1 h-2" style={{ backgroundColor: color }}></div>
      </div>
    </div>
  )
}
