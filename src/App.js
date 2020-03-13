import React from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Weather from './pages/Weather';
import MarsRoverPhoto from './pages/MarsRoverPhoto';
import NotFound from './pages/NotFound';
import NavBar from './components/NavBar';
import { Switch,
	 Route
	 
	} from 'react-router-dom';

function App() {
  return (
    <div>
	<NavBar />
	<main>
	  <Switch>
	    <Route path="/MarsRoverPhoto">
	  	<MarsRoverPhoto />
	    </Route>
	    <Route path="/Weather">
	  	<Weather />
	    </Route>
	    <Route path="/About">
		<About />
	    </Route>
	    <Route exact path="/">
	  	<Home />
	    </Route>
	    <Route path="*">
	  	<NotFound />
	    </Route>
	  </Switch>
        </main>
      
    </div>
  );
}

export default App;
