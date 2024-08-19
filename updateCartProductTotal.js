import { getCartproductFromLS } from "./getCartProducts.js";

export const updateCartProductTotal=()=>{
    let productSubTotal = document.querySelector(".productSubTotal");
    let productFinalTotal = document.querySelector(".productFinalTotal");
    
    let LocalCartProduct = getCartproductFromLS();
    let initialValue = 0;
    let totalProductPrice = LocalCartProduct.reduce((accumulator,curElem)=>{
    let productPrice = parseInt(curElem.price) || 0;
    return accumulator + productPrice;
    },initialValue);

    productSubTotal.textContent = `Rs. ${totalProductPrice}`;
    productFinalTotal.textContent = `Rs. ${totalProductPrice + 50}`;

   
};





