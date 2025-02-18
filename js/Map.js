document.addEventListener("DOMContentLoaded", () => {
    // Define narratives and subcategories
    const narratives = {
        time: ["Ancient", "Medieval", "Modern"],
        region: ["East Asia", "South Asia", "West Asia"],
        ingredients: ["Protein-based", "Plant-based", "Dairy-based"],
        meal: ["Appetizer", "Main Course", "Dessert"],
        preparation: ["Grilled", "Fried", "Stewed", "No-cook"],

    };

    // Define items, floor plans, and maps for each narrative and subcategory
    const contentData = {
        all: {
            all: {
                title: "All",
                items: ["Hot Pot", "Kibbeh", "Filo Pastry", "Noodle Soup", "Herb Stew", "Sour Soup with Beef Slices", "Hummus", "Peking Duck", "Barberry and Saffron Rice Cake with Chicken", "Saffron Ice cream", "Deep-fried Lentil Fritters", "Chicken Pilaf", "Mutton in Clay Pot", "Semolina Halwa", "Tempura", "Sukiyaki", "Pork Bone Ramen", "Rotation Sushi", "Meat wrap", "Coca-Cola Chicken Wings"],
                floorPlan: "images/Maps/03.PNG",
                map: "images/Maps/05.PNG",
            }
        },
        time: {
            ancient: {
                items: ["Hot Pot (火锅)", "Kibbeh (كبة)", "Filo Pastry (كنافة)", "Noodle Soup (آش رشته)", "Herb Stew (قرمه سبزی)", "Sour Soup with Beef Slices (酸汤肥牛)"],
                floorPlan: "images/Maps/13_floorplan_ancient.PNG",
                map: "images/Maps/12_map_ancient.PNG",
            },
            medieval: {
                items: ["Hummus (حمص)", "Peking Duck (北京烤鸭)", "Barberry and Saffron Rice Cake with Chicken (تهچین مرغ)", "Saffron Ice cream (بستنی سنتی)", "Deep-fried Lentil Fritters (دہی بھلے چاٹ)", "Chicken Pilaf (چکن بریانی)", "Mutton in Clay Pot (مٹن کُنا)", "Semolina Halwa (سوجی کا حلوہ)", "Tempura (天婦羅)"],
                floorPlan: "images/Maps/16_floorplan_medieval.png",
                map: "images/Maps/15_map_medieval.png",
            },
            modern: {
                items: ["Sukiyaki (すき焼き)", "Pork Bone Ramen (豚骨ラーメン)", "Rotation Sushi (回転寿司)", "Meat wrap (شاورما)", "Coca-Cola Chicken Wings (可乐鸡翅)"],
                floorPlan: "images/Maps/19_floorplan_modern.png",
                map: "images/Maps/18_map_modern.png",
            },
        },
        ingredients: {
            proteinBased: {
                items: ["Hot Pot (火锅)", "Kibbeh (كبة)", "Herb Stew (قرمه سبزی)", "Sour Soup with Beef Slices (酸汤肥牛)", "Peking Duck (北京烤鸭)", "Barberry and Saffron Rice Cake with Chicken (تهچین مرغ)", "Chicken Pilaf (چکن بریانی)", "Mutton in Clay Pot (مٹن کُنا)", "Tempura (天婦羅)", "Sukiyaki (すき焼き)", "Pork Bone Ramen (豚骨ラーメン)", "Rotation Sushi (回転寿司)", "Meat wrap (شاورما)", "Coca-Cola Chicken Wings (可乐鸡翅)"],
                floorPlan: "images/Maps/23_floorplan_proteinbased.png",
                map: "images/Maps/22_map_proteinbased.png",
            },
            plantBased: {
                items: ["Hot Pot (火锅)", "Noodle Soup (آش رشته)", "Hummus (حمص)", "Deep-fried Lentil Fritters (دہی بھلے چاٹ)", "Tempura (天婦羅)", "Rotation Sushi (回転寿司)"],
                floorPlan: "images/Maps/26_floorplan_plantbased.png",
                map: "images/Maps/25_map_plantbased.png",
            },
            dairyBased: {
                items: ["Filo Pastry (كنافة)", "Saffron Ice cream (بستنی سنتی)", "Semolina Halwa (سوجی کا حلوہ)"],
                floorPlan: "images/Maps/29_floorplan_dairybased.png",
                map: "images/Maps/28_map_dairybased.png",
            },
        },
        meal: {
            appetizer: {
                items: ["Kibbeh (كبة)", "Filo Pastry (كنافة)", "Deep-fried Lentil Fritters (دہی بھلے چاٹ)", "Tempura (天婦羅)", "Rotation Sushi (回転寿司)", "Coca-Cola Chicken Wings (可乐鸡翅)"],
                floorPlan: "images/Maps/43_floorplan_appetizer.png",
                map: "images/Maps/42_map_appetizer.png",
            },
            mainCourse: {
                items: ["Hot Pot (火锅)", "Kibbeh (كبة)", "Filo Pastry (كنافة)", "Noodle Soup (آش رشته)", "Herb Stew (قرمه سبزی)", "Sour Soup with Beef Slices (酸汤肥牛)", "Peking Duck (北京烤鸭)", "Barberry and Saffron Rice Cake with Chicken (تهچین مرغ)", "Deep-fried Lentil Fritters (دہی بھلے چاٹ)", "Chicken Pilaf (چکن بریانی)", "Mutton in Clay Pot (مٹن کُنا)", "Tempura (天婦羅)", "Sukiyaki (すき焼き)", "Pork Bone Ramen (豚骨ラーメン)", "Rotation Sushi (回転寿司)", "Meat wrap (شاورما)"],
                floorPlan: "images/Maps/46_floorplan_maincourse.png",
                map: "images/Maps/45_map_maincourse.png",
            },
            dessert: {
                items: ["Filo Pastry (كنافة)", "Saffron Ice cream (بستنی سنتی)", "Semolina Halwa (سوجی کا حلوہ)"],
                floorPlan: "images/Maps/49_floorplan_dessert.png",
                map: "images/Maps/48_map_dessert.png",
            },
        },
        preparation: {
            grilled: {
                items: ["Filo Pastry (كنافة)", "Peking Duck (北京烤鸭)", "Barberry and Saffron Rice Cake with Chicken (تهچین مرغ)", "Meat wrap (شاورما)", "Coca-Cola Chicken Wings (可乐鸡翅)"],
                floorPlan: "images/Maps/53_floorplan_grilled.png",
                map: "images/Maps/52_map_grilled.png",
            },
            fried: {
                items: ["Kibbeh (كبة)", "Deep-fried Lentil Fritters (دہی بھلے چاٹ)", "Tempura (天婦羅)"],
                floorPlan: "images/Maps/56_floorplan_fried.png",
                map: "images/Maps/55_map_fried.png",
            },
            stewed: {
                items: ["Hot Pot (火锅)", "Noodle Soup (آش رشته)", "Herb Stew (قرمه سبزی)", "Sour Soup with Beef Slices (酸汤肥牛)", "Chicken Pilaf (چکن بریانی", "Mutton in Clay Pot (مٹن کُنا)", "Semolina Halwa (سوجی کا حلوہ)", "Sukiyaki (すき焼き)", "Pork Bone Ramen (豚骨ラーメン)"],
                floorPlan: "images/Maps/59_floorplan_stewed.png",
                map: "images/Maps/58_map_stewed.png",
            },
            noCook: {
                items: ["Hummus (حمص)", "Saffron Ice cream (بستنی سنتی)", "Rotation Sushi (回転寿司)"],
                floorPlan: "images/Maps/62_floorplan_nocook.png",
                map: "images/Maps/61_map_nocook.png",
            },
        },
        region: {
            eastAsia: {
                items: ["Hot Pot (火锅)", "Sour Soup with Beef Slices (酸汤肥牛)", "Peking Duck (北京烤鸭)", "Tempura (天婦羅)", "Sukiyaki (すき焼き)", "Pork Bone Ramen (豚骨ラーメン)", "Rotation Sushi (回転寿司)", "Coca-Cola Chicken Wings (可乐鸡翅)"],
                floorPlan: "images/Maps/33_floorplan_eastasia.png",
                map: "images/Maps/32_map_eastasia.png",
            },
            southAsia: {
                items: ["Deep-fried Lentil Fritters (دہی بھلے چاٹ)", "Chicken Pilaf (چکن بریانی)", "Mutton in Clay Pot (مٹن کُنا)", "Semolina Halwa (سوجی کا حلوہ)"],
                floorPlan: "images/Maps/36_floorplan_southasia.png",
                map: "images/Maps/35_map_southasia.png",
            },
            westAsia: {
                items: ["Kibbeh (كبة)", "Filo Pastry (كنافة)", "Noodle Soup (آش رشته)", "Herb Stew (قرمه سبزی)", "Barberry and Saffron Rice Cake with Chicken (تهچین مرغ)", "Saffron Ice cream (بستنی سنتی)", "Meat wrap (شاورما)"],
                floorPlan: "images/Maps/39_floorplan_westasia.png",
                map: "images/Maps/38_map_westasia.png",
            },
        }
    };

    // Select DOM elements
    const narrativeButtons = document.querySelectorAll(".narrative-btn");
    const subcategoryContainer = document.getElementById("subcategory-container");
    const itemList = document.getElementById("item-list");
    const subcategoryTitle = document.getElementById("subcategory-title");
    const floorPlanImg = document.getElementById("floor-plan-img");
    const geoMapImg = document.getElementById("geographical-map-img");

    // Function to update subcategories dynamically
    function updateSubcategories(narrative) {
        const subcategories = Object.keys(contentData[narrative]);
        subcategoryContainer.innerHTML = ""; // Clear existing subcategories

         // If "All" is selected, don't show any subcategories
        if (narrative === "all") {
            subcategoryTitle.textContent = ""; // Clear subcategory title
            return;
        }

        subcategories.forEach((subcategory, index) => {
            const button = document.createElement("button");
            button.classList.add("subcategory-btn");
            button.textContent = contentData[narrative][subcategory].title;
            button.dataset.subcategory = subcategory; // Keep the exact key name
            subcategoryContainer.appendChild(button);

            // Set first subcategory as active by default
            if (index === 0)
                button.classList.add("active");


            // Add click event
            button.addEventListener("click", () => {
                document.querySelectorAll(".subcategory-btn").forEach((btn) =>
                    btn.classList.remove("active")
                );
                button.classList.add("active");
                updateContent(narrative, button.dataset.subcategory);
            });
        });
        // Automatically select and load the first subcategory
        if (subcategories.length > 0) {
            updateContent(narrative, subcategories[0]);
        }
    }

    // Function to update content dynamically (buttons, items, floor plan, maps)
    function updateContent(narrative, subcategory) {
        const currentData = contentData[narrative][subcategory];
        // Use the correct title from the data instead of modifying the subcategory name
        subcategoryTitle.textContent = currentData.title;;

        // Update item list
        itemList.classList.remove("show"); // Remove animation before updating
        itemList.innerHTML = ""; // Clear previous items

        setTimeout(() => {
            currentData.items.forEach((item) => {
                const li = document.createElement("li");
                const link = document.createElement("a");
                link.href = `item.html?itemName=${formatDishName(item)}`;
                link.textContent = item;
                link.className = "active";
                li.appendChild(link);
                itemList.appendChild(li);
            });

            itemList.classList.add("show"); // Add fade-in effect after updating
        }, 50);


        // Remove animation before updating images
        floorPlanImg.classList.remove("show");
        geoMapImg.classList.remove("show");

        // Update images with a slight delay for smooth transition
        setTimeout(() => {
            floorPlanImg.src = currentData.floorPlan;
            geoMapImg.src = currentData.map;

            floorPlanImg.classList.add("show");
            geoMapImg.classList.add("show");
        }, 50);

    }

    // Add event listeners to narrative buttons
    narrativeButtons.forEach((button) => {
        button.addEventListener("click", () => {
            narrativeButtons.forEach((btn) => btn.classList.remove("active"));
            button.classList.add("active");

            const narrative = button.dataset.narrative;
            updateSubcategories(narrative);
            // If "All" is selected, manually call updateContent to show all items
            if (narrative === "all") {
                updateContent("all", "all");
            }
        });
    });

    function formatDishName(name) {
        return name
            .replace(/\s*\(.*?\)/g, '') 
            .replace(/\s(.)/g, (match, p1) => p1.toUpperCase())
            .replace(/^\w/, (match) => match.toLowerCase());
    }

    // Initialize default state
    document.querySelector(".narrative-btn[data-narrative='all']").classList.add("active");
    updateSubcategories("all");
    updateContent("all", "all");
});