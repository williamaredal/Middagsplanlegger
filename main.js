// main.js
document.addEventListener('DOMContentLoaded', () => {
  let StandardPortion = 4;
  let Dinners = [];
  let AvailableRecipes = new Set(Object.keys(Recipes));
  let Ingredients = {};

  function updateIngredients() {
    Ingredients = {};

    Dinners.forEach(dinnerItem => {
        const dinnerIngredients = Recipes[dinnerItem.dinner]["Ingredients"];
        for (const [ingredient, amount] of Object.entries(dinnerIngredients)) {
            if (Ingredients.hasOwnProperty(ingredient)) {
                Ingredients[ingredient] += amount * dinnerItem.portions;
            } else {
                Ingredients[ingredient] = amount * dinnerItem.portions;
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

  let draggedElement = null;  // Track the element being dragged

  function handleDragStart(e) {
      draggedElement = this;
      e.dataTransfer.effectAllowed = 'move';
      e.dataTransfer.setData('text', this.innerHTML);  // Optionally store data
  }

  function handleDragOver(e) {
      e.preventDefault();  // Necessary to allow dropping
  }

  function handleDrop(e) {
    e.preventDefault();
    if (draggedElement !== this) {
        // Identify the index of both source and target
        let sourceIndex = Array.from(dinnersContent.children).indexOf(draggedElement);
        let targetIndex = Array.from(dinnersContent.children).indexOf(this);

        // Swap elements in the array
        [Dinners[sourceIndex], Dinners[targetIndex]] = [Dinners[targetIndex], Dinners[sourceIndex]];

        // Update the display
        updateDinnersContent();
        updateIngredients();
    }
  }

  function handleDragEnd() {
      draggedElement = null;  // Reset the dragged element
  }


  

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


  /*
    Updates the "Ingredients" content with notepad lines containing the Dinners ingredients
  */
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


  const incrementDinnerPortion = (dinner, increment) => {
    const dinnerObject = Dinners.find(d => d.dinner === dinner);
    if (dinnerObject && (dinnerObject.portions + increment >= 0)) {
        dinnerObject.portions += increment;
        updateDinnersContent();
        updateIngredients();
    }
  };

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
    alert("Unable to add any more recipes to the list");
    }
    console.log(Dinners);
  };

  function shareTextToNotes(text) {
    if (navigator.share) {
        navigator.share({ text: text })
            .then(() => console.log('Successfully shared the text.'))
            .catch((error) => console.error('Error sharing:', error));
    } else {
        alert('Sharing is not supported on this browser.');
    }
  }

  function handleShareClick() {
    let shoppingList = 'Shopping List\n\n';
    for (const ingredient in Ingredients) {
        const amount = Ingredients[ingredient];
        shoppingList += `${amount} ${ingredient}\n`;
    }
    
    shoppingList += '\n\n\n';
    Dinners.forEach((dinnerItem, index) => {
        let dinnerIngredients = 'Ingredients:\n';
        Object.entries(Recipes[dinnerItem.dinner]['Ingredients']).forEach(([ingredient, qty]) => {
            dinnerIngredients += `${qty * dinnerItem.portions} ${ingredient}\n`;
        });
        shoppingList += `Dinner ${index + 1}: ${dinnerItem.dinner}\n${dinnerIngredients}\n${Recipes[dinnerItem.dinner]['Recipe']}\n\n`;
    });

    shareTextToNotes(shoppingList);
  }

      
  
    document.getElementById('addRandomDinnerButton').addEventListener('click', addRandomDinner);
    document.getElementById('shareButton').addEventListener('click', handleShareClick);

    // Initial population of the content
    updateDinnersContent();
    updateIngredients();

});
  





















