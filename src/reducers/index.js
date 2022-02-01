


export const initialState = {
    image: 'https://media.istockphoto.com/photos/grilled-chicken-meat-and-fresh-vegetable-salad-of-tomato-avocado-and-picture-id1295633127?b=1&k=20&m=1295633127&s=170667a&w=0&h=VDkBqjm0RShberDPMJ_L-LHX1rZ5v8yNvq0I0UxXquM=',
    title: 'Potato Soup',
    source: 'Jess',
    ingredients: ['Potatoes', 'condensed milk', 'bacon', 'cheese', 'salt', 'pepper'],
    category: 'Soup',
    directions: ['1. peel and dice potatoes', '2. bring pot of water to a boil', '3. add potatoes and let boil until soft', '4. add in condensed milk and let simmer', '5. add bacon and cheese', '6. serve']
}

const reducer = (state, action) => {
    switch(action.type) {
        default: 
            return state;
    }
}

export default reducer;