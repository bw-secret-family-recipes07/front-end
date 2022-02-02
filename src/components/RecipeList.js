import React from 'react';
import { connect } from 'react-redux';

import RecipeListItem from './RecipeListItem';

const RecipeList = (props) => {
    const { recipes } = props;

  return (
    <div>
        <div className='top'>
            <h2>Welcome User!</h2>
            <button>Logout</button>
        </div>
        <div className='search-add'>
            <input>Search</input>
            <button>Add New Recipe +</button>
        </div>
        <table className='table table-striped table-hover'>
            <tbody>
                {
                    recipes.map(recipe => <RecipeListItem key={recipe.id} recipe={recipe} />)
                }
            </tbody>
        </table>
    </div>);
}

const mapStateToProps = (state) => {
    return {
        recipes: state.recipes
    }
}

export default connect(mapStateToProps)(RecipeList);