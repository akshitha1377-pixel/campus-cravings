let cart = [];

function addToCart(item, price) {
    cart.push({
        name: item,
        price: price
    });

    alert("🍔 " + item + " added to your cart! 😋");

    console.log(cart);
}
