// main.js
document.addEventListener('DOMContentLoaded', () => {
    let StandardPortion = 4;
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
        Dinners = Dinners.filter(d => d.dinner !== dinner);
        AvailableRecipes.add(dinner);
        updateDinnersContent();
        updateIngredients();
    };

    const addRandomDinner = () => {
        if (AvailableRecipes.size > 0) {
            const arrayFromSet = Array.from(AvailableRecipes);
            const randomDinner = arrayFromSet[Math.floor(Math.random() * arrayFromSet.length)];
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
        const dinnerObject = Dinners.find(d => d.dinner === dinner);
        if (dinnerObject && (dinnerObject.portions + increment >= 0)) {
            dinnerObject.portions += increment;
            updateDinnersContent();
            updateIngredients();
        }
    };


    // Updates the dinners section content and the ingredients section content
    const updateDinnersContent = () => {
        const dinnersContent = document.getElementById('dinnersContent');
        dinnersContent.innerHTML = '';

        Dinners.forEach((dinnerItem, index) => {
            const dinnerCard = document.createElement('div');
            dinnerCard.className = 'dinner-card';
            dinnerCard.draggable = true;
            dinnerCard.addEventListener('dragstart', handleDragStart);
            dinnerCard.addEventListener('dragover', handleDragOver);
            dinnerCard.addEventListener('drop', handleDrop);
            dinnerCard.addEventListener('dragend', handleDragEnd);

            const cardTop = document.createElement('div');
            cardTop.className = 'card-top';
            const dinnerText = document.createElement('div');
            dinnerText.className = 'dinner-text';
            dinnerText.textContent = `${index + 1}. ${dinnerItem.dinner}`;
            const crossButton = document.createElement('i');
            crossButton.className = 'fas fa-circle-xmark cross-button';
            crossButton.addEventListener('click', () => removeDinner(dinnerItem.dinner));

            const cardBottom = document.createElement('div');
            cardBottom.className = 'card-bottom';
            const portionsDiv = document.createElement('div');
            portionsDiv.className = 'portions';
            portionsDiv.textContent = dinnerItem.portions;
            const minusButton = document.createElement('i');
            minusButton.className = 'fas fa-circle-minus fa-xl blue-button';
            minusButton.addEventListener('click', () => incrementDinnerPortion(dinnerItem.dinner, -1));
            const plusButton = document.createElement('i');
            plusButton.className = 'fas fa-circle-plus fa-xl blue-button';
            plusButton.addEventListener('click', () => incrementDinnerPortion(dinnerItem.dinner, 1));

            cardTop.appendChild(dinnerText);
            cardTop.appendChild(crossButton);
            cardBottom.appendChild(portionsDiv);
            cardBottom.appendChild(minusButton);
            cardBottom.appendChild(plusButton);
            dinnerCard.appendChild(cardTop);
            dinnerCard.appendChild(cardBottom);
            dinnersContent.appendChild(dinnerCard);
        });
    };


    //  Updates the "Ingredients" content with notepad lines containing the Dinners ingredients
    function updateIngredientsContent() {
        const ingredientsContent = document.getElementById('ingredientsContent');
        ingredientsContent.innerHTML = '';

        const ingredientKeys = Object.keys(Ingredients).sort((a, b) => SortAsciiWeight(a) - SortAsciiWeight(b));
        ingredientKeys.forEach((ingredient) => {
            const ingredientItem = document.createElement('div');
            ingredientItem.className = 'ingredient';
            ingredientItem.textContent = `${Math.round(Ingredients[ingredient] * 100) / 100} ${ingredient}`;
            ingredientsContent.appendChild(ingredientItem);
        });
    }


    // Updates Ingredients dictionary to be up to date with the dinners and portion state
    function updateIngredients() {
        Ingredients = {};

        Dinners.forEach(dinnerItem => {
            const dinnerIngredients = Recipes[dinnerItem.dinner]["Ingredients"];
            for (const [ingredient, amount] of Object.entries(dinnerIngredients)) {
                if (Ingredients.hasOwnProperty(ingredient)) {
                    Ingredients[ingredient] += Math.round(amount * dinnerItem.portions * 100) / 100;
                } else {
                    Ingredients[ingredient] = Math.round(amount * dinnerItem.portions * 100) / 100;
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
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text', this.innerHTML);
    }

    function handleDragOver(e) {
        e.preventDefault();
    }

    function handleDrop(e) {
        e.preventDefault();
        if (draggedElement !== this) {
            // Identify the index of both source and target
            let sourceIndex = Array.from(dinnersContent.children).indexOf(draggedElement);
            let targetIndex = Array.from(dinnersContent.children).indexOf(this);

            // Swap dinner objects in the array
            [Dinners[sourceIndex], Dinners[targetIndex]] = [Dinners[targetIndex], Dinners[sourceIndex]];

            // Update the display to reflect the new swapped array state
            updateDinnersContent();
            updateIngredients();
        }
    }

    function handleDragEnd() {
        draggedElement = null;  // Reset the dragged element
    }



    // Functions used for sorting the ingredients by quantity measurement (eg 'g', 'stk', 'ts', etc)
    function GetAsciiNumber(character) {
        return character.charCodeAt(0)
    };


    function GetMeasurementAsciiWeight(measurementString) {
        let weight = 0
        for (let i = 0; i < measurementString.length; i++) {
            weight += GetAsciiNumber(measurementString[i])
        }

        return weight
    };


    function SortAsciiWeight(ingredientString) {
        const ingredientParsed = ingredientString.split(/(\s)/)
        return GetMeasurementAsciiWeight(ingredientParsed[0])
    };



    // Function allowing for the "sharing" of the ingredients list with accompanying recipes in the state's order
    function shareTextToNotes(text) {
        if (navigator.share) {
            navigator.share({ text: text })
            .then(() => console.log('Successfully shared the text.'))
            .catch((error) => console.error('Error sharing:', error));
        } else {
            alert('Deling av handlelisten er ikke støttet av nettleseren, prøv en annen.');
        }
    }

        // Builds the text that contains the shopping list (all ingredients), the dinners sequentially ordered (with their ingredients and recipe)
        // So that the state's dinner plan can be added to notes, or shared with others
    function handleShareClick() {
        let shoppingList = 'Handleliste\n\n';
        for (const ingredient in Ingredients) {
            const amount = Ingredients[ingredient];
            shoppingList += `${Math.round(amount * 100) / 100} ${ingredient}\n`;
        }

        shoppingList += '\n\n\n';
        Dinners.forEach((dinnerItem, index) => {
            let dinnerIngredients = 'Ingredienser:\n';
            Object.entries(Recipes[dinnerItem.dinner]['Ingredients']).forEach(([ingredient, qty]) => {
                dinnerIngredients += `${Math.round(qty * dinnerItem.portions * 100) / 100} ${ingredient}\n`;
            });
            shoppingList += `Middag ${index + 1}: ${dinnerItem.dinner}\n${dinnerIngredients}\n${Recipes[dinnerItem.dinner]['Recipe']}\n\n`;
        });

        shareTextToNotes(shoppingList);
    }



    // Adds event listeners to the main buttons for the website, for adding dinners, and for sharing of the shopping list and recipes selected
    document.getElementById('addRandomDinnerButton').addEventListener('click', addRandomDinner);
    document.getElementById('addAllDinnersButton').addEventListener('click', addAllDinners);
    document.getElementById('shareButton').addEventListener('click', handleShareClick);

    // Initial population of the content
    updateDinnersContent();
    updateIngredients();

});
 