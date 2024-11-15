const loadOrders = async () => {
  // Fetch order data from the API
  const res = await fetch("http://localhost:5000/orders");
  const orderData = await res.json();

  // Log data to verify its structure
  console.log(orderData);

  // Get the order container element
  const orderField = document.getElementById("orderContainer");
  // Clear existing content
  orderField.innerHTML = "";

  if (orderData && orderData.length > 0) {
    // Loop through each order and create cards
    orderData.forEach((order) => {
      const orderCart = document.createElement("div");
      orderCart.innerHTML = `
          <div class="flex justify-center items-center gap-5 border-b py-4">
            <img class="max-h-52 max-w-32" src="${order.img}" alt="Order Image" />
            <div>
              <p class="font-semibold">${order.productName}</p>
              <p class="text-gray-500">Price: $${order.price}</p>
            </div>
            <div>
              <button class="deleteOrder bg-red-500 text-white px-4 py-2 rounded-lg">Delete</button>
            </div>
          </div>
        `;

      // Add delete functionality
      const button = orderCart.querySelector(".deleteOrder");
      const id = order._id;
      button.addEventListener("click", () => deleteOrder(id));

      orderField.appendChild(orderCart); // Append the order card to the container
    });
  } else {
    // Handle the case when no orders are found or API response is invalid
    const errorField = document.createElement("div");
    errorField.innerHTML = `
        <p class="text-center text-gray-500 mt-10">
          No orders found. <a href="index.html" class="text-blue-500 underline">Continue Shopping</a>
        </p>
      `;
    orderField.appendChild(errorField);
  }
};

// Delete order function
const deleteOrder = async (id) => {
  const res = await fetch(`http://localhost:5000/orders/${id}`, {
    method: "DELETE",
  })
    .then((res) => res.json())
    .then((data) => {
      alert("Item deleted successfully");
      loadOrders();
    });
};

// Load orders on page load
loadOrders();
