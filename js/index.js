const loadProducts = async () => {
  // Fetch product data from the API
  const res = await fetch("http://localhost:5000/products");
  const productsData = await res.json();

  // Get the product container element
  const cartField = document.getElementById("productContainer");
  // Clear existing content
  cartField.innerHTML = "";

  if (productsData) {
    // Loop through each product and create cards
    productsData.forEach((product) => {
      const productCart = document.createElement("div");
      //   productCart.classList = "card bg-base-100 shadow-xl mt-10";
      productCart.innerHTML = `
          <div class="space-y-3 drop-shadow-lg border rounded-lg">
            <div class="bg-[#F1F1F1] p-5 rounded-2xl">
              <img src="${product.img}" alt="Product Image">
            </div>
          <div>
            <h2 class="text-2xl font-bold">${product.productName}</h2>
            <p>${product.shortDetails}</p>
            <div class="flex justify-between">
              <h3 class="text-4xl font-black text-orange-400">$${product.price}</h3>
              <button class="py-4 px-9 bg-gradient-to-r from-[#A4BC46] to-[#85A019] rounded-xl uppercase text-white font-medium">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" 
                  stroke-width="1.5" stroke="currentColor" class="w-6 h-6 inline">
                  <path stroke-linecap="round" stroke-linejoin="round" 
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3
                    2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6
                    20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.750 0 1 1.5 0Z" />
                  </path>
                </svg> Add to cart
              </button>
            </div>
          </div>
          </div>
        `;
      cartField.appendChild(productCart); // Append the product card to the container
    });
  } else {
    // Handle the case when no products are found or API response is invalid
    const errorField = document.createElement("div");
    errorField.innerHTML = `
        <img class="mx-auto mt-20 h-full w-full" src="" alt="Not found">
      `;
    cartField.appendChild(errorField);
  }
};

// Call the function to load products
loadProducts();
