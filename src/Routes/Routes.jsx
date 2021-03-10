import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from '../Components/HomePage';
import TechPage from '../Components/TechPage';

const Routes = () => {
	return (
		<div>
			<Switch>
				<Route path='/' exact>
					<HomePage />
				</Route>
				<Route path='/business' exact>
					Business Page
				</Route>
				<Route path='/tech' exact>
					<TechPage />
				</Route>
				<Route path='/tech/:id' exact>
					You are viewing single news
				</Route>
				<Route>
					<h1>Page not found?</h1>
				</Route>
			</Switch>
		</div>
	);
};

export default Routes;
