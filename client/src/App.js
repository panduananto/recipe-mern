import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import PageHeader from './components/PageHeader';
import NavigationBar from './components/NavigationBar';
import AddRecipe from './components/AddRecipe';
import Profile from './components/Profile';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <div>
        <PageHeader></PageHeader>
        <Switch>
          <Route path="/add-recipe">
            <AddRecipe></AddRecipe>
          </Route>
          <Route path="/profile">
            <Profile></Profile>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
        </Switch>
        <NavigationBar></NavigationBar>
      </div>
    </Router>
  );
}

export default App;
