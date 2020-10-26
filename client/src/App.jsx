import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import PlayerDetails from './components/PlayerDetails';
import NavMenu from './components/Nav/NavMenu';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <NavMenu />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/players/:id" component={PlayerDetails} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
