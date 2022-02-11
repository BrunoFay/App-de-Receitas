import React from 'react';
import PropTypes from 'prop-types';

import { useHistory } from 'react-router-dom';

import { setInProgressRecipes, getInProgressRecipes } from '../services/localStorage';

export default function ButtonDetailsStatus({
  isRecipeInProgress,
  isRecipeDone,
  isFood,
  id,
  pathname,
}) {
  const history = useHistory();

  function redirectToRecipeProgress() {
    history.push(`${pathname}/in-progress`);
  }

  function startRecipe() {
    const { meals, cocktails } = getInProgressRecipes();

    if (isFood) {
      setInProgressRecipes({
        meals: {
          ...meals,
          [id]: [],
        },
        cocktails,
      });
    } else {
      setInProgressRecipes({
        meals,
        cocktails: {
          ...cocktails,
          [id]: [],
        },
      });
    }
    redirectToRecipeProgress();
  }

  return (
    <div className="buttons-status">
      {!isRecipeDone ? (
        <button
          type="button"
          className={ isRecipeInProgress
            ? 'btn-ContinueRecipe' : 'btn-StartRecipe' }
          onClick={
            isRecipeInProgress ? redirectToRecipeProgress : startRecipe
          }
        >
          {isRecipeInProgress ? 'Continue Recipe' : 'Start Recipe'}
        </button>
      ) : (
        <button
          type="button"
          className="done-recipe"
        >
          Done Recipe
        </button>
      )}
    </div>
  );
}

ButtonDetailsStatus.propTypes = {
  isRecipeInProgress: PropTypes.bool,
  isRecipeDone: PropTypes.bool,
}.isRequired;
