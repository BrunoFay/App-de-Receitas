import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import ShareButton from './ShareButton';
import '../styles/mainCards.css';

export default function DoneRecipeCards({ doneRecipes }) {
  const history = useHistory();

  function redirectToRecipeDetails(id, type) {
    if (type === 'food') history.push(`/foods/${id}`);
    else history.push(`/drinks/${id}`);
  }

  function handleKeyDown(event, id, type) {
    if (event.key === 'Enter') redirectToRecipeDetails(id, type);
  }

  return (
    <div className="container-doneRecipes">
      { doneRecipes.map(({
        type,
        id,
        nationality,
        category,
        alcoholicOrNot,
        name,
        image,
        doneDate,
        /* tags, */
      }, index) => (
        <div className="cards-done" key={ name }>
          <div
            role="link"
            tabIndex={ 0 }
            onClick={ () => redirectToRecipeDetails(id, type) }
            onKeyDown={ (event) => handleKeyDown(event, id, type) }
          >
            <img
              className="image-DoneCard"
              src={ image }
              alt={ `${name} card` }
              data-testid={ `${index}-horizontal-image` }
            />
          </div>
          <div className="infos">
            <h2 type="button" data-testid={ `${index}-horizontal-name` }>
              {name}
            </h2>
            {nationality ? (
              <p data-testid={ `${index}-horizontal-top-text` }>
                {`${nationality} - ${alcoholicOrNot || category}`}
              </p>
            ) : (
              <p data-testid={ `${index}-horizontal-top-text` }>
                {` ${alcoholicOrNot}`}
              </p>
            )}
            <span data-testid={ `${index}-horizontal-done-date` }>{doneDate}</span>
          </div>
          {/*  <div>
            {tags.map((tag) => (
              <span
                key={ tag }
                data-testid={ `${index}-${tag}-horizontal-tag` }
              >
                {tag}
              </span>
            ))}
          </div> */}
          <ShareButton
            recipeId={ id }
            isFood={ type === 'food' }
            testId={ `${index}-horizontal-share-btn` }
          />
        </div>
      ))}
    </div>
  );
}

DoneRecipeCards.propTypes = {
  doneRecipes: PropTypes.array,
}.isRequired;
