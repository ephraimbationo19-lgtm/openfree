/* ==========================================================================
   L'Essentiel — boutique de démonstration
   Données produits, catalogue, panier, fiches produit et commande (simulation)
   ========================================================================== */

/* ---------- Icônes SVG ---------- */
const svg = (paths, cls = "") => `<svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths}</svg>`;
const ICON = {
  sparkles: svg('<path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3Z"/><path d="M19 16l.8 2.2L22 19l-2.2.8L19 22l-.8-2.2L16 19l2.2-.8L19 16Z"/>'),
  shirt: svg('<path d="M8 3 4 6l2 4 2-1v10h8V9l2 1 2-4-4-3-2 2h-4L8 3Z"/>'),
  headphones: svg('<path d="M4 14v-2a8 8 0 0 1 16 0v2"/><rect x="3" y="13" width="4" height="7" rx="2"/><rect x="17" y="13" width="4" height="7" rx="2"/>'),
  drop: svg('<path d="M12 3s6 6.5 6 10a6 6 0 0 1-12 0c0-3.5 6-10 6-10Z"/>'),
  home: svg('<path d="m3 10 9-7 9 7v10H3V10Z"/><path d="M9 20v-6h6v6"/>'),
  activity: svg('<path d="M3 12h4l3-8 4 16 3-8h4"/>'),
  glasses: svg('<circle cx="6" cy="14" r="3"/><circle cx="18" cy="14" r="3"/><path d="M9 14h6M3 11l2-4h4M21 11l-2-4h-4"/>'),
  bag: svg('<path d="M5 8h14l-1 12H6L5 8Z"/><path d="M9 8V6a3 3 0 0 1 6 0v2"/>'),
  check: svg('<path d="m5 12 5 5L20 7"/>'),
};

const CATEGORIES = [
  { id: "tous", label: "Tout voir", icon: ICON.sparkles },
  { id: "mode", label: "Mode", icon: ICON.shirt },
  { id: "hightech", label: "High-tech", icon: ICON.headphones },
  { id: "beaute", label: "Beauté", icon: ICON.drop },
  { id: "maison", label: "Maison", icon: ICON.home },
  { id: "sport", label: "Sport", icon: ICON.activity },
  { id: "accessoires", label: "Accessoires", icon: ICON.glasses },
];

