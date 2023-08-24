// Model

const app = document.getElementById("app");
let cart = [];
let cartHTML = /*html*/ `
    <span style="color: lightgray;">Cart is empty...</span>
`;

// View

function updateView() {
    app.innerHTML = /*html*/ `
        <input type="text" name="" id="user-input">
        <button id="add" onclick="addToCart()">Add to cart</button>
        <div id="cart">${cartHTML}</div>
    `;
}

updateView();

// Controller

function addToCart() {
    let userInput = document.getElementById("user-input").value;
    if (userInput === "") return;
    cart.push(userInput);
    cartElements();
    updateView();
}

function cartElements() {
    if (cart.length === 0) {
        cartHTML = /*html*/ `
            <span style="color: lightgray;">Cart is empty...</span>
        `;
        return;
    }
        
    cartHTML = "";
    for (let i = 0; i < cart.length; i++) {
        cartHTML += /*html*/ `
            <span onclick="removeFromCart(${i})" class="item">${cart[i]}</span>
        `;
    }
}

function removeFromCart(index) {
    cart.splice(index, 1);
    cartElements();
    updateView();
}