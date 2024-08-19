import { updateCartValue } from "./updateCartValue.js";

export const getCartproductFromLS=() => {
    let cartProducts = localStorage.getItem(`cartProductLS`);
    if(!cartProducts){
        return [];
    }
    cartProducts = JSON.parse(cartProducts);
    updateCartValue(cartProducts);
    return cartProducts;
}
