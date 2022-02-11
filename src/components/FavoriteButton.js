import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import {
  addRecipeToFavorites,
  removeRecipeFromFavorites,
  getFavoriteRecipes,
} from '../services/localStorage';

export default function FavoriteButton({ recipe, isFood, onToggle }) {
  const [isRecipeFavorite, setIsRecipeFavorite] = useState(false);
  const recipeId = recipe.idMeal || recipe.idDrink || recipe.id;

  useEffect(() => {
    const favoriteRecipes = getFavoriteRecipes();
    const isFavorite = favoriteRecipes.some(({ id }) => id === recipeId);
    setIsRecipeFavorite(isFavorite);
  }, [recipeId]);

  function favoriteRecipe() {
    const newFavoriteRecipe = {
      id: recipeId,
      type: isFood ? 'food' : 'drink',
      nationality: recipe.strArea || '',
      category: recipe.strCategory || '',
      alcoholicOrNot: recipe.strAlcoholic || '',
      name: recipe.strMeal || recipe.strDrink,
      image: recipe.strMealThumb || recipe.strDrinkThumb,
    };
    addRecipeToFavorites(newFavoriteRecipe);
    setIsRecipeFavorite(true);
  }

  function unfavoriteRecipe() {
    removeRecipeFromFavorites(recipeId);
    setIsRecipeFavorite(false);
  }

  function toggleFavorite() {
    if (isRecipeFavorite) {
      unfavoriteRecipe();
    } else {
      favoriteRecipe();
    }
    onToggle();
  }

  return (
    <button
      className="favoriteAndShared-button"
      type="button"
      onClick={ toggleFavorite }
    >
      { !isRecipeFavorite ? <AiOutlineHeart /> : <AiFillHeart /> }

    </button>
  );
}

FavoriteButton.propTypes = {
  recipe: PropTypes.objectOf(PropTypes.string).isRequired,
  isFood: PropTypes.bool.isRequired,

  onToggle: PropTypes.func,
};

FavoriteButton.defaultProps = {
  onToggle: () => {},
};
