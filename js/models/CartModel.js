export class CartModel {
  constructor() {
    this.items = [];
  }

  getItems() {
    return [...this.items];
  }

  addItem(product) {
    const found = this.items.find((item) => item.id === product.id);

    if (found) {
      if (found.quantity < product.stock) {
        found.quantity += 1;
      }
      return;
    }

    this.items.push({
      id: product.id,
      name: product.name,
      price: product.price,
      stock: product.stock,
      quantity: 1
    });
  }

  increase(id) {
    const item = this.items.find((row) => row.id === Number(id));
    if (!item) return;
    if (item.quantity < item.stock) {
      item.quantity += 1;
    }
  }

  decrease(id) {
    const item = this.items.find((row) => row.id === Number(id));
    if (!item) return;

    item.quantity -= 1;
    if (item.quantity <= 0) {
      this.remove(id);
    }
  }

  remove(id) {
    this.items = this.items.filter((item) => item.id !== Number(id));
  }

  clear() {
    this.items = [];
  }

  getTotalItems() {
    return this.items.reduce((acc, item) => acc + item.quantity, 0);
  }

  getTotalPrice() {
    return this.items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  }
}
