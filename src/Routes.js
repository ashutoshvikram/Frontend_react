import React from 'react';
import './App.css';

import Home from './components/Home';
import {BrowserRouter as Router,Route,Switch,withRouter, Link} from  'react-router-dom';
import Contactus from './components/Contactus';
import Category from './components/Category';
import Location from './components/Location';
import Login from './components/Login';
import Signup from './components/Signup'
import Adddetails from './components/Adddetails';
import PrivateRoute from './helper/PrivateRoute'
import Navgbar from './Subcompo/Navgbar';
const Routes=()=>{
  return (
    <Router>
     
      <Switch>
    <Route path="/" exact component={withRouter(Home)}/>
    <Route path="/contactus" exact component={Contactus}/>
    <Route path="/category/:name" exact component={Category}/>
    <Route path="/location/:name" exact component={Location}/>
    
    <Route path="/login" exact component={Login}/>
    <Route path="/signup" exact component={Signup}/>
    </Switch>
    </Router>

  );
};

export default Routes;
