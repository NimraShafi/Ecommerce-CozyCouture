const cardValue = document.querySelector("#cardValue");
export const updateCartValue =(cartProducts)=>{
    return (cardValue.innerHTML =`<i class="bx bx-cart">${cartProducts.length}</i>`)

}