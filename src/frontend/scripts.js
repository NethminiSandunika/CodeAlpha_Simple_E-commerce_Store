// src/frontend/scripts.js

document.addEventListener('DOMContentLoaded', () => {
    fetchProducts();
});

let cart = [];

async function fetchProducts() {
    try {
        const response = await fetch('http://localhost:3000/api/products');
        const products = await response.json();
        displayProducts(products);
    } catch (error) {
        console.error('Error fetching products:', error);
    }
}

function displayProducts(products) {
    const productsDiv = document.getElementById('products');
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product';
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h2>${product.name}</h2>
            <p>${product.description}</p>
            <p>$${product.price.toFixed(2)}</p>
            <button onclick="addToCart('${product._id}')">Add to Cart</button>
        `;
        productsDiv.appendChild(productDiv);
    });
}

function addToCart(productId) {
    cart.push(productId);
    alert('Product added to cart');
}
