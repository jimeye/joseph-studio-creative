'use client'

export default function GlobalError({
  error,
  reset,
}) {
  return (
    <html>
      <body>
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Erreur globale
            </h2>
            <p className="text-gray-600 mb-6">
              Une erreur critique s'est produite. Veuillez recharger la page.
            </p>
            <button
              onClick={reset}
              className="px-4 py-2 bg-blue-600 text-[#f9f7f2] rounded hover:bg-blue-700 transition-colors"
            >
              Réessayer
            </button>
          </div>
        </div>
      </body>
    </html>
  )
}
