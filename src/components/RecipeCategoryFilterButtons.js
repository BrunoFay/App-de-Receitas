import React, { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import RecipeFilterContext from '../context/recipe-filter/RecipeFilterContext';
import {
  getFoodCategories,
  getDrinkCategories,
} from '../services/api';

export default function RecipeCategoryFilterButtons() {
  const [recipeCategories, setRecipeCategories] = useState([]);
  const { setFilter, filter } = useContext(RecipeFilterContext);
  const { pathname } = useLocation();
  const isFoodPage = pathname.startsWith('/foods');

  function fetchRecipesByCategory(category) {
    if (category === 'all' || filter.text === category) {
      setFilter({ type: '', text: '' });
      return;
    }
    setFilter({ type: 'category', text: category });
  }

  function handleClick({ target: { value } }) {
    fetchRecipesByCategory(value);
  }

  useEffect(() => {
    function fetchRecipeCategories() {
      if (isFoodPage) {
        getFoodCategories().then(setRecipeCategories);
      } else {
        getDrinkCategories().then(setRecipeCategories);
      }
    }
    fetchRecipeCategories();
  }, [isFoodPage]);

  return (
    <section className="filters-button">
      <button
        type="button"
        value="all"
        onClick={ handleClick }
        data-testid="All-category-filter"
      >
        All
      </button>

      {recipeCategories.map(({ strCategory }) => (
        <button
          key={ strCategory }
          type="button"
          value={ strCategory }
          onClick={ handleClick }
          data-testid={ `${strCategory}-category-filter` }
        >
          {strCategory === 'Other/Unknown' ? 'Other / Unknown' : strCategory}
        </button>
      ))}
    </section>
  );
}
