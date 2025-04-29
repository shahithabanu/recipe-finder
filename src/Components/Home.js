import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { setRecipes, setLoading, setError } from '../Redux/recipeSlice';
import SearchList from './SearchList';
import Loader from './Loader';
import Alert from './Alert';
import './Main.css';

function Home() {
  const dispatch = useDispatch();
  const [input, setInput] = useState('');
  const { recipes, loading, error } = useSelector((state) => state.recipe);

  const handleSearch = async () => {
    if (!input.trim()) return;
    dispatch(setLoading(true));
    try {
      const res = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`
      );
      dispatch(setRecipes(res.data.meals || []));
      dispatch(setLoading(false));
    } catch (err) {
      dispatch(setError('Failed to fetch recipes.'));
      dispatch(setLoading(false));
    }
  };

  return (
    <div className="main">
      <h1>Recipe Finder </h1>
      <div className="search">
        <input
          type="text"
          placeholder="Search for recipes..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      {loading ? <Loader /> : <SearchList recipes={recipes} />}
      {error && <Alert msg={error} />}
    </div>
  );
}

export default Home;
