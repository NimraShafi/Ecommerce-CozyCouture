import { addToCart } from "./addToCart.js";
import { homeQuantityToggle } from "./homeQuantityToggle.js";

const newarival =document.querySelector(".newarival");
const productTemplate =document.querySelector("#productTemplate");

export const showProductContainer =(products)=>{
if(!products){
    return false;
}

products.forEach((curElem)=>{
  const {id,name,price,actual_price,image,image1,stock} =curElem;
  const productClone = document.importNode(productTemplate.content,true);

  productClone.querySelector("#cardValue").setAttribute('id',`card${id}`);
 

  productClone.querySelector(".productName").textContent = name;
  

  productClone.querySelector(".productPrice").textContent = `Rs ${price}`;
  productClone.querySelector(".productActualPrice").textContent = `Rs ${actual_price}`;
  productClone.querySelector(".main-image").src = image;
  productClone.querySelector(".hover-image").src = image1;
  productClone.querySelector(".productstock").textContent = stock;
 
  productClone.querySelector(".stockElement").addEventListener('click',(event)=>{
    homeQuantityToggle(event,id,stock);
  })

  productClone.querySelector('.add-to-card-button').addEventListener('click', (event)=>{
    addToCart(event, id, stock);

  })
  newarival.append(productClone);
  
});
};