import React from 'react';
import { useLocation, useParams, useHistory } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import FinishRecipeButton from '../components/FinishRecipeButton';
import IngredientCheckList from '../components/IngredientCheckList';
/* import ShareButton from '../components/ShareButton'; */
import FavoriteButton from '../components/FavoriteButton';
import useIngredientsFromRecipe from '../hooks/useIngredientsFromRecipe';
import useRecipeDetailsById from '../hooks/useRecipeDetailsById';
import '../styles/RecipeInProgress.css';

export default function RecipeInProgress() {
  const { pathname } = useLocation();
  const { id } = useParams();
  const recipe = useRecipeDetailsById(id);
  const ingredients = useIngredientsFromRecipe(recipe);
  const isFood = pathname.startsWith('/foods');
  const history = useHistory();

  function getRecipeDetails() {
    const recipeDetails = {
      name: recipe.strMeal,
      imgSource: recipe.strMealThumb,
      category: recipe.strCategory,
      instructions: recipe.strInstructions,
    };

    if (!isFood) {
      recipeDetails.name = recipe.strDrink;
      recipeDetails.imgSource = recipe.strDrinkThumb;
      recipeDetails.category = recipe.strAlcoholic;
    }

    return recipeDetails;
  }

  function renderRecipe() {
    const { name, imgSource, instructions } = getRecipeDetails();

    return (
      <main className="container-Recipe-Progress">
        <div className="recipeInprogress">
          <button type="button" className="back-arrow" onClick={ () => history.goBack() }>
            <FaArrowLeft />
          </button>
          <FavoriteButton recipe={ recipe } isFood={ isFood } testId="favorite-btn" />
          <h1 className="recipe-title" data-testid="recipe-title">{name}</h1>
          <img
            src={ imgSource }
            alt={ name }
            data-testid="recipe-photo"
          />
        </div>
        <div className="recipe-in-progress-page">

          <IngredientCheckList ingredients={ ingredients } />
          <p data-testid="instructions">{instructions}</p>
          {/*  <ShareButton recipeId={ id } isFood={ isFood } testId="share-btn" /> */}
          <FinishRecipeButton recipe={ recipe } />
        </div>

      </main>
    );
  }

  return recipe && renderRecipe();
}
