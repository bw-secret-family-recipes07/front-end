import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';

import PrivateRoute from '../src/components/PrivateRoute';
import RecipeList from '../src/components/RecipeList';
import CreateAccountForm from '../src/components/CreateAccountForm';

function App() {
  return (
    <div className="App">
     <Switch>
       <PrivateRoute path='/recipes/recipe/id'>
         {/*need to add filter to grab the recipe id and show that recipe card*/ }
       </PrivateRoute>
       <PrivateRoute path='/recipes' component={RecipeList} />
       {/*add Logout Route here*/ }
       <Route path='/register' component={CreateAccountForm} />
       <Route path='/login' />
       <Route path='/' />
       {/* need to add login component in routes */}
     </Switch>
    </div>
  );
}

export default App;
