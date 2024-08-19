import { getCartproductFromLS } from "./getCartProducts.js";
import { showProductContainer } from "./productcard.js";
import { updateCartValue } from "./updateCartValue.js";

fetch('product.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
    })
    .then(products => {
        console.log(products);
        showProductContainer(products); // Call showProductContainer after fetching data
        let arrLocalStorageProduct = getCartproductFromLS();
        updateCartValue(arrLocalStorageProduct);
   
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });




