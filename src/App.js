import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Home from './components/pages/Home';
import ourTeam from './components/pages/ourTeam';
import Services from './components/pages/Services';



function App() {
  return (
    <>
    <Router>
    <Navbar/>
    <Switch>
      <Route path="/" exact component= {Home} />
      <Route path='/ourTeam' component={ourTeam} />
      <Route path='/services' component={Services} />
      <Route path='/form' component={() => { 
        window.location.href = 'https://forms.gle/WBqU3ct4vFbJBNCPA'; 
        return null;
   }}/>
   
    </Switch>
    </Router>
    </>
  );
}

export default App;
