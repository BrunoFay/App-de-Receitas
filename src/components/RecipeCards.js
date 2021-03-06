import React from 'react';
import PropTypes from 'prop-types';
import { useHistory, useLocation } from 'react-router-dom';
import '../styles/mainCards.css';

export default function RecipeCards({ recipes }) {
  const { pathname } = useLocation();
  const isFood = pathname.includes('/foods');
  const history = useHistory();

  function handleClick(id) {
    if (isFood) history.push(`/foods/${id}`);
    else history.push(`/drinks/${id}`);
  }

  function handleKeyPress(event, id) {
    if (event.key === 'Enter') {
      handleClick(id);
    }
  }

  return (
    <section className="cards-content">
      {recipes.map((recipe, i) => (
        <div
          key={ recipe.strMeal || recipe.strDrink }
          className="card-main"
          role="link"
          tabIndex={ 0 }
          onKeyPress={ (e) => handleKeyPress(e, recipe.idMeal || recipe.idDrink) }
          onClick={ () => handleClick(recipe.idMeal || recipe.idDrink) }
          data-testid={ `${i}-recipe-card` }
        >
          <img
            src={ isFood ? recipe.strMealThumb : recipe.strDrinkThumb }
            alt="card"
            data-testid={ `${i}-card-img` }
          />
          <div className="container-card-main-infos">
            <h2 className="card-main-name" data-testid={ `${i}-card-name` }>
              { recipe.strMeal || recipe.strDrink }
            </h2>
            <span className="card-main-info">
              {recipe.strAlcoholic || recipe.strArea}
            </span>
          </div>
        </div>
      ))}
    </section>
  );
}

RecipeCards.propTypes = {
  recipes: PropTypes.arrayOf(PropTypes.object).isRequired,
};
