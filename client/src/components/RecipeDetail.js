import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { connect } from 'react-redux';

import { fetchRecipeById } from '../redux/actions/recipe';
import { STOP_LOADING } from '../redux/constants/loading';
import Loading from './Loading';

function RecipeDetail(props) {
  const { fetchRecipeById, stopLoading } = props;
  const { id } = useParams();

  useEffect(() => {
    fetchRecipeById(id);

    return () => stopLoading();
  }, [fetchRecipeById, id, stopLoading]);

  return (
    <div className="w-full sm:max-w-screen-lg mx-auto">
      <div className="px-4 py-6">{props.loading ? <Loading></Loading> : <p>Recipe Detail</p>}</div>
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
