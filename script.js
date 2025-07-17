// ===== DATOS DE LOS DÍAS ESPECIALES =====
// ¡Aquí puedes editar fácilmente todos los días especiales!
const specialDays = [
  {
    id: 1,
    title: "Nuestro Primer Encuentro",
    date: "14 de Febrero, 2024",
    preview: "El día que nuestros corazones se encontraron por primera vez...",
    description:
      "Fue un día mágico cuando nuestras miradas se cruzaron por primera vez. Como en los animes que tanto amamos, sentí que el tiempo se detuvo y todo a nuestro alrededor se llenó de flores de cerezo. Tu sonrisa iluminó mi mundo como las perlas de Pitchi Pitchi Pitch.",
    images: [
      "/placeholder.svg?height=200&width=300&text=Primera+Cita",
      "/placeholder.svg?height=200&width=300&text=Primer+Abrazo",
    ],
  },
  {
    id: 2,
    title: "Primera Cita Oficial",
    date: "20 de Febrero, 2024",
    preview: "Nervios, risas y el inicio de algo hermoso...",
    description:
      "Estaba tan nervioso como Senku en Dr. Stone, pero tu risa me tranquilizó. Caminamos por el parque hablando de nuestros animes favoritos, y supe que habías encontrado a mi alma gemela otaku.",
    images: [
      "/placeholder.svg?height=200&width=300&text=Parque+Romántico",
      "/placeholder.svg?height=200&width=300&text=Helados+Juntos",
    ],
  },
  {
    id: 3,
    title: "Primer 'Te Amo'",
    date: "15 de Marzo, 2024",
    preview: "Las palabras más importantes de nuestras vidas...",
    description:
      "Como en una escena de shojo manga, bajo las estrellas te dije por primera vez 'te amo'. Tus ojos brillaron como las lágrimas de felicidad de Ponyo, y supe que este momento quedaría grabado en mi corazón para siempre.",
    images: [
      "/placeholder.svg?height=200&width=300&text=Noche+Estrellada",
      "/placeholder.svg?height=200&width=300&text=Abrazo+Tierno",
    ],
  },
  {
    id: 4,
    title: "Maratón de Anime",
    date: "2 de Abril, 2024",
    preview: "24 horas de anime, snacks y abrazos...",
    description:
      "Decidimos hacer un maratón de todos los animes que queríamos ver juntos. Desde Mermaid Melody hasta The Apothecary Diaries, lloramos, reímos y nos enamoramos aún más. Fue como vivir en nuestro propio anime slice of life.",
    images: [
      "/placeholder.svg?height=200&width=300&text=Maratón+Anime",
      "/placeholder.svg?height=200&width=300&text=Snacks+Kawaii",
    ],
  },
  {
    id: 5,
    title: "Primer Viaje Juntos",
    date: "10 de Mayo, 2024",
    preview: "Aventuras, descubrimientos y momentos únicos...",
    description:
      "Nuestro primer viaje fue como una aventura de Studio Ghibli. Cada paisaje parecía sacado de una película de Miyazaki, y tu emoción al ver cosas nuevas me recordaba a la curiosidad de Chihiro en El Viaje de Chihiro.",
    images: [
      "/placeholder.svg?height=200&width=300&text=Paisaje+Montaña",
      "/placeholder.svg?height=200&width=300&text=Selfie+Viaje",
    ],
  },
  {
    id: 6,
    title: "Cumpleaños Especial",
    date: "18 de Junio, 2024",
    preview: "Una celebración llena de sorpresas y amor...",
    description:
      "Preparé una sorpresa temática de tus animes favoritos. Decoré todo como si fuera el palacio submarino de Mermaid Melody, con colores pastel y brillos por todas partes. Tu felicidad fue el mejor regalo que pude recibir.",
    images: [
      "/placeholder.svg?height=200&width=300&text=Decoración+Kawaii",
      "/placeholder.svg?height=200&width=300&text=Pastel+Anime",
    ],
  },
  {
    id: 7,
    title: "Cosplay Juntos",
    date: "25 de Julio, 2024",
    preview: "Convirtiéndonos en nuestros personajes favoritos...",
    description:
      "Decidimos hacer cosplay de nuestros personajes favoritos. Tú como una sirena de Mermaid Melody y yo como tu príncipe. Fue divertido, tierno y nos sentimos como si estuviéramos viviendo en nuestro anime favorito.",
    images: [
      "/placeholder.svg?height=200&width=300&text=Cosplay+Pareja",
      "/placeholder.svg?height=200&width=300&text=Fotos+Kawaii",
    ],
  },
  {
    id: 8,
    title: "Noche de Estrellas",
    date: "12 de Agosto, 2024",
    preview: "Contemplando el universo en tus ojos...",
    description:
      "Fuimos a ver las estrellas como en Your Name. Hicimos deseos a las estrellas fugaces y prometimos estar juntos sin importar la distancia o el tiempo. Esa noche sentí que éramos parte de algo más grande y hermoso.",
    images: [
      "/placeholder.svg?height=200&width=300&text=Cielo+Estrellado",
      "/placeholder.svg?height=200&width=300&text=Manta+Juntos",
    ],
  },
  {
    id: 9,
    title: "Festival de Otoño",
    date: "23 de Septiembre, 2024",
    preview: "Colores dorados y momentos mágicos...",
    description:
      "El festival de otoño fue como una escena de Kimi no Na wa. Los colores dorados de las hojas, los puestos de comida, y tu yukata rosa te hacían ver como una princesa de anime. Bailamos bajo los farolillos como si fuéramos los protagonistas de nuestra propia historia.",
    images: [
      "/placeholder.svg?height=200&width=300&text=Festival+Otoño",
      "/placeholder.svg?height=200&width=300&text=Yukata+Rosa",
    ],
  },
  {
    id: 10,
    title: "Primera Navidad",
    date: "24 de Diciembre, 2024",
    preview: "Magia navideña y promesas de amor eterno...",
    description:
      "Nuestra primera Navidad juntos fue como un episodio especial de anime navideño. Intercambiamos regalos hechos a mano, vimos anime navideño y prometimos que cada Navidad sería aún más especial que la anterior.",
    images: [
      "/placeholder.svg?height=200&width=300&text=Árbol+Navidad",
      "/placeholder.svg?height=200&width=300&text=Regalos+Kawaii",
    ],
  },
  {
    id: 11,
    title: "Año Nuevo Mágico",
    date: "31 de Diciembre, 2024",
    preview: "Despidiendo el año con amor y esperanza...",
    description:
      "Vimos los fuegos artificiales del Año Nuevo como en los finales de temporada de anime. Cada explosión de color en el cielo representaba un momento hermoso que vivimos juntos. Nos besamos a medianoche prometiendo que el próximo año sería aún más mágico.",
    images: [
      "/placeholder.svg?height=200&width=300&text=Fuegos+Artificiales",
      "/placeholder.svg?height=200&width=300&text=Beso+Medianoche",
    ],
  },
  {
    id: 12,
    title: "Nuestro Aniversario",
    date: "14 de Febrero, 2025",
    preview: "Un año completo de amor, risas y sueños cumplidos...",
    description:
      "Hoy celebramos nuestro primer aniversario. Ha sido un año lleno de momentos que parecían sacados de nuestros animes favoritos. Cada día contigo ha sido una nueva aventura, y espero que tengamos muchos más años de amor, anime y felicidad juntos. ¡Te amo más que a todos los personajes de anime juntos! 💕",
    images: [
      "/placeholder.svg?height=200&width=300&text=Aniversario+Feliz",
      "/placeholder.svg?height=200&width=300&text=Amor+Eterno",
    ],
  },
]

