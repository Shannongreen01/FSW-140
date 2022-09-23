import React from 'react';
import {Switch, Route} from 'react-router-dom'
import Nav from './Components/nav'
import PlayerDisplay from './Components/playerDispaly'
import CoachDisplay from './Components/Coachshow'
import Header from './Components/Header'
import Winners from './Components/winners'


import './App.css';

const App = ()=>{



  return (
    <div className="player-container">
      <Header/>
      <Nav/>

        <Switch>
          <Route exact path='/' component={Winners}/>
           <Route path='/Players' component={PlayerDisplay}  />
           <Route path='/Coaches' component={CoachDisplay} />
        </Switch>
    </div>
  );
}



 
  
export default App;