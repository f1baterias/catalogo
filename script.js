// Datos de las baterías (editar aquí para agregar/modificar productos)
// Imágenes en: res/[marca]/[tamaño].png (ej: res/moura/55.png)
const baterias = [
  // MOURA
  {
    marca: "Moura",
    tamaño: "12x55",
    precio: 135000,
    imagen: "res/moura/55.png",
    destacado: true,
    enStock: false,
    visible: true,
    garantia: 12,
    specs: {
      modelo: "M22ED",
      dimensiones: "190x175x210 mm",
      voltaje: "12V",
      cca: "390A",
      ca: "429A",
      c20: "50Ah",
      rc: "75 min",
    },
  },
  {
    marca: "Moura",
    tamaño: "12x65",
    precio: 135000,
    imagen: "res/moura/65.png",
    destacado: true,
    enStock: false,
    visible: true,
    garantia: 12,
    specs: {
      modelo: "M20GD",
      dimensiones: "175x175x240 mm",
      voltaje: "12V",
      cca: "380A",
      ca: "450A",
      c20: "50Ah",
      rc: "75 min",
    },
  },
  {
    marca: "Moura",
    tamaño: "12x75",
    precio: 165000,
    imagen: "res/moura/75.png",
    destacado: true,
    enStock: true,
    visible: true,
    garantia: 12,
    specs: {
      modelo: "M24KD",
      dimensiones: "175x282x175 mm",
      voltaje: "12V",
      cca: "530A",
      ca: "580A",
      c20: "65Ah",
      rc: "110 min",
    },
  },

  // WILLARD
  {
    marca: "Willard",
    tamaño: "12x65",
    precio: 130000,
    imagen: "res/willard/65.png",
    destacado: false,
    enStock: true,
    visible: true,
    garantia: 12,
    specs: {
      modelo: "UB 620",
      dimensiones: "240x175x175 mm",
      voltaje: "12V",
      cca: "490A",
      ca: "600A",
      c20: "51Ah",
      rc: "85 min",
    },
  },
  {
    marca: "Willard",
    tamaño: "12x75S",
    precio: 155000,
    imagen: "res/willard/75s.png",
    destacado: false,
    enStock: false,
    visible: false,
    garantia: 12,
    specs: {
      modelo: "UB 730",
      dimensiones: "242x175x190 mm",
      voltaje: "12V",
      cca: "590A",
      ca: "720A",
      c20: "62Ah",
      rc: "100 min",
    },
  },
  {
    marca: "Willard",
    tamaño: "12x75",
    precio: 155000,
    imagen: "res/willard/75.png",
    destacado: true,
    enStock: true,
    visible: true,
    garantia: 12,
    specs: {
      modelo: "UB 740",
      dimensiones: "275x174x175 mm",
      voltaje: "12V",
      cca: "590A",
      ca: "720A",
      c20: "62Ah",
      rc: "100 min",
    },
  },
  {
    marca: "Willard",
    tamaño: "12x85",
    precio: 170000,
    imagen: "res/willard/85.png",
    destacado: false,
    enStock: false,
    visible: false,
    garantia: 12,
    specs: {
      modelo: "UB840",
      dimensiones: "275x174x190 mm",
      voltaje: "12V",
      cca: "709A",
      ca: "840A",
      c20: "75Ah",
      rc: "140 min",
    },
  },

  // HERBO
  {
    marca: "Herbo",
    tamaño: "12x65",
    precio: 85000,
    imagen: "res/herbo/65.png",
    destacado: false,
    enStock: true,
    visible: true,
    garantia: 12,
    specs: {
      modelo: "PLUS MAX",
      dimensiones: "240x173x178 mm",
      voltaje: "12V",
      cca: "350A",
      ca: "450A",
      c20: "65Ah",
      rc: "55 min",
    },
  },
  {
    marca: "Herbo",
    tamaño: "12x75",
    precio: 100000,
    imagen: "res/herbo/75.png",
    destacado: false,
    enStock: true,
    visible: true,
    garantia: 12,
    specs: {
      modelo: "PREMIUM MAX",
      dimensiones: "277x175x176 mm",
      voltaje: "12V",
      cca: "450A",
      ca: "550A",
      c20: "50Ah",
      rc: "80 min",
    },
  },

  // SERMAT
  {
    marca: "Sermat",
    tamaño: "12x55",
    precio: 105000,
    imagen: "res/sermat/55.png",
    destacado: false,
    enStock: true,
    visible: true,
    garantia: 12,
    specs: {
      modelo: "ST55",
      dimensiones: "175x207x186 mm",
      voltaje: "12V",
      cca: "430A",
      ca: "540A",
      c20: "55Ah",
      rc: "90 min",
    },
  },
  {
    marca: "Sermat",
    tamaño: "12x65",
    precio: 110000,
    imagen: "res/sermat/65.png",
    destacado: false,
    enStock: true,
    visible: true,
    garantia: 12,
    specs: {
      modelo: "ST65",
      dimensiones: "240x170x170 mm",
      voltaje: "12V",
      cca: "430A",
      ca: "550A",
      c20: "65Ah",
      rc: "70 min",
    },
  },
  {
    marca: "Sermat",
    tamaño: "12x75",
    precio: 100000,
    imagen: "res/sermat/75.png",
    destacado: false,
    enStock: false,
    visible: false,
    garantia: 12,
    specs: {
      modelo: "ST75",
      dimensiones: "260x175x225 mm",
      voltaje: "12V",
      cca: "530A",
      ca: "650A",
      c20: "75Ah",
      rc: "115 min",
    },
  },

  // VOLTA
  {
    marca: "Volta",
    tamaño: "12x65",
    precio: 80000,
    imagen: "res/volta/65.png",
    destacado: false,
    enStock: true,
    visible: true,
    garantia: 6,
    specs: {
      modelo: "VOLTA 50",
      dimensiones: "240x170x170 mm",
      voltaje: "12V",
      cca: "320A",
      ca: "470A",
      c20: "40Ah",
      rc: "60 min",
    },
  },
  {
    marca: "Volta",
    tamaño: "12x75",
    precio: 90000,
    imagen: "res/volta/75.png",
    destacado: false,
    enStock: true,
    visible: true,
    garantia: 6,
    specs: {
      modelo: "VOLTA 75",
      dimensiones: "175x270x178 mm",
      voltaje: "12V",
      cca: "520A",
      ca: "400A",
      c20: "46Ah",
      rc: "72 min",
    },
  },
  // BOSCH
  {
    marca: "Bosch",
    tamaño: "12x65",
    precio: 115000,
    imagen: "res/bosch/65.png",
    destacado: false,
    enStock: true,
    visible: true,
    garantia: 12,
    specs: {
      modelo: "S3 43D",
      dimensiones: "240x175x174 mm",
      voltaje: "12V",
      cca: "390A",
      ca: "490A",
      c20: "43Ah",
      rc: "70 min",
    },
  },
  {
    marca: "Bosch",
    tamaño: "12x75",
    precio: 130000,
    imagen: "res/bosch/75.png",
    destacado: true,
    enStock: false,
    visible: true,
    garantia: 12,
    specs: {
      modelo: "S3 51D",
      dimensiones: "275x175x174 mm",
      voltaje: "12V",
      cca: "490A",
      ca: "600A",
      c20: "51Ah",
      rc: "85 min",
    },
  },
  // BATSA
  {
    marca: "Batsa",
    tamaño: "12x160",
    precio: 200000,
    imagen: "res/batsa/160.png",
    destacado: false,
    enStock: true,
    visible: true,
    garantia: 12,
    specs: {
      modelo: "LAB23",
      dimensiones: "483x170x240 mm",
      voltaje: "12V",
      cca: "800A",
      ca: "960A",
      c20: "114Ah",
      rc: "240 min",
    },
  },
];

