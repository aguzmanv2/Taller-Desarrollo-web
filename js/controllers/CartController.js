export class CartController {
  constructor(cartModel, cartView, notificationView, onCartChange) {
    this.cartModel = cartModel;
    this.cartView = cartView;
    this.notificationView = notificationView;
    this.onCartChange = onCartChange;
  }

  init() {
    this.cartView.bindOpen(() => this.cartView.open());
    this.cartView.bindClose(() => this.cartView.close());
    this.cartView.bindItemActions((action, id) => this.handleItemAction(action, id));
    this.cartView.bindEmptyCart(() => this.emptyCart());
    this.cartView.bindCheckout(() => this.checkout());
  }

  handleItemAction(action, id) {
    if (action === "increase") this.cartModel.increase(id);
    if (action === "decrease") this.cartModel.decrease(id);
    if (action === "remove") this.cartModel.remove(id);
    this.onCartChange();
  }

  emptyCart() {
    this.cartModel.clear();
    this.onCartChange();
    this.notificationView.show("Carrito vaciado");
  }

  checkout() {
    const totalItems = this.cartModel.getTotalItems();
    if (!totalItems) {
      this.notificationView.show("Agrega productos antes de finalizar");
      return;
    }

    const total = this.cartModel.getTotalPrice().toFixed(2);
    this.cartModel.clear();
    this.onCartChange();
    this.cartView.close();
    this.notificationView.show(`Compra exitosa: $${total}`);
  }
}
