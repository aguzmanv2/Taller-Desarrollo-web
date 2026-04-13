export class ShopController {
  constructor(productModel, productView, cartModel, cartView, notificationView) {
    this.productModel = productModel;
    this.productView = productView;
    this.cartModel = cartModel;
    this.cartView = cartView;
    this.notificationView = notificationView;

    this.filters = {
      search: "",
      category: "all",
      sort: "default"
    };
  }

  init() {
    this.productView.renderCategories(this.productModel.getCategories());
    this.setupBindings();
    this.refreshProducts();
  }

  setupBindings() {
    this.productView.bindSearch((value) => {
      this.filters.search = value.trim().toLowerCase();
      this.refreshProducts();
    });

    this.productView.bindCategoryChange((value) => {
      this.filters.category = value;
      this.refreshProducts();
    });

    this.productView.bindSortChange((value) => {
      this.filters.sort = value;
      this.refreshProducts();
    });

    this.productView.bindClearFilters(() => {
      this.filters = { search: "", category: "all", sort: "default" };
      this.productView.resetFilters();
      this.refreshProducts();
    });

    this.productView.bindAddToCart((productId) => {
      const product = this.productModel.getById(productId);
      if (!product) return;

      this.cartModel.addItem(product);
      this.updateCartView();
      this.notificationView.show(`${product.name} agregado al carrito`);
    });
  }

  refreshProducts() {
    let products = this.productModel.getAll();

    if (this.filters.search) {
      products = products.filter((item) => item.name.toLowerCase().includes(this.filters.search));
    }

    if (this.filters.category !== "all") {
      products = products.filter((item) => item.category === this.filters.category);
    }

    if (this.filters.sort === "price-asc") {
      products.sort((a, b) => a.price - b.price);
    }

    if (this.filters.sort === "price-desc") {
      products.sort((a, b) => b.price - a.price);
    }

    if (this.filters.sort === "name-asc") {
      products.sort((a, b) => a.name.localeCompare(b.name));
    }

    this.productView.renderProducts(products);
  }

  updateCartView() {
    this.cartView.render(
      this.cartModel.getItems(),
      this.cartModel.getTotalPrice(),
      this.cartModel.getTotalItems()
    );
  }
}
