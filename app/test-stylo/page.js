export default function TestStylo() {
  const styloVariations = [
    {
      id: 1,
      name: "Stylo classique",
      style: { background: 'linear-gradient(180deg, transparent 40%, #ffff00 40%, #ffff00 85%, transparent 85%)', transform: 'rotate(-1deg)' }
    },
    {
      id: 2,
      name: "Stylo dégueulasse",
      style: { background: 'linear-gradient(180deg, transparent 30%, #ffd700 30%, #ffd700 45%, #ffed4e 45%, #ffed4e 60%, #ffd700 60%, #ffd700 75%, transparent 75%)', transform: 'rotate(-2deg) skewX(-1deg)', filter: 'contrast(1.2) brightness(0.9)' }
    },
    {
      id: 3,
      name: "Stylo qui coule",
      style: { background: 'linear-gradient(180deg, transparent 25%, #ffeb3b 25%, #ffeb3b 90%, transparent 90%)', transform: 'rotate(-3deg)', filter: 'blur(0.3px)' }
    },
    {
      id: 4,
      name: "Stylo sec",
      style: { background: 'linear-gradient(180deg, transparent 50%, #f4d03f 50%, #f4d03f 70%, transparent 70%)', transform: 'rotate(1deg)', opacity: 0.8 }
    },
    {
      id: 5,
      name: "Stylo fluorescent",
      style: { background: 'linear-gradient(180deg, transparent 35%, #f1c40f 35%, #f1c40f 80%, transparent 80%)', transform: 'rotate(-1.5deg)', filter: 'brightness(1.3) saturate(1.5)' }
    },
    {
      id: 6,
      name: "Stylo usé",
      style: { background: 'linear-gradient(180deg, transparent 40%, #d4ac0b 40%, #d4ac0b 65%, transparent 65%)', transform: 'rotate(0.5deg)', filter: 'grayscale(0.3) brightness(0.8)' }
    },
    {
      id: 7,
      name: "Stylo double trait",
      style: { background: 'linear-gradient(180deg, transparent 30%, #f39c12 30%, #f39c12 45%, transparent 45%, transparent 55%, #f1c40f 55%, #f1c40f 70%, transparent 70%)', transform: 'rotate(-1deg)' }
    },
    {
      id: 8,
      name: "Stylo zigzag",
      style: { background: 'linear-gradient(180deg, transparent 25%, #f39c12 25%, #f39c12 35%, transparent 35%, transparent 45%, #f1c40f 45%, #f1c40f 55%, transparent 55%, transparent 65%, #f39c12 65%, #f39c12 75%, transparent 75%)', transform: 'rotate(-2deg)' }
    },
    {
      id: 9,
      name: "Stylo sale",
      style: { background: 'linear-gradient(180deg, transparent 20%, #d68910 20%, #d68910 90%, transparent 90%)', transform: 'rotate(-1deg)', filter: 'contrast(1.4) brightness(0.7)', opacity: 0.9 }
    },
    {
      id: 10,
      name: "Stylo néon",
      style: { background: 'linear-gradient(180deg, transparent 30%, #f7dc6f 30%, #f7dc6f 80%, transparent 80%)', transform: 'rotate(-0.5deg)', filter: 'brightness(1.5) saturate(2)', boxShadow: '0 0 5px #f7dc6f' }
    },
    {
      id: 11,
      name: "Stylo vintage",
      style: { background: 'linear-gradient(180deg, transparent 35%, #b7950b 35%, #b7950b 75%, transparent 75%)', transform: 'rotate(1deg)', filter: 'sepia(0.5) brightness(0.9)' }
    },
    {
      id: 12,
      name: "Stylo baveux",
      style: { background: 'linear-gradient(180deg, transparent 15%, #f4d03f 15%, #f4d03f 95%, transparent 95%)', transform: 'rotate(-2deg)', filter: 'blur(0.5px) brightness(1.1)' }
    },
    {
      id: 13,
      name: "Stylo épuisé",
      style: { background: 'linear-gradient(180deg, transparent 45%, #d4ac0b 45%, #d4ac0b 60%, transparent 60%)', transform: 'rotate(0.5deg)', filter: 'grayscale(0.6) brightness(0.7)', opacity: 0.6 }
    },
    {
      id: 14,
      name: "Stylo psychédélique",
      style: { background: 'linear-gradient(180deg, transparent 20%, #f39c12 20%, #f39c12 35%, #f1c40f 35%, #f1c40f 50%, #f39c12 50%, #f39c12 65%, #f1c40f 65%, #f1c40f 80%, transparent 80%)', transform: 'rotate(-1.5deg)', filter: 'hue-rotate(30deg) saturate(1.8)' }
    },
    {
      id: 15,
      name: "Stylo tremblant",
      style: { background: 'linear-gradient(180deg, transparent 30%, #f4d03f 30%, #f4d03f 70%, transparent 70%)', transform: 'rotate(-1deg)', filter: 'blur(0.8px) contrast(1.3)' }
    },
    {
      id: 16,
      name: "Stylo gras",
      style: { background: 'linear-gradient(180deg, transparent 25%, #f39c12 25%, #f39c12 85%, transparent 85%)', transform: 'rotate(-0.5deg)', filter: 'contrast(1.6) brightness(1.2)', fontWeight: 'bold' }
    },
    {
      id: 17,
      name: "Stylo délavé",
      style: { background: 'linear-gradient(180deg, transparent 40%, #f7dc6f 40%, #f7dc6f 70%, transparent 70%)', transform: 'rotate(1deg)', filter: 'brightness(1.4) saturate(0.5)', opacity: 0.7 }
    },
    {
      id: 18,
      name: "Stylo explosif",
      style: { background: 'radial-gradient(ellipse at center, #f39c12 30%, transparent 30%, transparent 40%, #f1c40f 40%, #f1c40f 50%, transparent 50%, transparent 60%, #f39c12 60%, #f39c12 70%, transparent 70%)', transform: 'rotate(-2deg)', filter: 'brightness(1.3) contrast(1.4)' }
    },
    {
      id: 19,
      name: "Stylo fantôme",
      style: { background: 'linear-gradient(180deg, transparent 35%, rgba(241, 196, 15, 0.6) 35%, rgba(241, 196, 15, 0.6) 75%, transparent 75%)', transform: 'rotate(-1deg)', filter: 'blur(1px) brightness(1.2)' }
    },
    {
      id: 20,
      name: "Stylo chaos",
      style: { background: 'linear-gradient(180deg, transparent 20%, #f39c12 20%, #f39c12 30%, transparent 30%, transparent 40%, #f1c40f 40%, #f1c40f 50%, transparent 50%, transparent 60%, #f39c12 60%, #f39c12 70%, transparent 70%, transparent 80%, #f1c40f 80%, #f1c40f 90%, transparent 90%)', transform: 'rotate(-3deg) skewX(2deg)', filter: 'contrast(1.5) brightness(0.8) saturate(1.3)' }
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12" style={{ color: '#16214a' }}>
          Test des 20 Effets de Stylo
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {styloVariations.map((variation) => (
            <div key={variation.id} className="bg-[#f9f7f2] p-6  shadow-md border">
              <h3 className="text-lg font-semibold mb-4" style={{ color: '#16214a' }}>
                {variation.id}. {variation.name}
              </h3>
              
              <div className="text-2xl font-normal mb-4" style={{ color: '#16214a', wordSpacing: '-0.1em', letterSpacing: '-0.05em' }}>
                à partir de <span style={{ ...variation.style, display: 'inline-block', paddingTop: '0', paddingBottom: '0' }}>1 €</span>
              </div>
              
              <div className="text-sm text-gray-600">
                <code className="bg-gray-100 p-2 rounded block overflow-x-auto">
                  {JSON.stringify(variation.style, null, 2)}
                </code>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-lg" style={{ color: '#16214a' }}>
            Choisissez votre préféré et dites-moi le numéro !
          </p>
        </div>
      </div>
    </div>
  );
}
