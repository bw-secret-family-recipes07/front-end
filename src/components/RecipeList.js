import React from 'react';


import Recipe from './Recipe';

export default function RecipeList() {
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
        <div className='recipes'>
          <Recipe />
        </div>
    </div>);
}
