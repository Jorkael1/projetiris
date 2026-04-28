// DONNÉES INITIALES (pour démo sans backend)

// Initialiser les données si pas présentes dans localStorage
function initData() {
  if (!localStorage.getItem('terrains')) {
    const terrainsInit = [
      {
        id: 1,
        titre: 'Terrain constructible à Dschang - Foto',
        prix: 8500000,
        surface: 400,
        photos: [
          'images/terrain1_1.jpg',
          'images/terrain1_2.jpg',
          'images/terrain1_3.jpg',
        ],
        localisation: { lat: 5.44, lng: 10.25 },
        telephone: '+237691234567',
        whatsapp: 'https://wa.me/237691234567',
        vendu: false,
        vendorId: 1,
        description:
          'Terrain constructible situé à Foto, près de Dschang, dans quartier résidentiel',
      },
      {
        id: 2,
        titre: 'Grand terrain à Dschang - Foreke',
        prix: 12000000,
        surface: 800,
        photos: [
          'images/terrain2_1.jpg',
          'images/terrain2_2.jpg',
          'images/terrain2_3.jpg',
        ],
        localisation: { lat: 5.46, lng: 10.265 },
        telephone: '+237690123456',
        whatsapp: 'https://wa.me/237690123456',
        vendu: false,
        vendorId: 1,
        description:
          'Grand terrain à Foreke, quartier calme et résidentiel, idéal pour construction villa',
      },
      {
        id: 3,
        titre: 'Parcelle à Dschang - Lycée Bilingue',
        prix: 5500000,
        surface: 250,
        photos: [
          'images/terrain3_1.jpg',
          'images/terrain3_2.jpg',
          'images/terrain3_3.jpg',
        ],
        localisation: { lat: 5.435, lng: 10.24 },
        telephone: '+237670123456',
        whatsapp: '',
        vendu: false,
        vendorId: 1,
        description:
          'Parcelle abordable près du Lycée Bilingue de Dschang, quartier paisible',
      },
      {
        id: 4,
        titre: 'Terrain avec vue à Dschang - Château',
        prix: 18000000,
        surface: 600,
        photos: [
          'images/terrain4_1.jpeg',
          'images/terrain4_2.jpg',
          'images/terrain4_3.jpg',
        ],
        localisation: { lat: 5.445, lng: 10.26 },
        telephone: '+237680234567',
        whatsapp: 'https://wa.me/237680234567',
        vendu: false,
        vendorId: 1,
        description:
          'Terrain premium à Château avec vue, idéal pour maison de rêve',
      },
      {
        id: 5,
        titre: 'Terrain à Dschang - Keleng',
        prix: 9500000,
        surface: 350,
        photos: ['images/terrain5_1.jpg', 'images/terrain5_2.jpg'],
        localisation: { lat: 5.45, lng: 10.27 },
        telephone: '+237650234567',
        whatsapp: 'https://wa.me/237650234567',
        vendu: false,
        vendorId: 1,
        description:
          'Terrain à Keleng, quartier dynamique de Dschang, parfait pour investissement',
      },
      {
        id: 6,
        titre: 'Grand terrain à Dschang - Tsinko',
        prix: 15000000,
        surface: 1000,
        photos: ['images/terrain6_1.jpg', 'images/terrain6_2.jpg'],
        localisation: { lat: 5.47, lng: 10.255 },
        telephone: '+237660345678',
        whatsapp: 'https://wa.me/237660345678',
        vendu: false,
        vendorId: 1,
        description:
          'Grand terrain à Tsinko, zone spacieuse pour projet commercial ou résidentiel',
      },
    ]
    localStorage.setItem('terrains', JSON.stringify(terrainsInit))
  }

  if (!localStorage.getItem('utilisateurs')) {
    const utilisateursInit = [
      {
        id: 1,
        nom: 'Vendeur Demo',
        email: 'vendeur@demo.com',
        motDePasse: 'password123',
        telephone: '+237691234567',
      },
    ]
    localStorage.setItem('utilisateurs', JSON.stringify(utilisateursInit))
  }

  if (!localStorage.getItem('messages')) {
    localStorage.setItem('messages', JSON.stringify([]))
  }
}

