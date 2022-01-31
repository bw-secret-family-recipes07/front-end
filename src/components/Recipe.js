import React from 'react';

export default function Recipe() {
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
            <h2>Recipe Title</h2>
            <h3>by Grammy Ruby</h3>
        </div>
        <div className='recipe-body'>
            <div className='ingredients'>
                <h3>Ingredients</h3>
                <ul>
                    <li>List if ingredients</li>
                </ul>
                <h3>Category</h3>
                <h4>Breakfast</h4>
            </div>
            <div className='directions'>
                <h3>Directions</h3>
                <ol>
                    <li>steps</li>
                </ol>
            </div>
        </div>
        <div className='buttons'>
            <button>Edit</button>
            <button>Delete</button>
        </div>
    </div>);
}
