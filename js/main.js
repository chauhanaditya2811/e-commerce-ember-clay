/* Ember & Clay — site behaviour
   Cart is stored in localStorage so it persists between pages. */

const CART_KEY = "emberclay_cart";

function getCart() {
  try {
    return JSON.parse(localStorage.getItem(CART_KEY)) || {};
  } catch (e) {
    return {};
  }
}

function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  updateCartBadge();
}

function addToCart(id) {
  const cart = getCart();
  cart[id] = (cart[id] || 0) + 1;
  saveCart(cart);
  flashAdded(id);
}

function removeFromCart(id) {
  const cart = getCart();
  delete cart[id];
  saveCart(cart);
  renderCartPage();
}

function setQty(id, qty) {
  const cart = getCart();
  qty = Math.max(1, Math.min(9, qty));
  cart[id] = qty;
  saveCart(cart);
  renderCartPage();
}

function cartCount() {
  const cart = getCart();
  return Object.values(cart).reduce((a, b) => a + b, 0);
}

function updateCartBadge() {
  document.querySelectorAll("[data-cart-count]").forEach(el => {
    const n = cartCount();
    el.textContent = n;
    el.style.display = n > 0 ? "inline-flex" : "none";
  });
}

function flashAdded(id) {
  const btn = document.querySelector(`[data-add="${id}"]`);
  if (!btn) return;
  const original = btn.textContent;
  btn.textContent = "Added ✓";
  btn.classList.add("is-added");
  setTimeout(() => {
    btn.textContent = original;
    btn.classList.remove("is-added");
  }, 1100);
}

/* ---------- Product grid rendering (index + shop pages) ---------- */

function productCard(p) {
  return `
    <article class="product-card">
      <div class="product-card__art">${ICONS[p.icon]}</div>
      <div class="product-card__body">
        <p class="product-card__cat">${p.category}</p>
        <h3 class="product-card__name">${p.name}</h3>
        <p class="product-card__blurb">${p.blurb}</p>
        <div class="product-card__row">
          <span class="product-card__price">$${p.price}</span>
          <button class="btn btn--small" data-add="${p.id}" onclick="addToCart('${p.id}')">Add to cart</button>
        </div>
      </div>
    </article>`;
}

function renderGrid(targetId, list) {
  const el = document.getElementById(targetId);
  if (!el) return;
  el.innerHTML = list.map(productCard).join("");
}

function renderShop() {
  const grid = document.getElementById("shop-grid");
  if (!grid) return;
  const buttons = document.querySelectorAll(".filter-btn");
  const draw = (cat) => {
    const list = cat === "all" ? PRODUCTS : PRODUCTS.filter(p => p.category === cat);
    renderGrid("shop-grid", list);
  };
  buttons.forEach(b => b.addEventListener("click", () => {
    buttons.forEach(x => x.classList.remove("is-active"));
    b.classList.add("is-active");
    draw(b.dataset.filter);
  }));
  draw("all");
}

/* ---------- Cart page ---------- */

function renderCartPage() {
  const wrap = document.getElementById("cart-items");
  if (!wrap) return;
  const cart = getCart();
  const ids = Object.keys(cart);

  if (ids.length === 0) {
    wrap.innerHTML = `<div class="cart-empty">
      <p>Your basket is sitting empty on the shelf.</p>
      <a href="shop.html" class="btn">Browse the shop</a>
    </div>`;
    document.getElementById("cart-summary").style.display = "none";
    return;
  }

  document.getElementById("cart-summary").style.display = "block";

  let subtotal = 0;
  wrap.innerHTML = ids.map(id => {
    const p = PRODUCTS.find(x => x.id === id);
    if (!p) return "";
    const qty = cart[id];
    subtotal += p.price * qty;
    return `
      <div class="cart-row">
        <div class="cart-row__art">${ICONS[p.icon]}</div>
        <div class="cart-row__info">
          <h4>${p.name}</h4>
          <p>$${p.price} each</p>
        </div>
        <div class="cart-row__qty">
          <button onclick="setQty('${id}', ${qty - 1})" aria-label="Decrease quantity">−</button>
          <span>${qty}</span>
          <button onclick="setQty('${id}', ${qty + 1})" aria-label="Increase quantity">+</button>
        </div>
        <div class="cart-row__price">$${(p.price * qty).toFixed(2)}</div>
        <button class="cart-row__remove" onclick="removeFromCart('${id}')" aria-label="Remove ${p.name}">✕</button>
      </div>`;
  }).join("");

  const shipping = subtotal > 60 || subtotal === 0 ? 0 : 6;
  document.getElementById("sum-subtotal").textContent = "$" + subtotal.toFixed(2);
  document.getElementById("sum-shipping").textContent = shipping === 0 ? "Free" : "$" + shipping.toFixed(2);
  document.getElementById("sum-total").textContent = "$" + (subtotal + shipping).toFixed(2);
}

/* ---------- Misc: mobile nav, contact form, checkout ---------- */

function initNav() {
  const toggle = document.querySelector(".nav-toggle");
  const menu = document.querySelector(".nav-links");
  if (!toggle || !menu) return;
  toggle.addEventListener("click", () => {
    menu.classList.toggle("is-open");
    toggle.classList.toggle("is-open");
  });
}

function initContactForm() {
  const form = document.getElementById("contact-form");
  if (!form) return;
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    document.getElementById("contact-note").textContent =
      "Thank you — that landed safely in our inbox. We'll write back within a couple of days.";
    form.reset();
  });
}

function initCheckoutButton() {
  const btn = document.getElementById("checkout-btn");
  if (!btn) return;
  btn.addEventListener("click", () => {
    localStorage.removeItem(CART_KEY);
    updateCartBadge();
    document.getElementById("cart-items").innerHTML = `<div class="cart-empty">
      <p>Order placed — thank you! A confirmation would normally land in your inbox.</p>
      <a href="shop.html" class="btn">Keep browsing</a>
    </div>`;
    document.getElementById("cart-summary").style.display = "none";
  });
}

document.addEventListener("DOMContentLoaded", () => {
  updateCartBadge();
  initNav();
  renderShop();
  renderCartPage();
  initContactForm();
  initCheckoutButton();

  const featured = document.getElementById("featured-grid");
  if (featured) renderGrid("featured-grid", PRODUCTS.slice(0, 4));
});
