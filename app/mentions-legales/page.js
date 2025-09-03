import Link from 'next/link'

export default function MentionsLegales() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container-custom py-16">
        <div className="max-w-4xl mx-auto">
          {/* En-tête */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-normal mb-6 tracking-tight hero-title" style={{ wordSpacing: '-0.1em', letterSpacing: '-0.05em', color: '#16214a' }}>
              Mentions Légales
            </h1>
            <p className="text-xl" style={{ color: '#16214a' }}>
              Informations légales et réglementaires du site
            </p>
          </div>

          {/* Contenu des mentions légales */}
          <div className="p-8">
            
            {/* Éditeur du site */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#16214a' }}>1. Éditeur du site</h2>
              <div className="space-y-2" style={{ color: '#16214a' }}>
                <p><strong>Raison sociale :</strong> JOSEPH STUDIO CREATIVE</p>
                <p><strong>Forme juridique :</strong> Entreprise individuelle</p>
                <p><strong>Adresse :</strong> 16 Boulevard des Filles du Calvaire, 75011 Paris, France</p>
                <p><strong>Téléphone :</strong> +33 06 08 25 12 23</p>
                <p><strong>Email :</strong> contact@josephstudiocreative.com</p>
                <p><strong>Directeur de publication :</strong> Jimmy Fellous</p>
              </div>
            </section>

            {/* Hébergement */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#16214a' }}>2. Hébergement</h2>
              <div className="space-y-2" style={{ color: '#16214a' }}>
                <p><strong>Hébergeur :</strong> Vercel Inc.</p>
                <p><strong>Adresse :</strong> 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis</p>
                <p><strong>Site web :</strong> <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://vercel.com</a></p>
              </div>
            </section>

            {/* Propriété intellectuelle */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#16214a' }}>3. Propriété intellectuelle</h2>
              <div className="space-y-2" style={{ color: '#16214a' }}>
                <p>L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.</p>
                <p>La reproduction de tout ou partie de ce site sur un support électronique quel qu'il soit est formellement interdite sauf autorisation expresse du directeur de la publication.</p>
                <p>La reproduction des textes de ce site sur un support papier est autorisée sous réserve du respect des trois conditions suivantes :</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>Gratuité de la diffusion</li>
                  <li>Respect de l'intégrité des documents reproduits</li>
                  <li>Citation claire et lisible de la source sous la forme : "Document provenant du site internet JOSEPH STUDIO CREATIVE"</li>
                </ul>
              </div>
            </section>

            {/* Liens hypertextes */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#16214a' }}>4. Liens hypertextes</h2>
              <div className="space-y-2" style={{ color: '#16214a' }}>
                <p>Les liens hypertextes mis en place dans le cadre du présent site internet en direction d'autres ressources présentes sur le réseau Internet ne sauraient engager la responsabilité de JOSEPH STUDIO CREATIVE.</p>
                <p>Les utilisateurs et visiteurs du site ne peuvent pas mettre en place un lien hypertexte vers ce site sans l'autorisation expresse et préalable de JOSEPH STUDIO CREATIVE.</p>
              </div>
            </section>

            {/* Protection des données personnelles */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#16214a' }}>5. Protection des données personnelles</h2>
              <div className="space-y-2" style={{ color: '#16214a' }}>
                <p>Conformément à la loi Informatique et Libertés du 6 janvier 1978 modifiée et au Règlement Général sur la Protection des Données (RGPD), vous disposez d'un droit d'accès, de rectification, de suppression et d'opposition aux données personnelles vous concernant.</p>
                <p>Pour exercer ces droits, vous pouvez nous contacter :</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>Par email : contact@josephstudiocreative.com</li>
                  <li>Par téléphone : +33 06 08 25 12 23</li>
                  <li>Par courrier : 16 Boulevard des Filles du Calvaire, 75011 Paris, France</li>
                </ul>
                <p>Pour plus d'informations, consultez notre <Link href="/politique-confidentialite" className="text-blue-600 hover:underline">Politique de confidentialité</Link>.</p>
              </div>
            </section>

            {/* Cookies */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#16214a' }}>6. Cookies</h2>
              <div className="space-y-2" style={{ color: '#16214a' }}>
                <p>Ce site utilise des cookies pour améliorer l'expérience utilisateur. Vous pouvez configurer votre navigateur pour refuser les cookies ou être informé quand un cookie est envoyé.</p>
                <p>Les cookies utilisés sur ce site sont :</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li><strong>Cookies techniques :</strong> Nécessaires au fonctionnement du site</li>
                  <li><strong>Cookies analytiques :</strong> Pour mesurer l'audience et les performances</li>
                  <li><strong>Cookies de session :</strong> Pour maintenir votre connexion</li>
                </ul>
              </div>
            </section>

            {/* Responsabilité */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#16214a' }}>7. Responsabilité</h2>
              <div className="space-y-2" style={{ color: '#16214a' }}>
                <p>Les informations contenues sur ce site sont aussi précises que possible et le site est périodiquement remis à jour, mais peut toutefois contenir des inexactitudes, des omissions ou des lacunes.</p>
                <p>Si vous constatez une lacune, erreur ou ce qui parait être un dysfonctionnement, merci de bien vouloir le signaler par email à l'adresse contact@josephstudiocreative.com, en décrivant le problème de la manière la plus précise possible.</p>
                <p>JOSEPH STUDIO CREATIVE ne pourra être tenu responsable des dommages directs ou indirects causés au matériel de l'utilisateur lors de l'accès au site.</p>
              </div>
            </section>

            {/* Droit applicable */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#16214a' }}>8. Droit applicable</h2>
              <div className="space-y-2" style={{ color: '#16214a' }}>
                <p>Tout litige en relation avec l'utilisation du site est soumis au droit français. En dehors des cas où la loi ne le permet pas, il est fait attribution exclusive de juridiction aux tribunaux compétents de Paris.</p>
              </div>
            </section>

            {/* Contact */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#16214a' }}>9. Contact</h2>
              <div className="space-y-2" style={{ color: '#16214a' }}>
                <p>Pour toute question concernant ces mentions légales, vous pouvez nous contacter :</p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p><strong>JOSEPH STUDIO CREATIVE</strong></p>
                  <p>16 Boulevard des Filles du Calvaire</p>
                  <p>75011 Paris, France</p>
                  <p>Téléphone : +33 06 08 25 12 23</p>
                  <p>Email : contact@josephstudiocreative.com</p>
                </div>
              </div>
            </section>

            {/* Dernière mise à jour */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#16214a' }}>10. Dernière mise à jour</h2>
              <div className="space-y-2" style={{ color: '#16214a' }}>
                <p>Ces mentions légales ont été mises à jour le <strong>1er janvier 2025</strong>.</p>
                <p>JOSEPH STUDIO CREATIVE se réserve le droit de modifier ces mentions légales à tout moment. L'utilisateur est invité à les consulter de manière régulière.</p>
              </div>
            </section>

            {/* Bouton retour */}
            <div className="text-center mt-12">
              <Link 
                href="/"
                className="inline-flex items-center gap-2 bg-white font-bold py-3 px-8 border-2 transition-all duration-300 hover:bg-[#ffff00] hover:transform hover:-translate-x-1 hover:-translate-y-1"
                style={{ boxShadow: '4px 4px 0px #16214a', color: '#16214a', borderColor: '#16214a' }}
              >
                ← Retour à l'accueil
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
