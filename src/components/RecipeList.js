import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import EditForm from './EditForm';
import RecipeListItem from './RecipeListItem';
import axiosWithAuth from '../utils/axiosWithAuth';

const RecipeList = () => {
    const [recipes, setRecipes] = useState([]);
    const [editing, setEditing] = useState(false);
    const [editId, setEditId] = useState();

    useEffect(() => {
        axiosWithAuth()
        .get('/items')
        .then(res => {
            console.log(res);
            setRecipes();
            //add the correct response here
        })
        .catch(err => {
            console.log(err);
        })
    }, [])

    const handleDelete = (id) => {
        axiosWithAuth()
        .delete(`/items/${id}`)
        .then(res => {
            console.log(res);
            setRecipes();
            //add the correct response here
        })
        .catch(err => console.log(err));
    }

    const handleEdit = (recipe) => {
        axiosWithAuth()
        .put(`/items/${editId}`, recipe)
        .then(res => {
            console.log(res);
        })
        .catch(err => console.log(err));
    }

    const handleEditSelect = (id) => {
        setEditing(true);
        setEditId(id);
    }

    const handleEditCancel = () => {
        setEditing(false);
    }

  return (
    <ComponentContainer>
        <HeaderContainer>
            <h2>Welcome User!</h2>
            <button>Logout</button>
            <input>Search</input>
            <button>Add New Recipe +</button>
        </HeaderContainer>
        <RecipeContainer>
                {
                    recipes.map(recipe => {
                    return <RecipeDivider key={recipe.id}>
                        <RecipeListItem key={recipe.id} recipe={recipe} handleDelete={handleDelete} handleEditSelect={handleEditSelect}/>
                        </RecipeDivider>
                    })
                }
        </RecipeContainer>

        {
            editing && <EditForm editId={editId} handleEdit={handleEdit} handleEditCancel={handleEditCancel} />
        }
    </ComponentContainer>);
}

export default RecipeList;

const HeaderContainer = styled.h1`
    border-bottom: solid black 2px;
    padding: 1em;
    margin:0;
    font-size: 1.5em;
    background: black;
    color: white;
`

const RecipeDivider = styled.div`
    border-bottom: 1px solid black;
    padding: 1em;
`

const ComponentContainer = styled.div`
    display:flex;
    width: 80%;
    flex-direction: column;
    justify-content: center;
    
`

const RecipeContainer = styled.div`
    background: grey;
`;
