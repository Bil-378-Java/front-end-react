import React from 'react';
import './app.css';
import StartPage from './pages/startPage';
import ProfilePage from "./pages/profilePage";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'


function App() {
  return (
      <Router>
              <Route exact path='/home' component={StartPage}/>
              <Route exact path='/profile' component={ProfilePage}/>
      </Router>
  );
}

export default App;