// FONCTIONS UTILITAIRES

// Menu mobile
function toggleMobileMenu() {
  const menu = document.getElementById('mobile-menu')
  if (menu) {
    menu.classList.toggle('show')
  }
}

// Formater le prix en CFA
function formatPrix(prix) {
  return new Intl.NumberFormat('fr-FR').format(prix) + ' CFA'
}

// Obtenir les terrains disponibles (non vendus)
function getTerrainsDisponibles() {
  const terrains = JSON.parse(localStorage.getItem('terrains') || '[]')
  return terrains.filter((t) => !t.vendu)
}

// Obtenir un terrain par ID
function getTerrainById(id) {
  const terrains = JSON.parse(localStorage.getItem('terrains') || '[]')
  return terrains.find((t) => t.id === parseInt(id))
}

// Obtenir les terrains d'un vendor
function getTerrainsVendor(vendorId) {
  const terrains = JSON.parse(localStorage.getItem('terrains') || '[]')
  return terrains.filter((t) => t.vendorId === vendorId)
}

// Sauvegarder les terrains
function saveTerrains(terrains) {
  localStorage.setItem('terrains', JSON.stringify(terrains))
}

// Obtenir le vendor connecté
function getVendeurConnecte() {
  const id = localStorage.getItem('vendeurConnecte')
  if (!id) return null
  const utilisateurs = JSON.parse(localStorage.getItem('utilisateurs') || '[]')
  return utilisateurs.find((u) => u.id === parseInt(id))
}

// Vérifier si vendor connecté
function isVendeurConnecte() {
  return localStorage.getItem('vendeurConnecte') !== null
}

// Déconnecter le vendor
function deconnecter() {
  localStorage.removeItem('vendeurConnecte')
  window.location.href = 'index.html'
}

// GESTION DE LA VUE (Carte/Liste)

function initViewToggle() {
  const btnCarte = document.getElementById('btn-carte')
  const btnListe = document.getElementById('btn-liste')
  const mapContainer = document.getElementById('map-container')
  const terrainsList = document.getElementById('terrains-list')
  const catalogueList = document.getElementById('catalogue-list')

  if (!btnCarte || !btnListe) return

  // Charger la préférence sauvegardée
  const vuePreferee = localStorage.getItem('vuePreferee') || 'liste'
  if (vuePreferee === 'carte') {
    btnCarte.classList.add('active')
    btnListe.classList.remove('active')
    mapContainer.classList.add('active')
    if (terrainsList) terrainsList.classList.add('hidden')
    if (catalogueList) catalogueList.classList.add('hidden')
  }

  btnCarte.addEventListener('click', () => {
    btnCarte.classList.add('active')
    btnListe.classList.remove('active')
    mapContainer.classList.add('active')
    if (terrainsList) terrainsList.classList.add('hidden')
    if (catalogueList) catalogueList.classList.add('hidden')
    localStorage.setItem('vuePreferee', 'carte')
    if (typeof initMap === 'function') initMap()
  })

  btnListe.addEventListener('click', () => {
    btnListe.classList.add('active')
    btnCarte.classList.remove('active')
    mapContainer.classList.remove('active')
    if (terrainsList) terrainsList.classList.remove('hidden')
    if (catalogueList) catalogueList.classList.remove('hidden')
    localStorage.setItem('vuePreferee', 'liste')
  })
}

// AFFICHAGE DES TERRAINS (Liste)

