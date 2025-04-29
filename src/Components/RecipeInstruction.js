import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Loader from './Loader';
import './Main.css';

function RecipeInstruction() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchRecipe = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
      );
      setRecipe(res.data.meals[0]);
    } catch (err) {
      console.log('Failed to fetch recipe detail');
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchRecipe();
  }, [id]);

  if (loading) return <Loader />;

  return (
    <div className="container">
      {recipe ? (
        <>
          <h2>{recipe.strMeal}</h2>
          <img src={recipe.strMealThumb} alt={recipe.strMeal} className="detail-img" />
          <p><strong>Category:</strong> {recipe.strCategory}</p>
          <p><strong>Area:</strong> {recipe.strArea}</p>
          <h3>Instructions</h3>
          <p className="instructions">{recipe.strInstructions}</p>
        </>
      ) : (
        <p>Recipe not found</p>
      )}
    </div>
  );
}

export default RecipeInstruction;
