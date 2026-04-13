export class ProductView {
  constructor() {
    this.grid = document.getElementById("products-grid");
    this.searchInput = document.getElementById("search-input");
    this.categoryFilter = document.getElementById("category-filter");
    this.sortFilter = document.getElementById("sort-filter");
    this.clearFiltersBtn = document.getElementById("clear-filters-btn");
  }

  renderProducts(products) {
    if (!products.length) {
      this.grid.innerHTML = `<div class="empty-state">No hay productos que coincidan con tu búsqueda.</div>`;
      return;
    }

    this.grid.innerHTML = products
      .map(
        (product) => `
          <article class="product-card">
            <div class="product-image">
              <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="product-body">
              <span class="product-category">${product.category}</span>
              <h3 class="product-name">${product.name}</h3>
              <p class="product-price">$${product.price.toFixed(2)}</p>
              <span class="product-stock">Stock: ${product.stock}</span>
              <button data-add="${product.id}" class="primary-btn">Agregar al carrito</button>
            </div>
          </article>
        `
      )
      .join("");
  }

  renderCategories(categories) {
    const options = categories
      .map((category) => `<option value="${category}">${category}</option>`)
      .join("");
    this.categoryFilter.insertAdjacentHTML("beforeend", options);
  }

  bindSearch(handler) {
    this.searchInput.addEventListener("input", () => handler(this.searchInput.value));
  }

  bindCategoryChange(handler) {
    this.categoryFilter.addEventListener("change", () => handler(this.categoryFilter.value));
  }

  bindSortChange(handler) {
    this.sortFilter.addEventListener("change", () => handler(this.sortFilter.value));
  }

  bindClearFilters(handler) {
    this.clearFiltersBtn.addEventListener("click", handler);
  }

  bindAddToCart(handler) {
    this.grid.addEventListener("click", (event) => {
      const btn = event.target.closest("[data-add]");
      if (!btn) return;
      handler(Number(btn.dataset.add));
    });
  }

  resetFilters() {
    this.searchInput.value = "";
    this.categoryFilter.value = "all";
    this.sortFilter.value = "default";
  }
}
