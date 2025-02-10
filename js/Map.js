document.addEventListener("DOMContentLoaded", () => {
    // Define narratives and subcategories
    const narratives = {
        time: ["Ancient", "Medieval", "Modern"],
        region: ["East Asia", "South Asia", "West Asia"],
        ingredients: ["Protein-based", "Plant-based", "Dairy-based"],
        meal: ["Appetizer", "Main Course", "Dessert"],
        preparation: ["Grilled", "Fried", "Stewed", "No-cook"],

    };
    // define a place to start in your data
    //   "meta": {
    //     "startWith": 0,
    //     "startNarrative": "Region",
    //     "startValue": "West Asia",
    //     "narratives": ["Region", "Meal", "Ingredients", "Preparation", "Time"]
    // },

    // Define items, floor plans, and maps for each narrative and subcategory
    const contentData = {
        time: {
            ancient: {
                items: ["Chinese Hot Pot (火锅)", "Lebanese Kibbeh (كبة)", "Lebanese Filo Pastry (كنافة)", "Persian Noodle Soup (آش رشته)", "Persian Herb Stew (قرمه سبزی)", "Chinese Sour Soup with Beef Slices (酸汤肥牛)"],
                floorPlan: "images/Maps/Slide13.PNG",
                map: "images/Maps/Slide14.PNG",
            },
            medieval: {
                items: ["Lebanese Hummus (حمص)", "Chinese Peking Duck (北京烤鸭)", "Persian Barberry and Saffron Rice Cake with Chicken (تهچین مرغ)", "Persian Saffron Ice cream (بستنی سنتی)", "Pakistani Deep-fried Lentil Fritters (دہی بھلے چاٹ)", "Pakistani Chicken Pilaf (چکن بریانی", "Pakistani Mutton in Clay Pot (مٹن کُنا)", "Pakistani Semolina Halwa (سوجی کا حلوہ)", "Japanese Tempura (天婦羅)"],
                floorPlan: "floor-medieval.png",
                map: "map-medieval.png",
            },
            modern: {
                items: ["Japanese Sukiyaki (すき焼き)", "Japanese Pork Bone Ramen (豚骨ラーメン)", "Japanese Rotation Sushi (回転寿司)", "Lebanese Meat wrap (شاورما)", "Chinese Coca-Cola Chicken Wings (可乐鸡翅)"],
                floorPlan: "floor-modern.png",
                map: "map-modern.png",
            },
        },
        ingredients: {
            proteinBased: {
                items: ["Chinese Hot Pot (火锅)", "Lebanese Kibbeh (كبة)", "Persian Herb Stew (قرمه سبزی)", "Chinese Sour Soup with Beef Slices (酸汤肥牛)", "Chinese Peking Duck (北京烤鸭)", "Persian Barberry and Saffron Rice Cake with Chicken (تهچین مرغ)", "Pakistani Chicken Pilaf (چکن بریانی)", "Pakistani Mutton in Clay Pot (مٹن کُنا)", "Japanese Tempura (天婦羅)", "Japanese Sukiyaki (すき焼き)", "Japanese Pork Bone Ramen (豚骨ラーメン)", "Japanese Rotation Sushi (回転寿司)", "Lebanese Meat wrap (شاورما)", "Chinese Coca-Cola Chicken Wings (可乐鸡翅)"],
                floorPlan: "floorplan_proteinbased.png",
                map: "map_proteinbased.png",
            },
            plantBased: {
                items: ["Chinese Hot Pot (火锅)", "Persian Noodle Soup (آش رشته)", "Lebanese Hummus (حمص)", "Pakistani Deep-fried Lentil Fritters (دہی بھلے چاٹ)", "Japanese Tempura (天婦羅)", "Japanese Rotation Sushi (回転寿司)"],
                floorPlan: "floorplan_plantbased.png",
                map: "map_plantbased.png",
            },
            dairyBased: {
                items: ["Lebanese Filo Pastry (كنافة)", "Persian Saffron Ice cream (بستنی سنتی)", "Pakistani Semolina Halwa (سوجی کا حلوہ)"],
                floorPlan: "floorplan_dairybased.png",
                map: "map_dairybased.png",
            },
        },
        meal: {
            appetizer: {
                items: ["Lebanese Kibbeh (كبة)", "Lebanese Filo Pastry (كنافة)", "Pakistani Deep-fried Lentil Fritters (دہی بھلے چاٹ)", "Japanese Tempura (天婦羅)", "Japanese Rotation Sushi (回転寿司)", "Chinese Coca-Cola Chicken Wings (可乐鸡翅)"],
                floorPlan: "floorplan_appetizer.png",
                map: "map_appetizer.png",
            },
            mainCourse: {
                items: ["Chinese Hot Pot (火锅)", "Lebanese Kibbeh (كبة)", "Lebanese Filo Pastry (كنافة)", "Persian Noodle Soup (آش رشته)", "Persian Herb Stew (قرمه سبزی)", "Chinese Sour Soup with Beef Slices (酸汤肥牛)", "Chinese Peking Duck (北京烤鸭)", "Persian Barberry and Saffron Rice Cake with Chicken (تهچین مرغ)", "Pakistani Deep-fried Lentil Fritters (دہی بھلے چاٹ)", "Pakistani Chicken Pilaf (چکن بریانی", "Pakistani Mutton in Clay Pot (مٹن کُنا)", "Japanese Tempura (天婦羅)", "Japanese Sukiyaki (すき焼き)", "Japanese Pork Bone Ramen (豚骨ラーメン)", "Japanese Rotation Sushi (回転寿司)", "Lebanese Meat wrap (شاورما)"],
                floorPlan: "floorplan_maincourse.png",
                map: "map_maincourse.png",
            },
            dessert: {
                items: ["Lebanese Filo Pastry (كنافة)", "Persian Saffron Ice cream (بستنی سنتی)", "Pakistani Semolina Halwa (سوجی کا حلوہ)"],
                floorPlan: "floorplan_dessert.png",
                map: "map_dessert.png",
            },
        },
        preparation: {
            grilled: {
                items: ["Lebanese Filo Pastry (كنافة)", "Chinese Peking Duck (北京烤鸭)", "Persian Barberry and Saffron Rice Cake with Chicken (تهچین مرغ)", "Lebanese Meat wrap (شاورما)", "Chinese Coca-Cola Chicken Wings (可乐鸡翅)"],
                floorPlan: "floorplan_grilled.png",
                map: "map_grilled.png",
            },
            fried: {
                items: ["Lebanese Kibbeh (كبة)", "Pakistani Deep-fried Lentil Fritters (دہی بھلے چاٹ)", "Japanese Tempura (天婦羅)"],
                floorPlan: "floorplan_fried.png",
                map: "map_fried.png",
            },
            stewed: {
                items: ["Chinese Hot Pot (火锅)", "Persian Noodle Soup (آش رشته)", "Persian Herb Stew (قرمه سبزی)", "Chinese Sour Soup with Beef Slices (酸汤肥牛)", "Pakistani Chicken Pilaf (چکن بریانی", "Pakistani Mutton in Clay Pot (مٹن کُنا)", "Pakistani Semolina Halwa (سوجی کا حلوہ)", "Japanese Sukiyaki (すき焼き)", "Japanese Pork Bone Ramen (豚骨ラーメン)"],
                floorPlan: "floorplan_stewed.png",
                map: "map_stewed.png",
            },
            noCook: {
                items: ["Lebanese Hummus (حمص)", "Persian Saffron Ice cream (بستنی سنتی)", "Japanese Rotation Sushi (回転寿司)"],
                floorPlan: "floorplan_nocook.png",
                map: "map_nocook.png",
            },
        },
        region: {
            eastAsia: {
                items: ["Chinese Hot Pot (火锅)", "Chinese Sour Soup with Beef Slices (酸汤肥牛)", "Chinese Peking Duck (北京烤鸭", "Japanese Tempura (天婦羅)", "Japanese Sukiyaki (すき焼き)", "Japanese Pork Bone Ramen (豚骨ラーメン)", "Japanese Rotation Sushi (回転寿司)", "Chinese Coca-Cola Chicken Wings (可乐鸡翅)"],
                floorPlan: "floorplan_eastasia.png",
                map: "map_eastasia.png",
            },
            southAsia: {
                items: ["Pakistani Deep-fried Lentil Fritters (دہی بھلے چاٹ)", "Pakistani Chicken Pilaf (چکن بریانی", "Pakistani Mutton in Clay Pot (مٹن کُنا)", "Pakistani Semolina Halwa (سوجی کا حلوہ)"],
                floorPlan: "floorplan_southasia.png",
                map: "map_southasia.png",
            },
            westAsia: {
                items: ["Lebanese Kibbeh (كبة)", "Lebanese Filo Pastry (كنافة)", "Persian Noodle Soup (آش رشته)", "Persian Herb Stew (قرمه سبزی)", "Persian Barberry and Saffron Rice Cake with Chicken (تهچین مرغ)", "Persian Saffron Ice cream (بستنی سنتی)", "Lebanese Meat wrap (شاورما)"],
                floorPlan: "floorplan_westasia.png",
                map: "map_westasia.png",
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

        subcategories.forEach((subcategory, index) => {
            const button = document.createElement("button");
            button.classList.add("subcategory-btn");
            button.textContent = subcategory;
            button.dataset.subcategory = subcategory.toLowerCase().replace(/\s+/g, "");
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
    }

    // Function to update content dynamically (buttons, items, floor plan, maps)
    function updateContent(narrative, subcategory) {
        const currentData = contentData[narrative][subcategory];

        // Update subcategory title
        subcategoryTitle.textContent =
            subcategory.charAt(0).toUpperCase() + subcategory.slice(1);

        // Update item list
        itemList.innerHTML = ""; // Clear previous items
        currentData.items.forEach((item) => {
            const li = document.createElement("li");
            const link = document.createElement("a");
            link.href = "#"; // Make all items active
            link.textContent = item;
            link.className = "active";
            li.appendChild(link);
            itemList.appendChild(li);
        });

        // Update floor plan and map
        floorPlanImg.src = currentData.floorPlan;
        geoMapImg.src = currentData.map;
    }

    // Add event listeners to narrative buttons
    narrativeButtons.forEach((button) => {
        button.addEventListener("click", () => {
            narrativeButtons.forEach((btn) => btn.classList.remove("active"));
            button.classList.add("active");

            const narrative = button.dataset.narrative;
            updateSubcategories(narrative);
        });
    });

    // Initialize default state
    updateSubcategories("time");
});