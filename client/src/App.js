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
      <main className="flex flex-col w-full min-h-screen">
        <PageHeader></PageHeader>
        <section className="flex flex-col flex-1 py-20">
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
        </section>
        <NavigationBar></NavigationBar>
      </main>
    </Router>
  );
}

export default App;
