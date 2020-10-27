import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import PlayerDetails from './components/PlayerDetails';
import NavMenu from './components/Nav/NavMenu';
<<<<<<< HEAD
=======
import MainPageTemplate from './components/MainPageTemplate';


>>>>>>> 309835f... Adding styling
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <NavMenu />
<<<<<<< HEAD
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/players/:id" component={PlayerDetails} />
      </Switch>
    </BrowserRouter>
  );
}
=======
      <MainPageTemplate />
    </div>
  );  
};
>>>>>>> 309835f... Adding styling

export default App;
