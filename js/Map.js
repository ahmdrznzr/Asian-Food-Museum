document.addEventListener("DOMContentLoaded", () => {
    // Define narratives and subcategories
    const narratives = {
      time: ["Ancient", "Medieval", "Modern"],
      region: ["East Asia", "South Asia", "West Asia"],
      ingredients: ["Protein-based", "Plant-based", "Dairy-based"],
      meal: ["Appetizer", "Main Course", "Dessert"],
      preparation: ["Grilled", "Fried", "Stewed", "No-cook"],
      
    };
  
    // Define items for each narrative and subcategory
    const items = {
      time: {
        ancient: ["Chinese Hot Pot (火锅)", "Lebanese Kibbeh (كبة)", "Lebanese Filo Pastry (كنافة)", "Persian Noodle Soup (آش رشته)", "Persian Herb Stew (قرمه سبزی)", "Chinese Sour Soup with Beef Slices (酸汤肥牛)"],
        medieval: ["Lebanese Hummus (حمص)", "Chinese Peking Duck (北京烤鸭)", "Persian Barberry and Saffron Rice Cake with Chicken (تهچین مرغ)", "Persian Saffron Ice cream (بستنی سنتی)", "Pakistani Deep-fried Lentil Fritters (دہی بھلے چاٹ)", "Pakistani Chicken Pilaf (چکن بریانی", "Pakistani Mutton in Clay Pot (مٹن کُنا)", "Pakistani Semolina Halwa (سوجی کا حلوہ)", "Japanese Tempura (天婦羅)"],
        modern: ["Japanese Sukiyaki (すき焼き)", "Japanese Pork Bone Ramen (豚骨ラーメン)", "Japanese Rotation Sushi (回転寿司)", "Lebanese Meat wrap (شاورما)", "Chinese Coca-Cola Chicken Wings (可乐鸡翅)"],
      },
      region: {
        eastasia: ["Sushi", "Hot Pot"],
        southasia: ["Dal", "Tandoori Chicken"],
        middleeast: ["Shawarma", "Tabbouleh"],
      },
      ingredients: {
        proteinBased: ["Chinese Hot Pot (火锅)", "Lebanese Kibbeh (كبة)", "Persian Herb Stew (قرمه سبزی)", "Chinese Sour Soup with Beef Slices (酸汤肥牛)", "Chinese Peking Duck (北京烤鸭)", "Persian Barberry and Saffron Rice Cake with Chicken (تهچین مرغ)", "Pakistani Chicken Pilaf (چکن بریانی)", "Pakistani Mutton in Clay Pot (مٹن کُنا)", "Japanese Tempura (天婦羅)", "Japanese Sukiyaki (すき焼き)", "Japanese Pork Bone Ramen (豚骨ラーメン)", "Japanese Rotation Sushi (回転寿司)", "Lebanese Meat wrap (شاورما)", "Chinese Coca-Cola Chicken Wings (可乐鸡翅)"],
        plantBased: ["Chinese Hot Pot (火锅)", "Persian Noodle Soup (آش رشته)", "Lebanese Hummus (حمص)", "Pakistani Deep-fried Lentil Fritters (دہی بھلے چاٹ)", "Japanese Tempura (天婦羅)", "Japanese Rotation Sushi (回転寿司)"],
        dairyBased: ["Lebanese Filo Pastry (كنافة)", "Persian Saffron Ice cream (بستنی سنتی)", "Pakistani Semolina Halwa (سوجی کا حلوہ)"],
      },
      meal: {
        appetizer: ["Lebanese Kibbeh (كبة)", "Lebanese Filo Pastry (كنافة)", "Pakistani Deep-fried Lentil Fritters (دہی بھلے چاٹ)", "Japanese Tempura (天婦羅)", "Japanese Rotation Sushi (回転寿司)", "Chinese Coca-Cola Chicken Wings (可乐鸡翅)"],
        maincourse: ["Chinese Hot Pot (火锅)", "Lebanese Kibbeh (كبة)", "Lebanese Filo Pastry (كنافة)", "Persian Noodle Soup (آش رشته)", "Persian Herb Stew (قرمه سبزی)", "Chinese Sour Soup with Beef Slices (酸汤肥牛)", "Chinese Peking Duck (北京烤鸭)", "Persian Barberry and Saffron Rice Cake with Chicken (تهچین مرغ)", "Pakistani Deep-fried Lentil Fritters (دہی بھلے چاٹ)", "Pakistani Chicken Pilaf (چکن بریانی", "Pakistani Mutton in Clay Pot (مٹن کُنا)", "Japanese Tempura (天婦羅)","Japanese Sukiyaki (すき焼き)", "Japanese Pork Bone Ramen (豚骨ラーメン)", "Japanese Rotation Sushi (回転寿司)", "Lebanese Meat wrap (شاورما)"],
        dessert: ["Lebanese Filo Pastry (كنافة)", "Persian Saffron Ice cream (بستنی سنتی)",  "Pakistani Semolina Halwa (سوجی کا حلوہ)"],
      },
      preparation: {
        grilled: ["Lebanese Filo Pastry (كنافة)", "Chinese Peking Duck (北京烤鸭)", "Persian Barberry and Saffron Rice Cake with Chicken (تهچین مرغ)", "Lebanese Meat wrap (شاورما)", "Chinese Coca-Cola Chicken Wings (可乐鸡翅)"],
        fried: ["Lebanese Kibbeh (كبة)", "Pakistani Deep-fried Lentil Fritters (دہی بھلے چاٹ)", "Japanese Tempura (天婦羅)"],
        stewed: ["Chinese Hot Pot (火锅)", "Persian Noodle Soup (آش رشته)", "Persian Herb Stew (قرمه سبزی)", "Chinese Sour Soup with Beef Slices (酸汤肥牛)", "Pakistani Chicken Pilaf (چکن بریانی", "Pakistani Mutton in Clay Pot (مٹن کُنا)", "Pakistani Semolina Halwa (سوجی کا حلوہ)", "Japanese Sukiyaki (すき焼き)", "Japanese Pork Bone Ramen (豚骨ラーメン)"],
        noCook: ["Lebanese Hummus (حمص)", "Persian Saffron Ice cream (بستنی سنتی)", "Japanese Rotation Sushi (回転寿司)"],
      },

    };
  
    // Select DOM elements
    const narrativeButtons = document.querySelectorAll(".narrative-btn");
    const subcategoryContainer = document.getElementById("subcategory-container");
    const itemList = document.getElementById("item-list");
    const subcategoryTitle = document.getElemen
  