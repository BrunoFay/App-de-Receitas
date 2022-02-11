import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { getMeals, getDrinks } from '../services/api';
import '../styles/DetailScreen.css';

export default function RecommendationCards() {
  const [recipes, setRecipes] = useState([]);
  const { pathname } = useLocation();
  const history = useHistory();
  const isFood = pathname.startsWith('/foods');

  useEffect(() => {
    function fetchRecipes() {
      if (!isFood) {
        getMeals().then(setRecipes);
      } else {
        getDrinks().then(setRecipes);
      }
    }
    fetchRecipes();
  }, [isFood]);

  function redirectToRecipeDetails(id) {
    if (!isFood) history.push(`/foods/${id}`);
    else history.push(`/drinks/${id}`);
  }

  function handleKeyPress(event, id) {
    if (event.key === 'Enter') {
      redirectToRecipeDetails(id);
    }
  }

  return (
    <section className="carousel">
      {recipes.map((recipe, index) => (
        <section
          key={ index }
          data-testid={ `${index}-recomendation-card` }
          role="link"
          tabIndex={ 0 }
          onClick={ () => redirectToRecipeDetails(recipe.idMeal || recipe.idDrink) }
          onKeyDown={ (e) => handleKeyPress(e, recipe.idMeal || recipe.idDrink) }
        >
          <img
            src={ recipe.strMealThumb || recipe.strDrinkThumb }
            alt="card"
            data-testid={ `${index}-card-img` }
          />
          <span data-testid={ `${index}-recomendation-title` }>
            {recipe.strDrink || recipe.strMeal}
          </span>

        </section>
      ))}
    </section>
  );
}
