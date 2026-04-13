import { ProductModel } from "./models/ProductModel.js";
import { CartModel } from "./models/CartModel.js";
import { ProductView } from "./views/ProductView.js";
import { CartView } from "./views/CartView.js";
import { NotificationView } from "./views/NotificationView.js";
import { ShopController } from "./controllers/ShopController.js";
import { CartController } from "./controllers/CartController.js";

const productModel = new ProductModel();
const cartModel = new CartModel();

const productView = new ProductView();
const cartView = new CartView();
const notificationView = new NotificationView();

const shopController = new ShopController(
  productModel,
  productView,
  cartModel,
  cartView,
  notificationView
);

const cartController = new CartController(
  cartModel,
  cartView,
  notificationView,
  () => shopController.updateCartView()
);

shopController.init();
cartController.init();
shopController.updateCartView();