// Función para formatear precio
function formatPrice(price) {
  return price.toLocaleString("es-AR");
}

// Función para crear tarjeta de batería
function createBatteryCard(battery, index) {
  const garantiaClass = battery.garantia === 12 ? "garantia-12" : "garantia-6";
  const outOfStockClass = !battery.enStock ? "out-of-stock" : "";

  // Precio o "Sin stock"
  const priceHTML = battery.enStock
    ? `<div class="price"><span class="price-currency">$</span>${formatPrice(battery.precio)}</div>`
    : `<div class="price sin-stock-text">Sin stock</div>`;

  // Estado de stock
  const stockHTML = battery.enStock
    ? `<div class="stock-status"><span class="stock-dot"></span><span>En stock</span></div>`
    : `<div class="stock-status"><span class="stock-dot out"></span><span>Agotado</span></div>`;

  return `
        <div class="battery-card ${battery.destacado && battery.enStock ? "featured" : ""} ${outOfStockClass}" 
             data-marca="${battery.marca.toLowerCase()}" 
             data-tamaño="${battery.tamaño.toLowerCase()}"
             data-precio="${battery.precio}">
            <div class="card-image">
                <span class="brand-badge">${battery.marca}</span>
                <img src="${battery.imagen}" alt="${battery.marca} ${battery.tamaño}">
            </div>
            <div class="card-content">
                <h3 class="card-title">${battery.marca} ${battery.tamaño}</h3>
                <div class="card-specs">
                    <span class="spec-tag highlight">${battery.tamaño}</span>
                    <span class="spec-tag ${garantiaClass}">${battery.garantia} meses garantía</span>
                    <span class="spec-tag modelo-tag">Modelo: ${battery.specs.modelo}</span>
                </div>
                <button class="btn-specs" onclick="openModal(${index})">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="12" y1="16" x2="12" y2="12"></line>
                        <line x1="12" y1="8" x2="12.01" y2="8"></line>
                    </svg>
                    Ver especificaciones
                </button>
                <div class="card-footer">
                    ${priceHTML}
                    ${stockHTML}
                </div>
            </div>
        </div>
    `;
}