const PRODUCTS = [
  { id: 1,  name: "Sneakers Urban Runner",        category: "mode",        price: 58400, oldPrice: 78100,  badge: "Promo",        rating: 4.8, reviews: 124, image: "photo-1542291026-7eec264c27ff", color: "#e8d8c8", desc: "Des baskets légères et confortables, parfaites pour la ville comme pour les balades du week-end.", details: ["Pointures 39 à 46", "Semelle amortissante", "Respirant et léger"] },
  { id: 2,  name: "Casque Audio Sans Fil Pro",     category: "hightech",    price: 97700, oldPrice: null, badge: "Best-seller",   rating: 4.9, reviews: 203, image: "photo-1505740420928-5e560c06d30e", color: "#d9e2dd", desc: "Un son riche et une réduction de bruit active pour profiter de votre musique partout.", details: ["Autonomie 30 heures", "Bluetooth 5.3", "Réduction de bruit active"] },
  { id: 3,  name: "Montre Minimaliste Dorée",      category: "accessoires", price: 84600, oldPrice: null, badge: "Nouveau",       rating: 4.7, reviews: 87,  image: "photo-1523275335684-37898b6baf30", color: "#eadcd0", desc: "Une montre élégante et discrète qui s'accorde avec toutes vos tenues.", details: ["Bracelet ajustable", "Verre saphir", "Résistant à l'eau"] },
  { id: 4,  name: "Sac Tote en Cuir Cortège",      category: "mode",        price: 51800, oldPrice: 64900,   badge: "Promo",        rating: 4.6, reviews: 65,  image: "photo-1548036328-c9fa89d128fa", color: "#e5d9cc", desc: "Un sac spacieux et intemporel, assez grand pour vous suivre toute la journée.", details: ["Cuir synthétique premium", "Poche intérieure zippée", "Anses renforcées"] },
  { id: 5,  name: "Crème Hydratante à la Rose",    category: "beaute",      price: 16300, oldPrice: null, badge: null,            rating: 4.8, reviews: 156, image: "photo-1608248543803-ba4f8c70ae0b", color: "#f2dfe3", desc: "Une texture légère qui hydrate et adoucit la peau, avec un parfum délicat de rose.", details: ["Convient aux peaux sensibles", "Sans parabènes", "50 ml"] },
  { id: 6,  name: "Lampe de Bureau LED",           category: "maison",      price: 38700, oldPrice: null, badge: null,            rating: 4.5, reviews: 42,  image: "photo-1507473885765-e6ed057f782c", color: "#e9e2d3", desc: "Une lampe design à lumière ajustable, idéale pour travailler ou lire sans fatiguer les yeux.", details: ["3 températures de lumière", "Bras articulé", "Économie d'énergie"] },
  { id: 7,  name: "T-shirt Coton BioEssentiel",    category: "mode",        price: 19000, oldPrice: null, badge: "Nouveau",       rating: 4.6, reviews: 98,  image: "photo-1521572163474-6864f9cf17ab", color: "#dfe4dc", desc: "Un basique confortable en coton biologique, avec une coupe qui va à tout le monde.", details: ["100 % coton bio", "Coupe régulière", "Lavable en machine"] },
  { id: 8,  name: "Enceinte Bluetooth Nomade",     category: "hightech",    price: 45300, oldPrice: 58400,   badge: "Promo",        rating: 4.7, reviews: 134, image: "photo-1608043152269-423dbba4e7e1", color: "#dce3e4", desc: "Un petit format, un grand son. Emportez votre playlist partout avec vous.", details: ["Autonomie 12 heures", "Résistante aux éclaboussures", "Bluetooth 5.0"] },
  { id: 9,  name: "Eau de Parfum « Nuit »",        category: "beaute",      price: 32100, oldPrice: null, badge: "Best-seller",   rating: 4.8, reviews: 211, image: "photo-1541643600914-78b084683601", color: "#e9dce0", desc: "Un parfum boisé et chaleureux, pensé pour les soirées et les moments spéciaux.", details: ["Notes boisées et ambrées", "Tenue longue durée", "Flacon 50 ml"] },
  { id: 10, name: "Tapis de Yoga Antidérapant",    category: "sport",       price: 25600, oldPrice: 32100,   badge: "Promo",        rating: 4.7, reviews: 76,  image: "photo-1592432678016-e910b452f9a2", color: "#dce5d8", desc: "Un tapis confortable et stable pour vos séances de yoga et de fitness à la maison.", details: ["Épaisseur 6 mm", "Surface antidérapante", "Facile à nettoyer"] },
  { id: 11, name: "Bougie Parfumée Ambre",         category: "maison",      price: 13100, oldPrice: null, badge: null,            rating: 4.9, reviews: 189, image: "photo-1603006905003-be475563bc59", color: "#f0e3d0", desc: "Une bougie artisanale au parfum chaleureux d'ambre, pour créer une ambiance cosy.", details: ["Cire végétale", "Durée de combustion 45 h", "Mèche en coton"] },
  { id: 12, name: "Lunettes de Soleil Rétro",      category: "accessoires", price: 29500, oldPrice: null, badge: "Nouveau",       rating: 4.5, reviews: 53,  image: "photo-1511499767150-a48a237f0083", color: "#e6dfd2", desc: "Des lunettes au style vintage avec une protection solaire efficace.", details: ["Protection UV400", "Monture légère", "Étui de protection inclus"] },
  { id: 13, name: "Clavier Mécanique Compact",     category: "hightech",    price: 64900, oldPrice: 78100,  badge: "Promo",        rating: 4.8, reviews: 142, image: "photo-1587829741301-dc798b83add3", color: "#dde1e3", desc: "Un clavier mécanique compact et agréable, pour taper avec plaisir toute la journée.", details: ["Format 65 %", "Touches rétroéclairées", "Connexion USB-C"] },
  { id: 14, name: "Gourde Isotherme 750 ml",       category: "sport",       price: 17700, oldPrice: null, badge: null,            rating: 4.6, reviews: 91,  image: "photo-1602143407151-7111542de6e8", color: "#dbe4e6", desc: "Gardez vos boissons fraîches ou chaudes grâce à cette gourde robuste et nomade.", details: ["Capacité 750 ml", "Inox double paroi", "Fuite garantie"] },
  { id: 15, name: "Vase en Céramique Minimal",     category: "maison",      price: 23000, oldPrice: null, badge: null,            rating: 4.4, reviews: 38,  image: "photo-1578500494198-246f612d3b3d", color: "#eae0d2", desc: "Un vase sobre et élégant qui met en valeur vos bouquets, même simples.", details: ["Céramique mate", "Hauteur 24 cm", "Fait main"] },
  { id: 16, name: "Baume Lèvres Naturel",          category: "beaute",      price: 6500, oldPrice: null, badge: null,            rating: 4.7, reviews: 67,  image: "photo-1586495777744-4413f21062fa", color: "#f1dcd7", desc: "Un baume doux et nourrissant pour des lèvres confortables toute la journée.", details: ["Ingrédients naturels", "Sans parfum ajouté", "Format poche"] },
  { id: 17, name: "Doudoune Puffer Blanc",          category: "mode",        price: 97700, oldPrice: 130500,  badge: "Nouveau",       rating: 4.9, reviews: 88,  image: "photo-1591047139829-d91aecb6caea", color: "#e5e5e5", desc: "La doudoune légère qui vous enveloppe d'une chaleur sans poids. Se porte sur tout, du simple t-shirt au manteau.", details: ["Rembourrage léger", "Capuche intégrée", "Poches zippées"] },
];

