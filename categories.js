// Function to get query parameters
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// Sample product data
const products = [
    { name: "Smartphone", category: "Electronics", description: "Latest model smartphone", img: "https://i.pinimg.com/474x/24/22/32/24223258deb2711a6cfb6ffe2ba3b5e9.jpg" },
    { name: "Jacket", category: "Fashion", description: "Warm and stylish jacket", img: "https://i.pinimg.com/474x/6f/a9/12/6fa9125f005dd661d895e60636767617.jpg" },
    { name: "Microwave", category: "Electronics", description: "Compact microwave oven", img: "https://i.pinimg.com/474x/13/1d/c7/131dc758cd2b620efa073478e9a4de75.jpg" },
    // Add more product objects as needed
];

// Function to display products based on search or category
function displayProducts(searchQuery = "") {
    const categoryList = document.getElementById("categoryList");

    // Clear existing content
    categoryList.innerHTML = "";

    // Filter products by search query if it exists
    const filteredProducts = searchQuery
        ? products.filter(product => product.name.toLowerCase().includes(searchQuery))
        : products;

    // Group products by category
    const categories = {};
    filteredProducts.forEach(product => {
        if (!categories[product.category]) {
            categories[product.category] = [];
        }
        categories[product.category].push(product);
    });

    // Generate HTML for each category
    for (const category in categories) {
        const categoryDiv = document.createElement("div");
        categoryDiv.className = "category";
        categoryDiv.innerHTML = `<h2>${category}</h2><div class="product-list"></div>`;

        // Generate HTML for each product in the category
        categories[category].forEach(product => {
            const productDiv = document.createElement("div");
            productDiv.className = "product";
            productDiv.innerHTML = `
                <img src="${product.img}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
            `;
            categoryDiv.querySelector(".product-list").appendChild(productDiv);
        });

        categoryList.appendChild(categoryDiv);
    }
}

// Run displayProducts with the search query from the URL if present
const searchQuery = getQueryParam("search");
displayProducts(searchQuery);