// Función para renderizar catálogo
let filteredBaterias = [...baterias];

function renderCatalog(batteries) {
  // Filtrar solo las visibles
  const visibleBatteries = batteries.filter((b) => b.visible);
  filteredBaterias = visibleBatteries;
  const grid = document.getElementById("catalog-grid");
  grid.innerHTML = visibleBatteries
    .map((b, i) => createBatteryCard(b, baterias.indexOf(b)))
    .join("");
  document.getElementById("results-count").textContent =
    visibleBatteries.length;
}

// Función para filtrar y ordenar
function filterAndSort() {
  const brandFilter = document
    .getElementById("brand-filter")
    .value.toLowerCase();
  const sizeFilter = document.getElementById("size-filter").value.toLowerCase();
  const sortFilter = document.getElementById("sort-filter").value;
  const searchTerm = document
    .getElementById("search-input")
    .value.toLowerCase();
  const stockOnly = document.getElementById("stock-filter").checked;

  let filtered = baterias.filter((b) => {
    // Primero filtrar por visible
    if (!b.visible) return false;
    
    // Filtrar por stock si está activado
    if (stockOnly && !b.enStock) return false;

    const matchBrand = !brandFilter || b.marca.toLowerCase() === brandFilter;
    const matchSize = !sizeFilter || b.tamaño.toLowerCase() === sizeFilter;
    const matchSearch =
      !searchTerm ||
      b.marca.toLowerCase().includes(searchTerm) ||
      b.tamaño.toLowerCase().includes(searchTerm) ||
      b.specs.modelo.toLowerCase().includes(searchTerm);
    return matchBrand && matchSize && matchSearch;
  });

  // Ordenar
  switch (sortFilter) {
    case "price-asc":
      filtered.sort((a, b) => a.precio - b.precio);
      break;
    case "price-desc":
      filtered.sort((a, b) => b.precio - a.precio);
      break;
    case "brand":
      filtered.sort((a, b) => a.marca.localeCompare(b.marca));
      break;
  }

  renderCatalog(filtered);
}

// Funciones del modal
function openModal(index) {
  const battery = baterias[index];
  const modal = document.getElementById("specs-modal");
  const title = document.getElementById("modal-title");
  const grid = document.getElementById("specs-grid");

  title.textContent = `${battery.marca} ${battery.tamaño}`;

  grid.innerHTML = `
        <div class="spec-row">
            <span class="spec-label">Modelo</span>
            <span class="spec-value">${battery.specs.modelo}</span>
        </div>
        <div class="spec-row">
            <span class="spec-label">Dimensiones</span>
            <span class="spec-value">${battery.specs.dimensiones}</span>
        </div>
        <div class="spec-row">
            <span class="spec-label">Voltaje</span>
            <span class="spec-value">${battery.specs.voltaje}</span>
        </div>
        <div class="spec-row">
            <span class="spec-label">CCA</span>
            <span class="spec-value">${battery.specs.cca}</span>
        </div>
        <div class="spec-row">
            <span class="spec-label">CA</span>
            <span class="spec-value">${battery.specs.ca}</span>
        </div>
        <div class="spec-row">
            <span class="spec-label">C-20</span>
            <span class="spec-value">${battery.specs.c20}</span>
        </div>
        <div class="spec-row">
            <span class="spec-label">RC</span>
            <span class="spec-value">${battery.specs.rc}</span>
        </div>
    `;

  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  const modal = document.getElementById("specs-modal");
  modal.classList.remove("active");
  document.body.style.overflow = "";
}

// Event listeners
document.addEventListener("DOMContentLoaded", function () {
  // Filtros
  document
    .getElementById("brand-filter")
    .addEventListener("change", filterAndSort);
  document
    .getElementById("size-filter")
    .addEventListener("change", filterAndSort);
  document
    .getElementById("sort-filter")
    .addEventListener("change", filterAndSort);
  document
    .getElementById("search-input")
    .addEventListener("input", filterAndSort);
  document
    .getElementById("stock-filter")
    .addEventListener("change", filterAndSort);

  // Cerrar modal con Escape o click fuera
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });

  document.getElementById("specs-modal").addEventListener("click", (e) => {
    if (e.target.classList.contains("modal-overlay")) closeModal();
  });

  // Render inicial (usa filterAndSort para respetar el checkbox de stock)
  filterAndSort();
});
