import { getCartproductFromLS } from "./getCartProducts.js";
import { updateCartValue } from "./updateCartValue.js";

let arrLocalStorageProduct = getCartproductFromLS();
updateCartValue(arrLocalStorageProduct);