import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Components/Home/Home';
import NoMatch from './Components/NoMatch/NoMatch';
import UserDetail from './Components/UserDetail/UserDetail';
 
function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/home' component={Home}/>
          <Route exact path='/user/detail/:userId' component={UserDetail}/>
          <Route exact path='*' component={NoMatch}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
