// main.js
document.addEventListener("DOMContentLoaded", () => {
    let StandardPortion = 2;
    let Dinners = [];
    let AvailableRecipes = new Set(Object.keys(Recipes));
    let Ingredients = {};

    // Tracks the dragged element
    let draggedElement = null;

    // Allows for the adding, removal and updating of the dinner portions
    const addDinner = (dinner) => {
        Dinners.push({ dinner: dinner, portions: StandardPortion });
        AvailableRecipes.delete(dinner);
        updateDinnersContent();
        updateIngredients();
    };

    const removeDinner = (dinner) => {
        Dinners = Dinners.filter((d) => d.dinner !== dinner);
        AvailableRecipes.add(dinner);
        updateDinnersContent();
        updateIngredients();
    };

    const addRandomDinner = () => {
        if (AvailableRecipes.size > 0) {
            const arrayFromSet = Array.from(AvailableRecipes);
            const randomDinner =
                arrayFromSet[Math.floor(Math.random() * arrayFromSet.length)];
            addDinner(randomDinner);
        } else {
            alert("Ingen flere oppskrifter å legge til");
        }
    };

    const addAllDinners = () => {
        if (AvailableRecipes.size > 0) {
            const arrayFromSet = Array.from(AvailableRecipes);
            for (let i = 0; i < arrayFromSet.length; i++) {
                addDinner(arrayFromSet[i]);
            }
        } else {
            alert("Ingen flere oppskrifter å legge til");
        }
    };

    const incrementDinnerPortion = (dinner, increment) => {
        const dinnerObject = Dinners.find((d) => d.dinner === dinner);
        if (dinnerObject && dinnerObject.portions + increment >= 0) {
            dinnerObject.portions += increment;
            updateDinnersContent();
            updateIngredients();
        }
    };

    // Pack sizes for common grocery ingredients (in the same unit as used in recipes)
    const PACK_SIZES = {
        "stk egg": 6,
        "g spagetti": 1000,
        "g pasta": 500,
        "g tagliatelle": 250,
        "g rigatoni": 500,
        "g fusilli": 500,
        "g penne pasta": 500,
        "g pastaskruer": 500,
        "g nudler": 200,
        "g eggnudler": 200,
        "g glassnudler": 100,
        "g ramennudler": 100,
        "dl melk": 10,
        "l melk": 1,
        "dl kremfløte": 3,
        "dl matfløte": 3,
        "dl fløte": 3,
        "dl creme fraiche": 3,
        "g ris": 500,
        "g ukokt jasmin ris": 500,
        "g basmatiris": 500,
        "g kjøttdeig": 400,
        "g bacon": 150,
        "g parmesan": 100,
        "g sopp": 250,
        "g sjampinjong": 250,
        "g spinat": 200,
        "g frisk spinat": 200,
        "g laks": 500,
        "g laksefilet": 500,
        "g kyllingfilet": 500,
        "g Kyllingfillet": 500,
        "g fetaost": 200,
        "g mozzarellaost": 125,
    };

    // Returns top 2 suggested dinners scored by ingredient overlap minus pack waste penalty.
    // Overlap score: fraction of candidate's ingredients already in the current dinner list.
    // Pack penalty: for each ingredient with a known pack size, measures how much waste
    //   increases (as a fraction of one pack) when this recipe is added. Negative delta
    //   (filling a partial pack) reduces the penalty, rewarding recipes that complete packs.
    // Both terms are normalized by total ingredient count so they're directly comparable.
    const getSuggestedDinners = () => {
        if (Dinners.length === 0 || AvailableRecipes.size === 0) return [];

        const currentIngredientKeys = new Set();
        const currentIngredientAmounts = {};
        Dinners.forEach((dinnerItem) => {
            Object.entries(Recipes[dinnerItem.dinner].Ingredients).forEach(
                ([key, amount]) => {
                    currentIngredientKeys.add(key);
                    currentIngredientAmounts[key] =
                        (currentIngredientAmounts[key] || 0) +
                        amount * dinnerItem.portions;
                },
            );
        });

        const scores = [];
        AvailableRecipes.forEach((recipeName) => {
            const recipeEntries = Object.entries(
                Recipes[recipeName].Ingredients,
            );
            const totalCount = recipeEntries.length;
            if (totalCount === 0) return;

            let overlapping = 0;
            let penaltySum = 0;

            recipeEntries.forEach(([ing, amount]) => {
                if (currentIngredientKeys.has(ing)) overlapping++;

                const packSize = PACK_SIZES[ing];
                if (!packSize) return;

                const addedAmount = amount * StandardPortion;
                const currentAmount = currentIngredientAmounts[ing] || 0;
                const newTotal = currentAmount + addedAmount;

                const wasteAfter =
                    (Math.ceil(newTotal / packSize) * packSize - newTotal) /
                    packSize;
                const wasteBefore =
                    currentAmount > 0
                        ? (Math.ceil(currentAmount / packSize) * packSize -
                              currentAmount) /
                          packSize
                        : 0;

                // Positive delta = more waste added → penalty. Negative delta = filling a pack gap → no penalty.
                penaltySum += Math.max(0, wasteAfter - wasteBefore);
            });

            const overlapScore = overlapping / totalCount;
            const penaltyScore = penaltySum / totalCount;
            scores.push({
                name: recipeName,
                score: overlapScore - penaltyScore,
            });
        });

        scores.sort((a, b) => b.score - a.score);
        return scores.slice(0, 2).map((s) => s.name);
    };

    // Updates the dinners section content and the ingredients section content
    const updateDinnersContent = () => {
        const dinnersContent = document.getElementById("dinnersContent");
        dinnersContent.innerHTML = "";

        Dinners.forEach((dinnerItem, index) => {
            const dinnerCard = document.createElement("div");
            dinnerCard.className = "dinner-card";
            dinnerCard.draggable = true;
            dinnerCard.addEventListener("dragstart", handleDragStart);
            dinnerCard.addEventListener("dragover", handleDragOver);
            dinnerCard.addEventListener("drop", handleDrop);
            dinnerCard.addEventListener("dragend", handleDragEnd);

            const cardTop = document.createElement("div");
            cardTop.className = "card-top";
            const dinnerText = document.createElement("div");
            dinnerText.className = "dinner-text";
            dinnerText.textContent = `${index + 1}. ${dinnerItem.dinner}`;
            const crossButton = document.createElement("i");
            crossButton.className = "fas fa-circle-xmark cross-button";
            crossButton.addEventListener("click", () =>
                removeDinner(dinnerItem.dinner),
            );

            const cardBottom = document.createElement("div");
            cardBottom.className = "card-bottom";
            const bowlIcon = document.createElement("i");
            bowlIcon.className = "fa-solid fa-bowl-food bowl-icon";
            const portionsDiv = document.createElement("div");
            portionsDiv.className = "portions";
            portionsDiv.textContent = dinnerItem.portions;
            const minusButton = document.createElement("i");
            minusButton.className = "fas fa-circle-minus fa-xl blue-button";
            minusButton.addEventListener("click", () =>
                incrementDinnerPortion(dinnerItem.dinner, -1),
            );
            const plusButton = document.createElement("i");
            plusButton.className = "fas fa-circle-plus fa-xl blue-button";
            plusButton.addEventListener("click", () =>
                incrementDinnerPortion(dinnerItem.dinner, 1),
            );

            cardTop.appendChild(dinnerText);
            cardTop.appendChild(crossButton);
            cardBottom.appendChild(bowlIcon);
            cardBottom.appendChild(portionsDiv);
            cardBottom.appendChild(minusButton);
            cardBottom.appendChild(plusButton);
            dinnerCard.appendChild(cardTop);
            dinnerCard.appendChild(cardBottom);
            dinnersContent.appendChild(dinnerCard);
        });

        getSuggestedDinners().forEach((dinnerName) => {
            const suggestionCard = document.createElement("div");
            suggestionCard.className = "dinner-card suggestion-card";
            suggestionCard.addEventListener("click", () =>
                addDinner(dinnerName),
            );

            const cardTop = document.createElement("div");
            cardTop.className = "card-top";
            const dinnerText = document.createElement("div");
            dinnerText.className = "dinner-text";
            dinnerText.textContent = dinnerName;
            const suggestionLabel = document.createElement("span");
            suggestionLabel.className = "suggestion-label";
            suggestionLabel.textContent = "Forslag";

            cardTop.appendChild(dinnerText);
            cardTop.appendChild(suggestionLabel);
            suggestionCard.appendChild(cardTop);
            dinnersContent.appendChild(suggestionCard);
        });
    };

    //  Updates the "Ingredients" content with notepad lines containing the Dinners ingredients
    function updateIngredientsContent() {
        const ingredientsContent =
            document.getElementById("ingredientsContent");
        ingredientsContent.innerHTML = "";

        const ingredientKeys = Object.keys(Ingredients).sort(
            (a, b) => SortAsciiWeight(a) - SortAsciiWeight(b),
        );
        ingredientKeys.forEach((ingredient) => {
            const ingredientItem = document.createElement("div");
            ingredientItem.className = "ingredient";
            ingredientItem.textContent = `${
                Math.round(Ingredients[ingredient] * 100) / 100
            } ${ingredient}`;
            ingredientsContent.appendChild(ingredientItem);
        });
    }

    // Updates Ingredients dictionary to be up to date with the dinners and portion state
    function updateIngredients() {
        Ingredients = {};

        Dinners.forEach((dinnerItem) => {
            const dinnerIngredients = Recipes[dinnerItem.dinner]["Ingredients"];
            for (const [ingredient, amount] of Object.entries(
                dinnerIngredients,
            )) {
                if (Ingredients.hasOwnProperty(ingredient)) {
                    Ingredients[ingredient] +=
                        Math.round(amount * dinnerItem.portions * 100) / 100;
                } else {
                    Ingredients[ingredient] =
                        Math.round(amount * dinnerItem.portions * 100) / 100;
                }
            }
        });

        // Removes ingredients with zero quantity
        Object.keys(Ingredients).forEach((key) => {
            if (Ingredients[key] === 0) {
                delete Ingredients[key];
            }
        });
        updateIngredientsContent();
    }

    // Functions allowing drag and drop of dinners
    function handleDragStart(e) {
        draggedElement = this;
        e.dataTransfer.effectAllowed = "move";
        e.dataTransfer.setData("text", this.innerHTML);
    }

    let scrollInterval = null;
    function handleDragOver(e) {
        e.preventDefault();

        const dinnersContent = document.getElementById("dinnersContent");
        const scrollThreshold = 40;
        const scrollSpeed = 20;

        const rect = dinnersContent.getBoundingClientRect();
        const isNearTop = e.clientY < rect.top + scrollThreshold;
        const isNearBottom = e.clientY > rect.bottom - scrollThreshold;
        if (isNearTop && !scrollInterval) {
            scrollInterval = setInterval(() => {
                dinnersContent.scrollBy({
                    top: -scrollSpeed,
                    behavior: "smooth",
                });
            }, 50);
        }

        if (isNearBottom && !scrollInterval) {
            scrollInterval = setInterval(() => {
                dinnersContent.scrollBy({
                    top: scrollSpeed,
                    behavior: "smooth",
                });
            }, 50);
        }

        if (!isNearTop && !isNearBottom && scrollInterval) {
            clearInterval(scrollInterval);
            scrollInterval = null;
        }
    }

    function handleDrop(e) {
        e.preventDefault();

        clearInterval(scrollInterval);
        scrollInterval = null;

        if (draggedElement !== this) {
            // Identify the index of both source and target
            let sourceIndex = Array.from(dinnersContent.children).indexOf(
                draggedElement,
            );
            let targetIndex = Array.from(dinnersContent.children).indexOf(this);

            // Swap dinner objects in the array
            [Dinners[sourceIndex], Dinners[targetIndex]] = [
                Dinners[targetIndex],
                Dinners[sourceIndex],
            ];

            // Update the display to reflect the new swapped array state
            updateDinnersContent();
            updateIngredients();
        }
    }

    function handleDragEnd() {
        clearInterval(scrollInterval);
        scrollInterval = null;

        draggedElement = null; // Reset the dragged element
    }

    // Functions used for sorting the ingredients by quantity measurement (eg 'g', 'stk', 'ts', etc)
    function GetAsciiNumber(character) {
        return character.charCodeAt(0);
    }

    function GetMeasurementAsciiWeight(measurementString) {
        let weight = 0;
        for (let i = 0; i < measurementString.length; i++) {
            weight += GetAsciiNumber(measurementString[i]);
        }

        return weight;
    }

    function SortAsciiWeight(ingredientString) {
        const ingredientParsed = ingredientString.split(/(\s)/);
        return GetMeasurementAsciiWeight(ingredientParsed[0]);
    }

    // Function allowing for the "sharing" of the ingredients list with accompanying recipes in the state's order
    function shareTextToNotes(text) {
        if (navigator.share) {
            navigator
                .share({ text: text })
                .then(() => console.log("Successfully shared the text."))
                .catch((error) => console.error("Error sharing:", error));
        } else {
            alert(
                "Deling av handlelisten er ikke støttet av nettleseren, prøv en annen.",
            );
        }
    }

    // Builds the text that contains the shopping list (all ingredients), the dinners sequentially ordered (with their ingredients and recipe)
    // So that the state's dinner plan can be added to notes, or shared with others
    function handleShareClick() {
        let shoppingList = "Handleliste\n\n";
        for (const ingredient in Ingredients) {
            const amount = Ingredients[ingredient];
            shoppingList += `${Math.round(amount * 100) / 100} ${ingredient}\n`;
        }

        shoppingList += "\n\n\n";
        Dinners.forEach((dinnerItem, index) => {
            let dinnerIngredients = "Ingredienser:\n";
            Object.entries(Recipes[dinnerItem.dinner]["Ingredients"]).forEach(
                ([ingredient, qty]) => {
                    dinnerIngredients += `${
                        Math.round(qty * dinnerItem.portions * 100) / 100
                    } ${ingredient}\n`;
                },
            );
            shoppingList += `Middag ${index + 1}: ${
                dinnerItem.dinner
            }\n${dinnerIngredients}\n${Recipes[dinnerItem.dinner]["Recipe"]}\n\n`;
        });

        shareTextToNotes(shoppingList);
    }

    // Adds event listeners to the main buttons for the website, for adding dinners, and for sharing of the shopping list and recipes selected
    document
        .getElementById("addRandomDinnerButton")
        .addEventListener("click", addRandomDinner);
    document
        .getElementById("addAllDinnersButton")
        .addEventListener("click", addAllDinners);
    document
        .getElementById("shareButton")
        .addEventListener("click", handleShareClick);

    // Initial population of the content
    updateDinnersContent();
    updateIngredients();
});
