import React from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';

import PrivateRoute from '../src/components/PrivateRoute';
import RecipeList from '../src/components/RecipeList';
import CreateAccountForm from '../src/components/CreateAccountForm';
import Logout from './components/Logout';
import Recipe from './components/Recipe';


const App = () => {


  return (
    <div className="App">
     <Switch>
       <PrivateRoute path='/recipes/:id'>
         <Recipe />
       </PrivateRoute>
       
       <PrivateRoute path='/recipes' component={RecipeList} />
       
       <PrivateRoute path='/logout' component={Logout} />
       
       <Route path='/register' component={CreateAccountForm} />
       
       <Route path='/login' />
       
       <Route path='/' />
       <Redirect to='/login' />
     </Switch>
    </div>
  );
}

export default App;
