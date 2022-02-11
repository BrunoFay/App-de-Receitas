import React, { useEffect, useState } from 'react';
import DoneRecipeCards from '../components/DoneRecipeCards';
import RecipeTypeFilterButtons from '../components/RecipeTypeFilterButtons';
import Header from '../components/Header';
import { getDoneRecipes } from '../services/localStorage';


export default function DoneRecipes() {
  /* activeFilterFn é a callback do filtro da filteredDoneRecipes */
  const [activeFilterFn, setActiveFilterFn] = useState(() => () => true);
  const [doneRecipes, setDoneRecipes] = useState([]);

  useEffect(() => {
    setDoneRecipes(getDoneRecipes());
  }, []);
  console.log(activeFilterFn);

  const filteredDoneRecipes = doneRecipes.filter(activeFilterFn);

  return (
    <>
      <Header title="Done Recipes" />
      <RecipeTypeFilterButtons
        setActiveFilterFn={ setActiveFilterFn }
      />
      <DoneRecipeCards doneRecipes={ filteredDoneRecipes } />
    </>
  );
}
