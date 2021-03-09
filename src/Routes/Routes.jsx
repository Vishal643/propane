import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePageHeader from '../Components/HomePageHeader';

const Routes = () => {
	return (
		<div>
			<HomePageHeader />
			<Switch>
				<Route path='/' exact>
					Home Page
				</Route>
				<Route path='/business' exact>
					Business Page
				</Route>
				<Route path='/tech' exact>
					Tech Page
				</Route>
				<Route>
					<h1>Page not found?</h1>
				</Route>
			</Switch>
		</div>
	);
};

export default Routes;
