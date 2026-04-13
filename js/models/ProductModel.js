export class ProductModel {
  constructor() {
    this.products = [
      { id: 1, name: "Detergente Multiuso", category: "Detergentes", price: 5.9, stock: 20, image: "./assets/images/detergente.svg" },
      { id: 2, name: "Detergente Lavavajillas", category: "Detergentes", price: 4.9, stock: 19, image: "./assets/images/detergente.svg" },
      { id: 3, name: "Limpiavidrios Pro", category: "Superficies", price: 4.5, stock: 18, image: "./assets/images/limpiavidrios.svg" },
      { id: 4, name: "Limpiador para Muebles", category: "Superficies", price: 5.4, stock: 15, image: "./assets/images/limpiavidrios.svg" },
      { id: 5, name: "Desinfectante Total", category: "Desinfeccion", price: 6.8, stock: 15, image: "./assets/images/desinfectante.svg" },
      { id: 6, name: "Cloro Premium", category: "Desinfeccion", price: 3.7, stock: 30, image: "./assets/images/desinfectante.svg" },
      { id: 7, name: "Jabon para Ropa", category: "Lavanderia", price: 7.2, stock: 25, image: "./assets/images/lavanderia.svg" },
      { id: 8, name: "Suavizante Floral", category: "Lavanderia", price: 6.6, stock: 17, image: "./assets/images/lavanderia.svg" },
      { id: 9, name: "Ambientador Citrus", category: "Aromatizantes", price: 4.1, stock: 16, image: "./assets/images/ambientador.svg" },
      { id: 10, name: "Ambientador Lavanda", category: "Aromatizantes", price: 4.3, stock: 18, image: "./assets/images/ambientador.svg" },
      { id: 11, name: "Limpia Banos", category: "Bano", price: 5.3, stock: 17, image: "./assets/images/bano.svg" },
      { id: 12, name: "Gel Antisarro", category: "Bano", price: 5.7, stock: 12, image: "./assets/images/bano.svg" },
      { id: 13, name: "Quitagrasa Cocina", category: "Cocina", price: 6.1, stock: 14, image: "./assets/images/cocina.svg" },
      { id: 14, name: "Limpiador Horno Activo", category: "Cocina", price: 6.4, stock: 11, image: "./assets/images/cocina.svg" },
      { id: 15, name: "Esponjas Pack x3", category: "Accesorios", price: 2.9, stock: 22, image: "./assets/images/accesorios.svg" },
      { id: 16, name: "Guantes de Limpieza", category: "Accesorios", price: 3.5, stock: 20, image: "./assets/images/accesorios.svg" }
    ];
  }

  getAll() {
    return [...this.products];
  }

  getById(id) {
    return this.products.find((product) => product.id === Number(id));
  }

  getCategories() {
    return [...new Set(this.products.map((product) => product.category))];
  }
}
