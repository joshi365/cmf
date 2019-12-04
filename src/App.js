import React from 'react';
import './app.css';
import SignUp from './Components/SignUp';
import Login from './Components/Login';
import FriendList from './Components/FriendList';
import AddAFriend from './Components/AddAFriend';
import PrivateRoute from './Components/Private Route/PrivateRoute'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import WelcomePage from './Components/WelcomePage';
import EditFriend from './Components/EditFriend';

//REDUX//
import {Provider} from 'react-redux';
import store from './store/store';
   
function App() {
  return (
    <Provider store ={store}>
    <Router>
    <Switch>
      <Route exact path='/' component={WelcomePage}/> 
      <Route exact path='/signup' component={SignUp}/>
      <Route exact path='/login' component={Login}/>
      <PrivateRoute exact path='/friendlist' component={FriendList}/>
      <PrivateRoute exact path='/addafriend' component={AddAFriend}/>
      <PrivateRoute exact path="/editfriend" component={EditFriend}/>
    </Switch>
    </Router>
    </Provider>
  );
}

export default App;
