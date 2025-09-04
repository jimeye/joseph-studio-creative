import Link from 'next/link'

export default function PolitiqueConfidentialite() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container-custom py-16">
        <div className="max-w-4xl mx-auto">
          {/* En-tête */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-normal mb-6 tracking-tight hero-title" style={{ wordSpacing: '-0.1em', letterSpacing: '-0.05em', color: '#16214a' }}>
              Politique de Confidentialité
            </h1>
            <p className="text-xl" style={{ color: '#16214a' }}>
              Protection de vos données personnelles
            </p>
          </div>

          {/* Contenu de la politique de confidentialité */}
          <div className="p-8">
            
            {/* Introduction */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#16214a' }}>1. Introduction</h2>
              <div className="space-y-2" style={{ color: '#16214a' }}>
                <p>JOSEPH STUDIO CREATIVE s'engage à protéger la vie privée de ses utilisateurs et à traiter leurs données personnelles avec la plus grande attention et dans le respect des réglementations en vigueur, notamment le Règlement Général sur la Protection des Données (RGPD) et la loi Informatique et Libertés.</p>
                <p>Cette politique de confidentialité décrit comment nous collectons, utilisons, stockons et protégeons vos informations personnelles lorsque vous utilisez notre site web et nos services.</p>
              </div>
            </section>

            {/* Responsable du traitement */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#16214a' }}>2. Responsable du traitement</h2>
              <div className="space-y-2" style={{ color: '#16214a' }}>
                <p><strong>JOSEPH STUDIO CREATIVE</strong></p>
                <p>16 Boulevard des Filles du Calvaire</p>
                <p>75011 Paris, France</p>
                <p>Téléphone : +33 06 08 25 12 23</p>
                <p>Email : <a href="mailto:info@josephstudiocreative.com" className="underline hover:no-underline">info@josephstudiocreative.com</a></p>
                <p>Directeur de publication : Jimmy Fellous</p>
              </div>
            </section>

            {/* Données collectées */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#16214a' }}>3. Données personnelles collectées</h2>
              <div className="space-y-2" style={{ color: '#16214a' }}>
                <p>Nous collectons les informations suivantes :</p>
                <h3 className="text-lg font-semibold mt-4 mb-2">3.1 Données d'identification</h3>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>Nom et prénom</li>
                  <li>Adresse email</li>
                  <li>Numéro de téléphone</li>
                  <li>Nom de l'entreprise</li>
                </ul>
                
                <h3 className="text-lg font-semibold mt-4 mb-2">3.2 Données de navigation</h3>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>Adresse IP</li>
                  <li>Type de navigateur</li>
                  <li>Système d'exploitation</li>
                  <li>Pages visitées et temps passé</li>
                  <li>Liens cliqués</li>
                </ul>

                <h3 className="text-lg font-semibold mt-4 mb-2">3.3 Données de communication</h3>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>Messages envoyés via le formulaire de contact</li>
                  <li>Demandes de devis</li>
                  <li>Correspondances par email</li>
                </ul>
              </div>
            </section>

            {/* Finalités du traitement */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#16214a' }}>4. Finalités du traitement</h2>
              <div className="space-y-2" style={{ color: '#16214a' }}>
                <p>Vos données personnelles sont collectées et traitées aux fins suivantes :</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li><strong>Gestion des demandes de contact :</strong> Répondre à vos questions et demandes</li>
                  <li><strong>Établissement de devis :</strong> Préparer des propositions commerciales personnalisées</li>
                  <li><strong>Suivi de projet :</strong> Gérer la relation client et le suivi des projets</li>
                  <li><strong>Communication marketing :</strong> Vous informer de nos services et actualités (avec votre consentement)</li>
                  <li><strong>Amélioration du site :</strong> Analyser l'utilisation pour optimiser l'expérience utilisateur</li>
                  <li><strong>Obligations légales :</strong> Respecter les obligations comptables et fiscales</li>
                </ul>
              </div>
            </section>

            {/* Base légale */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#16214a' }}>5. Base légale du traitement</h2>
              <div className="space-y-2" style={{ color: '#16214a' }}>
                <p>Le traitement de vos données est fondé sur :</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li><strong>L'exécution d'un contrat :</strong> Pour la réalisation de nos services</li>
                  <li><strong>L'intérêt légitime :</strong> Pour la gestion de la relation client et l'amélioration de nos services</li>
                  <li><strong>Le consentement :</strong> Pour les communications marketing et l'utilisation de cookies non essentiels</li>
                  <li><strong>L'obligation légale :</strong> Pour respecter nos obligations comptables et fiscales</li>
                </ul>
              </div>
            </section>

            {/* Destinataires des données */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#16214a' }}>6. Destinataires des données</h2>
              <div className="space-y-2" style={{ color: '#16214a' }}>
                <p>Vos données personnelles peuvent être partagées avec :</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li><strong>Notre équipe interne :</strong> Membres de l'équipe JOSEPH STUDIO CREATIVE</li>
                  <li><strong>Nos prestataires techniques :</strong> Hébergeur (Vercel), outils de gestion de projet</li>
                  <li><strong>Autorités compétentes :</strong> Sur demande légale ou réglementaire</li>
                </ul>
                <p className="mt-4">Nous ne vendons, ne louons ni ne partageons vos données personnelles avec des tiers à des fins commerciales.</p>
              </div>
            </section>

            {/* Durée de conservation */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#16214a' }}>7. Durée de conservation</h2>
              <div className="space-y-2" style={{ color: '#16214a' }}>
                <p>Vos données sont conservées :</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li><strong>Données de contact :</strong> 3 ans après le dernier contact</li>
                  <li><strong>Données de projet :</strong> 5 ans après la fin du projet (obligation comptable)</li>
                  <li><strong>Données de navigation :</strong> 13 mois maximum</li>
                  <li><strong>Données de facturation :</strong> 10 ans (obligation fiscale)</li>
                </ul>
                <p className="mt-4">À l'expiration de ces délais, vos données sont supprimées ou anonymisées.</p>
              </div>
            </section>

            {/* Vos droits */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#16214a' }}>8. Vos droits</h2>
              <div className="space-y-2" style={{ color: '#16214a' }}>
                <p>Conformément au RGPD, vous disposez des droits suivants :</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li><strong>Droit d'accès :</strong> Connaître les données que nous détenons sur vous</li>
                  <li><strong>Droit de rectification :</strong> Corriger des données inexactes ou incomplètes</li>
                  <li><strong>Droit d'effacement :</strong> Demander la suppression de vos données</li>
                  <li><strong>Droit à la limitation :</strong> Limiter le traitement de vos données</li>
                  <li><strong>Droit à la portabilité :</strong> Récupérer vos données dans un format structuré</li>
                  <li><strong>Droit d'opposition :</strong> Vous opposer au traitement de vos données</li>
                  <li><strong>Droit de retrait du consentement :</strong> Retirer votre consentement à tout moment</li>
                </ul>
                <p className="mt-4">Pour exercer ces droits, contactez-nous à contact@josephstudiocreative.com</p>
              </div>
            </section>

            {/* Cookies */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#16214a' }}>9. Cookies et technologies similaires</h2>
              <div className="space-y-4" style={{ color: '#16214a' }}>
                <p>Notre site utilise des cookies et technologies similaires pour améliorer votre expérience de navigation et analyser l'utilisation du site.</p>
                
                <h3 className="text-lg font-semibold mt-4 mb-2">9.1 Qu'est-ce qu'un cookie ?</h3>
                <p>Un cookie est un petit fichier texte stocké sur votre appareil lorsque vous visitez notre site web. Les cookies nous permettent de reconnaître votre appareil et de mémoriser vos préférences.</p>
                
                <h3 className="text-lg font-semibold mt-4 mb-2">9.2 Types de cookies utilisés</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold">Cookies nécessaires :</h4>
                    <p className="text-sm ml-4">Ces cookies sont essentiels au fonctionnement du site. Ils incluent les cookies de session et de sécurité.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Cookies analytiques :</h4>
                    <p className="text-sm ml-4">Nous utilisons Google Analytics pour comprendre comment vous utilisez notre site. Ces données sont anonymisées.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Cookies de préférences :</h4>
                    <p className="text-sm ml-4">Ces cookies mémorisent vos choix (langue, paramètres d'affichage) pour personnaliser votre expérience.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Cookies marketing :</h4>
                    <p className="text-sm ml-4">Utilisés pour afficher des publicités pertinentes et mesurer l'efficacité de nos campagnes.</p>
                  </div>
                </div>
                
                <h3 className="text-lg font-semibold mt-4 mb-2">9.3 Gestion de vos préférences</h3>
                <p>Vous pouvez gérer vos préférences de cookies à tout moment en visitant notre <Link href="/gestion-cookies" className="underline hover:no-underline">page de gestion des cookies</Link>.</p>
                
                <h3 className="text-lg font-semibold mt-4 mb-2">9.4 Cookies tiers</h3>
                <p>Notre site peut contenir des cookies provenant de services tiers (Google Analytics, réseaux sociaux). Ces services ont leurs propres politiques de confidentialité.</p>
              </div>
            </section>

            {/* Sécurité */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#16214a' }}>10. Sécurité des données</h2>
              <div className="space-y-2" style={{ color: '#16214a' }}>
                <p>Nous mettons en place des mesures de sécurité appropriées pour protéger vos données :</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>Chiffrement des données en transit (HTTPS)</li>
                  <li>Accès restreint aux données personnelles</li>
                  <li>Surveillance continue de nos systèmes</li>
                  <li>Sauvegardes sécurisées</li>
                  <li>Formation de notre personnel à la protection des données</li>
                </ul>
              </div>
            </section>

            {/* Transferts hors UE */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#16214a' }}>11. Transferts de données hors UE</h2>
              <div className="space-y-2" style={{ color: '#16214a' }}>
                <p>Certains de nos prestataires techniques sont situés hors de l'Union Européenne (notamment Vercel aux États-Unis). Ces transferts sont encadrés par des garanties appropriées conformes au RGPD.</p>
              </div>
            </section>

            {/* Contact DPO */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#16214a' }}>12. Contact et réclamations</h2>
              <div className="space-y-2" style={{ color: '#16214a' }}>
                <p>Pour toute question concernant cette politique ou pour exercer vos droits :</p>
                <div className="bg-gray-50 p-4 rounded-lg mt-4">
                  <p><strong>JOSEPH STUDIO CREATIVE</strong></p>
                  <p>16 Boulevard des Filles du Calvaire</p>
                  <p>75011 Paris, France</p>
                  <p>Téléphone : +33 06 08 25 12 23</p>
                  <p>Email : contact@josephstudiocreative.com</p>
                </div>
                <p className="mt-4">Vous avez également le droit de déposer une réclamation auprès de la <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">CNIL</a> si vous estimez que vos droits ne sont pas respectés.</p>
              </div>
            </section>

            {/* Modifications */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#16214a' }}>13. Modifications de cette politique</h2>
              <div className="space-y-2" style={{ color: '#16214a' }}>
                <p>Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. Les modifications seront publiées sur cette page avec une date de mise à jour.</p>
                <p>Nous vous informerons de tout changement significatif par email ou par une notification sur notre site.</p>
              </div>
            </section>

            {/* Dernière mise à jour */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#16214a' }}>14. Dernière mise à jour</h2>
              <div className="space-y-2" style={{ color: '#16214a' }}>
                <p>Cette politique de confidentialité a été mise à jour le <strong>1er janvier 2025</strong>.</p>
              </div>
            </section>

            {/* Boutons de navigation */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
              <Link 
                href="/mentions-legales"
                className="inline-flex items-center gap-2 bg-white font-bold py-3 px-8 border-2 transition-all duration-300 hover:bg-[#ffff00] hover:transform hover:-translate-x-1 hover:-translate-y-1"
                style={{ boxShadow: '4px 4px 0px #16214a', color: '#16214a', borderColor: '#16214a' }}
              >
                Mentions Légales
              </Link>
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