/* ---------- État ---------- */
const state = {
  cart: loadCart(),
  category: "tous",
  search: "",
  sort: "featured",
  favorites: new Set(),
  modalProduct: null,
  modalQty: 1,
  lastFocused: null,
};

/* ---------- Helpers ---------- */
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);
const formatPrice = (n) => Math.round(n).toLocaleString("fr-FR").replace(/[\u00a0\u202f]/g, " ") + " FCFA";
const getProduct = (id) => PRODUCTS.find((p) => p.id === Number(id));
const stars = (rating) => "★".repeat(Math.round(rating)) + "☆".repeat(5 - Math.round(rating));
const FALLBACK = `<span class="media-fallback" style="display:none">${ICON.bag}</span>`;
const imgTag = (photo, alt, size = 500) =>
  `<img src="https://images.unsplash.com/${photo}?w=${size}&h=${size}&fit=crop&q=80" alt="${alt}" loading="lazy" onerror="this.style.display='none';this.nextElementSibling.style.display='grid'" />`;

function loadCart() {
  try {
    const raw = localStorage.getItem("lessentiel-cart");
    const parsed = raw ? JSON.parse(raw) : {};
    return typeof parsed === "object" && parsed !== null && !Array.isArray(parsed) ? parsed : {};
  } catch {
    return {};
  }
}

function saveCart() {
  try { localStorage.setItem("lessentiel-cart", JSON.stringify(state.cart)); } catch { /* stockage indisponible */ }
}

/* ---------- Rendu : catégories et filtres ---------- */
function renderCategories() {
  $("#categoryGrid").innerHTML = CATEGORIES.map((cat) => `
    <button class="category-card ${cat.id === state.category ? "active" : ""}" data-category="${cat.id}" type="button">
      <span class="category-icon" aria-hidden="true">${cat.icon}</span>
      <span class="category-name">${cat.label}</span>
      <span class="category-count">${cat.id === "tous" ? PRODUCTS.length : PRODUCTS.filter((p) => p.category === cat.id).length} produits</span>
    </button>
  `).join("");

  $("#filterBar").innerHTML = CATEGORIES.map((cat) => `
    <button class="filter-chip ${cat.id === state.category ? "active" : ""}" data-category="${cat.id}" type="button"
            aria-pressed="${cat.id === state.category}">${cat.label}</button>
  `).join("");
}

/* ---------- Rendu : produits ---------- */
function getVisibleProducts() {
  let list = PRODUCTS.filter((p) => state.category === "tous" || p.category === state.category);
  if (state.search) {
    const q = state.search.toLowerCase();
    list = list.filter((p) => p.name.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q) ||
      CATEGORIES.find((c) => c.id === p.category)?.label.toLowerCase().includes(q));
  }
  switch (state.sort) {
    case "price-asc": list.sort((a, b) => a.price - b.price); break;
    case "price-desc": list.sort((a, b) => b.price - a.price); break;
    case "name": list.sort((a, b) => a.name.localeCompare(b.name, "fr")); break;
  }
  return list;
}

