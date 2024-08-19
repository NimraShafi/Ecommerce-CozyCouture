export const homeQuantityToggle =(event, id, stock)=>{
const currentCardElement= document.querySelector(`#card${id}`);
const quantity= currentCardElement.querySelector('.quantity');
let prooductQuantity =parseInt(quantity.getAttribute('data-quantity')) || 1

if(event.target.className === "cardIncrement"){
    if(prooductQuantity < stock){
        prooductQuantity += 1;
    } else if( prooductQuantity === stock){
        prooductQuantity = stock;
    }
}

if(event.target.className === "cardDecrement"){
    if(prooductQuantity > 1){
        prooductQuantity -= 1;
    } 
}

quantity.innerText = prooductQuantity;
quantity.setAttribute('data-quantity', prooductQuantity);
return prooductQuantity;
};