const addProduct = async () => {
  const button = document.getElementById("submit");

  button.addEventListener("click", (event) => {
    event.preventDefault();

    // Get the latest values when the button is clicked
    const productName = document.getElementById("name").value;
    const price = document.getElementById("price").value;
    const img = document.getElementById("imgUrl").value;
    const shortDetails = document.getElementById("shortDescription").value;

    const newProduct = { productName, img, shortDetails, price };
    console.log(newProduct);
    fetch("http://localhost:5000/products", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("New product added successfully");
        }
      });
  });
};

addProduct();