function afficherTerrains() {
  const container = document.getElementById('terrains-list')
  if (!container) return

  const terrains = getTerrainsDisponibles().slice(0, 8) // Limiter à 8 terrains pour la page d'accueil

  if (terrains.length === 0) {
    container.innerHTML =
      '<p style="text-align:center;grid-column:1/-1;padding:2rem;">Aucun terrain disponible</p>'
    return
  }

  container.innerHTML = terrains
    .map(
      (terrain) => `
        <div class="terrain-card" onclick="window.location.href='terrain.html?id=${terrain.id}'">
            <div class="image-carousel">
                ${terrain.photos.map((photo) => `<img src="${photo || ''}" alt="${terrain.titre}">`).join('')}
            </div>
            <div class="terrain-info">
                <h3>${terrain.titre}</h3>
                <div class="terrain-price">${formatPrix(terrain.prix)}</div>
                <div class="terrain-details">
                    <span> ${terrain.surface} m²</span>
                    <span> ${terrain.localisation.lat.toFixed(2)}, ${terrain.localisation.lng.toFixed(2)}</span>
                </div>
            </div>
        </div>
    `,
    )
    .join('')
}

// CARTE INTERACTIVE (Leaflet)

let map = null

function initMap() {
  const mapContainer = document.getElementById('map-container')
  if (!mapContainer || !mapContainer.classList.contains('active')) return

  // Charger Leaflet si pas déjà chargé
  if (typeof L === 'undefined') {
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css'
    document.head.appendChild(link)

    const script = document.createElement('script')
    script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js'
    script.onload = () => createMap()
    document.head.appendChild(script)
  } else {
    createMap()
  }
}

function createMap() {
  if (map) {
    map.remove()
    map = null
  }

  const mapEl = document.getElementById('map')
  if (!mapEl) return

  map = L.map('map').setView([5.4445, 10.2553], 13)

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap',
  }).addTo(map)

  const terrains = getTerrainsDisponibles()
  terrains.forEach((terrain) => {
    const marker = L.marker([
      terrain.localisation.lat,
      terrain.localisation.lng,
    ]).addTo(map).bindPopup(`
                <strong>${terrain.titre}</strong><br>
                ${formatPrix(terrain.prix)}<br>
                <a href="terrain.html?id=${terrain.id}">Voir détails</a>
            `)
  })
}

// PAGE DÉTAIL TERRAIN

function initTerrainDetail() {
  const params = new URLSearchParams(window.location.search)
  const id = params.get('id')

  if (!id) {
    window.location.href = 'index.html'
    return
  }

  const terrain = getTerrainById(id)
  if (!terrain) {
    window.location.href = 'index.html'
    return
  }

  // Remplir les informations
  document.getElementById('detail-titre').textContent = terrain.titre
  document.getElementById('detail-prix').textContent = formatPrix(terrain.prix)
  document.getElementById('detail-surface').textContent =
    terrain.surface + ' m²'
  document.getElementById('detail-description').textContent =
    terrain.description || 'Pas de description'

  // Galerie photos
  const galleryImg = document.getElementById('gallery-img')
  if (terrain.photos[0]) {
    galleryImg.src = terrain.photos[0]
  }
  // IMAGE: Photo principale du terrain

  // Carte détaillée
  setTimeout(() => {
    if (typeof L !== 'undefined') {
      const detailMap = L.map('detail-map').setView(
        [terrain.localisation.lat, terrain.localisation.lng],
        13,
      )
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap',
      }).addTo(detailMap)
      L.marker([terrain.localisation.lat, terrain.localisation.lng])
        .addTo(detailMap)
        .bindPopup(terrain.titre)
    }
  }, 500)

  // Bouton contacter
  const btnContact = document.getElementById('btn-contact')
  const contactInfo = document.getElementById('contact-info')
  const telDisplay = document.getElementById('tel-display')
  const whatsAppLink = document.getElementById('whatsapp-link')

  btnContact.addEventListener('click', () => {
    contactInfo.classList.add('show')
    telDisplay.textContent = terrain.telephone || 'Non disponible'

    if (terrain.whatsapp) {
      whatsAppLink.href =
        terrain.whatsapp +
        '?text=Bonjour, je suis intéressé par votre terrain: ' +
        terrain.titre
      whatsAppLink.style.display = 'flex'
    } else {
      whatsAppLink.style.display = 'none'
    }
  })

  // Bouton copier
  document.getElementById('btn-copy').addEventListener('click', () => {
    navigator.clipboard.writeText(terrain.telephone).then(() => {
      alert('Numéro copié!')
    })
  })
}

