export class CartView {
  constructor() {
    this.drawer = document.getElementById("cart-drawer");
    this.overlay = document.getElementById("overlay");
    this.openBtn = document.getElementById("open-cart-btn");
    this.closeBtn = document.getElementById("close-cart-btn");
    this.itemsContainer = document.getElementById("cart-items");
    this.total = document.getElementById("cart-total");
    this.count = document.getElementById("cart-count");
    this.checkoutBtn = document.getElementById("checkout-btn");
    this.emptyCartBtn = document.getElementById("empty-cart-btn");
  }

  render(items, totalPrice, totalItems) {
    this.count.textContent = totalItems;
    this.total.textContent = `$${totalPrice.toFixed(2)}`;

    if (!items.length) {
      this.itemsContainer.innerHTML = `<p class="empty-state">Tu carrito esta vacio.</p>`;
      return;
    }

    this.itemsContainer.innerHTML = items
      .map(
        (item) => `
          <article class="cart-item">
            <div>
              <h4>${item.name}</h4>
              <p>$${item.price.toFixed(2)} x ${item.quantity}</p>
            </div>
            <div class="cart-actions">
              <button data-action="decrease" data-id="${item.id}">-</button>
              <button data-action="increase" data-id="${item.id}">+</button>
              <button class="danger" data-action="remove" data-id="${item.id}">Quitar</button>
            </div>
          </article>
        `
      )
      .join("");
  }

  open() {
    this.drawer.classList.add("open");
    this.overlay.classList.add("open");
    this.drawer.setAttribute("aria-hidden", "false");
  }

  close() {
    this.drawer.classList.remove("open");
    this.overlay.classList.remove("open");
    this.drawer.setAttribute("aria-hidden", "true");
  }

  bindOpen(handler) {
    this.openBtn.addEventListener("click", handler);
  }

  bindClose(handler) {
    this.closeBtn.addEventListener("click", handler);
    this.overlay.addEventListener("click", handler);
  }

  bindItemActions(handler) {
    this.itemsContainer.addEventListener("click", (event) => {
      const button = event.target.closest("[data-action]");
      if (!button) return;
      handler(button.dataset.action, Number(button.dataset.id));
    });
  }

  bindCheckout(handler) {
    this.checkoutBtn.addEventListener("click", handler);
  }

  bindEmptyCart(handler) {
    this.emptyCartBtn.addEventListener("click", handler);
  }
}
