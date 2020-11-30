import  { Route, Switch } from 'react-router-dom'
import React from 'react';
import './App.css';
import ListBeers from './components/ListBeers';
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer';
import Home from './components/Home'
import SingleBeer from './components/SingleBeer';


function App() {
  return (
    <div className="App">
  
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/beers" component={ListBeers} />
        <Route exact path="/beers/:beerId" component={SingleBeer} />
        <Route exact path="/beers/random-beer" component={RandomBeer} />
        <Route exact path="/beers/new-beer" component={NewBeer} />
      </Switch>
      
    </div>
  );
}

export default App;