// ===== VARIABLES GLOBALES =====
let currentModal = null

// ===== INICIALIZACIÓN =====
document.addEventListener("DOMContentLoaded", () => {
  initializeApp()
})

// ===== FUNCIÓN PRINCIPAL DE INICIALIZACIÓN =====
function initializeApp() {
  createParticles()
  renderDaysGrid()
  setupModalEvents()
  startFloatingHearts()

  console.log("💕 Web de aniversario inicializada correctamente")
}

// ===== CREAR PARTÍCULAS DE FONDO =====
function createParticles() {
  const particlesContainer = document.getElementById("particles")
  const particleEmojis = ["✨", "💖", "🌸", "💕", "⭐", "🌟", "💫", "🦋"]

  // Crear 20 partículas
  for (let i = 0; i < 20; i++) {
    const particle = document.createElement("div")
    particle.className = "particle"
    particle.textContent = particleEmojis[Math.floor(Math.random() * particleEmojis.length)]

    // Posición aleatoria
    particle.style.left = Math.random() * 100 + "%"
    particle.style.top = Math.random() * 100 + "%"

    // Animación con delay aleatorio
    particle.style.animationDelay = Math.random() * 6 + "s"
    particle.style.animationDuration = Math.random() * 4 + 4 + "s"

    particlesContainer.appendChild(particle)
  }
}

