window.addEventListener("DOMContentLoaded", () => {
  // Parse the URL parameters
  const params = new URLSearchParams(window.location.search);
  const id = params.get("productId");

  // find input field
  const productName = document.getElementById("name");
  const price = document.getElementById("price");
  const img = document.getElementById("imgUrl");
  const shortDetails = document.getElementById("shortDescription");

  if (id) {
    fetch(`http://localhost:5000/product/${id}`)
      .then((res) => res.json())
      .then((data) => {
        const product = data;

        // Pre-fill input fields with the previous product data
        productName.value = product.productName;
        price.value = product.price;
        img.value = product.img;
        shortDetails.value = product.shortDetails;
      })
      .catch((error) => console.error("Error fetching product:", error));
  }
});

// add update button click event
const updateProductBtn = document.getElementById("updateSubmit");
updateProductBtn.addEventListener("click", () => updateProduct(product));
// update function
const updateProduct = (product) => {
  const updatedProductName =
    document.getElementById("name").value || product.productName;
  const updatedPrice = document.getElementById("price").value || product.price;
  const updatedImgUrl = document.getElementById("imgUrl").value || product.img;
  const updatedShortDetails =
    document.getElementById("shortDescription").value || product.shortDetails;

  // Create an updated product object
  const updatedProduct = {
    productName: updatedProductName,
    price: updatedPrice,
    img: updatedImgUrl,
    shortDetails: updatedShortDetails,
  };

  console.log("Updated Product Data:", updatedProduct);
};
