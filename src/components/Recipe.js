import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';

const Recipe = (props) => {
    const { id } = useParams();
    const { push } = useHistory();
    const { recipes } = props;

    const recipe = recipes.find(recipe => recipe.id === Number(id));

    const handleEdit = () => {

    }

    const handleDelete = () => {
        push('/recipes');
    }

    return (
        <div>
            <div className='top'>
                <button>Back</button>
                <button>Logout</button>
            </div>
            <div className='recipe-pic'>
                <img src='https://media.istockphoto.com/photos/grilled-chicken-meat-and-fresh-vegetable-salad-of-tomato-avocado-and-picture-id1295633127?b=1&k=20&m=1295633127&s=170667a&w=0&h=VDkBqjm0RShberDPMJ_L-LHX1rZ5v8yNvq0I0UxXquM=' alt='chicken salad' />
            </div>
            <div className='recipe-top'>
                <h2>{recipe.title}</h2>
                <h3>by {recipe.source}</h3>
            </div>
            <section className='recipe-body'>
                <div className='ingredients'>
                    <h3>Ingredients</h3>
                    <ul>
                        {
                            recipes.ingredients.map(item => <li>{item}</li>)
                        }
                    </ul>
                    <h3>Category</h3>
                    <h4>{recipe.category}</h4>
                </div>
                <div className='directions'>
                    <h3>Directions</h3>
                    <ol>
                        {
                            recipes.directions.map(item => <li>{item}</li>)
                        }
                    </ol>
                </div>
            </section>
            <div className='buttons'>
                <button onClick={handleEdit}>Edit</button>
                <button onClick={handleDelete}>Delete</button>
            </div>
        </div>);
}

const mapStateToProps = (state) => {
    return {
        recipes: state.recipes
    }
}

export default connect(mapStateToProps)(Recipe);