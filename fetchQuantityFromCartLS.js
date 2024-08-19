import { getCartproductFromLS } from "./getCartProducts.js";

export const fetchQuantityFromCartLS=(id, price)=>{
    let cartProducts = getCartproductFromLS();

    let existingproduct = cartProducts.find((curProd)=> curProd.id === id)
    let quantity = 1;
    if(existingproduct){
        quantity = existingproduct.quantity;
        price = existingproduct.price;
    }

   return {quantity, price};
};