import { getCartproductFromLS } from "./getCartProducts.js";
import { updateCartValue } from "./updateCartValue.js";

var loginForm = document.getElementById("loginForm");
var registerForm = document.getElementById("registerForm");
var indicator = document.getElementById("indicator");

const loginSpan = document.getElementById("loginSpan"); 
loginSpan.addEventListener("click", () => {
  registerForm.style.transform = "translateX(300px)";
  loginForm.style.transform = "translateX(300px)";
  indicator.style.transform = "translateX(0px)";
});

const registerSpan = document.getElementById("registerSpan"); 
registerSpan.addEventListener("click", () => {
  registerForm.style.transform = "translateX(0px)";
  loginForm.style.transform = "translateX(0px)";
  indicator.style.transform = "translateX(100px)";
});
    let arrLocalStorageProduct = getCartproductFromLS();
    updateCartValue(arrLocalStorageProduct);
