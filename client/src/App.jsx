import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import PlayerDetails from './components/PlayerDetails';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/players/:id" component={PlayerDetails} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
