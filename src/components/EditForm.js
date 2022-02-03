import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axiosWithAuth from '../utils/axiosWithAuth';

const initialRecipe = {
    id: '123',
    image: 'https://media.istockphoto.com/photos/grilled-chicken-meat-and-fresh-vegetable-salad-of-tomato-avocado-and-picture-id1295633127?b=1&k=20&m=1295633127&s=170667a&w=0&h=VDkBqjm0RShberDPMJ_L-LHX1rZ5v8yNvq0I0UxXquM=',
    title: 'Potato Soup',
    source: 'Jess',
    ingredients: ['Potatoes', 'condensed milk', 'bacon', 'cheese', 'salt', 'pepper'],
    category: 'Soup',
    directions: ['1. peel and dice potatoes', '2. bring pot of water to a boil', '3. add potatoes and let boil until soft', '4. add in condensed milk and let simmer', '5. add bacon and cheese', '6. serve']
};

const EditForm = (props) => {
    const [recipe, setRecipe] = useState(initialRecipe);
    const { handleEdit, handleEditCancel, editId } = props;

    useEffect(() => {
        axiosWithAuth()
        .get(`/items/${editId}`)
        .then(res => {
            console.log(res);
        })
        .catch(err => console.log(err))
    })

    const handleChange = (e) => {
        setRecipe({
            ...recipe,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        handleEdit(recipe);
    }

    const handleCancel = (e) => {
        e.preventDefault()
        handleEditCancel();
    }

    return (
        <div>
        <h1>Secret Family Recipe Cookbook</h1>
        <div className='form'>
            <h2>Enter your Information below to Create your Account</h2>
            <FormContainer>
                <label>Recipe Image:</label>
                <input 
                type='file'
                alt='this is a recipe image'
                name='image'
                value={recipe.image}
                onChange={handleChange}
                />
                <label>Title:</label>
                <input 
                type='text'
                name='title'
                value={recipe.title}
                onChange={handleChange}
                />
                 <label>Source:</label>
                <input 
                type='text'
                name='source'
                value={recipe.source}
                onChange={handleChange}
                />
                 <label>Ingredients:</label>
                <input 
                type='text'
                name='ingredients'
                value={recipe.ingredients}
                onChange={handleChange}
                />
                 <label>Directions:</label>
                <input 
                type='text'
                name='directions'
                value={recipe.directions}
                onChange={handleChange}
                />
                 <label>Category:</label>
                <input 
                type='text'
                name='category'
                value={recipe.category}
                onChange={handleChange}
                />
                <Button onSubmit={handleSubmit}>Edit Recipe</Button>
                <Button onClick={handleCancel}>Cancel</Button>
            </FormContainer>
            
        </div>
    </div>
    )
}

export default EditForm;

const FormContainer = styled.form`
    padding: 1em;
    width: 400px;
    background: white;

    label {
        margin-top: 0.5em;
    }

    input {
        padding: 0.5em;
    }
    
    div { 
        margin: 0.5em 0;
    }
`

const Button = styled.button`
    width: 100%;
    padding:1em;
    margin-top: 1em;
`

