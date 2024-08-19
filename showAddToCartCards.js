import { fetchQuantityFromCartLS } from "./fetchQuantityFromCartLS.js";
import { getCartproductFromLS } from "./getCartProducts.js";
import { incrementDecrement } from "./incrementDecrement.js";
import { removeProductFromCart } from "./removeProductFromCart.js";
import { updateCartProductTotal } from "./updateCartProductTotal.js";

fetch('product.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok: ' + response.statusText);
    }
    return response.json();
  })
  .then(products => {
    console.log(products);

    let cartProducts = getCartproductFromLS();
    let filterProducts = products.filter(curProd => {
      return cartProducts.some(curElem => curElem.id === curProd.id);
    });

    const cartElement = document.querySelector("#productCartContainer");
    const tempContainer = document.querySelector("#productCartTemplate");

    const showCartProduct = () => {
      filterProducts.forEach(curElem => {
        const { id, name, price, image, stock } = curElem;
        const productClone = document.importNode(tempContainer.content, true);

        let LSActualData = fetchQuantityFromCartLS(id, price);

        productClone.querySelector("#cardValue").setAttribute('id', `card${id}`);
        productClone.querySelector(".productName").textContent = name;
        productClone.querySelector(".productPrice").textContent = `Rs ${price}`;
        productClone.querySelector(".main-image").src = image;
        productClone.querySelector(".quantity").textContent = LSActualData.quantity;
        productClone.querySelector(".subTotal").textContent = `Rs ${LSActualData.price}`;
        productClone.querySelector(".stockElement").addEventListener('click', (event) => {
          incrementDecrement(event, id, stock, price);
          updateCartProductTotal(); 
        });
        productClone.querySelector(".remove-to-card-button").addEventListener("click", () => {
          removeProductFromCart(id);
          updateCartProductTotal(); 
        });
        cartElement.append(productClone);
      });
    }

    showCartProduct();

    updateCartProductTotal();

  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });
