import React from 'react';
import styled from 'styled-components';
import { useParams, useHistory } from 'react-router-dom';


const Recipe = (props) => {
    const { recipes, handleEdit, handleDelete } = props;
    const { id } = useParams();
    const { push } = useHistory();

    const recipe = recipes.find(recipe => recipe.id === Number(id));


    const handleDeleteClick = (recipe) => {
        handleDelete(recipe);
        push('/recipes');
    }

    return (<div>
        <RecipeStyle>
            <Container>
                <button>Back</button>
                <button>Logout</button>
            </Container>
            <Container>
                <img src='https://media.istockphoto.com/photos/grilled-chicken-meat-and-fresh-vegetable-salad-of-tomato-avocado-and-picture-id1295633127?b=1&k=20&m=1295633127&s=170667a&w=0&h=VDkBqjm0RShberDPMJ_L-LHX1rZ5v8yNvq0I0UxXquM=' alt='chicken salad' />
            </Container>
            <Container>
                <h2>{recipe.title}</h2>
                <h3>by {recipe.source}</h3>
            </Container>
            <section className='recipe-body'>
                <Container>
                    <h3>Ingredients</h3>
                    <ul>
                        {
                            recipes.ingredients.map(item => <li>{item}</li>)
                        }
                    </ul>
                    <h3>Category</h3>
                    <h4>{recipe.category}</h4>
                </Container>
                <Container>
                    <h3>Directions</h3>
                    <ol>
                        {
                            recipes.directions.map(item => <li>{item}</li>)
                        }
                    </ol>
                </Container>
            </section>
            </RecipeStyle>
            <ButtonContainer>
                <button onClick={handleEdit}>Edit</button>
                <button onClick={handleDeleteClick}>Delete</button>
            </ButtonContainer>
            </div>);
}

export default Recipe;

const RecipeStyle = styled.div`
    display: flex;
    flex-direction: row;
    padding: 0.5em; 
    background: grey;
`

const Container = styled.div`
    padding: 0.5em; 
`

const ButtonContainer = styled.div`
    padding: 1em;
    text-transform: uppercase;
    text-align:right;

    button {
        width: 100px;
        padding:0.5em;
    }
`