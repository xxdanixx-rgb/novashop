"use strict";

const catalog = [
  { id: 1, name: "Audífonos inalámbricos", category: "Tecnología", description: "Sonido envolvente y conexión Bluetooth.", image: "inicio.jpg", variants: [
    { id: 101, name: "Gamer RGB", description: "Almohadillas cómodas, sonido envolvente y luces RGB.", image: "rgb.webp", price: 119.90, stock: 5 },
    { id: 102, name: "Deportivos In-Ear", description: "Ajuste seguro y resistencia al sudor para entrenar.", image: "jbl.jpg", price: 69.90, stock: 8 },
    { id: 103, name: "Estudio Pro", description: "Audio de alta fidelidad para escuchar y producir con detalle.", image: "pro.jpg", price: 249.90, stock: 4 }
  ]},
  { id: 2, name: "Reloj inteligente", category: "Accesorios", description: "Controla tu actividad y recibe notificaciones.", image: "inicio1.jpg", variants: [
    { id: 201, name: "Sport Band", description: "Ligero, cómodo y listo para acompañar tus entrenamientos.", image: "band.webp", price: 129.90, stock: 8 },
    { id: 202, name: "Casual de Cuero", description: "Acabado clásico para combinar con un estilo diario.", image: "casual.jpg", price: 159.90, stock: 6 },
    { id: 203, name: "Executive Metal", description: "Diseño metálico elegante para ocasiones formales.", image: "metal.jpg", price: 219.90, stock: 4 }
  ]},
  { id: 3, name: "Mochila urbana", category: "Moda", description: "Práctica, resistente y perfecta para el día a día.", image: "inicio2.webp", variants: [
    { id: 301, name: "Impermeable Porta Laptop", description: "Compartimento acolchado y exterior resistente al agua.", image: "porta laptop.webp", price: 99.90, stock: 10 },
    { id: 302, name: "Mochila de Lona Vintage", description: "Lona resistente con un acabado urbano retro.", image: "vintage.jpg", price: 79.90, stock: 7 },
    { id: 303, name: "Mini Mochila", description: "Compacta y práctica para llevar lo esencial.", image: "mini.jpg", price: 49.90, stock: 9 }
  ]},
  { id: 4, name: "Teclado mecánico", category: "Tecnología", description: "Teclas cómodas para estudiar y jugar.", image: "inicio3.jpg", variants: [
    { id: 401, name: "Teclado 60% Compacto", description: "Formato reducido que libera espacio en el escritorio.", image: "compacto.webp", price: 139.90, stock: 6 },
    { id: 402, name: "Teclado Completo RGB", description: "Distribución completa con retroiluminación RGB.", image: "tecladorgb.webp", price: 189.90, stock: 5 },
    { id: 403, name: "Ergonómico Split", description: "Diseño dividido para una posición de escritura más natural.", image: "split.jpg", price: 249.90, stock: 3 }
  ]},
  { id: 5, name: "Mouse inalámbrico", category: "Tecnología", description: "Diseño ergonómico y movimiento preciso.", image: "inicio4.webp", variants: [
    { id: 501, name: "Ergonómico Vertical", description: "Forma vertical pensada para un agarre relajado.", image: "ergonomico.webp", price: 79.90, stock: 8 },
    { id: 502, name: "Gamer de Alta Precisión", description: "Sensor preciso y botones de respuesta rápida.", image: "precision.jpg", price: 99.90, stock: 6 },
    { id: 503, name: "Ultra-delgado de Viaje", description: "Ligero y compacto para llevar en el bolso o mochila.", image: "delgado.webp", price: 49.90, stock: 12 }
  ]},
  { id: 6, name: "Botella térmica", category: "Hogar", description: "Mantén tus bebidas a la temperatura ideal.", image: "inicio5.webp", variants: [
    { id: 601, name: "Deportiva 1 Litro", description: "Gran capacidad para jornadas largas y actividades al aire libre.", image: "deportivas.jpg", price: 49.90, stock: 10 },
    { id: 602, name: "Taza Térmica de Oficina", description: "Taza con tapa para mantener la bebida a mano en el trabajo.", image: "taza.jpg", price: 39.90, stock: 14 },
    { id: 603, name: "Botella Compacta 500ml", description: "Tamaño compacto para llevar todos los días.", image: "botella.webp", price: 29.90, stock: 20 }
  ]},
  { id: 7, name: "Lámpara LED", category: "Hogar", description: "Iluminación moderna para tu escritorio.", image: "inicio6.jpg", variants: [
    { id: 701, name: "Lámpara de Escritorio Flexible", description: "Brazo ajustable para orientar la luz donde la necesitas.", image: "oficina.webp", price: 59.90, stock: 7 },
    { id: 702, name: "Lámpara Inteligente RGB", description: "Iluminación de colores para personalizar tu espacio.", image: "inteligente.webp", price: 89.90, stock: 5 },
    { id: 703, name: "Lámpara Minimalista Madera", description: "Diseño cálido y minimalista con detalles de madera.", image: "madera.webp", price: 99.90, stock: 4 }
  ]},
  { id: 8, name: "Cámara web HD", category: "Tecnología", description: "Ideal para videollamadas y clases virtuales.", image: "inicio7.jpg", variants: [
    { id: 801, name: "Streamer 4K Pro", description: "Imagen de alta resolución para streaming y creación de contenido.", image: "4k.jpg", price: 299.90, stock: 4 },
    { id: 802, name: "Oficina 1080p con Micrófono", description: "Video Full HD con micrófono integrado para reuniones.", image: "1080.webp", price: 129.90, stock: 9 },
    { id: 803, name: "Gran Angular para Conferencias", description: "Campo visual amplio para reuniones de equipo.", image: "entrevista.jpg", price: 199.90, stock: 5 }
  ]}
];

