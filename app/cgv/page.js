'use client'

import { useState } from 'react'

export default function CGV() {
  const [formData, setFormData] = useState({
    companyName: '',
    email: '',
    quoteNumber: '',
    date: '',
    acceptTerms: false,
    signature: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Logique de soumission du formulaire
    console.log('Formulaire soumis:', formData)
  }

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  return (
    <div className="min-h-screen bg-[#f9f7f2] py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* En-tête */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-normal mb-6 tracking-tight" style={{ wordSpacing: '-0.1em', color: '#16214a' }}>
            Conditions générales de ventes
          </h1>
          <p className="text-xl max-w-3xl mx-auto mb-8" style={{ color: '#16214a' }}>
            Consultez nos conditions générales de vente et validez votre devis en ligne.
          </p>
          <button className="text-lg flex items-center gap-2 font-bold py-2 px-8 border transition-all duration-300 mx-auto" style={{ boxShadow: '4px 4px 0px #16214a', color: '#16214a', borderColor: '#16214a', backgroundColor: '#f9f7f2' }}>
            VALIDER LES CONDITIONS GÉNÉRALES
          </button>
        </div>

        {/* Ligne de séparation */}
        <div className="border-t-2 border-dotted border-gray-400 mb-12"></div>

        {/* Sommaire */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6" style={{ color: '#16214a' }}>Sommaire</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              '#1 Préambule',
              '#2 Définitions',
              '#3 Objet de la prestation',
              '#4 Dispositions générales',
              '#5 Commande du client',
              '#6 Prestations',
              '#7 Engagements du client',
              '#8 Délais de livraison',
              '#9 Prix et modalités de règlement',
              '#10 Facturation complémentaire',
              '#11 Réalisation de la prestation',
              '#12 Pénalités de retard',
              '#13 Modification et annulation de la commande',
              '#14 Confidentialité',
              '#15 Contenus illicites',
              '#16 Responsabilités',
              '#17 Force majeure',
              '#18 Propriété intellectuelle',
              '#19 Données personnelles',
              '#20 Contestations et litiges'
            ].map((item, index) => (
              <div key={index} className="text-sm" style={{ color: '#16214a' }}>
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Contenu des CGV */}
        <div className="space-y-8 text-sm leading-relaxed" style={{ color: '#16214a' }}>
          
          <section>
            <h3 className="text-xl font-bold mb-4">#1 Préambule</h3>
            <p>
              La Prestation est édictée par la société JOSEPH STUDIO CREATIVE, société à responsabilité limitée au capital de 1.000 euros, immatriculée au Registre du commerce et des Sociétés de Paris sous le numéro 840 493 928, siégeant au 17 rue des petits carreaux, 75002 Paris et représentée par son Président Monsieur Jimmy Joseph Fellous (ci-après « JOSEPH STUDIO CREATIVE » ou le « Prestataire »).
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold mb-4">#2 Définitions</h3>
            <p className="mb-4">
              Pour les besoins des présentes conditions générales, les termes ci-dessous définis, tant au singulier qu'au pluriel, auront la signification suivante :
            </p>
            <div className="space-y-3">
              <p><strong>« Client »</strong> : Toute personne morale, agissant dans le cadre de son activité professionnelle, ayant sollicité du Prestataire la fourniture d'une Prestation, en application des présentes.</p>
              <p><strong>« Prestataire »</strong> : La société JOSEPH STUDIO CREATIVE, société à responsabilité limitée au capital de 1.000 euros, immatriculée au Registre du commerce et des Sociétés de Paris sous le numéro 840 493 928, siégeant au 17 rue des petits carreaux, 75002 Paris</p>
              <p><strong>« Prestation »</strong> : Ensemble des produits et services proposés à la vente par le Prestataire à la suite de la commande du Client, dans les conditions prévues aux présentes.</p>
            </div>
          </section>

          <section>
            <h3 className="text-xl font-bold mb-4">#3 Objet de la prestation</h3>
            <p>
              Les présentes conditions générales ont pour objet de définir le cadre juridique et financier au sein duquel les relations entre JOSEPH STUDIO CREATIVE et le Client vont s'inscrire. Elles n'ont nullement pour objet de définir les caractéristiques techniques détaillées de l'intervention de JOSEPH STUDIO CREATIVE auprès du Client, dans la mesure où celles-ci sont mentionnées sur josephstudiocreative.com dans la description détaillée des Prestations, ou font l'objet d'un devis accepté par les parties.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold mb-4">#4 Dispositions générales</h3>
            <p className="mb-4">
              JOSEPH STUDIO CREATIVE est une société spécialisée dans la conception de sites web sur-mesure, la création graphique de supports visuels, la création de contenus digitaux, ainsi que dans le conseil et l'encadrement de projets professionnels.
            </p>
            <p className="mb-4">
              Le Client, bénéficiaire des présentes conditions générales, souhaite avoir recours aux services de JOSEPH STUDIO CREATIVE pour réaliser un certain nombre de Prestations qu'il aura défini au préalable sur le site internet josephstudiocreative.com ou par contact direct avec un des membres de JOSEPH STUDIO CREATIVE.
            </p>
            <p className="mb-4">
              Préalablement à l'acceptation des présentes conditions générales de vente, le Client reconnaît avoir pris connaissance et déclare accepter sans réserve la proposition commerciale, la description détaillée des Prestations ainsi que les conditions financières appliquées par JOSEPH STUDIO CREATIVE et mentionnées sur le devis.
            </p>
            <p className="mb-4">
              L'exécution des Prestations est soumise aux présentes conditions générales. Elles peuvent être complétées par des conditions particulières conclues entre le Prestataire et le Client.
            </p>
            <p className="mb-4">
              Ces conditions générales de vente sont systématiquement annexées à tout contrat et prévaudront, le cas échéant, sur toute autre version ou tout autre document contradictoire. Elles s'appliquent, sans restriction ni réserve, à toutes les Prestations fournies par le Prestataire auprès des Clients, quelles que soient les clauses pouvant figurer sur les documents du Client.
            </p>
            <p>
              Le Prestataire se réserve le droit de les modifier, étant précisé que les conditions générales de vente applicables sont celles en vigueur au jour de la commande.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold mb-4">#5 Commande du client</h3>
            <p className="mb-4">
              Sur la base d'un cahier des charges fourni par le Client, JOSEPH STUDIO CREATIVE établit une proposition commerciale comprenant l'ensemble des Prestations, services et coûts s'y afférant. Si cette proposition commerciale est validée par le Client, celui-ci devra valider le devis établi par JOSEPH STUDIO CREATIVE en remplissant et en signant le formulaire présent au bas de cette page.
            </p>
            <p className="mb-4">
              Passé un délai de 10 jours ouvrables sans réponse de la part du Client à compter de l'envoi de la proposition commerciale par JOSEPH STUDIO CREATIVE, les commandes seront soumises à l'acceptation de JOSEPH STUDIO CREATIVE.
            </p>
            <p>
              En aucun cas, JOSEPH STUDIO CREATIVE ne pourra débuter une quelconque Prestation sans avoir reçu l'acompte mentionné dans le devis.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold mb-4">#6 Prestations</h3>
            <p className="mb-4">
              La Prestation dont la réalisation est confiée à JOSEPH STUDIO CREATIVE figure sur josephstudiocreative.com dans la description détaillée des Prestations, et/ou sur le devis acceptés par les parties.
            </p>
            <p className="mb-4">
              Celle-ci comprend un rendez-vous téléphonique d'une heure pour la prise de brief et le cadrage de la demande ("RENDEZ-VOUS DE BRIEF"), un rendez-vous en visioconférence de présentation de son tableau de bord Notion sur lequel seront centralisés tous les éléments nécessaires à la création du site ("RENDEZ-VOUS DÉMARRER MON PROJET"), un rendez-vous en visioconférence d'une heure pour présenter la première version du site ("RENDEZ-VOUS DE LIVRAISON V1") et un rendez-vous final en visioconférence de formation d'une heure et trente minutes ("RENDEZ-VOUS DE FORMATION ET MISE EN LIGNE").
            </p>
            <p className="mb-4">
              Entre ces rendez-vous, le Client a la possibilité de contacter son chef de projet à tout moment sur Notion ou de prendre un rendez-vous supplémentaire d'une vingtaine de minutes pour lui poser toutes ses questions.
            </p>
            <p className="mb-4">
              Une fois la Prestation finalisée et envoyée au Client ("Version 1"), ce dernier peut demander des ajustements à JOSEPH STUDIO CREATIVE, qui devra envoyer une nouvelle version au Client, prenant en compte les modifications demandées ("Version 2"). Si des modifications de design et/ou de contenus sont demandées par client à l'issu de cette seconde version, elles feront l'objet d'un forfait maintenance à souscrire sur josephstudiocreative.com.
            </p>
            <p className="mb-4">
              Toutes demandes d'ajouts et/ou de modifications non prévus dans le cahier de charge initial établi lors du "RENDEZ-VOUS DE BRIEF" et non mentionné dans le devis, fera l'objet d'une facturation supplémentaire sur devis.
            </p>
            <p className="mb-4">
              Toute demande de rendez-vous supplémentaire (par exemple des points récurrents de plus de 20 minutes) qui sera demandé par le CLIENT fera l'objet d'une facturation supplémentaire d'un montant de 90 euros Hors Taxe de l'heure.
            </p>
            <p className="mb-4">
              Toute demande de modification qui sera demandée ultérieurement à l'entretien "RENDEZ-VOUS DE FORMATION ET MISE EN LIGNE" par le Client sera considérée comme de la maintenance facturée 90 euros Hors Taxe de l'heure ou sur devis.
            </p>
            <p className="mb-4">
              De même, toute Prestation supplémentaire rendue obligatoire pour assurer la réalisation effective des Prestations initialement commandées, du seul fait du CLIENT, fera l'objet d'une facturation supplémentaire sur devis.
            </p>
            <p className="mb-4">
              La création de contenu est à fournir par le Client (photos, textes, vidéos). Toute création de contenu fourni par JOSEPH STUDIO CREATIVE sera facturée sur devis.
            </p>
            <p>
              JOSEPH STUDIO CREATIVE s'engage à former son client dans la prise en main de son site lors du "RENDEZ-VOUS DE FORMATION ET MISE EN LIGNE" et à lui fournir un document résumant les grands principes du fonctionnement de son backoffice.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold mb-4">#7 Engagements du client</h3>
            <div className="space-y-3">
              <p>Le Client s'engage à se conformer aux dispositions des présentes Conditions générales de vente.</p>
              <p>Le Client s'engage à ne pas perturber ou entraver le bon déroulement de la Prestation.</p>
              <p>Le Client s'engage à fournir les informations exactes nécessaires à l'exécution de la Prestation. Tout échange entre les parties concernant l'exécution de la Prestation constitue des preuves recevables et opposables entre elles dans le cadre d'une procédure judiciaire.</p>
              <p>Le Client s'engage à payer les sommes dues, conformément à sa Commande. Le Client est responsable du paiement de sa commande. Le Client est également responsable du paiement effectué pour le compte d'un mineur, ou d'un tiers.</p>
              <p>Le client garantit à JOSEPH STUDIO CREATIVE qu'il détient tous les droits sur tout contenu éditorial qui pourrait lui être transmis dans le cadre de l'exécution des présentes.</p>
              <p>Le Client s'engage à ne faire qu'un usage strictement personnel de la Prestation rendue. La revente de la Prestation à un tiers est strictement prohibée.</p>
              <p>Le Client s'engage, une fois la Prestation réalisée, à faire figurer au sein de la création digitale développée par le Prestataire et objet de la Prestation, le nom « JOSEPH STUDIO CREATIVE ».</p>
              <p>Le Client s'engage à fournir toute preuve d'identité si JOSEPH STUDIO CREATIVE le juge raisonnablement opportun et nécessaire.</p>
            </div>
          </section>

          <section>
            <h3 className="text-xl font-bold mb-4">#8 Délais de livraison</h3>
            <p className="mb-4">
              JOSEPH STUDIO CREATIVE s'engage à respecter les délais de livraison des différentes Prestations tels que mentionnés dans la proposition commerciale acceptée par le Client.
            </p>
            <p className="mb-4">
              Le délai commence à courir, à compter de la réception de l'intégralité des éléments demandés au Client à la suite du "RENDEZ-VOUS DÉMARRER MON PROJET" et qui sont à fournir par celui-ci dans son tableau de bord Notion prévu à cet effet.
            </p>
            <p>
              Dans le cas où certaines demandes du Client nécessiteraient un temps de réalisation plus long que celui prévu au cahier des charges, pour un motif extérieur à la volonté du Prestataire, JOSEPH STUDIO CREATIVE en informera dans les meilleurs délais le Client, sans que ce dernier ne puisse engager la responsabilité de JOSEPH STUDIO CREATIVE.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold mb-4">#9 Prix et modalités de règlement</h3>
            <p className="mb-4">
              Les tarifs de JOSEPH STUDIO CREATIVE sont ceux applicables à la date de la réception de la facture acceptée par le client ou des offres mentionnées sur le site www.josephstudiocreative.com souscrite par le Client.
            </p>
            <p className="mb-4">
              Chaque proposition commerciale comportera un prix relatif aux Prestations commandées par le client.
            </p>
            <p className="mb-4">
              Toute commande sera accompagnée d'un acompte dont la valeur du montant est précisée sur le devis. A défaut de mention expresse, cet acompte sera d'une valeur de 50% du montant global TTC de la commande. Le solde du règlement doit être fait avant le "RENDEZ-VOUS DE FORMATION ET MISE EN LIGNE" lors duquel le Client prendra la main sur son site.
            </p>
            <p>
              Le Client ne pourra pas différer le règlement de la Prestation commandée à JOSEPH STUDIO CREATIVE en raison de l'absence d'achèvement de celle-ci dans les délais prévus sur le devis, et pour une cause qui serait imputable au Client, telle que l'absence de transmission d'éléments réclamés par JOSEPH STUDIO CREATIVE et nécessaire à l'achèvement de la Prestation.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold mb-4">#10 Facturation complémentaire</h3>
            <p className="mb-4">
              Toute Prestation supplémentaire commandée par le Client ou rendue nécessaire de son fait, fera l'objet d'une facturation complémentaire.
            </p>
            <p className="mb-4">
              On entend par Prestation supplémentaire, toute Prestation ou/et service ne figurant pas dans le devis initial mais néanmoins demandée par le Client par courrier électronique, et qui a fait l'objet d'une proposition commerciale de JOSEPH STUDIO CREATIVE.
            </p>
            <p>
              Toute réclamation et/ou contestation du Client à propos d'une facturation complémentaire à la commande initiale devra être signifiée à JOSEPH STUDIO CREATIVE par mail à l'adresse contact@josephstudiocreative.com dans un délai de 7 jours maximum à compter de la réception de ladite facture.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold mb-4">#11 Réalisation de la prestation</h3>
            <p>
              La Prestation est considérée comme étant réalisée une fois la Version 1 ou 2 de la Prestation envoyée au Client par le Prestataire, en fonction des éventuels ajustements qui pourraient être demandés par le Client et qui sont compris dans la Prestation, et ce, dans les délais déterminés.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold mb-4">#12 Pénalités de retard</h3>
            <p className="mb-4">
              En cas de retard de paiement et de versement des sommes dues à JOSEPH STUDIO CREATIVE au-delà des délais fixés ci-dessus et/ou dans le devis, des pénalités de retard égales au taux d'intérêt appliqué par la Banque Centrale Européenne à son opération de refinancement la plus récente majoré de DIX (10) points de pourcentage du montant TTC du prix figurant sur la facture, seront automatiquement et de plein droit acquises à JOSEPH STUDIO CREATIVE sans aucune formalité ni mise en demeure préalable.
            </p>
            <p className="mb-4">
              Enfin, une indemnité forfaitaire pour frais de recouvrement, d'un montant de 40 € sera due en supplément, de plein droit et sans notification préalable.
            </p>
            <p className="mb-4">
              JOSEPH STUDIO CREATIVE se réserve le droit de demander au Client une indemnisation complémentaire si les frais de recouvrement effectivement engagés dépassaient ce montant, sur présentation des justificatifs.
            </p>
            <p className="mb-4">
              La prolongation d'un défaut de paiement d'une facture plus d'un mois après sa date entraîne :
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>La suspension de toute prestation ultérieure, de plein droit et à la discrétion de JOSEPH STUDIO CREATIVE;</li>
              <li>L'exigibilité immédiate et de plein droit de toutes autres factures non encore échues, avec application de l'intérêt de retard précité à compter de la date d'exigibilité immédiate ;</li>
              <li>A compter de l'intervention de tout auxiliaire de justice ou juridiction, l'application d'une indemnité forfaitaire de 15% Hors Taxes de l'ensemble des sommes dues à titre de clause pénale, sans préjudice de tous dommages et intérêts.</li>
            </ul>
            <p>
              Il est précisé qu'un règlement n'est réputé effectué que par son encaissement effectif au crédit du compte bancaire de JOSEPH STUDIO CREATIVE, et à compter de celui-ci. La remise de tout effet de commerce ou promesse équivalente de paiement ne constitue pas un règlement au sens du présent article.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold mb-4">#13 Modification et annulation de commande</h3>
            <p className="mb-4">
              Toutes demandes d'ajouts et/ou de modifications non prévus dans le cahier de charge initial fera l'objet d'une facturation supplémentaire sur devis.
            </p>
            <p className="mb-4">
              En aucun cas JOSEPH STUDIO CREATIVE ne pourra être tenue pour responsable en cas d'impossibilité de modification de commande.
            </p>
            <p>
              En cas d'annulation de la commande par le Client après acceptation du devis par les parties, pour quelque raison que ce soit hormis la force majeure, l'acompte versé à la commande, tel que défini à l'article " Prix et modalités de règlement" des présentes Conditions Générales de Vente sera de plein droit acquis au Prestataire et ne pourra donner lieu à un quelconque remboursement.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold mb-4">#14 Confidentialité</h3>
            <p>
              JOSEPH STUDIO CREATIVE considèrera comme strictement confidentiel, et s'interdit de divulguer, toute information, document, donnée ou concept, dont il pourra avoir connaissance pour la réalisation de la Prestation. Toutefois, JOSEPH STUDIO CREATIVE, ne saurait être tenu pour responsable d'aucune divulgation si les éléments divulgués étaient dans le domaine public à la date de la divulgation, ou si JOSEPH STUDIO CREATIVE en avait connaissance ou les obtenait de tiers, par des moyens légitimes.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold mb-4">#15 Contenus illicites</h3>
            <p className="mb-4">
              Sauf dans le cas où elle aurait été dûment informée de l'existence d'un contenu illicite au sens de la législation en vigueur, et n'aurait pas agi promptement pour le retirer, JOSEPH STUDIO CREATIVE ne peut pas être tenu responsable du Contenu mis en ligne par le Client.
            </p>
            <p className="mb-4">
              Le Client reconnaît expressément qu'il demeure le seul responsable du contenu qu'il diffuse et des conséquences de sa diffusion.
            </p>
            <p className="mb-4">
              JOSEPH STUDIO CREATIVE ne cautionne aucun contenu, ou opinion, recommandation ou avis exprimé dans celui-ci, et JOSEPH STUDIO CREATIVE décline expressément toute responsabilité relative à ce contenu.
            </p>
            <p>
              Le Client déclare et garantit qu'il dispose de tous les droits, licences, consentements et autorisations nécessaires pour mettre en ligne son contenu dans le cadre des présentes.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold mb-4">#16 Responsabilités</h3>
            <p>
              JOSEPH STUDIO CREATIVE ne saurait être tenu responsable de tout retard ou dommage de quelque sorte que ce soit, lié à un dysfonctionnement d'Internet. De même, JOSEPH STUDIO CREATIVE ne saurait être responsable des dommages directs ou indirects, et notamment préjudice matériel, perte de données ou de programme, toute perte de clientèle ou de notoriété commerciale, préjudice financier, qui résulteraient soit d'une utilisation inappropriée des outils informatiques dont dispose le Client, soit d'une intrusion illicite de la part d'un tiers.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold mb-4">#17 Force majeure</h3>
            <p className="mb-4">
              JOSEPH STUDIO CREATIVE ne sera en aucun cas tenue responsable si elle est dans l'impossibilité de respecter l'un quelconque de ses engagements ou délais contractuels pour cause de force majeure.
            </p>
            <p className="mb-4">
              De façon expresse, sont notamment considérés comme cas de force majeure ou cas fortuit, outre ceux habituellement retenus par la jurisprudence des cours et tribunaux français, le blocage des télécommunications, guerre, émeutes, grève, incendie, explosion, inondation, cyclone, tremblement de terre, sabotage, vol, piratage ou tout autre évènement indépendant de la volonté du prestataire et susceptible de compromettre l'exécution du contrat. Si un acompte a été versé par le Client, il lui sera restitué.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold mb-4">#18 Propriété intellectuelle</h3>
            <p className="mb-4">
              Il est convenu entre les parties qu'aucun accord ne saurait entraîner une quelconque cession des droits de propriété intellectuelle par l'une des parties à l'autres partie s'agissant des éléments de propriété intellectuelle pouvant être mis en œuvre dans le cadre du présent accord.
            </p>
            <p className="mb-4">
              Chaque partie s'engage à respecter l'intégralité des droits de l'autre partie sur ses marques, signes distinctifs, noms et s'interdit notamment de susciter toute confusion dans l'esprit du public à quelque fin que ce soit, et par quelque mode que ce soit.
            </p>
            <p>
              Chaque partie s'interdit de déposer sur quelque territoire que ce soit et pour quelques produits ou services que ce soit une marque, un signe distinctif ou un nom identique, similaire ou concurrent d'une marque, signe distinctif ou nom appartenant à son cocontractant. Il est précisé qu'en fin de contrat, pour quelque cause que ce soit, aucune partie ne pourra se prévaloir d'un droit quelconque sur la ou les marques, signes distinctifs et noms de son cocontractant et que chaque partie devra cesser toute utilisation de la ou des marques, signes distinctifs ou noms de son cocontractant.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold mb-4">#19 Données personnelles</h3>
            <p className="mb-4">
              Les données personnelles collectées auprès des Clients font l'objet d'un traitement informatique réalisé par le Prestataire. Le traitement de ces données est effectué conformément à la règlementation applicable en matière de protection des données à caractère personnel, dont notamment le Règlement (UE) 2016/679 du 27 avril 2017 dit « RGPD » et la loi n°78-14 du 6 janvier 1978 relative à l'informatique, aux fichiers et aux libertés, dite loi « Informatique et Libertés ».
            </p>
            <p className="mb-4">
              Les données personnelles sont enregistrées dans son fichier Clients et sont indispensables au traitement de sa commande. Ces informations et données personnelles sont également conservées à des fins de sécurité, afin de respecter les obligations légales et réglementaires. Elles seront conservées aussi longtemps que nécessaire pour l'exécution des commandes et des garanties éventuellement applicables.
            </p>
            <p className="mb-4">
              Le responsable du traitement des données est le Prestataire. L'accès aux données personnelles sera strictement limité aux employés du responsable de traitement, habilités à les traiter en raison de leurs fonctions. Les informations recueillies pourront éventuellement être communiquées à des tiers liés à l'entreprise par contrat pour l'exécution de tâches sous-traitées, sans que l'autorisation du Client soit nécessaire. Dans le cadre de l'exécution de leurs prestations, les tiers n'ont qu'un accès limité aux données et ont l'obligation de les utiliser en conformité avec les dispositions de la législation applicable en matière de protection des données personnelles. En dehors des cas énoncés ci-dessus, le Prestataire s'interdit de vendre, louer, céder ou donner accès à des tiers aux données sans consentement préalable du Client, à moins d'y être contraint en raison d'un motif légitime.
            </p>
            <p className="mb-4">
              Si les données sont amenées à être transférées en dehors de l'UE, le Client en sera informé et les garanties prises afin de sécuriser les données (par exemple, adhésion du prestataire externe au « Privacy Shield », adoption de clauses types de protection validées par la CNIL, adoption d'un code de conduite, obtention d'une certification CNIL, etc.) lui seront précisées.
            </p>
            <p>
              Conformément à la réglementation applicable, le Client dispose d'un droit d'accès, de rectification, d'effacement, et de portabilité des données le concernant, ainsi que du droit de s'opposer au traitement pour motif légitime, droits qu'il peut exercer en s'adressant au responsable de traitement à l'adresse postale suivante : 17 rue des petits carreaux, 75002 Paris. En cas de réclamation, le Client peut adresser une réclamation auprès de la commissions Nationale de l'Informatique et des Libertés.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold mb-4">#20 Contestations et litiges</h3>
            <p className="mb-4">
              Les présentes Conditions générales sont régies par la loi française.
            </p>
            <p className="mb-4">
              Le Client qui souhaiterait assigner pour quelque raison que ce soit, s'engage à en informer préalablement JOSEPH STUDIO CREATIVE, et de fournir ses meilleurs efforts en vue de régler le litige à l'amiable.
            </p>
            <p>
              Si aucun accord ne s'avère envisageable, les litiges seront portés devant le Tribunal de commerce de Paris.
            </p>
          </section>

        </div>

        {/* Formulaire de validation */}
        <div className="mt-16 p-8 border-2" style={{ backgroundColor: '#f9f7f2', boxShadow: '4px 4px 0px #16214a', borderColor: '#16214a' }}>
          <h2 className="text-2xl font-bold mb-6 text-center" style={{ color: '#16214a' }}>
            Valider mon devis et les conditions générales de vente
          </h2>
          <p className="text-center mb-8" style={{ color: '#16214a' }}>
            Une fois votre devis validé, nous vous proposons de réserver votre rendez-vous de démarrage de projet et vous recevrez votre facture d'acompte sous 24h.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-bold mb-2" style={{ color: '#16214a' }}>
                Nom de l'entreprise <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleInputChange}
                required
                className="w-full p-3 border-2 rounded" 
                style={{ borderColor: '#16214a', backgroundColor: '#f9f7f2' }}
                placeholder="Merci de toujours renseigner le même nom d'entreprise pour que nous puissions vous identifier."
              />
            </div>

            <div>
              <label className="block text-sm font-bold mb-2" style={{ color: '#16214a' }}>
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full p-3 border-2 rounded"
                style={{ borderColor: '#16214a', backgroundColor: '#f9f7f2' }}
              />
            </div>

            <div>
              <label className="block text-sm font-bold mb-2" style={{ color: '#16214a' }}>
                Numéro de devis <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="quoteNumber"
                value={formData.quoteNumber}
                onChange={handleInputChange}
                required
                className="w-full p-3 border-2 rounded"
                style={{ borderColor: '#16214a', backgroundColor: '#f9f7f2' }}
                placeholder="Merci de renseigner le numéro de votre devis tel qu'il est écrit sur votre devis. Exemple : D-2024-0327"
              />
            </div>

            <div>
              <label className="block text-sm font-bold mb-2" style={{ color: '#16214a' }}>
                Date <span className="text-red-500">*</span>
              </label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleInputChange}
                required
                className="w-full p-3 border-2 rounded"
                style={{ borderColor: '#16214a', backgroundColor: '#f9f7f2' }}
              />
            </div>

            <div>
              <label className="block text-sm font-bold mb-2" style={{ color: '#16214a' }}>
                Validation <span className="text-red-500">*</span>
              </label>
              <div className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  name="acceptTerms"
                  checked={formData.acceptTerms}
                  onChange={handleInputChange}
                  required
                  className="mt-1"
                />
                <span className="text-sm" style={{ color: '#16214a' }}>
                  J'ai lu et j'accepte les conditions générales de vente ainsi que mon devis envoyé par email
                </span>
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold mb-2" style={{ color: '#16214a' }}>
                Signature <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="signature"
                value={formData.signature}
                onChange={handleInputChange}
                required
                className="w-full p-3 border-2 rounded"
                style={{ borderColor: '#16214a', backgroundColor: '#f9f7f2' }}
                placeholder="Prénom Nom"
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="text-lg flex items-center gap-2 font-bold py-2 px-8 border transition-all duration-300 mx-auto"
                style={{ 
                  boxShadow: '4px 4px 0px #16214a', 
                  color: '#f9f7f2', 
                  borderColor: '#f9f7f2', 
                  backgroundColor: '#16214a',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#f9f7f2';
                  e.target.style.color = '#16214a';
                  e.target.style.borderColor = '#16214a';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = '#16214a';
                  e.target.style.color = '#f9f7f2';
                  e.target.style.borderColor = '#f9f7f2';
                }}
              >
                VALIDER MON DEVIS ET RÉSERVER MON RENDEZ-VOUS
              </button>
            </div>
          </form>

          {/* Informations de contact */}
          <div className="mt-8 text-center space-y-2" style={{ color: '#16214a' }}>
            <p>☎️ +33618603328</p>
            <p>📩 contact@josephstudiocreative.com</p>
            <p>📍 17 rue des petits carreaux, 75002 Paris</p>
          </div>
        </div>
      </div>
    </div>
  )
}
