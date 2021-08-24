import { React } from 'react';
import Ingredient from './Ingredient';

function Form() {
  return (
    <div className="w-full sm:max-w-screen-lg mx-auto">
      <form action="">
        <div className="px-4 py-6 space-y-6">
          <div className="flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
            <div className="space-y-1 text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 mx-auto text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <div className="flex justify-center text-sm sm:text-base text-gray-600">
                <label
                  htmlFor="file-upload"
                  className="relative cursor-pointer bg-white rounded-md font-medium text-red-700 hover:text-red-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-red-700"
                >
                  <span>Upload a file</span>
                  <input id="file-upload" name="file-upload" type="file" className="sr-only"></input>
                </label>
                <p className="pl-1">No file chosen</p>
              </div>
              <p className="text-sm sm:text-base text-gray-500">Image upload up to 5 MB</p>
            </div>
          </div>
          <div>
            <label htmlFor="title" className="block font-medium text-gray-700">
              Title
            </label>
            <div className="mt-1">
              <input
                id="title"
                name="title"
                type="text"
                autoComplete="off"
                className="block w-full border border-gray-300 bg-gray-50 rounded-md shadow-sm px-4 py-2 font-light focus:outline-none focus:ring-2 focus:ring-red-700 focus:border-red-700"
                placeholder="Title: Delicious Chicken Soup"
              ></input>
            </div>
          </div>
          <div>
            <label htmlFor="tags" className="block font-medium text-gray-700">
              Tags
            </label>
            <div className="mt-1">
              <input
                id="tags"
                name="tags"
                type="text"
                autoComplete="off"
                className="block w-full border border-gray-300 bg-gray-50 rounded-md shadow-sm px-4 py-2 font-light focus:outline-none focus:ring-2 focus:ring-red-700 focus:border-red-700"
                placeholder="chicken, soup, broth, delcious, family"
              ></input>
            </div>
          </div>
          <div>
            <label htmlFor="description" className="block font-medium text-gray-700">
              Description
            </label>
            <div className="mt-1">
              <textarea
                id="description"
                name="description"
                rows="5"
                className="block w-full border border-gray-300 bg-gray-50 rounded-md shadow-sm px-4 py-2 font-light focus:outline-none focus:ring-2 focus:ring-red-700 focus:border-red-700"
                placeholder="Write a story about your recipe - who insipre you to create this recipe, what makes this recipe unique and special?"
              ></textarea>
            </div>
          </div>
          <div>
            <Ingredient></Ingredient>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Form;
