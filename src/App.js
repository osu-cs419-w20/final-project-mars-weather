import React from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Weather from './pages/Weather';
import MarsRoverPhoto from './pages/MarsRoverPhoto';
import NotFound from './pages/NotFound';
import NavBar from './components/NavBar';
import queryString from 'query-string';
import { Switch,
	 Route,
	 useLocation

	} from 'react-router-dom';

function useQueryString() {
  return queryString.parse(useLocation().search);
}

function App() {
  return (
    <div>
			<NavBar />
			<main>
			  <Switch>

					<Route path="/MarsRoverPhoto">
			  		<MarsRoverPhoto date={useQueryString().earth_date}/>
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
