import React from 'react';
import './App.css';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Home from './page/Home';
import Nav from './page/Nav';
import All from './page/All'
import Weblog from './page/Weblog'
import Weherbuy from './page/Weherbuy'
import Backup from './page/Backup'
import Newsletters from './page/Newsletters'
import About from './page/About'
function App() {
  return (
    <BrowserRouter>
      <div className="main">

      
       <Nav/>
       
      <Switch>
            <Route path="/" exact><Home/></Route>
            <Route path="/all"> <All/> </Route>
            <Route path="/weblog"> <Weblog/> </Route>
            <Route path="/weherbuy"> <Weherbuy/> </Route>
            <Route path="/newsletters"> <Newsletters/> </Route>
            <Route path="/about"> <About/> </Route>
            <Route path="/backup"> <Backup/> </Route>
            
            
      </Switch>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
