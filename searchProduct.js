import { getCartproductFromLS } from "./getCartProducts.js";
import { updateCartValue } from "./updateCartValue.js";

const displayItem = items => {
    const html = items.map(item => `
      <div class="newarival">
      <div class="new-arrival-box" id="cardValue">
        <div class="image">
          <img src="${item.image}" alt="" class="main-image" />
          <img src="${item.image1}" alt="" class="hover-image" />
        </div>
        <div class="heart-icon"><i class="bx bx-heart"></i></div>
        <div class="rating">
          <i class="bx bxs-star"></i>
          <i class="bx bxs-star"></i>
          <i class="bx bxs-star"></i>
          <i class="bx bxs-star"></i>
          <i class="bx bxs-star-half"></i>
        </div>
        <p class="productName">${item.name}</p>
        <h3 class="productPrice">${item.price}</h3>
        <h4 class="productActualPrice">${item.actual_price}</h4>
        <div class="productQuantityElement">
          <p class="productQuantity">Quantity</p>
          <p class="productstock">${item.stock}</p>
          <div class="stockElement">
            <button class="cardIncrement">+</button>
            <span class="quantity">1</span>
            <button class="cardDecrement">-</button>
          </div>
        </div>
        <button class="add-to-card-button">
          <h5><i class="bx bx-cart"></i>Add to Cart</h5>
          <div id="pink"></div>
        </button>
      </div>
      </div>

      
    `).join("");
    document.getElementById("root").innerHTML = html;
  };

  fetch('product.json')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok: ' + response.statusText);
      }
      return response.json();
    })
    .then(products => {
      console.log('Products loaded:', products);

      // Set up search functionality
      document.getElementById("searchBar").addEventListener("keyup", e => {
        const searchData = e.target.value.toLowerCase();
        const filterData = products.filter(item => item.name.toLowerCase().includes(searchData));
        displayItem(filterData);
        console.log('Filtered products:', filterData);
      });

      // Initial display
      displayItem(products);

      const toggleSearchBar = (search, button)=>{
      const barSearch = document.getElementById(search),
      searchButton = document.getElementById(button)

      searchButton.addEventListener("click", ()=>{
        barSearch.classList.toggle("show-search")
      })
      }

      toggleSearchBar("search-bar","search-button")

      let arrLocalStorageProduct = getCartproductFromLS();
      updateCartValue(arrLocalStorageProduct);
    })



    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
    });
