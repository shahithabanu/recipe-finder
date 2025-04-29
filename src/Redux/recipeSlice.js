import { createSlice } from "@reduxjs/toolkit";

const recipeSlice = createSlice({
  name: "recipe",
  initialState: {
    searchTerm: "",
    recipes: [],
    favourites: JSON.parse(localStorage.getItem("favourites")) || [],
    loading: false,
    error: null,
  },
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    setRecipes: (state, action) => {
      state.recipes = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    toggleFavourite: (state, action) => {
      const exists = state.favourites.find(item => item.idMeal === action.payload.idMeal);
      if (exists) {
        // Remove from favorites
        state.favourites = state.favourites.filter(item => item.idMeal !== action.payload.idMeal);
      } else {
        // Add to favorites
        state.favourites.push(action.payload);
      }
      localStorage.setItem("favourites", JSON.stringify(state.favourites));
    },
  },
});

export const {
  setSearchTerm,
  setRecipes,
  setLoading,
  setError,
  toggleFavourite,
} = recipeSlice.actions;

export default recipeSlice.reducer;
