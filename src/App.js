import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Welcome from './components/Welcome';
import Register from './components/Register';
import Order from './components/Order';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route path="/order" component={Order} />
          <Route path="/register" component={Register} />
        </Switch>
      </header>
    </div>
  );
}

export default App;