function renderProducts() {
  const list = getVisibleProducts();
  const grid = $("#productGrid");
  $("#resultsCount").textContent = `${list.length} produit${list.length > 1 ? "s" : ""} affiché${list.length > 1 ? "s" : ""}`;
  $("#emptyState").hidden = list.length > 0;

  grid.innerHTML = list.map((p) => {
    const cat = CATEGORIES.find((c) => c.id === p.category);
    const badgeClass = p.badge === "Promo" ? "promo" : "";
    const favActive = state.favorites.has(p.id) ? "active" : "";
    return `
      <article class="product-card">
        <div class="product-media" data-open-product="${p.id}" role="button" tabindex="0"
             aria-label="Voir la fiche de ${p.name}" style="background:${p.color}">
          ${p.badge ? `<span class="product-badge ${badgeClass}">${p.badge}</span>` : ""}
          <button class="product-fav ${favActive}" data-fav="${p.id}" type="button" aria-label="Ajouter ${p.name} aux favoris">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.5-7 10-7 10Z"/></svg>
          </button>
          ${imgTag(p.image, p.name)}${FALLBACK}
        </div>
        <div class="product-info">
          <span class="product-category">${cat.label}</span>
          <h3 class="product-title" data-open-product="${p.id}" role="button" tabindex="0">${p.name}</h3>
          <div class="product-rating" aria-label="Note ${p.rating} sur 5">${stars(p.rating)} <span>(${p.reviews})</span></div>
          <div class="product-price-row">
            <span class="product-price">${formatPrice(p.price)}</span>
            ${p.oldPrice ? `<span class="product-old-price">${formatPrice(p.oldPrice)}</span>` : ""}
          </div>
          <div class="product-card-foot">
            <button class="add-btn" data-add="${p.id}" type="button"><span aria-hidden="true">＋</span> Ajouter</button>
            <button class="detail-btn" data-open-product="${p.id}" type="button" aria-label="Voir ${p.name}">
              <svg viewBox="0 0 24 24"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
            </button>
          </div>
        </div>
      </article>
    `;
  }).join("");
}

/* ---------- Panier ---------- */
function cartDetails() {
  const items = Object.entries(state.cart).map(([id, qty]) => ({ product: getProduct(id), qty }))
    .filter((i) => i.product && i.qty > 0);
  const subtotal = items.reduce((sum, i) => sum + i.product.price * i.qty, 0);
  const shipping = subtotal === 0 || subtotal >= 33000 ? 0 : 3200;
  return { items, subtotal, shipping, total: subtotal + shipping, count: items.reduce((s, i) => s + i.qty, 0) };
}

function renderCart() {
  const { items, subtotal, shipping, total, count } = cartDetails();

  $("#cartCount").textContent = count;
  $("#cartCount").classList.remove("pop");
  void $("#cartCount").offsetWidth;
  if (count > 0) $("#cartCount").classList.add("pop");
  $("#cartItemsCount").textContent = `(${count})`;

  const body = $("#cartBody");
  if (items.length === 0) {
    body.innerHTML = `<div class="cart-empty"><div class="empty-icon">${ICON.bag}</div>
      <h3>Votre panier est vide</h3><p>Découvrez nos produits et ajoutez vos coups de cœur.</p></div>`;
    $("#cartFooter").hidden = true;
  } else {
    body.innerHTML = items.map(({ product: p, qty }) => `
      <div class="cart-item">
        <div class="cart-item-media" style="background:${p.color}">${imgTag(p.image, "", 150)}${FALLBACK}</div>
        <div class="cart-item-info">
          <div class="cart-item-name">${p.name}</div>
          <div class="cart-item-price">${formatPrice(p.price)}</div>
          <div class="cart-item-controls">
            <div class="qty-control">
              <button type="button" data-cart-minus="${p.id}" aria-label="Retirer un ${p.name}">−</button>
              <span>${qty}</span>
              <button type="button" data-cart-plus="${p.id}" aria-label="Ajouter un ${p.name}">+</button>
            </div>
            <button class="remove-btn" type="button" data-cart-remove="${p.id}">Supprimer</button>
          </div>
        </div>
      </div>
    `).join("");
    $("#cartFooter").hidden = false;
    $("#cartSubtotal").textContent = formatPrice(subtotal);
    $("#cartShipping").textContent = shipping === 0 ? "Offerte" : formatPrice(shipping);
    $("#cartTotal").textContent = formatPrice(total);
    $("#cartNote").textContent = subtotal >= 33000 ? "Vous bénéficiez de la livraison offerte !"
      : `Encore ${formatPrice(33000 - subtotal)} pour la livraison offerte.`;
  }
}

function addToCart(id, qty = 1, name = null) {
  state.cart[id] = (state.cart[id] || 0) + qty;
  saveCart();
  renderCart();
  showToast(`${name || getProduct(id).name} ajouté au panier`);
}

