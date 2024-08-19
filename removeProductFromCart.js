import { getCartproductFromLS } from "./getCartProducts.js";
import { showToast } from "./showToast.js";
import { updateCartValue } from "./updateCartValue.js";

export const removeProductFromCart = (id)=>{
    let cartProducts = getCartproductFromLS();
    cartProducts = cartProducts.filter((curProd)=> curProd.id !== id);
    localStorage.setItem("cartProductLS", JSON.stringify(cartProducts));

    let removeDiv = document.getElementById(`card${id}`);
    if(removeDiv){
        removeDiv.remove();
    
    }
    updateCartValue(cartProducts);
};