// AUTHENTIFICATION (Login/Register)

function initLogin() {
  const form = document.getElementById('form-login')
  if (!form) return

  form.addEventListener('submit', (e) => {
    e.preventDefault()

    const email = document.getElementById('email').value
    const motDePasse = document.getElementById('motdepasse').value

    const utilisateurs = JSON.parse(
      localStorage.getItem('utilisateurs') || '[]',
    )
    const utilisateur = utilisateurs.find(
      (u) => u.email === email && u.motDePasse === motDePasse,
    )

    if (utilisateur) {
      localStorage.setItem('vendeurConnecte', utilisateur.id)
      window.location.href = 'dashboard.html'
    } else {
      alert('Email ou mot de passe incorrect')
    }
  })
}

function initRegister() {
  const form = document.getElementById('form-register')
  if (!form) return

  form.addEventListener('submit', (e) => {
    e.preventDefault()

    const nom = document.getElementById('nom').value
    const email = document.getElementById('email').value
    const telephone = document.getElementById('telephone').value
    const motDePasse = document.getElementById('motdepasse').value
    const confirmation = document.getElementById('confirmation').value

    if (motDePasse !== confirmation) {
      alert('Les mots de passe ne correspondent pas')
      return
    }

    const utilisateurs = JSON.parse(
      localStorage.getItem('utilisateurs') || '[]',
    )

    if (utilisateurs.find((u) => u.email === email)) {
      alert('Cet email est déjà utilisé')
      return
    }

    const nouvelUtilisateur = {
      id: Date.now(),
      nom,
      email,
      telephone,
      motDePasse,
    }

    utilisateurs.push(nouvelUtilisateur)
    localStorage.setItem('utilisateurs', JSON.stringify(utilisateurs))

    alert('Inscription réussie! Vous pouvez maintenant vous connecter.')
    window.location.href = 'login.html'
  })
}

// DASHBOARD VENDEUR

function initDashboard() {
  // Vérifier si connecté
  const vendor = getVendeurConnecte()
  if (!vendor) {
    window.location.href = 'login.html'
    return
  }

  // Afficher le nom
  const vendorName = document.getElementById('vendor-name')
  if (vendorName) vendorName.textContent = vendor.nom

  // Afficher les terrains
  afficherTerrainsVendor()

  // Afficher les messages
  afficherMessages()

  // Bouton déconnexion
  document.getElementById('btn-logout').addEventListener('click', deconnecter)

  // Bouton ajouter terrain
  document.getElementById('btn-add-terrain').addEventListener('click', () => {
    document.getElementById('modal-add').classList.add('show')
    initMapPicker()
  })

  // Fermer modal
  document.getElementById('btn-close-modal').addEventListener('click', () => {
    document.getElementById('modal-add').classList.remove('show')
  })

  // Formulaire ajout terrain
  document
    .getElementById('form-add-terrain')
    .addEventListener('submit', (e) => {
      e.preventDefault()
      ajouterTerrain()
    })
}