/* ---------- Panier : ouverture / fermeture ---------- */
function openCart() {
  state.lastFocused = document.activeElement;
  $("#cartDrawer").classList.add("open");
  $("#cartDrawer").setAttribute("aria-hidden", "false");
  $("#cartBtn").setAttribute("aria-expanded", "true");
  $("#overlay").hidden = false;
  requestAnimationFrame(() => $("#overlay").classList.add("visible"));
  document.body.classList.add("modal-open");
  $("#closeCart").focus();
}

function closeCart() {
  $("#cartDrawer").classList.remove("open");
  $("#cartDrawer").setAttribute("aria-hidden", "true");
  $("#cartBtn").setAttribute("aria-expanded", "false");
  $("#overlay").classList.remove("visible");
  setTimeout(() => { $("#overlay").hidden = true; }, 250);
  document.body.classList.remove("modal-open");
  state.lastFocused?.focus?.();
}

/* ---------- Modales (fiche produit / commande) ---------- */
function openModal(modal) {
  state.lastFocused = document.activeElement;
  modal.hidden = false;
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  requestAnimationFrame(() => modal.classList.add("visible"));
  modal.querySelector(".modal-close, button, input")?.focus();
}

function closeModal(modal) {
  modal.classList.remove("visible");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
  setTimeout(() => { modal.hidden = true; }, 280);
  state.lastFocused?.focus?.();
}

function openProductModal(id) {
  const p = getProduct(id);
  if (!p) return;
  state.modalProduct = p;
  state.modalQty = 1;
  const cat = CATEGORIES.find((c) => c.id === p.category);
  $("#modalImage").innerHTML = `${imgTag(p.image, p.name, 700)}${FALLBACK}`;
  $("#modalImage").style.background = p.color;
  $("#modalCategory").textContent = cat.label;
  $("#modalTitle").textContent = p.name;
  $("#modalRating").innerHTML = `<div class="product-rating" aria-label="Note ${p.rating} sur 5">${stars(p.rating)} <span>(${p.reviews} avis)</span></div>`;
  $("#modalPrice").textContent = formatPrice(p.price);
  $("#modalDescription").textContent = p.desc;
  $("#modalDetails").innerHTML = p.details.map((d) => `<li>${d}</li>`).join("");
  $('[data-modal-qty] [data-qty-value]').textContent = "1";
  openModal($("#productModal"));
}

/* ---------- Toast ---------- */
let toastTimer;
function showToast(message) {
  const toast = $("#toast");
  toast.textContent = message;
  toast.hidden = false;
  requestAnimationFrame(() => toast.classList.add("visible"));
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.remove("visible");
    setTimeout(() => { toast.hidden = true; }, 250);
  }, 2500);
}

/* ---------- Commande (démo) ---------- */
function openCheckout() {
  const { items, total } = cartDetails();
  if (items.length === 0) { showToast("Votre panier est vide"); return; }
  $("#checkoutSummary").textContent = `${items.length} article${items.length > 1 ? "s" : ""} · Total : ${formatPrice(total)}`;
  $("#checkoutFormWrapper").hidden = false;
  $("#orderSuccess").hidden = true;
  $("#checkoutForm").reset();
  $("#checkoutError").hidden = true;
  closeCart();
  setTimeout(() => openModal($("#checkoutModal")), 120);
}

function handleCheckout(event) {
  event.preventDefault();
  const error = $("#checkoutError");
  const data = new FormData(event.target);
  const name = (data.get("name") || "").toString().trim();
  const email = (data.get("email") || "").toString().trim();
  const address = (data.get("address") || "").toString().trim();
  const city = (data.get("city") || "").toString().trim();
  const zip = (data.get("zip") || "").toString().trim();

  if (!name || !address || !city || !zip || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    error.textContent = "Veuillez remplir tous les champs avec une adresse e-mail valide.";
    error.hidden = false;
    return;
  }
  error.hidden = true;
  state.cart = {};
  saveCart();
  renderCart();
  $("#checkoutFormWrapper").hidden = true;
  $("#orderSuccess").hidden = false;
  $("#orderSuccess button").focus();
}

