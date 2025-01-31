document.addEventListener("DOMContentLoaded", async function() {
    let currentIndex = 0;
    let items = [];

    // Fetch JSON data
    async function fetchItems() {
        try {
            const response = await fetch("../data/items.json");
            items = await response.json();
            if (items.length > 0) {
                displayItem(currentIndex);
            }
        } catch (error) {
            console.error("Error loading items:", error);
        }
    }

    // Display item data in HTML
    function displayItem(index) {
        if (index < 0 || index >= items.length) return;
        let item = items[index];
        document.getElementById("item-heading").textContent = item.itemName;
        document.getElementById("item-img").innerHTML = `<img src="${item.image}" alt="${item.name}">`;
        document.getElementById("reg-name").textContent = item.region;
        document.getElementById("date-name").textContent = item.date;
        document.getElementById("meal-name").textContent = item.meal;
        document.getElementById("ingredient-name").textContent = item.ingredient;
        document.getElementById("prep-name").textContent = item.preparation;
        document.getElementById("shortInfo").textContent = item.shortDesc;
        document.getElementById("longerInfo").textContent = item.longDesc;

        document.getElementById("longerInfo").style.display = "none";
        document.getElementById("shortInfo").style.display = "block";
    }

    // Event listeners for navigation
    document.querySelector(".next-btn").addEventListener("click", function(event) {
        event.preventDefault();
        if (currentIndex < items.length - 1) {
            currentIndex++;
            displayItem(currentIndex);
        }
    });

    document.querySelector(".previous-btn").addEventListener("click", function(event) {
        event.preventDefault();
        if (currentIndex > 0) {
            currentIndex--;
            displayItem(currentIndex);
        }
    });

    // Toggle description
    document.getElementById("moreBtn").addEventListener("click", function() {
        document.getElementById("shortInfo").style.display = "none";
        document.getElementById("longerInfo").style.display = "block";
    });

    document.getElementById("lessBtn").addEventListener("click", function() {
        document.getElementById("shortInfo").style.display = "block";
        document.getElementById("longerInfo").style.display = "none";
    });

    fetchItems();
});