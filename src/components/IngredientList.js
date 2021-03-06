import React from 'react';
import PropTypes from 'prop-types';
import IngredientListItem from './IngredientListItem';

export default function IngredientList({ ingredients }) {
  return (
    <ul className="ingredients-list">
      {ingredients.map((ingredient, index) => (
        <IngredientListItem
          key={ `${ingredient.name} - ${ingredient.measure}` }
          name={ ingredient.name }
          measure={ ingredient.measure }
          testId={ `${index}-ingredient-name-and-measure` }
        />
      ))}
    </ul>
  );
}

IngredientList.propTypes = {
  ingredients: PropTypes.array,
}.isRequired;
