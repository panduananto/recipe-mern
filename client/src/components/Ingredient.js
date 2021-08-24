import { React, useState } from 'react';

function Ingredient() {
  return (
    <>
      <fieldset>
        <legend className="font-medium text-gray-700">Ingredients</legend>
        <div className="mt-1 grid grid-cols-3 gap-2">
          <div className="col-span-3 sm:col-span-2">
            <label htmlFor="ingredient-1" className="sr-only">
              Ingredient-1
            </label>
            <div className="flex items-center gap-1">
              <input
                id="ingredient-1"
                name="ingrdient-1"
                type="text"
                className="block w-full px-4 py-2 border border-solid border-gray-300 rounded-l-md bg-gray-50 shadow-sm font-thin focus:outline-none focus:ring-2 focus:ring-red-700 focus:border-red-700"
                placeholder="garlic"
              />
              <div>
                <label htmlFor="amount-ingredient-1" className="sr-only"></label>
                <input
                  id="amount-ingredient-1"
                  name="amount-ingredient-1"
                  type="text"
                  className="block w-full px-4 py-2 border border-solid border-gray-300 rounded-r-md bg-white shadow-sm font-thin focus:outline-none focus:ring-2 focus:ring-red-700 focus:border-red-700"
                  placeholder="1 clove"
                />
              </div>
              <button className="border-none shadow-none ml-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
          <div className="col-span-3 sm:col-span-2">
            <label htmlFor="ingredient-2" className="sr-only">
              Ingredient-2
            </label>
            <div className="flex items-center gap-1">
              <input
                id="ingredient-2"
                name="ingrdient-2"
                type="text"
                className="block w-full px-4 py-2 border border-solid border-gray-300 rounded-l-md bg-gray-50 shadow-sm font-thin focus:outline-none focus:ring-2 focus:ring-red-700 focus:border-red-700"
                placeholder="water"
              />
              <div>
                <label htmlFor="amount-ingredient-2" className="sr-only"></label>
                <input
                  id="amount-ingredient-1"
                  name="amount-ingredient-1"
                  type="text"
                  className="block w-full px-4 py-2 border border-solid border-gray-300 rounded-r-md bg-white shadow-sm font-thin focus:outline-none focus:ring-2 focus:ring-red-700 focus:border-red-700"
                  placeholder="sufficiently"
                />
              </div>
              <button className="border-none shadow-none ml-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </fieldset>
      <button className="bg-red-700 hover:bg-red-600 rounded-md text-sm text-white px-4 py-2 mt-3 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#f6f6f6] focus:ring-red-700">
        Add more
      </button>
    </>
  );
}

export default Ingredient;
