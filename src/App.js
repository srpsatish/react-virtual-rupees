import React from 'react';
import './App.css';
import Home from './pages';
import { Switch, Route } from 'react-router-dom';
import SigninPage from './pages/signin';


function App() {
  return (
    <>
    <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/signin" component={SigninPage} exact />
    </Switch>
    </>
  );
}

export default App;
