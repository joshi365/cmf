import React from 'react';
import './App.css';
import SignUp from './Components/SignUp';
import Login from './Components/Login'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

//REDUX//
import {Provider} from 'react-redux';
import store from './store/store';

function App() {
  return (
    <Provider store ={store}>
    <Router>
    <Switch> 
      <Route exact path='/' component={SignUp}/>
      <Route exact path='/login' component={Login}/>
    </Switch>
    </Router>
    </Provider>
  );
}

export default App;
