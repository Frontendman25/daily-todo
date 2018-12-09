import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import PageTodoList from './components/PageTodoList'
import Login from './components/Login'
import ToDo from './components/ToDo'

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="nav" style={{display: 'flex', justifyContent: 'space-around'}}>
            <Link to="/about">
              PageTodoList
            </Link>
            <Link to="/">
              Login
            </Link>
          </div>
          <Route exact path="/" component={Login}/>
          <Route path="/about" component={PageTodoList}/>
          <Route path="/todo" component={ToDo}/>
        </div>
      </Router>
    );
  }
}

export default App;
