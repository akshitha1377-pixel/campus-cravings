let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(item, price) {

    cart.push({
        name: item,
        price: price
    });

    localStorage.setItem("cart", JSON.stringify(cart));

    alert("🍔 " + item + " added to your cart! 😋");

    window.location.href = "cart.html";
}

function displayCart() {

    let cartItems = document.getElementById("cartItems");
    let totalElement = document.getElementById("total");

    if (!cartItems) {
        return;
    }

    cartItems.innerHTML = "";

    let total = 0;

    if (cart.length === 0) {

        cartItems.innerHTML =
            "<p>😢 Your cart is empty!</p>";

        totalElement.innerText = "💰 Total: ₹0";

        return;
    }

    cart.forEach(function(item, index) {

        total += item.price;

        cartItems.innerHTML += `
            <div class="cart-item">

                <h3>${item.name} 🍴</h3>

                <p>₹${item.price}</p>

                <button onclick="removeItem(${index})">
                    ❌ Remove
                </button>

            </div>
        `;
    });

    totalElement.innerText =
        "💰 Total: ₹" + total;
}

function removeItem(index) {

    cart.splice(index, 1);

    localStorage.setItem("cart", JSON.stringify(cart));

    displayCart();
}

function placeOrder() {

    if (cart.length === 0) {

        alert("🛒 Your cart is empty!");

        return;
    }

    alert(
        "🎉 YAY! ORDER PLACED! 🍔\n\n" +
        "👨‍🍳 Your food is getting ready!\n" +
        "❤️ Good food + Good friends = Good memories!"
    );

    localStorage.removeItem("cart");

    window.location.href = "index.html";
}

displayCart();
