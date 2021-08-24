import { React, useState } from 'react';

function Ingredient() {
  const [ingredientList, setIngredient] = useState([{ name: '', amount: '' }]);

  const handleChangeIngredient = (event, index) => {
    const { name, value } = event.target;
    const ingredientListTemp = [...ingredientList];
    ingredientListTemp[index][name] = value;

    setIngredient(ingredientListTemp);
  };

  const handleAddMoreIngredient = () => {
    setIngredient([...ingredientList, { name: '', amount: '' }]);
  };

  const handleRemoveIngredient = (index) => {
    const ingredientListTemp = [...ingredientList];
    ingredientListTemp.splice(index, 1);

    setIngredient(ingredientListTemp);
  };

  return (
    <>
      <fieldset>
        <legend className="font-medium text-gray-700">Ingredients</legend>
        <div className="mt-1 grid grid-cols-3 gap-2">
          {ingredientList.map((ingredient, index) => {
            return (
              <div key={index} className="col-span-3 sm:col-span-2">
                <label htmlFor="name" className="sr-only">
                  Ingredient-{index + 1}
                </label>
                <div className="flex items-stretch gap-1 rounded-md">
                  <input
                    id={`ingredient-${index + 1}`}
                    name="name"
                    type="text"
                    className="block w-full px-4 py-2 border border-solid border-gray-300 rounded-l-md bg-gray-50 shadow-sm font-thin focus:outline-none focus:ring-2 focus:ring-red-700 focus:border-red-700"
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
                      className="block w-full px-4 py-2 border border-solid border-gray-300 rounded-r-md bg-white shadow-sm font-thin focus:outline-none focus:ring-2 focus:ring-red-700 focus:border-red-700"
                      placeholder="1 clove"
                      value={ingredient.amount}
                      onChange={(event) => handleChangeIngredient(event, index)}
                    />
                  </div>
                  <div className="flex gap-1 ml-1">
                    {ingredientList.length !== 1 && (
                      <button
                        className="border-none shadow-none bg-red-200 hover:bg-red-300 rounded-md px-3 focus:outline-none focus:ring-2 focus:ring-red-700"
                        onClick={() => handleRemoveIngredient(index)}
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
                    {ingredientList.length - 1 === index && (
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
