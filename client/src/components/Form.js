import { React, useRef, useState } from 'react';
import { connect } from 'react-redux';

import { v4 as uuidv4 } from 'uuid';

import Ingredient from './Ingredient';
import Loading from './Loading';
import Steps from './Steps';
import ImageUpload from './ImageUpload';

import { createRecipe } from '../redux/actions/recipe';

function Form(props) {
  const imageUploadRef = useRef();
  const [recipe, setRecipe] = useState({
    title: '',
    tags: '',
    description: '',
    ingredient: [{ id: uuidv4(), name: '', amount: '' }],
    step: [{ id: uuidv4(), description: '', image: '' }],
    images: '',
  });

  const resetForm = () => {
    imageUploadRef.current.clearImageFileName();
    setRecipe({
      title: '',
      tags: '',
      description: '',
      ingredient: [{ id: uuidv4(), name: '', amount: '' }],
      step: [{ id: uuidv4(), description: '', image: '' }],
      images: '',
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const ingredientAndAmount = recipe.ingredient.map(({ name, amount }) => ({ name, amount }));
    const stepAndImage = recipe.step.map(({ description, image }) => ({ description, image }));
    const recipeToInput = { ...recipe, ingredient: ingredientAndAmount, step: stepAndImage };

    props.createRecipe(recipeToInput).then(() => {
      resetForm();
    });
  };

  return (
    <div className="w-full sm:max-w-screen-lg mx-auto">
      {props.loading && <Loading></Loading>}
      <form action="" className="divide-y-2 divide-solid divide-red-700" onSubmit={(event) => handleSubmit(event)}>
        <div className="px-4 py-6 space-y-6">
          <ImageUpload
            setImage={(event, callback) => {
              const { files } = event.target;
              callback(files).then((results) => setRecipe({ ...recipe, images: results }));
            }}
            containerStyle={'flex self-start justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md'}
            fieldIdentity={'thumbnail-file-upload'}
            fieldName={'images'}
            fieldHelperText={'Image size up to 5 MB'}
            width={'w-44'}
            ref={imageUploadRef}
          ></ImageUpload>
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
                className="block w-full border border-gray-300 bg-gray-50 rounded-md shadow-sm px-4 py-2 font-light focus:outline-none focus:ring-1 focus:ring-red-700 focus:border-red-700"
                placeholder="Title: Delicious Chicken Soup"
                value={recipe.title}
                onChange={(event) => setRecipe({ ...recipe, title: event.target.value })}
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
                className="block w-full border border-gray-300 bg-gray-50 rounded-md shadow-sm px-4 py-2 font-light focus:outline-none focus:ring-1 focus:ring-red-700 focus:border-red-700"
                placeholder="chicken, soup, broth, delcious, family"
                value={recipe.tags}
                onChange={(event) => setRecipe({ ...recipe, tags: event.target.value.split(',') })}
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
                className="block w-full border border-gray-300 bg-gray-50 rounded-md shadow-sm px-4 py-2 font-light focus:outline-none focus:ring-1 focus:ring-red-700 focus:border-red-700"
                placeholder="Write a story about your recipe - who insipre you to create this recipe, what makes this recipe unique and special?"
                value={recipe.description}
                onChange={(event) => setRecipe({ ...recipe, description: event.target.value })}
              ></textarea>
            </div>
          </div>
          <div>
            <Ingredient ingredient={recipe.ingredient} setRecipe={setRecipe}></Ingredient>
          </div>
          <div>
            <Steps step={recipe.step} setRecipe={setRecipe}></Steps>
          </div>
        </div>
        <div className="flex justify-end gap-2 px-4 py-6">
          <button
            type="button"
            className="px-4 py-2 rounded-md bg-gray-200 hover:bg-gray-300 text-sm sm:text-base text-gray-500 font-light focus:outline-none focus:ring-2 focus:ring-gray-200 focus:ring-offset-2 focus:ring-offset-[#f6f6f6]"
            onClick={resetForm}
          >
            Reset
          </button>
          <button className="px-4 py-2 rounded-md bg-red-700 hover:bg-red-600 text-sm sm:text-base text-white font-light focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 focus:ring-offset-[#f6f6f6]">
            Add recipe
          </button>
        </div>
      </form>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    loading: state.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createRecipe: (recipe) => {
      return Promise.resolve(dispatch(createRecipe(recipe)));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
