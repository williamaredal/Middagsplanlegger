import React, {useState} from 'react';
import './Middagsplanlegger.css';
import Recipes from './Recipes';


function Middagsplanlegger() {
  let StandardPortion = 4;
  let [Dinners, updateDinners] = useState({})
  let [AvailableRecipes, updateAvailableRecipes] = useState(() => {
    let recipesNotInDinners = new Set(Object.keys(Recipes).filter(dinner => !(dinner in Dinners)))
    return recipesNotInDinners
  })

  const IncrementDinnerPortion = (dinner, increment) => {
      updateDinners((Dinners) => ({
        ...Dinners,
        [dinner]: Dinners[dinner] + increment >= 0 ? Dinners[dinner] + increment : 0,
      }));
  };

  const AddDinner = (dinner) => {
    updateDinners((Dinners) => ({
      ...Dinners,
      [dinner] : StandardPortion
    }));

    updateAvailableRecipes(() => {
      let updatedSet = new Set([...Object.keys(Recipes)].filter(dinner => !(dinner in Dinners)))
      updateAvailableRecipes(updatedSet)
    });
  };

  const AddRandomDinner = () => {
    let arrayFromSet = Array.from(AvailableRecipes)
    // selects random if there are available unique Recipes to chose from
    if (arrayFromSet.length > 0) {
      let randomDinner = arrayFromSet[Math.floor(Math.random() * arrayFromSet.length)]
      AddDinner(randomDinner);
    }
    else {
      alert("Unable to add any more recipes to the list")
    }
  };

  const RemoveDinner = (dinner) => {
    delete Dinners[dinner]
    updateDinners((Dinners) => ({
      ...Dinners,
    }));
    updateAvailableRecipes(() => {
      let updatedSet = new Set([...Object.keys(Recipes)].filter(dinner => !(dinner in Dinners)))
      updateAvailableRecipes(updatedSet)
    });
  }


  const shareTextToNotes = async (text) => {
    try {
      if (navigator.share) {
        await navigator.share({ text });
      } else {
        alert('Sharing is not supported on this browser.');
      }
    } catch (error) {
      console.error('Error sharing:', error);
    }
  };

  const handleShareClick = () => {
    let shoppingList = "Shopping List\n\n"

    // Adds the ingredients to the shopping list
    for (const ingredient in Ingredients) {
      const amount = Ingredients[ingredient];
      shoppingList += `${amount}${ingredient}\n`;
    }

    // Adds the recipe instructions to the shopping list
    shoppingList += `\n\n\n`
    let dinnerCount = 1
    for (const dinner in Dinners) {
      shoppingList += `Dinner ${dinnerCount}:\n${Recipes[dinner]["Recipe"]}\n\n`
      dinnerCount ++
    }
    shareTextToNotes(shoppingList);
  };

  let Ingredients = Object.entries(Dinners).reduce((Ingredient_Dictionary, [dinner, portions]) => {
    Object.entries(Recipes[dinner]["Ingredients"]).map(([ingredient, amount]) => {
      if (ingredient in Ingredient_Dictionary) {
        Ingredient_Dictionary[ingredient] += amount * portions
      } 
      else {
        Ingredient_Dictionary[ingredient] = amount * portions
      }
    })

    Object.keys(Ingredient_Dictionary).forEach((key) => {
      if (Ingredient_Dictionary[key] === 0) {
        delete Ingredient_Dictionary[key]
      }
    })

    return Ingredient_Dictionary
  }, {});
  
 
   


  return (
<div class="container">

  <div class="half-width dinners">
    <div class="header-div">
      Dinners
    </div>
    <div class="content-div">
      {
        Object.entries(Dinners).map(([dinner, portions], index) => (
          <div class="dinner-card">
          <div class="card-top">
            <div class="dinner-text">{index + 1}. {dinner}</div>
            <i className="fa-solid fa-circle-xmark cross-button" onClick={() => RemoveDinner(dinner)}></i>
          </div>
          <div class="card-bottom">
            <div class="portions">{portions}</div>
            <i className="fa-regular fa-circle-minus fa-xl blue-button" onClick={() => IncrementDinnerPortion(dinner, -1)}></i>
            <i className="fa-regular fa-circle-plus fa-xl blue-button" onClick={() => IncrementDinnerPortion(dinner, 1)}></i>
          </div>
        </div>        
        ))
      }
      {
        /*
      // Style of the "add new dinner" card
      <div class="dinner-card" onClick={}> // onClick should activate modal function for selection of available recipes 
        <div class="new-dinner-card">
          <i class="fa-solid fa-plus fa-xl"></i>
        </div>
      </div>
      */
      }

    </div>
    <div class="footer-div">
      <button class="add-button" onClick={() => AddRandomDinner()}>
        Add random Dinner <i className='fa-solid fa-plus fa-xl'></i>
      </button>
    </div>
  </div>

  <div class="half-width ingredients">
    <div class="header-div">Ingredients</div>
    <div class="content-div">
        {
          Object.entries(Ingredients).map(([ingredient, amount]) => (
            <div class="ingredient" key={ingredient}>
              {amount + ingredient}
            </div>
          ))
        }
    </div>
    <div class="footer-div">
      <button class="share-button" onClick={() => handleShareClick()}>
        Share to Notes <i className='fa-solid fa-arrow-up-from-bracket fa-xl'></i>
      </button>
    </div>
  </div>

</div>
  );
}

export default Middagsplanlegger;
