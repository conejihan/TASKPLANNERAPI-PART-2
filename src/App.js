import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import 'react-datepicker/dist/react-datepicker.css';
import {Login} from "./components/Login";
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import {TodoApp} from "./TodoApp";

class App extends Component {



    render() {
      return (
          <Router>
              <div className="App">
                  <div>
                      <Route exact path="/components/Login" component={Login}/>
                  </div>
              </div>
          </Router>
      );
    }

}

export default App;
