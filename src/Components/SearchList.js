import { useDispatch, useSelector } from 'react-redux';
import { toggleFavourite } from '../Redux/recipeSlice';
import { Link } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa';
import './Main.css';

function SearchList({ recipes }) {
  const dispatch = useDispatch();
  const { favourites } = useSelector((state) => state.recipe);

  const isFavourite = (id) => favourites.find((item) => item.idMeal === id);

  if (recipes.length === 0) {
    return (
      <div className="no-results">
        <h2>No Recipes Found</h2>
        <p> Try searching with different ingredients or keywords!</p>
      </div>
    );
  }

  return (
    <div className="card-list">
      {recipes.map((item) => (
        <div className="card" key={item.idMeal}>
          <img src={item.strMealThumb} alt={item.strMeal} />
          <h3>{item.strMeal}</h3>
          <div className="card-buttons">
            <Link to={`/recipe/${item.idMeal}`}>
              <button>View</button>
            </Link>
            <button
              className={`heart-btn ${isFavourite(item.idMeal) ? 'active' : ''}`}
              onClick={() => dispatch(toggleFavourite(item))}
            >
              <FaHeart />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SearchList;
