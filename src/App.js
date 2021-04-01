import React from 'react';
import './App.css';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import navigation from './page/navigation';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <div className="nav">{navigation}</div>
      <Switch>
            <Route exact path="/"><Home /></Route>
            <Route path="/all"> <All /> </Route>
            <Route path="/weblog"> <Weblog /> </Route>
            <Route path="/weherbuy"> <Weherbuy /> </Route>
            <Route path="/backup"> <Backup /> </Route>
            <Route path="/newsletters"> <Newsletters /> </Route>
            <Route path="/abaut"> <Abaut /> </Route>
      </Switch>
     </div>
    </BrowserRouter>
    
  );
}

export default App;
