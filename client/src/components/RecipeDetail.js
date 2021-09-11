import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { connect } from 'react-redux';

import { fetchRecipeById } from '../redux/actions/recipe';
import { STOP_LOADING } from '../redux/constants/loading';
import Loading from './Loading';

import placholderMissingImage from '../assets/placeholder-missing-image.png';

function RecipeDetail(props) {
  const { recipe } = props.recipes;
  const { fetchRecipeById, stopLoading } = props;
  const { id } = useParams();

  console.log(props);

  useEffect(() => {
    fetchRecipeById(id);

    return () => stopLoading();
  }, [fetchRecipeById, id, stopLoading]);

  return (
    <div className="w-full sm:max-w-screen-lg mx-auto">
      <div className="px-4 py-6">
        {props.loading ? (
          <Loading></Loading>
        ) : recipe !== undefined ? (
          <div className="my-10">
            <div className="space-y-4">
              <p className="font-bold text-3xl md:text-5xl text-gray-900">{recipe.title}</p>
              <div className="flex items-center gap-1">
                <span className="text-yellow-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </span>
                <span className="block font-light">{recipe.rating} Ratings</span>
              </div>
              <p>{recipe.description}</p>
              <div className="flex items-center gap-2">
                <button className="rounded-full bg-[#f6f6f6] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#f6f6f6] focus:ring-red-700">
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt="user profile"
                    className="h-8 sm:h-10 w-8 sm:w-10 rounded-full"
                  />
                </button>
                <p className="font-light">
                  By <span className="font-normal">{recipe.creator}</span>
                </p>
              </div>
              <div className="rounded-xl overflow-hidden h-52 md:h-96">
                <img
                  src={recipe.images ? recipe.images : placholderMissingImage}
                  alt={recipe.title}
                  className="w-full h-full object-center object-cover"
                />
              </div>
              <div className="space-y-4 before:content-[''] before:block before:h-[2px] before:w-full before:rounded-md before:bg-red-700 before:my-8">
                <p className="font-bold text-2xl">Ingredients</p>
                <ul className="space-y-2">
                  {recipe.ingredient.map((item) => (
                    <li key={item._id} className="font-light">
                      {item.name} <span className="font-medium">({item.amount})</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ) : (
          <p>Something went wrong</p>
        )}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    loading: state.loading,
    recipes: state.recipes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchRecipeById: (id) => dispatch(fetchRecipeById(id)),
    stopLoading: () => dispatch({ type: STOP_LOADING }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RecipeDetail);
