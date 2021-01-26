import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Projects from './components/pages/Projects';
import Resume from './components/pages/Resume';
import Alacrity from './components/pages/Alacrity';
import Sven from './components/pages/Sven';
import Boba from './components/pages/Boba';
import Tora from './components/pages/Tora';
import Risc from './components/pages/Risc';
import ScrollToTop from './components/scroll'
import {HashRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <>
    <Router basename="/">
      <ScrollToTop/>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/projects' exact component={Projects}/>
        <Route path='/resume' exact component={Resume}/>
        <Route path='/alacrity' exact component={Alacrity}/>
        <Route path='/tora' exact component={Tora}/>
        <Route path='/sven' exact component={Sven}/>
        <Route path='/boba' exact component={Boba}/>
        <Route path='/risc' exact component={Risc}/>
      </Switch>
    </Router>
    </>
  );
}

export default App;
