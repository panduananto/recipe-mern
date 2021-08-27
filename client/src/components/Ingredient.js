import React from 'react';

import { v4 as uuidv4 } from 'uuid';

function Ingredient({ ingredient: ingredients, setRecipe }) {
  const handleChangeIngredient = (event, index) => {
    const { name, value } = event.target;
    const ingredientListTemp = [...ingredients];
    ingredientListTemp[index][name] = value;

    setRecipe((recipe) => ({ ...recipe, ingredient: ingredientListTemp }));
  };

  const handleAddMoreIngredient = () => {
    setRecipe((recipe) => ({ ...recipe, ingredient: [...ingredients, { id: uuidv4(), name: '', amount: '' }] }));
  };

  const handleRemoveIngredient = (id) => {
    const ingredientListTemp = [...ingredients];
    ingredientListTemp.splice(
      ingredients.findIndex((ingredient) => ingredient.id === id),
      1,
    );

    setRecipe((recipe) => ({ ...recipe, ingredient: ingredientListTemp }));
  };

  return (
    <>
      <fieldset>
        <legend className="font-medium text-gray-700">Ingredients</legend>
        <div className="mt-1 grid grid-cols-3 gap-2">
          {ingredients.map((ingredient, index) => {
            return (
              <div key={ingredient.id} className="col-span-3 sm:col-span-2">
                <label htmlFor="name" className="sr-only">
                  Ingredient-{index + 1}
                </label>
                <div className="flex items-stretch gap-1 rounded-md">
                  <input
                    id={`ingredient-${index + 1}`}
                    name="name"
                    type="text"
                    autoComplete="off"
                    className="block w-full px-4 py-2 border border-solid border-gray-300 rounded-l-md bg-gray-50 shadow-sm font-thin focus:outline-none focus:ring-1 focus:ring-red-700 focus:border-red-700"
                    placeholder="garlic"
                    value={ingredient.name}
                    onChange={(event) => handleChangeIngredient(event, index)}
                  />
                  <div>
                    <label htmlFor="amount" className="sr-only"></label>
                    <input
                      id={`amount-ingredient-${index + 1}`}
                      name="amount"
                      type="text"
                      autoComplete="off"
                      className="block w-full px-4 py-2 border border-solid border-gray-300 rounded-r-md bg-white shadow-sm font-thin focus:outline-none focus:ring-1 focus:ring-red-700 focus:border-red-700"
                      placeholder="1 clove"
                      value={ingredient.amount}
                      onChange={(event) => handleChangeIngredient(event, index)}
                    />
                  </div>
                  <div className="flex gap-1 ml-1">
                    {ingredients.length !== 1 && (
                      <button
                        className="border-none shadow-none bg-red-200 hover:bg-red-300 rounded-md px-3 focus:outline-none focus:ring-2 focus:ring-red-700"
                        onClick={() => {
                          handleRemoveIngredient(ingredient.id);
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 text-red-700"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    )}
                    {ingredients.length - 1 === index && (
                      <button
                        className="border-none shadow-none bg-green-200 hover:bg-green-300 rounded-md px-3 focus:outline-none focus:ring-2 focus:ring-green-700"
                        onClick={handleAddMoreIngredient}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 text-green-700"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                        </svg>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </fieldset>
    </>
  );
}

export default Ingredient;