// ===== RENDERIZAR CUADRÍCULA DE DÍAS =====
function renderDaysGrid() {
  const daysGrid = document.getElementById("daysGrid")

  // Limpiar contenido existente
  daysGrid.innerHTML = ""

  // Crear tarjeta para cada día especial
  specialDays.forEach((day) => {
    const dayCard = createDayCard(day)
    daysGrid.appendChild(dayCard)
  })
}

// ===== CREAR TARJETA DE DÍA =====
function createDayCard(day) {
  const card = document.createElement("div")
  card.className = "day-card"
  card.setAttribute("data-day-id", day.id)

  card.innerHTML = `
        <div class="day-number">Día ${day.id}</div>
        <h3 class="day-title">${day.title}</h3>
        <p class="day-preview">${day.preview}</p>
        <span class="day-date">${day.date}</span>
    `

  // Agregar evento de click
  card.addEventListener("click", () => openModal(day))

  // Efecto de hover con sonido (opcional)
  card.addEventListener("mouseenter", () => {
    card.style.transform = "translateY(-5px) scale(1.01)"
  })

  card.addEventListener("mouseleave", () => {
    card.style.transform = "translateY(0) scale(1)"
  })

  return card
}

// ===== ABRIR MODAL =====
function openModal(day) {
  const modalOverlay = document.getElementById("modalOverlay")
  const modalTitle = document.getElementById("modalTitle")
  const modalDate = document.getElementById("modalDate")
  const modalImages = document.getElementById("modalImages")
  const modalDescription = document.getElementById("modalDescription")

  // Llenar contenido del modal
  modalTitle.textContent = day.title
  modalDate.textContent = day.date
  modalDescription.textContent = day.description

  // Limpiar y agregar imágenes
  modalImages.innerHTML = ""
  day.images.forEach((imageSrc) => {
    const img = document.createElement("img")
    img.src = imageSrc
    img.alt = day.title
    img.className = "modal-image"
    modalImages.appendChild(img)
  })

  // Mostrar modal con animación
  modalOverlay.classList.add("active")
  currentModal = day

  // Prevenir scroll del body
  document.body.style.overflow = "hidden"

  console.log(`💖 Modal abierto para: ${day.title}`)
}

// ===== CERRAR MODAL =====
function closeModal() {
  const modalOverlay = document.getElementById("modalOverlay")

  modalOverlay.classList.remove("active")
  currentModal = null

  // Restaurar scroll del body
  document.body.style.overflow = "auto"

  console.log("💕 Modal cerrado")
}

