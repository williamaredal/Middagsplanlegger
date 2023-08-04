// main.js
document.addEventListener('DOMContentLoaded', () => {
  let StandardPortion = 4;
  let Dinners = {};
  let AvailableRecipes = new Set(Object.keys(Recipes));
  let Ingredients = {};

  function updateIngredients() {
    Ingredients = {};
  
    for (const [dinner, portions] of Object.entries(Dinners)) {
      const dinnerIngredients = Recipes[dinner]["Ingredients"];
      
      for (const [ingredient, amount] of Object.entries(dinnerIngredients)) {
        if (Ingredients.hasOwnProperty(ingredient)) {
          Ingredients[ingredient] += amount * portions;
        } else {
          Ingredients[ingredient] = amount * portions;
        }
      }
    }
  
    // Removes ingredients with zero quantity
    Object.keys(Ingredients).forEach((key) => {
      if (Ingredients[key] === 0) {
        delete Ingredients[key];
      }
    });
    updateIngredientsContent();
  };


  const updateDinnersContent = () => {
    const dinnersContent = document.getElementById('dinnersContent');
    dinnersContent.innerHTML = '';
  
    Object.entries(Dinners).forEach(([dinner, portions], index) => {
      const dinnerCard = document.createElement('div');
      dinnerCard.className = 'dinner-card';
      
      // Create the elements for the dinner card
      const cardTop = document.createElement('div');
      cardTop.className = 'card-top';
      const dinnerText = document.createElement('div');
      dinnerText.className = 'dinner-text';
      dinnerText.textContent = `${index + 1}. ${dinner}`;
      const crossButton = document.createElement('i');
      crossButton.className = 'fas fa-circle-xmark cross-button';
      crossButton.addEventListener('click', () => removeDinner(dinner));
  
      const cardBottom = document.createElement('div');
      cardBottom.className = 'card-bottom';
      const portionsDiv = document.createElement('div');
      portionsDiv.className = 'portions';
      portionsDiv.textContent = portions;
      const minusButton = document.createElement('i');
      minusButton.className = 'fas fa-circle-minus fa-xl blue-button';
      minusButton.addEventListener('click', () => incrementDinnerPortion(dinner, -1));
      const plusButton = document.createElement('i');
      plusButton.className = 'fas fa-circle-plus fa-xl blue-button';
      plusButton.addEventListener('click', () => incrementDinnerPortion(dinner, 1));
  
      // Append the elements to the dinner card
      cardTop.appendChild(dinnerText);
      cardTop.appendChild(crossButton);
  
      cardBottom.appendChild(portionsDiv);
      cardBottom.appendChild(minusButton);
      cardBottom.appendChild(plusButton);
  
      dinnerCard.appendChild(cardTop);
      dinnerCard.appendChild(cardBottom);
  
      dinnersContent.appendChild(dinnerCard);
    });
  
    // Add "Add new dinner" card if needed
  };
  

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
    console.log(ingredientParsed)
    return GetMeasurementAsciiWeight(ingredientParsed[0])
  };


  /*
    Updates the "Ingredients" content with notepad lines containing the Dinners ingredients
  */
  function updateIngredientsContent() {
    const ingredientsContent = document.getElementById('ingredientsContent');
    ingredientsContent.innerHTML = '';

    // Calculate the Ingredients object using the same logic
    Ingredients = {};
    for (const [dinner, portions] of Object.entries(Dinners)) {
      const dinnerIngredients = Recipes[dinner]["Ingredients"];
      for (const [ingredient, amount] of Object.entries(dinnerIngredients)) {
        if (Ingredients.hasOwnProperty(ingredient)) {
          Ingredients[ingredient] += amount * portions;
        } else {
          Ingredients[ingredient] = amount * portions;
        }
      }
    }
  
    // Removes ingredients with zero quantity
    Object.keys(Ingredients).forEach((key) => {
      if (Ingredients[key] === 0) {
        delete Ingredients[key];
      }
    });

    // Sorts the Ingredients by measurement represented weighted by ascii characters
    const ingredientKeys = Array.from(Object.keys(Ingredients))
    const sortedIngredients = ingredientKeys.sort((a, b) => SortAsciiWeight(a) - SortAsciiWeight(b))

    // Render the Ingredients dictionary on the HTML page
    ingredientKeys.forEach((ingredient) => {
      const ingredientItem = document.createElement('div');
      ingredientItem.className = 'ingredient';
      ingredientItem.textContent = `${Math.round(Ingredients[ingredient] * 100) / 100} ${ingredient}`;

      ingredientsContent.appendChild(ingredientItem);
    });
  }


  const incrementDinnerPortion = (dinner, increment) => {
    // Only increments and updates when valid
    if (Dinners[dinner] + increment >= 0) {
      Dinners[dinner] += increment
      updateDinnersContent();
      updateIngredients();
    }
  };

  const addDinner = (dinner) => {
    Dinners[dinner] = StandardPortion;
    AvailableRecipes.delete(dinner);
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
  };

  const removeDinner = (dinner) => {
    delete Dinners[dinner];
    AvailableRecipes.add(dinner);
    updateDinnersContent();
    updateIngredients();
  };

  function shareTextToNotes(text) {
    if (navigator.share) {
        navigator
        .share({ text: text })
        .then(() => {
            console.log('Successfully shared the text.');
        })
        .catch((error) => {
            console.error('Error sharing:', error);
        });
    } else {
        alert('Sharing is not supported on this browser.');
    }
    }
    
    function handleShareClick() {
    let shoppingList = 'Shopping List\n\n';
    
    // Adds the ingredients to the shopping list
    for (const ingredient in Ingredients) {
        const amount = Ingredients[ingredient];
        shoppingList += `${amount}${ingredient}\n`;
    }
    
    // Adds the recipe instructions to the shopping list
    shoppingList += `\n\n\n`;
    let dinnerCount = 1;
    for (const dinner in Dinners) {
        shoppingList += `Dinner ${dinnerCount}:\n${Recipes[dinner]['Recipe']}\n\n`;
        dinnerCount++;
    }
    
    shareTextToNotes(shoppingList);
      }
      
  
    document.getElementById('addRandomDinnerButton').addEventListener('click', addRandomDinner);
    document.getElementById('shareButton').addEventListener('click', handleShareClick);

    // Initial population of the content
    updateDinnersContent();
    updateIngredients();

});
  





















