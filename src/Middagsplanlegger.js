import React, {useState} from 'react';
import logo from './logo.svg';
import './Middagsplanlegger.css';
import Recipies from './Recipies';




function Middagsplanlegger() {
  let StandardPortion = 4;
  let [Dinners, updatePortions] = useState({
    "Spagetti Bolognese" : 4,
    "Pasta med kremet sopp" : 4,
  })
  const IncrementDinnerPortion = (dinner, increment) => {
    updatePortions((Dinners) => ({
      ...Dinners,
      [dinner]: Dinners[dinner] + increment >= 0 ? Dinners[dinner] + increment : 0,
    }));
  };

  let Ingredients = Object.entries(Dinners).reduce((Ingredient_Dictionary, [dinner, portions]) => {
    Object.entries(Recipies[dinner]).map(([ingredient, amount]) => {
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
        Object.entries(Dinners).map(([dinner, portions]) => (
          <div class="dinner-card">
          <div class="card-top">
            <p>{dinner}</p>
          </div>
          <div class="card-bottom">
            {portions}
            <i className="fa-regular fa-circle-minus fa-xl text-blue" onClick={() => IncrementDinnerPortion(dinner, -1)}></i>
            <i className="fa-regular fa-circle-plus fa-xl text-blue" onClick={() => IncrementDinnerPortion(dinner, 1)}></i>
          </div>
        </div>        
        ))
      }
    </div>
    <div class="footer-div">
      <button class="add-button">
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
      <button class="share-button">
        Share to Notes <i className='fa-solid fa-arrow-up-from-bracket fa-xl'></i>
      </button>
    </div>
  </div>

</div>
  );
}

export default Middagsplanlegger;
