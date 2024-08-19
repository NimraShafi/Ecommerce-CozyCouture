import { getCartproductFromLS } from "./getCartProducts.js";
import { updateCartValue } from "./updateCartValue.js";

export const addToCart = (event, id, stock) => {
  const currentProductElement = document.querySelector(`#card${id}`);

  let arrLocalStorageProduct = getCartproductFromLS();
  let quantity = currentProductElement.querySelector(".quantity").innerText;
  let price = currentProductElement.querySelector(".productPrice").innerText;
  price = price.replace("Rs", "");

  let existingProduct = arrLocalStorageProduct.find((curProd) => curProd.id === id);

  if (existingProduct && quantity > 1) {
    existingProduct.quantity += Number(quantity);
    existingProduct.price = Number(price * existingProduct.quantity);
    localStorage.setItem("cartProductLS", JSON.stringify(arrLocalStorageProduct));
  } else if (existingProduct && quantity <= 1) {
    return false;
  } else {
    quantity = Number(quantity);
    price = Number(price * quantity);

    arrLocalStorageProduct.push({ id, price, quantity });
    localStorage.setItem("cartProductLS", JSON.stringify(arrLocalStorageProduct));
  }

  updateCartValue(arrLocalStorageProduct);
};