// ===== CONFIGURAR EVENTOS DEL MODAL =====
function setupModalEvents() {
  const modalClose = document.getElementById("modalClose")
  const modalOverlay = document.getElementById("modalOverlay")

  // Cerrar con botón X
  modalClose.addEventListener("click", closeModal)

  // Cerrar clickeando fuera del modal
  modalOverlay.addEventListener("click", (e) => {
    if (e.target === modalOverlay) {
      closeModal()
    }
  })

  // Cerrar con tecla Escape
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && currentModal) {
      closeModal()
    }
  })
}

// ===== INICIAR CORAZONES FLOTANTES =====
function startFloatingHearts() {
  const hearts = document.querySelectorAll(".floating-heart")

  hearts.forEach((heart, index) => {
    // Reiniciar animación cada vez que termine
    heart.addEventListener("animationend", () => {
      // Cambiar posición horizontal aleatoriamente
      heart.style.left = Math.random() * 90 + "%"

      // Pequeño delay antes de reiniciar
      setTimeout(() => {
        heart.style.animation = "none"
        heart.offsetHeight // Trigger reflow
        heart.style.animation = "floatHeart 8s linear infinite"
      }, Math.random() * 2000)
    })
  })
}

// ===== FUNCIONES DE UTILIDAD =====

// Función para agregar un nuevo día especial (para futuras actualizaciones)
function addSpecialDay(newDay) {
  specialDays.push(newDay)
  renderDaysGrid()
  console.log(`💝 Nuevo día especial agregado: ${newDay.title}`)
}

// Función para editar un día existente
function editSpecialDay(dayId, updatedData) {
  const dayIndex = specialDays.findIndex((day) => day.id === dayId)
  if (dayIndex !== -1) {
    specialDays[dayIndex] = { ...specialDays[dayIndex], ...updatedData }
    renderDaysGrid()
    console.log(`💖 Día especial actualizado: ${specialDays[dayIndex].title}`)
  }
}

// Función para obtener un día específico
function getSpecialDay(dayId) {
  return specialDays.find((day) => day.id === dayId)
}

// ===== EFECTOS ESPECIALES =====

// Crear efecto de brillo al hacer hover en las tarjetas
document.addEventListener("mouseover", (e) => {
  if (e.target.closest(".day-card")) {
    createSparkleEffect(e.target.closest(".day-card"))
  }
})

function createSparkleEffect(element) {
  const sparkle = document.createElement("div")
  sparkle.innerHTML = "✨"
  sparkle.style.position = "absolute"
  sparkle.style.pointerEvents = "none"
  sparkle.style.fontSize = "1rem"
  sparkle.style.color = "#FFD700"
  sparkle.style.zIndex = "10"

  const rect = element.getBoundingClientRect()
  sparkle.style.left = rect.left + Math.random() * rect.width + "px"
  sparkle.style.top = rect.top + Math.random() * rect.height + "px"

  document.body.appendChild(sparkle)

  // Animar y remover
  sparkle.animate(
    [
      { opacity: 0, transform: "translateY(0px) scale(0)" },
      { opacity: 1, transform: "translateY(-20px) scale(1)" },
      { opacity: 0, transform: "translateY(-40px) scale(0)" },
    ],
    {
      duration: 1000,
      easing: "ease-out",
    },
  ).onfinish = () => sparkle.remove()
}

// ===== MENSAJE DE CONSOLA KAWAII =====
console.log(`
💖✨💖✨💖✨💖✨💖✨💖✨💖✨💖✨💖
✨                                    ✨
💖    ¡Web de Aniversario Cargada!    💖
✨                                    ✨
💖  Hecha con amor para mi princesa   💖
✨                                    ✨
💖✨💖✨💖✨💖✨💖✨💖✨💖✨💖✨💖

🌸 Para personalizar:
   - Edita el array 'specialDays' en script.js
   - Cambia los colores en :root en styles.css
   - Agrega tus propias imágenes reemplazando los placeholders

💕 ¡Que tengan un aniversario mágico!
`)