function afficherTerrainsVendor() {
  const container = document.getElementById('vendor-terrains')
  const vendor = getVendeurConnecte()
  if (!container || !vendor) return

  const terrains = getTerrainsVendor(vendor.id)

  if (terrains.length === 0) {
    container.innerHTML =
      '<p style="text-align:center;grid-column:1/-1;padding:2rem;">Vous n\'avez pas encore de terrains</p>'
    return
  }

  container.innerHTML = terrains
    .map(
      (terrain) => `
        <div class="dashboard-card">
            <img src="${terrain.photos[0] || ''}" alt="${terrain.titre}">
            <!-- IMAGE: Photo du terrain ${terrain.titre} -->
            <h3>${terrain.titre}</h3>
            <p><strong>${formatPrix(terrain.prix)}</strong> - ${terrain.surface} m²</p>
            <p style="color:${terrain.vendu ? 'red' : 'green'}">${terrain.vendu ? 'Vendu' : 'Disponible'}</p>
            <div class="dashboard-card-actions">
                <button class="btn-edit" onclick="modifierTerrain(${terrain.id})"> Modifier</button>
                <button class="btn-delete" onclick="supprimerTerrain(${terrain.id})"> Supprimer</button>
                <button class="btn-sold ${terrain.vendu ? '' : 'active'}" onclick="toggleVendu(${terrain.id})">
                    ${terrain.vendu ? ' Réactiver' : ' Marquer vendu'}
                </button>
            </div>
        </div>
    `,
    )
    .join('')
}

function afficherMessages() {
  const container = document.getElementById('messages-list')
  if (!container) return

  const messages = JSON.parse(localStorage.getItem('messages') || '[]')
  const vendor = getVendeurConnecte()
  const terrains = getTerrainsVendor(vendor.id)
  const terrainIds = terrains.map((t) => t.id)

  const messagesVendor = messages.filter((m) =>
    terrainIds.includes(m.terrainId),
  )

  if (messagesVendor.length === 0) {
    container.innerHTML = '<p>Aucun message</p>'
    return
  }

  container.innerHTML = messagesVendor
    .map(
      (msg) => `
        <div class="message">
            <div class="message-header">
                <span class="message-acheteur">${msg.acheteurNom}</span>
                <span>${new Date(msg.date).toLocaleDateString('fr-FR')}</span>
            </div>
            <p><strong>Téléphone:</strong> ${msg.acheteurTelephone}</p>
            <p>${msg.message || 'Pas de message'}</p>
        </div>
    `,
    )
    .join('')
}

let mapPicker = null
let markerPicker = null

function initMapPicker() {
  setTimeout(() => {
    if (mapPicker) return

    if (typeof L === 'undefined') {
      const link = document.createElement('link')
      link.rel = 'stylesheet'
      link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css'
      document.head.appendChild(link)

      const script = document.createElement('script')
      script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js'
      script.onload = () => createMapPicker()
      document.head.appendChild(script)
    } else {
      createMapPicker()
    }
  }, 100)
}

function createMapPicker() {
  mapPicker = L.map('location-picker').setView([5.4445, 10.2553], 13)

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap',
  }).addTo(mapPicker)

  mapPicker.on('click', (e) => {
    if (markerPicker) {
      mapPicker.removeLayer(markerPicker)
    }
    markerPicker = L.marker(e.latlng).addTo(mapPicker)
    document.getElementById('lat-input').value = e.latlng.lat
    document.getElementById('lng-input').value = e.latlng.lng
  })
}

function ajouterTerrain() {
  const vendor = getVendeurConnecte()
  if (!vendor) return

  const titre = document.getElementById('titre').value
  const prix = parseInt(document.getElementById('prix').value)
  const surface = parseInt(document.getElementById('surface').value)
  const description = document.getElementById('description').value
  const telephone = document.getElementById('telephone').value
  const whatsapp = document.getElementById('whatsapp').value
  const lat = parseFloat(document.getElementById('lat-input').value)
  const lng = parseFloat(document.getElementById('lng-input').value)

  if (!titre || !prix || !surface || !lat || !lng) {
    alert('Veuillez remplir tous les champs obligatoires')
    return
  }

  const terrains = JSON.parse(localStorage.getItem('terrains') || '[]')

  const nouveauTerrain = {
    id: Date.now(),
    titre,
    prix,
    surface,
    photos: ['', '', ''],
    localisation: { lat, lng },
    telephone,
    whatsapp,
    vendu: false,
    vendorId: vendor.id,
    description,
  }

  terrains.push(nouveauTerrain)
  saveTerrains(terrains)

  alert('Terrain ajouté avec succès!')
  document.getElementById('modal-add').classList.remove('show')
  afficherTerrainsVendor()
}

