import React from 'react';
import { useLocation, useHistory, useParams } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import useRecipeDetailsById from '../hooks/useRecipeDetailsById';
import useIngredientsFromRecipe from '../hooks/useIngredientsFromRecipe';
import IngredientList from '../components/IngredientList';
import RecommendationCards from '../components/RecommendationCards';
import VideoCard from '../components/VideoCard';
import {
  getDoneRecipes,
  getInProgressRecipes,
} from '../services/localStorage';
import FavoriteButton from '../components/FavoriteButton';
import ShareButton from '../components/ShareButton';
import ButtonDetailsStatus from '../components/ButtonDetailsStatus';

export default function RecipeDetails() {
  const { id } = useParams();
  const { pathname } = useLocation();
  const history = useHistory();
  const recipe = useRecipeDetailsById(id);
  const ingredients = useIngredientsFromRecipe(recipe);
  const isFood = pathname.startsWith('/foods');

  function handleYoutubeSrc(url) {
    return url.replace('watch?v=', 'embed/');
  }

  function isRecipeDone() {
    const doneRecipes = getDoneRecipes();
    const isDone = doneRecipes.some((doneRecipe) => doneRecipe.id === id);

    return isDone;
  }

  function isRecipeInProgress() {
    const { meals, cocktails } = getInProgressRecipes();
    const inProgressRecipes = isFood ? meals : cocktails;
    const inProgressRecipeIds = Object.keys(inProgressRecipes);
    const isInProgress = inProgressRecipeIds.includes(id);

    return isInProgress;
  }

  return recipe && (
    <main className="details-container">
      <button type="button" className="back-arrow" onClick={ () => history.goBack() }>
        <FaArrowLeft />
      </button>
      <section className="details-container">
        <div className="details-header">
          <h1 className="recipe-title">
            {recipe.strMeal || recipe.strDrink}
          </h1>
          <img
            className="recipe-photo"
            alt="recipe"
            src={ recipe.strMealThumb || recipe.strDrinkThumb }
          />
        </div>
        <ButtonDetailsStatus
          isRecipeInProgress={ isRecipeInProgress() }
          isRecipeDone={ isRecipeDone() }
          isFood={ isFood }
          id={ id }
          pathname={ pathname }
        />

        <h2 className="recipe-category">
          {recipe.strAlcoholic || recipe.strCategory}
        </h2>
        <h3>Ingredients :</h3>

        <IngredientList ingredients={ ingredients } />
        <h3>Instructions :</h3>

        <p className="instructions">
          {recipe.strInstructions}
        </p>

        <RecommendationCards />

        {isFood && recipe.strYoutube && (
          <VideoCard src={ `${handleYoutubeSrc(recipe.strYoutube)}` } />
        )}

        <div className="footer-buttons">

          <ShareButton recipeId={ id } isFood={ isFood } testId="share-btn" />
          <FavoriteButton recipe={ recipe } isFood={ isFood } testId="favorite-btn" />
        </div>
      </section>
    </main>
  );
}
