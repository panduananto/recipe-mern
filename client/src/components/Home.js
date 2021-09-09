import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';

import Loading from './Loading';
import { fetchRecipe } from '../redux/actions/recipe';

import placholderMissingImage from '../assets/placeholder-missing-image.png';

function Home(props) {
  const { fetchRecipe } = props;
  const recipeRef = useRef(props.recipe);

  useEffect(() => {
    if (props.recipe === recipeRef.current) {
      return;
    }

    fetchRecipe();
  }, [fetchRecipe, props.recipe]);

  return (
    <div className="w-full sm:max-w-screen-lg mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 px-4 py-6">
        {props.loading ? (
          <Loading></Loading>
        ) : (
          props.recipe.map((item) => {
            return (
              <div key={item._id} className="border border-solid rounded-md border-gray-200 overflow-hidden">
                <a href="#" className="block w-full h-40">
                  <img
                    src={item.images ? item.images : placholderMissingImage}
                    alt="dish"
                    className="w-full h-full object-center object-cover"
                  />
                </a>
                <div className="p-4 space-y-2">
                  <a href="#" className="font-serif font-bold text-gray-900 hover:underline">
                    {item.title}
                  </a>
                  <div className="flex items-center gap-1">
                    <span className="text-yellow-400">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </span>
                    <span className="block font-light">{item.rating}</span>
                  </div>
                  <p className="font-light">
                    By{' '}
                    <a
                      href="#"
                      className="relative font-normal after:absolute after:inset-x-0 after:bottom-[-1px] after:h-[1px] after:w-full after:bg-red-700 hover:after:bg-red-600"
                    >
                      {item.creator}
                    </a>
                  </p>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    loading: state.loading,
    recipe: state.recipe,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchRecipe: () => dispatch(fetchRecipe()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
