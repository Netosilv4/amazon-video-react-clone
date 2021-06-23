import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import './GlobalStyles.css';
import Film from './pages/Film';
import Header from './components/header';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/movie/:id" component={Film} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
