import { useDispatch, useSelector } from 'react-redux';
import { toggleFavourite } from '../Redux/recipeSlice';
import { Link } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa';
import './Main.css';

function Favourite() {
  const dispatch = useDispatch();
  const { favourites } = useSelector((state) => state.recipe);

  return (
    <div className="card-list">
      {favourites.length === 0 ? (
        <div className="no-favourites">
          <h2>No Favourite Recipes Yet</h2>
          <p>❤️ Start adding some recipes you love!</p>
          <Link to="/">
            <button className="back-home-btn">🔙 Back to Home</button>
          </Link>
        </div>
      ) : (
        favourites.map((item) => (
          <div className="card" key={item.idMeal}>
            <img src={item.strMealThumb} alt={item.strMeal} />
            <h3>{item.strMeal}</h3>
            <div className="card-buttons">
              <Link to={`/recipe/${item.idMeal}`}>
                <button>View</button>
              </Link>
              <button
                className="heart-btn active"
                onClick={() => dispatch(toggleFavourite(item))}
              >
                <FaHeart />
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default Favourite;
