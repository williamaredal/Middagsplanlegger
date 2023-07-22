import logo from './logo.svg';
import './Middagsplanlegger.css';

function DinnerCard() {
  return (
    <div>

    </div>
  );
}

function Middagsplanlegger() {
  let Recipies = {

  }

  let Ingredients = {
    "Ingredient1" : 2,
    "Ingredient2" : 2,
    "Ingredient3" : 2,
    "Ingredient4" : 2,
    "Ingredient5" : 2,
    "Ingredient6" : 2,
    "Ingredient7" : 2,
    "Ingredient8" : 2,
    "Ingredient9" : 2,
    "Ingredient10" : 2,
    "Ingredient11" : 2,
    "Ingredient12" : 2,
    "Ingredient13" : 2,
    "Ingredient14" : 2,
    "Ingredient15" : 2,
    "Ingredient16" : 2,
    "Ingredient17" : 2,
    "Ingredient18" : 2,
    "Ingredient19" : 2,
    "Ingredient20" : 2,
    "Ingredient21" : 2,
    "Ingredient22" : 2,
  }  

  let Dinners = {

  }

  return (
<div class="container">

  <div class="half-width">
    <div class="header-div">Header</div>
    <div class="content-div">
      Dinners
      {

      }
    </div>
    <div class="footer-div">Footer</div>
  </div>

  <div class="half-width">
    <div class="header-div">Header</div>
    <div class="content-div">
      <ul>
        {
          Object.entries(Ingredients).map(([ingredient, amount]) => (
            <li>
              {amount + "x " + ingredient}
            </li>
          ))
        }
        <li>Ingrediens</li>
      </ul>
    </div>
    <div class="footer-div">Footer</div>
  </div>

</div>
  );
}

export default Middagsplanlegger;
