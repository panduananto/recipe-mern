import axios from 'axios';

const baseURL = 'http://localhost:3001/api';

const createRecipe = (recipe) => axios.post(`${baseURL}/recipe`, recipe);
const fetchRecipe = () => axios.get(`${baseURL}/recipe`);
const fetchRecipeById = (id) => axios.get(`${baseURL}/recipe/${id}`);

export { createRecipe, fetchRecipe, fetchRecipeById };
