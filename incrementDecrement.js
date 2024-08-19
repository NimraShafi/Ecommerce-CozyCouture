 import { updateCartProductTotal } from "./updateCartProductTotal.js";
 import { getCartproductFromLS } from "./getCartProducts.js"; // Import getCartproductFromLS function

export const incrementDecrement = (event, id, stock, price) => {
  const currentCardElement = document.querySelector(`#card${id}`);
  const quantityProduct = currentCardElement.querySelector('.quantity');
  const priceProduct = currentCardElement.querySelector(".subTotal");

  let quantity = 1;
  let localStoragePrice = 0;

  let LocalCartProduct = getCartproductFromLS();
  let existingProduct = LocalCartProduct.find(curProd => curProd.id === id);

  if (existingProduct) {
    quantity = existingProduct.quantity;
    localStoragePrice = existingProduct.price;
    
  } else {
    localStoragePrice = price;
    price = price;
  }

  if(event.target.className === "cardIncrement"){
    if(quantity < stock){
        quantity += 1;
    } else if( quantity === stock){
        quantity = stock;
        localStoragePrice = price * stock;
    }
}
  
if(event.target.className === "cardDecrement"){
  if(quantity > 1){
      quantity -= 1;
  } 
}

  localStoragePrice = price * quantity;

  let updatedCart = {id,quantity,price: localStoragePrice};

  updatedCart = LocalCartProduct.map((curProd)=>{
    return curProd.id === id ? updatedCart : curProd;
  });
  
localStorage.setItem("cartProductLS", JSON.stringify(updatedCart));

quantityProduct.innerText = quantity;
priceProduct.innerText = localStoragePrice;

updateCartProductTotal();
};