const STOCK_KEY = "novashop-stock-v2";
const CART_KEY = "novashop-cart-v2";
const USERS_KEY = "novashop-users";
const LOGGED_USER_KEY = "novashop-logged-in";
const YAPE_QR_KEY = "novashop-yape-qr-v1";
const ORDERS_KEY = "novashop-orders-v1";
const ADMIN_PASSWORD = "admin123";
const ADMIN_EMAIL = "creador@novashop.com";
// Carga los productos creados desde el panel y conserva compatibilidad con el STOCK_KEY anterior.
const savedStock = readJSON(STOCK_KEY, []);
if (savedStock && !Array.isArray(savedStock) && Array.isArray(savedStock.products)) {
  const knownIds = new Set(catalog.map(product => Number(product.id)));
  savedStock.products.forEach(product => {
    if (product && Number.isSafeInteger(Number(product.id)) && !knownIds.has(Number(product.id)) && Array.isArray(product.variants)) {
      catalog.push(product);
      knownIds.add(Number(product.id));
    }
  });
}
const allVariants = catalog.flatMap(product => product.variants.map(variant => Object.assign(variant, { parentId: product.id, parentName: product.name, category: product.category })));

function readJSON(key, fallback) {
  try { const value = localStorage.getItem(key); return value === null ? fallback : JSON.parse(value); }
  catch (error) { console.warn(`No se pudo leer ${key}.`, error); return fallback; }
}
function formatPrice(price) {
  return new Intl.NumberFormat("es-PE", { style: "currency", currency: "PEN" }).format(price);
}
function getVariant(id) { return allVariants.find(item => item.id === Number(id)); }
function escapeHTML(value) {
  return String(value ?? "").replace(/[&<>"']/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[char]));
}
function getCartQuantity(id) { const item = cart.find(entry => entry.id === Number(id)); return item ? item.quantity : 0; }
function getAvailableStock(variant) { return Math.max(0, variant.stock - getCartQuantity(variant.id)); }
function saveStock() {
  // Se guarda catálogo + precios/stock bajo la misma clave para que los productos nuevos sobrevivan a recargas.
  localStorage.setItem(STOCK_KEY, JSON.stringify({
    products: catalog,
    variants: allVariants.map(v => ({ id: v.id, stock: v.stock, price: v.price }))
  }));
}
function saveCart() { localStorage.setItem(CART_KEY, JSON.stringify(cart)); }

const savedVariants = Array.isArray(savedStock) ? savedStock : (Array.isArray(savedStock?.variants) ? savedStock.variants : []);
savedVariants.forEach(saved => {
  const variant = getVariant(saved.id);
  if (variant && Number.isSafeInteger(saved.stock) && saved.stock >= 0) variant.stock = saved.stock;
  if (variant && Number.isFinite(Number(saved.price)) && Number(saved.price) >= 0) variant.price = Number(saved.price);
});
let cart = readJSON(CART_KEY, []);
if (!Array.isArray(cart)) cart = [];
cart = cart.filter(item => getVariant(item.id) && Number.isSafeInteger(item.quantity) && item.quantity > 0).map(item => ({ id: Number(item.id), quantity: Math.min(item.quantity, getVariant(item.id).stock) })).filter(item => item.quantity > 0);

const productList = document.getElementById("product-list");
const productSearch = document.getElementById("product-search");
const emptyProducts = document.getElementById("empty-products");
const inventoryList = document.getElementById("inventory-list");
const inventoryMessage = document.getElementById("inventory-message");
const cartItems = document.getElementById("cart-items");
const cartCount = document.getElementById("cart-count");
const subtotalElement = document.getElementById("subtotal");
const shippingElement = document.getElementById("shipping");
const totalElement = document.getElementById("total");
const clearCartButton = document.getElementById("clear-cart");
const checkoutButton = document.getElementById("checkout-button");
const cartMessage = document.getElementById("cart-message");

const catalogHeadingTitle = document.querySelector(".section-heading h2");
const catalogHeadingDesc = document.querySelector(".section-heading p");
const searchBoxWrapper = document.querySelector(".search-box");

function showMessage(element, message, isError = false) {
  if (!element) return;
  element.textContent = message;
  element.classList.toggle("error", isError);
}

function router() {
  const params = new URLSearchParams(window.location.search);
  const productId = params.get("producto");
  const variantId = params.get("variante");

  if (emptyProducts) emptyProducts.hidden = true;

  if (variantId) {
    renderVariantDetail(variantId);
  } else if (productId) {
    renderFilteredCatalog(productId);
  } else {
    renderMainCatalog();
  }
  
  renderInventory(); 
  renderCart();
}

function navigateTo(url, state = {}) {
  window.history.pushState(state, "", url);
  router();
  window.scrollTo(0, 0);
}

function renderMainCatalog() {
  if (searchBoxWrapper) searchBoxWrapper.style.display = "flex";
  if (catalogHeadingTitle) catalogHeadingTitle.textContent = "Productos destacados";
  if (catalogHeadingDesc) catalogHeadingDesc.textContent = "Consulta los precios y las unidades disponibles.";

  const searchTerm = productSearch ? productSearch.value : "";
  const term = searchTerm.trim().toLocaleLowerCase("es");
  const filtered = catalog.filter(p => `${p.name} ${p.category} ${p.description}`.toLocaleLowerCase("es").includes(term));
  
  if (emptyProducts) emptyProducts.hidden = filtered.length > 0;

  productList.className = "product-grid";
  productList.innerHTML = filtered.map(product => `
    <article class="product-card vitrina-card" data-product-id="${Number(product.id)}" tabindex="0" role="button" aria-label="Explorar variantes de ${escapeHTML(product.name)}">
      <div class="product-icon"><img src="${escapeHTML(product.image)}" alt="${escapeHTML(product.name)}" loading="lazy" onerror="this.classList.add('image-missing')"></div>
      <p class="product-category">${escapeHTML(product.category)}</p>
      <h3>${escapeHTML(product.name)}</h3>
      <p class="product-description">${escapeHTML(product.description)}</p>
      <span class="vitrina-hint">Ver variantes <span aria-hidden="true">→</span></span>
    </article>`).join("");
}

function renderFilteredCatalog(productId) {
  const product = catalog.find(item => item.id === Number(productId));
  if (!product) { navigateTo("index.html"); return; }

  if (searchBoxWrapper) searchBoxWrapper.style.display = "none";
  if (catalogHeadingTitle) catalogHeadingTitle.textContent = product.name;
  if (catalogHeadingDesc) catalogHeadingDesc.textContent = `Catálogo específico / ${product.description}`;

  productList.className = "product-grid subcatalog-grid";
  
  let htmlContent = `
    <div class="navigation-back-bar" style="grid-column: 1 / -1; width: 100%; margin-bottom: 20px;">
      <button type="button" class="update-stock-button" id="btn-back-to-main">← Volver al catálogo principal</button>
    </div>
  `;

  htmlContent += product.variants.map(variant => `
    <article class="product-card variant-item-link" data-variant-id="${variant.id}" tabindex="0" role="button" style="cursor: pointer;">
      <div class="product-icon"><img src="${escapeHTML(variant.image)}" alt="${escapeHTML(variant.name)}" loading="lazy" onerror="this.classList.add('image-missing')"></div>
      <h3>${escapeHTML(variant.name)}</h3>
      <span class="vitrina-hint">Ver detalles <span aria-hidden="true">→</span></span>
    </article>
  `).join("");

  productList.innerHTML = htmlContent;

  document.getElementById("btn-back-to-main").addEventListener("click", () => navigateTo("index.html", { view: "home" }));
}

function renderVariantDetail(variantId) {
  const variant = getVariant(variantId);
  if (!variant) { navigateTo("index.html"); return; }

  if (searchBoxWrapper) searchBoxWrapper.style.display = "none";
  if (catalogHeadingTitle) catalogHeadingTitle.textContent = variant.name;
  if (catalogHeadingDesc) catalogHeadingDesc.textContent = `Especificaciones del artículo de ${escapeHTML(variant.parentName)}`;

  const available = getAvailableStock(variant);
  productList.className = "variant-detail-single-view";

  productList.innerHTML = `
    <div class="navigation-back-bar" style="width: 100%; margin-bottom: 20px;">
      <button type="button" class="update-stock-button" id="btn-back-to-catalog" data-parent="${variant.parentId}">← Regresar a variantes</button>
    </div>
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 40px; background: white; padding: 40px; border-radius: 18px; width: 100%;">
      <div style="text-align: center; background: linear-gradient(135deg, #f1efff, #f8f6ff); border-radius: 18px; padding: 20px;">
        <img src="${escapeHTML(variant.image)}" alt="${escapeHTML(variant.name)}" class="img-detalle-principal" id="img-trigger-lightbox" title="Haz clic para ampliar" style="max-width: 100%; max-height: 350px; object-fit: contain; cursor: zoom-in;">
        <p style="color: var(--muted); font-size: 0.85rem; margin-top: 10px;">(Haz clic en la imagen para ampliar)</p>
      </div>
      <div>
        <span class="product-category">${escapeHTML(variant.category)}</span>
        <h2 style="font-size: 2.2rem; margin: 10px 0; font-family: 'Manrope', sans-serif;">${escapeHTML(variant.name)}</h2>
        <p style="color: var(--muted); font-size: 1.1rem; margin-bottom: 20px;">${escapeHTML(variant.description)}</p>
        <section class="product-features" aria-labelledby="features-title">
          <h3 id="features-title">Características del producto</h3>
          <ul>
            <li><strong>Producto:</strong> ${escapeHTML(variant.parentName)}</li>
            <li><strong>Variante/modelo:</strong> ${escapeHTML(variant.name)}</li>
            <li><strong>Categoría:</strong> ${escapeHTML(variant.category)}</li>
            <li><strong>Descripción:</strong> ${escapeHTML(variant.description)}</li>
            <li><strong>Disponibilidad:</strong> ${available} unidades</li>
            <li><strong>Precio:</strong> ${formatPrice(variant.price)}</li>
          </ul>
        </section>
        <p class="product-stock ${available === 0 ? "out-of-stock" : ""}">Stock disponible: ${available} unidades</p>
        <div style="font-size: 2rem; font-weight: 800; margin: 20px 0; color: var(--primary);">${formatPrice(variant.price)}</div>
        <button type="button" class="checkout-button" id="btn-add-from-detail" ${available === 0 ? "disabled" : ""} style="width: 100%; padding: 15px; font-size: 1.1rem;">Agregar al carrito</button>
      </div>
    </div>
  `;

  document.getElementById("btn-back-to-catalog").addEventListener("click", (e) => {
     navigateTo(`?producto=${e.target.dataset.parent}`, { view: "variants", productId: e.target.dataset.parent });
  });

  document.getElementById("btn-add-from-detail").addEventListener("click", () => {
    addToCart(variant.id);
    renderVariantDetail(variant.id);
  });

  document.getElementById("img-trigger-lightbox").addEventListener("click", () => {
     openLightbox(variant.image, variant.name);
  });
}

function openLightbox(imgSrc, altText) {
  let lightbox = document.getElementById("lightbox-modal");
  if (!lightbox) {
    lightbox = document.createElement("div");
    lightbox.id = "lightbox-modal";
    document.body.appendChild(lightbox);
  }

  lightbox.innerHTML = `
    <span id="close-lightbox" style="position: absolute; top: 25px; right: 35px; color: white; font-size: 40px; cursor: pointer; user-select: none;">&times;</span>
    <img src="${imgSrc}" alt="${altText}" style="max-width: 90vw; max-height: 85vh; object-fit: contain; border-radius: 8px;">
  `;
  lightbox.style.display = "flex";
  lightbox.style.position = "fixed";
  lightbox.style.inset = "0";
  lightbox.style.background = "rgba(0, 0, 0, 0.93)";
  lightbox.style.zIndex = "2500";
  lightbox.style.alignItems = "center";
  lightbox.style.justifyContent = "center";
  
  document.body.classList.add("modal-open");

  const closeLightbox = () => {
    lightbox.style.display = "none";
    document.body.classList.remove("modal-open");
    document.removeEventListener("keydown", handleEsc);
  };

  const handleEsc = (e) => { if (e.key === "Escape") closeLightbox(); };
  
  document.getElementById("close-lightbox").addEventListener("click", closeLightbox);
  lightbox.addEventListener("click", (e) => { if (e.target === lightbox) closeLightbox(); });
  document.addEventListener("keydown", handleEsc);
}

function checkLoginBeforeAction() {
  const loggedUser = readJSON(LOGGED_USER_KEY, null);
  if (!loggedUser) {
    const wantsToLogin = confirm("Para realizar esta acción necesitas iniciar sesión.\n\n¿Ya tienes una cuenta? Presiona ACEPTAR para Iniciar Sesión.\nSi eres nuevo, presiona CANCELAR para crear una Cuenta Nueva.");
    if (wantsToLogin) {
      if (btnOpenLogin) btnOpenLogin.click();
    } else {
      if (btnOpenRegister) btnOpenRegister.click();
    }
    return false;
  }
  return true;
}

function addToCart(variantId) {
  // Regla solicitada: Validar sesión activa al adquirir el producto
  if (!checkLoginBeforeAction()) return;

  const variant = getVariant(variantId);
  if (!variant) return;
  const current = getCartQuantity(variant.id);
  if (current >= variant.stock) {
    alert("No quedan más unidades disponibles de esta variante.");
    return;
  }
  const item = cart.find(entry => entry.id === variant.id);
  if (item) item.quantity += 1; else cart.push({ id: variant.id, quantity: 1 });
  saveCart();
  updateInterface();
}

window.addToCart = addToCart;

function changeQuantity(id, delta) {
  const item = cart.find(entry => entry.id === Number(id));
  const variant = getVariant(id);
  if (!item || !variant) return;
  if (item.quantity + delta <= 0) cart = cart.filter(entry => entry.id !== item.id);
  else if (item.quantity + delta <= variant.stock) item.quantity += delta;
  else { showMessage(cartMessage, "No puedes superar las existencias disponibles.", true); return; }
  saveCart(); updateInterface();
}
function removeFromCart(id) { cart = cart.filter(item => item.id !== Number(id)); saveCart(); updateInterface(); }
function calculateSubtotal() { return cart.reduce((sum, item) => { const v = getVariant(item.id); return sum + (v ? v.price * item.quantity : 0); }, 0); }

function renderCart() {
  cart = cart.filter(item => getVariant(item.id) && item.quantity > 0);
  cartItems.innerHTML = cart.length ? cart.map(item => {
    const v = getVariant(item.id);
    return `<article class="cart-item"><div class="cart-item-icon"><img src="${escapeHTML(v.image)}" alt="${escapeHTML(v.name)}" onerror="this.classList.add('image-missing')"></div><div><h3>${escapeHTML(v.name)}</h3><p>${escapeHTML(v.parentName)} · ${formatPrice(v.price)} por unidad</p><div class="quantity-controls"><button type="button" data-decrease="${v.id}" aria-label="Reducir cantidad">−</button><strong>${item.quantity}</strong><button type="button" data-increase="${v.id}" ${item.quantity >= v.stock ? "disabled" : ""} aria-label="Aumentar cantidad">+</button></div><button type="button" class="remove-button" data-remove="${v.id}">Quitar producto</button></div><div class="cart-item-price">${formatPrice(v.price * item.quantity)}</div></article>`;
  }).join("") : '<div class="empty-message">Tu carrito está vacío. ¡Explora las secciones para elegir variantes!</div>';
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = calculateSubtotal();
  const shipping = subtotal === 0 || subtotal >= 200 ? 0 : 12;
  cartCount.textContent = count;
  subtotalElement.textContent = formatPrice(subtotal);
  shippingElement.textContent = formatPrice(shipping);
  totalElement.textContent = formatPrice(subtotal + shipping);
  checkoutButton.disabled = cart.length === 0;
  clearCartButton.disabled = cart.length === 0;
}
function renderInventory() {
  if (!inventoryList) return;
  inventoryList.innerHTML = allVariants.map(v => `<tr>
    <td>${escapeHTML(v.parentName)} — ${escapeHTML(v.name)}</td>
    <td>${formatPrice(v.price)}</td>
    <td><input class="price-input" type="number" min="0" step="0.01" value="${Number(v.price).toFixed(2)}" data-price-input="${v.id}" aria-label="Nuevo precio de ${escapeHTML(v.name)}"></td>
    <td>${v.stock} unidades</td>
    <td><input class="stock-input" type="number" min="0" step="1" value="${v.stock}" data-stock-input="${v.id}" aria-label="Nuevo stock de ${escapeHTML(v.name)}"></td>
    <td><button type="button" class="update-stock-button" data-update-stock="${v.id}">Guardar cambios</button></td>
  </tr>`).join("");
}
function updateStock(id) {
  const session = readJSON(LOGGED_USER_KEY, null);
  if (!session || session.email !== ADMIN_EMAIL || session.role !== "admin") { alert("Solo el administrador puede modificar el inventario."); return; }
  const v = getVariant(id);
  const stockInput = inventoryList.querySelector(`[data-stock-input="${id}"]`);
  const priceInput = inventoryList.querySelector(`[data-price-input="${id}"]`);
  if (!v || !stockInput || !priceInput) return;
  const stockValue = Number(stockInput.value);
  const priceValue = Number(priceInput.value);
  if (stockInput.value.trim() === "" || !Number.isSafeInteger(stockValue) || stockValue < getCartQuantity(id)) {
    showMessage(inventoryMessage, `El stock debe ser un número entero igual o mayor que las ${getCartQuantity(id)} unidades que ya están en el carrito.`, true);
    stockInput.value = v.stock; return;
  }
  if (priceInput.value.trim() === "" || !Number.isFinite(priceValue) || priceValue < 0 || !/^\d+(\.\d{1,2})?$/.test(priceInput.value.trim())) {
    showMessage(inventoryMessage, "Introduce un precio válido, igual o mayor que S/ 0.00 y con máximo dos decimales.", true);
    priceInput.value = Number(v.price).toFixed(2); return;
  }
  v.stock = stockValue;
  v.price = Math.round(priceValue * 100) / 100;
  saveStock(); updateInterface();
  showMessage(inventoryMessage, `Cambios guardados para ${v.name}: ${formatPrice(v.price)} y ${v.stock} unidades.`);
}

function updateInterface() { router(); }

function checkout() {
  if (!checkLoginBeforeAction()) return;
  if (!cart.length) return;
  const invalid = cart.some(item => !getVariant(item.id) || item.quantity > getVariant(item.id).stock);
  if (invalid) { showMessage(cartMessage, "Hay cantidades que superan el stock. Revisa tu carrito.", true); return; }
  const paymentMethod = document.getElementById("payment-method")?.value || "yape";
  const qrImage = readYapeQr();
  if (paymentMethod === "yape" && !qrImage) {
    showMessage(cartMessage, "El administrador todavía no ha configurado el QR de Yape. Elige otro método o solicita que lo configure.", true); return;
  }
  const subtotal = calculateSubtotal();
  const shipping = subtotal === 0 || subtotal >= 200 ? 0 : 12;
  const paymentLabels = { yape: "Yape QR (pendiente de verificación manual)", plin: "Plin (pendiente de verificación manual)", contraentrega: "Pago contraentrega" };
  const paymentLabel = paymentLabels[paymentMethod] || paymentLabels.yape;
  const total = subtotal + shipping;
  const extra = paymentMethod === "contraentrega" ? "\nPagarás al recibir el pedido." : "\nEl pago digital debe verificarse manualmente; esta web no confirma transferencias.";
  if (!confirm(`¿Deseas registrar tu compra?\nMétodo de pago: ${paymentLabel}\nUnidades: ${cart.reduce((sum, item) => sum + item.quantity, 0)}\nSubtotal: ${formatPrice(subtotal)}\nEnvío: ${formatPrice(shipping)}\nTotal: ${formatPrice(total)}${extra}\n\nAl confirmar, se descontará el inventario.`)) return;
  const order = { id: `NS-${Date.now()}`, date: new Date().toLocaleString("es-PE"), items: cart.map(item => { const v = getVariant(item.id); return { name: v.name, parentName: v.parentName, quantity: item.quantity, unitPrice: v.price }; }), payment: paymentLabel, total, status: paymentMethod === "contraentrega" ? "Pendiente de cobro contraentrega" : "Pendiente de verificación" };
  const orders = readJSON(ORDERS_KEY, []); orders.push(order); localStorage.setItem(ORDERS_KEY, JSON.stringify(orders));
  cart.forEach(item => { const v = getVariant(item.id); if (v) v.stock -= item.quantity; });
  cart = []; saveStock(); saveCart(); updateInterface(); renderAdminDashboard();
  const successMessage = paymentMethod === "yape" ? "Pedido registrado. El pago Yape queda pendiente de verificación manual." : paymentMethod === "plin" ? "Pedido registrado. El pago Plin queda pendiente de verificación manual." : "¡Pedido registrado! Recuerda pagar al recibirlo.";
  showMessage(cartMessage, successMessage);
  showMessage(inventoryMessage, "Compra registrada: las existencias se han actualizado.");
}

function readYapeQr() {
  try { return localStorage.getItem(YAPE_QR_KEY) || ""; }
  catch (error) { return ""; }
}
function renderYapeQr() {
  const method = document.getElementById("payment-method");
  const container = document.getElementById("yape-qr-checkout");
  const note = document.getElementById("payment-note");
  if (!method || !container || !note) return;
  const selected = method.value;
  container.hidden = selected === "contraentrega";
  if (selected === "yape") {
    const qr = readYapeQr();
    container.innerHTML = qr ? `<img src="${qr}" alt="Código QR de Yape"><p>Escanea este QR desde tu aplicación de Yape.</p>` : `<p class="qr-missing">El QR de Yape todavía no está configurado por el administrador.</p>`;
    note.textContent = "Paga con Yape y espera la verificación manual. Esta página no confirma transferencias automáticamente.";
  } else if (selected === "plin") {
    container.innerHTML = `<div class="plin-placeholder"><strong>Pago por Plin</strong><p>Escanea el QR de Plin del negocio o realiza la transferencia al número Plin que te proporcione la tienda.</p><p class="qr-missing">Añade aquí tu QR o número Plin real antes de publicar la tienda.</p></div>`;
    note.textContent = "Verifica los datos de destino antes de transferir. El pago se confirma manualmente.";
  } else {
    container.innerHTML = "";
    note.textContent = "Pagarás el pedido cuando lo recibas.";
  }
}
function renderAdminQr() {
  const preview = document.getElementById("admin-qr-preview");
  if (!preview) return;
  const qr = readYapeQr();
  preview.innerHTML = qr ? `<p><strong>QR guardado actualmente</strong></p><img src="${qr}" alt="Vista previa del QR de Yape">` : `<p class="qr-missing">Todavía no hay un QR guardado.</p>`;
}

productList.addEventListener("click", event => {
  const mainCard = event.target.closest("[data-product-id]");
  const variantCard = event.target.closest("[data-variant-id]");

  if (mainCard) {
    navigateTo(`?producto=${mainCard.dataset.productId}`, { view: "variants", productId: mainCard.dataset.productId });
  } else if (variantCard) {
    navigateTo(`?variante=${variantCard.dataset.variantId}`, { view: "detail", variantId: variantCard.dataset.variantId });
  }
});

productList.addEventListener("keydown", event => {
  if (event.key === "Enter" || event.key === " ") {
    const mainCard = event.target.closest("[data-product-id]");
    const variantCard = event.target.closest("[data-variant-id]");
    if (mainCard || variantCard) {
       event.preventDefault();
       if(mainCard) navigateTo(`?producto=${mainCard.dataset.productId}`, { view: "variants", productId: mainCard.dataset.productId });
       if(variantCard) navigateTo(`?variante=${variantCard.dataset.variantId}`, { view: "detail", variantId: variantCard.dataset.variantId });
    }
  }
});

if (productSearch) {
  productSearch.addEventListener("input", () => {
    const params = new URLSearchParams(window.location.search);
    if (!params.get("producto") && !params.get("variante")) {
       renderMainCatalog();
    }
  });
}

cartItems.addEventListener("click", event => {
  const dec = event.target.closest("[data-decrease]"); const inc = event.target.closest("[data-increase]"); const rem = event.target.closest("[data-remove]");
  if (dec) changeQuantity(dec.dataset.decrease, -1); if (inc) changeQuantity(inc.dataset.increase, 1); if (rem) removeFromCart(rem.dataset.remove);
});
clearCartButton.addEventListener("click", () => { if (cart.length && confirm("¿Deseas vaciar el carrito?")) { cart = []; saveCart(); updateInterface(); showMessage(cartMessage, "Carrito vacío."); } });
checkoutButton.addEventListener("click", checkout);
if (inventoryList) {
  inventoryList.addEventListener("click", event => { const button = event.target.closest("[data-update-stock]"); if (button) updateStock(button.dataset.updateStock); });
}

const paymentMethodSelect = document.getElementById("payment-method");
if (paymentMethodSelect) paymentMethodSelect.addEventListener("change", renderYapeQr);
const yapeQrUpload = document.getElementById("yape-qr-upload");
const yapeQrAdminMessage = document.getElementById("yape-qr-admin-message");
if (yapeQrUpload) yapeQrUpload.addEventListener("change", event => {
  const file = event.target.files && event.target.files[0];
  if (!file) return;
  if (!file.type.startsWith("image/")) { showMessage(yapeQrAdminMessage, "Selecciona un archivo de imagen válido.", true); yapeQrUpload.value = ""; return; }
  if (file.size > 1500000) { showMessage(yapeQrAdminMessage, "La imagen debe pesar como máximo 1.5 MB para guardarse en el navegador.", true); yapeQrUpload.value = ""; return; }
  const reader = new FileReader();
  reader.onload = () => {
    try {
      localStorage.setItem(YAPE_QR_KEY, String(reader.result));
      showMessage(yapeQrAdminMessage, "QR guardado en este navegador.");
      renderAdminQr(); renderYapeQr();
    } catch (error) {
      showMessage(yapeQrAdminMessage, "No se pudo guardar la imagen. Prueba con un archivo más pequeño.", true);
    }
    yapeQrUpload.value = "";
  };
  reader.onerror = () => showMessage(yapeQrAdminMessage, "No se pudo leer la imagen seleccionada.", true);
  reader.readAsDataURL(file);
});
const removeYapeQrButton = document.getElementById("remove-yape-qr");
if (removeYapeQrButton) removeYapeQrButton.addEventListener("click", () => {
  if (!confirm("¿Quieres quitar el QR de Yape guardado?")) return;
  localStorage.removeItem(YAPE_QR_KEY); showMessage(yapeQrAdminMessage, "QR eliminado de este navegador."); renderAdminQr(); renderYapeQr();
});

// Actualización dinámica del año en el pie de página
const currentYearEl = document.getElementById("current-year");
if (currentYearEl) {
  currentYearEl.textContent = new Date().getFullYear();
}


window.addEventListener("popstate", (event) => {
  const params = new URLSearchParams(window.location.search);
  const productId = params.get("producto");
  const variantId = params.get("variante");
  
  if (variantId) {
    renderVariantDetail(variantId);
  } else if (productId) {
    renderFilteredCatalog(productId);
  } else {
    renderMainCatalog();
  }
});

const modalLogin = document.getElementById("modal-login");
const modalRegister = document.getElementById("modal-register");
const btnOpenLogin = document.getElementById("btn-open-login");
const btnOpenRegister = document.getElementById("btn-open-register");
const btnLogout = document.getElementById("btn-logout");
const userLoggedDisplay = document.getElementById("user-logged-display");
const formLogin = document.getElementById("form-login");
const formRegister = document.getElementById("form-register");
const loginErrorMsg = document.getElementById("login-error-msg");
const regErrorMsg = document.getElementById("reg-error-msg");
function getStoredUsers() { const users = readJSON(USERS_KEY, []); return Array.isArray(users) ? users : []; }
if (btnOpenLogin) btnOpenLogin.addEventListener("click", () => { formLogin.reset(); loginErrorMsg.textContent = ""; modalLogin.style.display = "flex"; });
if (btnOpenRegister) btnOpenRegister.addEventListener("click", () => { formRegister.reset(); regErrorMsg.textContent = ""; modalRegister.style.display = "flex"; });
document.querySelectorAll(".btn-close-modal").forEach(button => button.addEventListener("click", () => { modalLogin.style.display = "none"; modalRegister.style.display = "none"; }));
if (formRegister) {
  formRegister.addEventListener("submit", event => {
    event.preventDefault(); regErrorMsg.textContent = "";
    const email = document.getElementById("reg-email").value.trim().toLowerCase();
    const password = document.getElementById("reg-password").value;
    const names = document.getElementById("reg-names").value.trim();
    const lastnames = document.getElementById("reg-lastnames").value.trim();
    const address = document.getElementById("reg-address").value.trim();
    const phone = document.getElementById("reg-phone").value.trim();
    if (email !== ADMIN_EMAIL && !email.endsWith("@gmail.com") && !email.endsWith("@hotmail.com")) { regErrorMsg.textContent = "El correo debe pertenecer a @gmail.com o @hotmail.com, excepto la cuenta administradora de NovaShop."; return; }
    const users = getStoredUsers(); if (users.some(user => user.email === email)) { regErrorMsg.textContent = "Este correo electrónico ya se encuentra registrado."; return; }
    users.push({ names, lastnames, email, password, address, phone }); localStorage.setItem(USERS_KEY, JSON.stringify(users));
    alert("¡Cuenta creada con éxito! Ahora puedes iniciar sesión."); modalRegister.style.display = "none"; btnOpenLogin.click();
  });
}
if (formLogin) {
  formLogin.addEventListener("submit", event => {
    event.preventDefault(); loginErrorMsg.textContent = "";
    const email = document.getElementById("login-email").value.trim().toLowerCase(); const password = document.getElementById("login-password").value;
    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      const admin = { names: "Creador", lastnames: "NovaShop", email: ADMIN_EMAIL, role: "admin" };
      localStorage.setItem(LOGGED_USER_KEY, JSON.stringify(admin));
      modalLogin.style.display = "none"; checkLoginStatus();
      alert("Acceso de administrador concedido."); return;
    }
    const user = getStoredUsers().find(item => item.email === email && item.password === password && item.email !== ADMIN_EMAIL);
    if (!user) { loginErrorMsg.textContent = "El usuario o la contraseña es incorrecto."; alert("Error: usuario o contraseña incorrectos."); return; }
    localStorage.setItem(LOGGED_USER_KEY, JSON.stringify(user)); alert("Inicio de sesión correcto."); modalLogin.style.display = "none"; checkLoginStatus();
  });
}
function checkLoginStatus() {
  const stored = readJSON(LOGGED_USER_KEY, null);
  const adminSection = document.getElementById("inventario");
  const dashboard = document.getElementById("admin-dashboard");
  const isAdmin = Boolean(stored && stored.email === ADMIN_EMAIL && stored.role === "admin");
  const inventoryLink = document.getElementById("inventario-link");
  if (stored) {
    if (btnOpenLogin) btnOpenLogin.style.display = "none";
    if (btnOpenRegister) btnOpenRegister.style.display = isAdmin ? "none" : "inline-block";
    if (userLoggedDisplay) { userLoggedDisplay.textContent = isAdmin ? "Administrador" : `Hola, ${stored.names || "cliente"}`; userLoggedDisplay.style.display = "inline-block"; }
    if (btnLogout) btnLogout.style.display = "inline-block";
  } else {
    if (btnOpenLogin) btnOpenLogin.style.display = "inline-block";
    if (btnOpenRegister) btnOpenRegister.style.display = "inline-block";
    if (userLoggedDisplay) userLoggedDisplay.style.display = "none";
    if (btnLogout) btnLogout.style.display = "none";
  }
  if (adminSection) adminSection.style.display = isAdmin ? "block" : "none";
  if (dashboard) dashboard.hidden = !isAdmin;
  if (inventoryLink) inventoryLink.style.display = isAdmin ? "inline-block" : "none";
  if (isAdmin) { renderAdminQr(); renderAdminDashboard(); }
  else { renderInventory(); }
}
const addProductForm = document.getElementById("form-add-product");
const addProductMessage = document.getElementById("add-product-message");

function addProduct(event) {
  event.preventDefault();
  const session = readJSON(LOGGED_USER_KEY, null);
  if (!session || session.email !== ADMIN_EMAIL || session.role !== "admin") {
    showMessage(addProductMessage, "Solo el administrador puede agregar productos.", true);
    return;
  }
  const name = document.getElementById("new-product-name").value.trim();
  const category = document.getElementById("new-product-category").value.trim();
  const description = document.getElementById("new-product-description").value.trim();
  const image = document.getElementById("new-product-image").value.trim();
  const priceRaw = document.getElementById("new-product-price").value.trim();
  const stockRaw = document.getElementById("new-product-stock").value.trim();
  const price = Number(priceRaw);
  const stock = Number(stockRaw);
  if (!name || !category || !description || !image) {
    showMessage(addProductMessage, "Completa todos los campos del producto.", true); return;
  }
  if (/^(javascript:|data:|vbscript:)/i.test(image) || /[<>"']/.test(image)) {
    showMessage(addProductMessage, "Usa una ruta de imagen local o una URL http(s) válida, sin código HTML.", true); return;
  }
  if (priceRaw === "" || !Number.isFinite(price) || price < 0 || !/^\d+(\.\d{1,2})?$/.test(priceRaw)) {
    showMessage(addProductMessage, "El precio debe ser válido y tener máximo dos decimales.", true); return;
  }
  if (stockRaw === "" || !Number.isSafeInteger(stock) || stock < 0) {
    showMessage(addProductMessage, "El stock debe ser un número entero igual o mayor que cero.", true); return;
  }
  const productId = Math.max(0, ...catalog.map(product => Number(product.id) || 0)) + 1;
  const variantId = Math.max(100, ...allVariants.map(variant => Number(variant.id) || 0)) + 1;
  const product = {
    id: productId, name, category, description, image,
    variants: [{ id: variantId, name, description, image, price: Math.round(price * 100) / 100, stock }]
  };
  catalog.push(product);
  const variant = Object.assign(product.variants[0], { parentId: product.id, parentName: product.name, category: product.category });
  allVariants.push(variant);
  try {
    saveStock();
  } catch (error) {
    catalog.pop(); allVariants.pop();
    showMessage(addProductMessage, "No se pudo guardar. El almacenamiento del navegador podría estar lleno.", true);
    return;
  }
  addProductForm.reset();
  renderInventory();
  updateInterface();
  showMessage(addProductMessage, `Producto “${name}” agregado al catálogo y guardado en este navegador.`);
}
if (addProductForm) addProductForm.addEventListener("submit", addProduct);

function renderAdminDashboard() {
  const stored = readJSON(LOGGED_USER_KEY, null);
  if (!stored || stored.email !== ADMIN_EMAIL || stored.role !== "admin") return;
  const orders = readJSON(ORDERS_KEY, []);
  const totalEl = document.getElementById("admin-total-earnings");
  const countEl = document.getElementById("admin-order-count");
  const listEl = document.getElementById("admin-orders-list");
  if (totalEl) totalEl.textContent = formatPrice(orders.reduce((sum, order) => sum + Number(order.total || 0), 0));
  if (countEl) countEl.textContent = String(orders.length);
  if (listEl) listEl.innerHTML = orders.length ? [...orders].reverse().map(order => `<tr><td>${order.id}</td><td>${order.date}</td><td>${order.items.map(item => `${item.name} × ${item.quantity}`).join(", ")}</td><td>${order.payment}</td><td>${formatPrice(order.total)}</td></tr>`).join("") : `<tr><td colspan="5">Todavía no hay pedidos registrados.</td></tr>`;
}
if (btnLogout) btnLogout.addEventListener("click", () => { localStorage.removeItem(LOGGED_USER_KEY); checkLoginStatus(); });

checkLoginStatus();
renderYapeQr();
router();