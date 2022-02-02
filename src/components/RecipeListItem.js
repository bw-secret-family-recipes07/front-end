import React from 'react';
import { Link } from 'react-router-dom';

const RecipeListItem = (props) => {
  const { id, title, source, category } = props.recipe;

  return (<div>
    <tr key={id}>
      <td>{title}</td>
      <td>{source}</td>
      <td>{category}</td>
      <td>
        <Link to={`/recipes/${id}`} className='view'>
          <input 
          type='button' 
          className='btn btn-secondary' 
          value='View' />
        </Link>
      </td>
    </tr>
  </div>);
}

export default RecipeListItem;