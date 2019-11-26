import React from 'react';
import { Route, BrowserRouter as Router,Switch } from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from '../header/Header';
import Content from '../content/Content';
import Footer from '../footer/Footer';
import Navigate from '../navigate/Navigate';
import Movies from '../content/Movies/Movies';
import Actors from '../content/Actors/Actors';
import ActorsContent from '../content/ActorsContent/ActorsContent'
import MoviesContent from '../content/MoviesContent/MoviesContent';

function App() {
  return (
    <div className="App">
      <Header ms="2000"/>
      <Router>
        <div className="containerStyle">
          <Navigate/>
          <Switch>
            {/* <Content/> */}
            <Route exact path="/" component={Content} />
            <Route exact path="/movies" component={Movies} />
            <Route exact path="/actors" component={Actors} />
            <Route exact path="/moviecontent" component={MoviesContent} />
            <Route exact path="/actorscontent" component={ActorsContent} />
          </Switch>
        </div>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
