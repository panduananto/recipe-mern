import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import Loading from './Loading';
import RecipePost from './RecipePost';
import { fetchRecipe } from '../redux/actions/recipe';
import { STOP_LOADING } from '../redux/constants/loading';

function Home(props) {
  const { fetchRecipe, stopLoading } = props;

  useEffect(() => {
    fetchRecipe();

    return () => stopLoading();
  }, [fetchRecipe, stopLoading]);

  return (
    <div className="w-full sm:max-w-screen-lg mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 px-4 py-6">
        {props.loading ? (
          <Loading></Loading>
        ) : props.recipe.length !== 0 ? (
          props.recipe.map((item) => {
            return <RecipePost data={item}></RecipePost>;
          })
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
    recipe: state.recipe,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchRecipe: () => dispatch(fetchRecipe()),
    stopLoading: () => dispatch({ type: STOP_LOADING }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
