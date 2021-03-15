import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Clock from './Challenges/Day_02_Clock/Clock';

export default function App() {
	return (
		<main className='app'>
			<Router>
				<Switch>
					<Route
						path='/clock'
						exact
						render={(routerProps) => <Clock {...routerProps} />}
					/>
				</Switch>
			</Router>
		</main>
	);
}