function modifierTerrain(id) {
  const terrains = JSON.parse(localStorage.getItem('terrains') || '[]')
  const terrain = terrains.find((t) => t.id === id)

  if (!terrain) return

  // Pré-remplir le formulaire
  document.getElementById('titre').value = terrain.titre
  document.getElementById('prix').value = terrain.prix
  document.getElementById('surface').value = terrain.surface
  document.getElementById('description').value = terrain.description || ''
  document.getElementById('telephone').value = terrain.telephone || ''
  document.getElementById('whatsapp').value = terrain.whatsapp || ''
  document.getElementById('lat-input').value = terrain.localisation.lat
  document.getElementById('lng-input').value = terrain.localisation.lng

  // Modifier le formulaire pour mettre à jour au lieu d'ajouter
  const form = document.getElementById('form-add-terrain')
  form.onsubmit = (e) => {
    e.preventDefault()
    terrain.titre = document.getElementById('titre').value
    terrain.prix = parseInt(document.getElementById('prix').value)
    terrain.surface = parseInt(document.getElementById('surface').value)
    terrain.description = document.getElementById('description').value
    terrain.telephone = document.getElementById('telephone').value
    terrain.whatsapp = document.getElementById('whatsapp').value
    terrain.localisation.lat = parseFloat(
      document.getElementById('lat-input').value,
    )
    terrain.localisation.lng = parseFloat(
      document.getElementById('lng-input').value,
    )

    saveTerrains(terrains)
    alert('Terrain modifié!')
    document.getElementById('modal-add').classList.remove('show')
    afficherTerrainsVendor()
    form.onsubmit = (e) => {
      e.preventDefault()
      ajouterTerrain()
    }
  }

  document.getElementById('modal-add').classList.add('show')
  initMapPicker()
}

function supprimerTerrain(id) {
  if (!confirm('Êtes-vous sûr de vouloir supprimer ce terrain?')) return

  let terrains = JSON.parse(localStorage.getItem('terrains') || '[]')
  terrains = terrains.filter((t) => t.id !== id)
  saveTerrains(terrains)
  afficherTerrainsVendor()
}

function toggleVendu(id) {
  let terrains = JSON.parse(localStorage.getItem('terrains') || '[]')
  const terrain = terrains.find((t) => t.id === id)
  if (terrain) {
    terrain.vendu = !terrain.vendu
    saveTerrains(terrains)
    afficherTerrainsVendor()
  }
}

// ==========================================
// CATALOGUE
// ==========================================

function afficherCatalogue() {
  const container = document.getElementById('catalogue-list')
  if (!container) return

  const terrains = getTerrainsDisponibles()

  if (terrains.length === 0) {
    container.innerHTML =
      '<p style="text-align:center;grid-column:1/-1;padding:2rem;">Aucun terrain disponible</p>'
    return
  }

  container.innerHTML = terrains
    .map(
      (terrain) => `
        <div class="terrain-card" onclick="window.location.href='terrain.html?id=${terrain.id}'">
            <div class="image-carousel">
                ${terrain.photos.map((photo) => `<img src="${photo || ''}" alt="${terrain.titre}">`).join('')}
            </div>
            <div class="terrain-info">
                <h3>${terrain.titre}</h3>
                <div class="terrain-price">${formatPrix(terrain.prix)}</div>
                <div class="terrain-details">
                    <span> ${terrain.surface} m²</span>
                    <span> ${terrain.localisation.lat.toFixed(2)}, ${terrain.localisation.lng.toFixed(2)}</span>
                </div>
            </div>
        </div>
    `,
    )
    .join('')
}

