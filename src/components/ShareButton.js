import copy from 'clipboard-copy';
import React, { useState } from 'react';
import { BsShare } from 'react-icons/bs';
import PropTypes from 'prop-types';

export default function ShareButton({ recipeId, isFood }) {
  const [isUrlCopied, setIsUrlCopied] = useState(false);

  function getRecipeUrl() {
    const { protocol, host } = window.location;
    const recipeType = isFood ? 'foods' : 'drinks';

    return `${protocol}//${host}/${recipeType}/${recipeId}`;
  }

  function handleClick() {
    const recipeUrl = getRecipeUrl();
    copy(recipeUrl);
    setIsUrlCopied(true);
  }

  return (
    <button
      type="button"
      onClick={ handleClick }
      data-testid="share-btn"
      className="favoriteAndShared-button"
    >
      { isUrlCopied ? 'Link copied!' : <BsShare />}
    </button>
  );
}

ShareButton.propTypes = {
  recipeId: PropTypes.string.isRequired,
  isFood: PropTypes.bool.isRequired,
};
