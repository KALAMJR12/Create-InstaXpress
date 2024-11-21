document.getElementById("searchButton").addEventListener("click", () => {
    const query = document.getElementById("searchInput").value.toLowerCase();
    const results = products.filter(product => product.name.toLowerCase().includes(query));
    
    if (results.length > 0) {
        console.log("Products found:", results);
    } else {
        console.log("No products found");
    }
});

document.getElementById("accountLink").addEventListener("click", (e) => {
    e.preventDefault();
    const options = document.getElementById("accountOptions");
    options.style.display = options.style.display === "none" ? "block" : "none";
});

document.getElementById("searchButton").addEventListener("click", function() {
    const query = document.getElementById("searchInput").value.toLowerCase();
    if (query) {
        window.location.href = `categories.html?search=${query}`;
    }
});

// Clear search input
document.getElementById("clearSearchButton").addEventListener("click", function() {
    document.getElementById("searchInput").value = "";
    // Optionally, refresh the page or reset the product list display
});




// Automatic sliding functionality for hero section
const slides = document.querySelectorAll('.slide');
let currentIndex = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active'); // Hide all slides
        if (i === index) {
            slide.classList.add('active'); // Show only the current slide
        }
    });
}

function nextSlide() {
    currentIndex++;
    if (currentIndex >= slides.length) {
        currentIndex = 0; // Reset to first slide after the last slide
    }
    showSlide(currentIndex);
}

// Initialize first slide and start the animation loop
showSlide(currentIndex);
setInterval(nextSlide, 5000);



//sell js
document.getElementById('sellForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const itemName = document.getElementById('itemName').value;
    const itemPrice = document.getElementById('itemPrice').value;
    const itemDescription = document.getElementById('itemDescription').value;
    const itemCategory = document.getElementById('itemCategory').value;
    const itemImage = document.getElementById('itemImage').files[0];

    // Convert the image file to a base64 string to store it
    const reader = new FileReader();
    reader.readAsDataURL(itemImage);
    reader.onload = function() {
        const itemImageURL = reader.result;

        // Add the new item to localStorage
        let items = JSON.parse(localStorage.getItem('items')) || [];
        items.push({ itemName, itemPrice, itemDescription, itemCategory, itemImageURL });
        localStorage.setItem('items', JSON.stringify(items));

        alert(`${itemName} has been added to your store.`);

        // Redirect to home page (file.html)
        window.location.href = "file.html";
    };
});

