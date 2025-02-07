document.addEventListener("DOMContentLoaded", async function() {
    let currentIndex = 0;
    let items = [];

    // Fetch JSON data
    async function fetchItems() {
        try {
            const response = await fetch("../data/items.json");
            const jsonData = await response.json();
            items = jsonData.items;
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
        document.getElementById("item-heading").innerHTML = item.itemName;
        // document.getElementById("item-img").innerHTML = `<img src="${item.image}" alt="${item.name}">`;
        document.getElementById("reg-name").innerHTML = item.info.Region;
        document.getElementById("date-name").innerHTML = item.info.Date;
        document.getElementById("meal-name").innerHTML = item.info.Meal;
        document.getElementById("ingredient-name").innerHTML = item.info.Ingredient;
        document.getElementById("prep-name").innerHTML = item.info.preparation;
        document.getElementById("shortInfo").innerHTML = item.shortDesc;
        document.getElementById("longerInfo").innerHTML = item.longDesc;
        document.getElementById("longerInfo").style.display = "none";
        document.getElementById("shortInfo").style.display = "block";

        // Reset buttons when switching items
        document.getElementById("moreBtn").innerText = "Tell Me More"; // Ensure correct button text
        document.getElementById("moreBtn").style.display = "block"; // Ensure "Tell Me More" is visible
        document.getElementById("lessBtn").style.display = "none"; // Hide "Tell Me Less"

        isShowingFullDescription = false; // Reset description state

    }

    // Event listeners for navigation
    // next item button
    document.querySelector(".next-btn").addEventListener("click", function(event) {
        event.preventDefault();
        if (currentIndex < items.length - 1) {
            currentIndex++;
            displayItem(currentIndex);
        }
    });
    // previous button item
    document.querySelector(".previous-btn").addEventListener("click", function(event) {
        event.preventDefault();
        if (currentIndex > 0) {
            currentIndex--;
            displayItem(currentIndex);
        }
    });

    // Toggle description
    let isShowingFullDescription = false;
    //show more information from JSON file
    document.getElementById("moreBtn").addEventListener("click", async function() {
        const item = items[currentIndex]; // Ensure you get the current item
        const descriptionElement = document.getElementById("longerInfo");
        if (item) {
            try {
                if (!isShowingFullDescription && item.longerDesc) {
                    // Load the longer description
                    const response = await fetch(item.longerDesc);
                    if (response.ok) {
                        const content = await response.text();
                        descriptionElement.innerHTML = content;
                        document.getElementById("shortInfo").style.display = "none";
                        descriptionElement.style.display = "block";
                        document.getElementById("moreBtn").innerText = "Tell Me Even More";
                        document.getElementById("lessBtn").style.display = "block";
                        isShowingFullDescription = true;
                    } else {
                        console.error(`Failed to load: ${item.longerDesc}`);
                    }
                } else if (item.fullDesc) {
                    // Load the full description of the item
                    const response = await fetch(item.fullDesc);
                    if (response.ok) {
                        const content = await response.text();
                        descriptionElement.innerHTML = content;
                        descriptionElement.style.display = "block";
                        document.getElementById("moreBtn").style.display = "none";
                    } else {
                        console.error(`Failed to load: ${item.fullDesc}`);
                    }
                }
            } catch (error) {
                console.error("Error fetching description:", error);
            }
        }
    });

    //less button 
    document.getElementById("lessBtn").addEventListener("click", function() {
        const descriptionElement = document.getElementById("longerInfo");
        const shortInfoElement = document.getElementById("shortInfo");
        isShowingFullDescription = false;
        // Return to the short description
        descriptionElement.style.display = "none";
        shortInfoElement.style.display = "block";
        document.getElementById("lessBtn").style.display = "block";
        document.getElementById("moreBtn").style.display = "block";
        document.getElementById("moreBtn").innerHTML = "Tell Me More";

    });

    //fetch data on the item page
    fetchItems();
});