//labs

import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Signup from './Signup';
import Login from './Login';
import Profile from './Profile';

function App() {
  return (
    <Router>
      <Route path="/" exact component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/profile" component={Profile} />
    </Router>
  );
}

export default App;

