import React, {useState} from 'react';
import { Switch, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

import Header from './components/Header';
import CardsContainer from './components/CardsContainer';
import Home from './components/Home';


import './App.css';

function App() {

  return (
    <div className="App">
      <Header/>
      <Switch>

        <Route exact path="/">
          <Home/>
        </Route>

        <Route path="/cards">
          <CardsContainer/>
        </Route>

      </Switch>
    </div>
  );
}

export default App;