/* ---------- Événements ---------- */
document.addEventListener("click", (event) => {
  const target = event.target;

  const catBtn = target.closest("[data-category]");
  if (catBtn) {
    state.category = catBtn.dataset.category;
    renderCategories();
    renderProducts();
    $("#boutique").scrollIntoView({ behavior: "smooth", block: "start" });
    return;
  }

  const addBtn = target.closest("[data-add]");
  if (addBtn) { addToCart(addBtn.dataset.add); return; }

  const openBtn = target.closest("[data-open-product]");
  if (openBtn) { openProductModal(openBtn.dataset.openProduct); return; }

  const sizeBtn = target.closest(".size-btn");
  if (sizeBtn) {
    $$(".size-btn").forEach((btn) => {
      btn.classList.remove("active");
      btn.setAttribute("aria-pressed", "false");
    });
    sizeBtn.classList.add("active");
    sizeBtn.setAttribute("aria-pressed", "true");
    return;
  }

  const favBtn = target.closest("[data-fav]");
  if (favBtn) {
    const id = Number(favBtn.dataset.fav);
    if (state.favorites.has(id)) { state.favorites.delete(id); favBtn.classList.remove("active"); }
    else { state.favorites.add(id); favBtn.classList.add("active"); }
    return;
  }

  const minus = target.closest("[data-cart-minus]");
  if (minus) {
    const id = minus.dataset.cartMinus;
    state.cart[id] = Math.max(0, (state.cart[id] || 0) - 1);
    if (state.cart[id] === 0) delete state.cart[id];
    saveCart(); renderCart(); return;
  }
  const plus = target.closest("[data-cart-plus]");
  if (plus) { addToCart(plus.dataset.cartPlus, 1); return; }
  const remove = target.closest("[data-cart-remove]");
  if (remove) { delete state.cart[remove.dataset.cartRemove]; saveCart(); renderCart(); return; }

  const modalMinus = target.closest("[data-qty-minus]");
  if (modalMinus) { state.modalQty = Math.max(1, state.modalQty - 1); $('[data-modal-qty] [data-qty-value]').textContent = state.modalQty; return; }
  const modalPlus = target.closest("[data-qty-plus]");
  if (modalPlus) { state.modalQty += 1; $('[data-modal-qty] [data-qty-value]').textContent = state.modalQty; return; }

  if (target.closest("[data-close-modal]")) {
    const modal = target.closest(".modal");
    if (modal) closeModal(modal);
    return;
  }
});

$("#modalAddBtn").addEventListener("click", () => {
  if (!state.modalProduct) return;
  addToCart(state.modalProduct.id, state.modalQty, state.modalProduct.name);
  closeModal($("#productModal"));
  openCart();
});

document.addEventListener("keydown", (event) => {
  if (event.key !== "Enter" && event.key !== " ") return;
  const el = document.activeElement;
  if (el?.matches?.("[data-open-product]")) {
    event.preventDefault();
    openProductModal(el.dataset.openProduct);
  }
});

$("#cartBtn").addEventListener("click", openCart);
$("#closeCart").addEventListener("click", closeCart);
$("#overlay").addEventListener("click", closeCart);
$("#checkoutBtn").addEventListener("click", openCheckout);
$("#checkoutForm").addEventListener("submit", handleCheckout);

$("#searchInput").addEventListener("input", (e) => {
  state.search = e.target.value.trim();
  renderProducts();
  $("#boutique").scrollIntoView({ behavior: "smooth", block: "start" });
});

$("#sortSelect").addEventListener("change", (e) => { state.sort = e.target.value; renderProducts(); });

$("#resetFilters").addEventListener("click", () => {
  state.category = "tous";
  state.search = "";
  $("#searchInput").value = "";
  renderCategories();
  renderProducts();
});

$("#newsletterForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const email = $("#newsletterEmail").value.trim();
  const status = $("#newsletterStatus");
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    status.style.color = "#c0392b";
    status.textContent = "Veuillez saisir une adresse e-mail valide.";
    return;
  }
  status.style.color = "";
  status.textContent = "Merci ! Votre inscription a bien été enregistrée (démo).";
  e.target.reset();
});

$("#navToggle").addEventListener("click", () => {
  const open = $("#primary-nav").classList.toggle("active");
  $("#navToggle").setAttribute("aria-expanded", String(open));
});
$$("#primary-nav a").forEach((link) => link.addEventListener("click", () => {
  $$("#primary-nav a").forEach((a) => a.classList.remove("active"));
  link.classList.add("active");
  $("#primary-nav").classList.remove("active");
  $("#navToggle").setAttribute("aria-expanded", "false");
}));

document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;
  if (!$("#productModal").hidden) closeModal($("#productModal"));
  else if (!$("#checkoutModal").hidden) closeModal($("#checkoutModal"));
  else if ($("#cartDrawer").classList.contains("open")) closeCart();
});

/* ---------- Initialisation ---------- */
$("#year").textContent = new Date().getFullYear();
renderCategories();
renderProducts();
renderCart();
