# 🎨 GUIDE DES REPÈRES DE COULEURS & ORGANISATION - PAGE D'ACCUEIL

## 📋 STRUCTURE GÉNÉRALE DE LA PAGE

```
┌─────────────────────────────────────────────────────────────┐
│                    HEADER (Navigation)                      │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  🟡 SECTION 1: HERO                                        │
│  Couleur de fond: bg-new-bg (beige clair)                  │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  🔵 SECTION 2: SERVICES                                    │
│  Couleur de fond: bg-official (beige clair)                │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  🔵 SECTION 3: PRICING                                     │
│  Couleur de fond: bg-official (beige clair)                │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  🔵 SECTION 4: FEATURES                                    │
│  Couleur de fond: bg-official (beige clair)                │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  🔵 SECTION 5: MISSION                                     │
│  Couleur de fond: bg-official (beige clair)                │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  🔵 SECTION 6: TESTIMONIALS                                │
│  Couleur de fond: bg-official (beige clair)                │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  🔵 SECTION 7: CONTACT                                      │
│  Couleur de fond: bg-official (beige clair)                │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                    FOOTER                                   │
└─────────────────────────────────────────────────────────────┘
```

## 🎨 PALETTE DE COULEURS PRINCIPALES

### **Couleurs de fond des sections :**
- **🟡 `bg-new-bg`** : Beige très clair (Hero uniquement)
- **🔵 `bg-official`** : Beige clair (Services, Pricing, Features, Mission, Testimonials, Contact)

### **Couleurs d'accent :**
- **🔴 `#F20000`** : Rouge principal (mots-clés, cadre rouge)
- **🔵 `#0038b8`** : Bleu principal (cartes services, mots-clés)
- **🟡 `#ffff00`** : Jaune (surlignage, hover)
- **🟤 `#16214a`** : Bleu foncé (texte principal, bordures)

## 📱 DÉTAIL DES SECTIONS

### **1. 🟡 SECTION HERO (`bg-new-bg`)**
- **Fonction** : Page d'accueil principale
- **Contenu** : Titre principal, sous-titre, CTA, certifications
- **Couleurs** : 
  - Texte principal : `#16214a` (bleu foncé)
  - Mots-clés : `#F20000` (rouge), `#0038b8` (bleu)
  - Surlignage : `#ffff00` (jaune)
- **Espacement** : `section-padding` (py-16 px-4)

### **2. 🔵 SECTION SERVICES (`bg-official`)**
- **Fonction** : Présentation des 4 offres de services
- **Contenu** : 4 cartes bleues avec prix et descriptions
- **Couleurs** :
  - Cartes : `#0038b8` (bleu)
  - Bordures : `#16214a` (bleu foncé)
  - Ombres : `4px 4px 0px #000000`
- **Grille** : 2x2 sur mobile, 4 colonnes sur desktop

### **3. 🔵 SECTION PRICING (`bg-official`)**
- **Fonction** : Conseils d'experts et services
- **Contenu** : 6 cartes de services avec icônes
- **Couleurs** : Fond beige clair, cartes blanches avec bordures `#16214a`

### **4. 🔵 SECTION FEATURES (`bg-official`)**
- **Fonction** : Pourquoi choisir Joseph Studio Creative
- **Contenu** : 6 fonctionnalités avec statistiques
- **Couleurs** : Fond beige clair, cercles rouges `#d92f35`

### **5. 🔵 SECTION MISSION (`bg-official`)**
- **Fonction** : Présentation de la mission et formations
- **Contenu** : Cadre bleu foncé avec texte, système solaire des outils
- **Couleurs** : Fond beige clair, cadre `#16214a`

### **6. 🔵 SECTION TESTIMONIALS (`bg-official`)**
- **Fonction** : Réalisations et témoignages clients
- **Contenu** : Carousel de projets avec images et descriptions
- **Couleurs** : Fond beige clair, cartes blanches avec bordures

### **7. 🔵 SECTION CONTACT (`bg-official`)**
- **Fonction** : Formulaire de contact
- **Contenu** : Formulaire, informations de contact
- **Couleurs** : Fond beige clair, texte `#16214a`

## 🎯 ÉLÉMENTS SPÉCIAUX

### **Cadre Rouge (Section Services)**
- **Couleur** : `#F20000` (rouge)
- **Fonction** : "Votre site web évolue? On vous accompagne."
- **Ombre** : `4px 4px 0px #16214a`

### **Cartes de Services**
- **Couleur** : `#0038b8` (bleu)
- **Bordures** : `#16214a` (bleu foncé)
- **Ombres** : `4px 4px 0px #000000`
- **Ordre** : 1€ → 1800€ → 2000€ → 4800€

### **Boutons CTA**
- **Style** : Blanc avec bordure `#16214a`
- **Hover** : Fond jaune `#ffff00`
- **Ombre** : `4px 4px 0px #16214a`

## 📐 CLASSES CSS UTILISÉES

### **Espacement :**
- **`section-padding`** : `py-16 px-4 sm:px-6 lg:px-8`
- **`container-custom`** : `max-w-7xl mx-auto`
- **`fluid-container`** : Conteneur fluide avec padding adaptatif

### **Grilles :**
- **Mobile** : `grid-cols-2` (2 colonnes)
- **Tablette** : `md:grid-cols-2` (2 colonnes)
- **Desktop** : `lg:grid-cols-4` (4 colonnes)

### **Typographie :**
- **Titres** : `Sharp Grotesk Medium 25`
- **Texte** : `Newsreader`
- **Tailles** : `text-3xl` à `text-6xl` pour les titres

## 🔍 POINTS D'ATTENTION

1. **Cohérence des couleurs** : Toutes les cartes services sont maintenant en bleu `#0038b8`
2. **Alternance des fonds** : Beige clair → Beige clair → Beige clair → Beige clair → Beige clair → Beige clair → Beige clair
3. **Espacement uniforme** : `section-padding` sur toutes les sections
4. **Responsive** : Grille 2x2 sur mobile, 4 colonnes sur desktop
5. **Hiérarchie visuelle** : Hero en premier, Services en deuxième (avec 1€ en première position)

## 📱 RESPONSIVE DESIGN

- **Mobile** : Grille 2x2, padding réduit
- **Tablette** : Grille 2x2, padding moyen
- **Desktop** : Grille 4 colonnes, padding large
- **Large** : Conteneur max-w-7xl centré

## ✅ ÉTAT ACTUEL DES SECTIONS

- **✅ Hero** : `bg-new-bg` (beige très clair)
- **✅ Services** : `bg-official` (beige clair)
- **✅ Pricing** : `bg-official` (beige clair)
- **✅ Features** : `bg-official` (beige clair)
- **✅ Mission** : `bg-official` (beige clair)
- **✅ Testimonials** : `bg-official` (beige clair)
- **✅ Contact** : `bg-official` (beige clair)

**Toutes les sections utilisent maintenant `bg-official` sauf le Hero qui garde `bg-new-bg` pour se démarquer !**
