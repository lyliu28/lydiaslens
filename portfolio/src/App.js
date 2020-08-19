import React from 'react';
import Header from './header'
import './App.css';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Photography from './Photography';
import About from './About';
import Flight from './Flight';
import Mountains from './Mountains';
import Ocean from'./Ocean';
import Travel from './Travel';
import Copyright from './Components/Copyright'

function App() {
  return (
    <BrowserRouter>  
    <Header/>

<Switch>
<Route exact path="/" component={Photography} />
<Route exact path="/photography" component={Photography} />
<Route path="/about" component={About} />
<Route path="/photography/Oceans" component={Ocean} />
<Route path="/photography/Mountain" component={Mountains} />
<Route path="/photography/Travel" component={Travel} />

</Switch>

<Copyright />


</BrowserRouter>

  )
}

export default App;
