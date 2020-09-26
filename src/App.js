import React from 'react';
import './App.css';
// import Header from './Components/Header/Header';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Main from './components/Main/Main';
import Login from './components/Login/Login';
import Place from './components/Place/Place';
import Header from './components/Header/Header';
 



function App() {

  return (

    
   <Router>
    <Header></Header>
       <Switch>
           <Route path='/home'>
              <Main></Main>
           </Route>
           <Route  path='/destination/:travelKey'>
             <Place></Place>
           </Route>

           <Route path='/login'>
              <Login></Login>
           </Route>

           <Route path="/">
              <Main></Main>
            </Route>
            
       </Switch>
     </Router>


 
  );
}

export default App;