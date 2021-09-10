import express from 'express';

import { getAllRecipe, createRecipe, getRecipeById } from '../controllers/recipe.js';

const router = express.Router();

router.get('/', getAllRecipe);
router.get('/:id', getRecipeById);
router.post('/', createRecipe);

export default router;
