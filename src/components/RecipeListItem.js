import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const RecipeListItem = (props) => {
  const { img, title, source, category, id } = props.recipe;

  return (<ComponentContainer>
        <img src={img} alt='recipe card' />
        <h4>{title}</h4>
        <h4>{source}</h4>
        <h4>{category}</h4>
        <Link to={`/recipes/${id}`} className='view'>
          <input 
          type='button' 
          className='btn btn-secondary' 
          value='View' />
        </Link>
  </ComponentContainer>);
}

export default RecipeListItem;

const ComponentContainer = styled.div`
    display:flex;
    width: 80%;
    flex-direction: column;
    justify-content: center;
    
`