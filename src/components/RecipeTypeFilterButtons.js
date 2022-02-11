import React from 'react';
import PropTypes from 'prop-types';

export default function RecipeTypeFilterButtons({ setActiveFilterFn }) {
  function handleFiltersButtons(type) {
    const filterFunctions = {
      Food: (recipe) => recipe.type === 'food',
      Drink: (recipe) => recipe.type === 'drink',
    };

    let activeFilterFn = filterFunctions[type];
    if (!activeFilterFn) {
      activeFilterFn = () => true;
    }
    setActiveFilterFn(() => activeFilterFn);
  }

  return (
    <div className="filters-button-recipes">
      <button
        type="button"
        data-testid="filter-by-all-btn"
        onClick={ () => handleFiltersButtons('All') }
      >
        All
      </button>
      <button
        type="button"
        data-testid="filter-by-food-btn"
        onClick={ () => handleFiltersButtons('Food') }
      >
        Food
      </button>
      <button
        type="button"
        data-testid="filter-by-drink-btn"
        onClick={ () => handleFiltersButtons('Drink') }
      >
        Drinks
      </button>
    </div>
  );
}

RecipeTypeFilterButtons.propTypes = {
  setActiveFilterFn: PropTypes.func.isRequired,
};