function appliquerFiltres() {
  const region = document.getElementById('filter-region')?.value
  const prixMax =
    parseInt(document.getElementById('filter-prix')?.value) || Infinity
  const surfaceMin =
    parseInt(document.getElementById('filter-surface')?.value) || 0

  let terrains = getTerrainsDisponibles()

  // Filtrer par région (basé sur les coordonnées)
  if (region) {
    const regions = {
      foto: { lat: 5.44, lng: 10.25, radius: 0.2 },
      foreke: { lat: 5.46, lng: 10.265, radius: 0.2 },
      lycee: { lat: 5.435, lng: 10.24, radius: 0.2 },
      keleng: { lat: 5.45, lng: 10.27, radius: 0.2 },
      chateau: { lat: 5.445, lng: 10.26, radius: 0.2 },
      tsinko: { lat: 5.47, lng: 10.255, radius: 0.2 },
    }

    const target = regions[region]
    if (target) {
      terrains = terrains.filter((t) => {
        const dist = Math.sqrt(
          Math.pow(t.localisation.lat - target.lat, 2) +
            Math.pow(t.localisation.lng - target.lng, 2),
        )
        return dist < target.radius
      })
    }
  }

  // Filtrer par prix
  terrains = terrains.filter((t) => t.prix <= prixMax)

  // Filtrer par surface
  terrains = terrains.filter((t) => t.surface >= surfaceMin)

  // Afficher les résultats filtrés
  const container = document.getElementById('catalogue-list')
  if (!container) return

  if (terrains.length === 0) {
    container.innerHTML =
      '<p style="text-align:center;grid-column:1/-1;padding:2rem;">Aucun terrain ne correspond aux filtres</p>'
    return
  }

  container.innerHTML = terrains
    .map(
      (terrain) => `
        <div class="terrain-card" onclick="window.location.href='terrain.html?id=${terrain.id}'">
            <div class="image-carousel">
                ${terrain.photos.map((photo) => `<img src="${photo || ''}" alt="${terrain.titre}">`).join('')}
            </div>
            <div class="terrain-info">
                <h3>${terrain.titre}</h3>
                <div class="terrain-price">${formatPrix(terrain.prix)}</div>
                <div class="terrain-details">
                    <span> ${terrain.surface} m²</span>
                    <span> ${terrain.localisation.lat.toFixed(2)}, ${terrain.localisation.lng.toFixed(2)}</span>
                </div>
            </div>
        </div>
    `,
    )
    .join('')
}

// ==========================================
// INITIALISATION AU CHARGEMENT
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
  initData()
  initViewToggle()
  afficherTerrains()

  // Page catalogue
  if (document.getElementById('catalogue-list')) {
    afficherCatalogue()
  }

  // Initialiser la carte si on est sur la page index ou catalogue
  if (document.getElementById('map-container')) {
    const vuePreferee = localStorage.getItem('vuePreferee')
    if (vuePreferee === 'carte') {
      setTimeout(initMap, 100)
    }
  }

  // Page détail terrain
  if (document.getElementById('detail-titre')) {
    initTerrainDetail()
  }

  // Page login
  if (document.getElementById('form-login')) {
    initLogin()
  }

  // Page register
  if (document.getElementById('form-register')) {
    initRegister()
  }

  // Dashboard
  if (document.getElementById('vendor-terrains')) {
    initDashboard()
  }

  // Fermer le menu mobile quand on clique sur un lien
  const mobileMenuLinks = document.querySelectorAll('.mobile-menu a')
  mobileMenuLinks.forEach((link) => {
    link.addEventListener('click', () => {
      const menu = document.getElementById('mobile-menu')
      if (menu) {
        menu.classList.remove('show')
      }
    })
  })
})
