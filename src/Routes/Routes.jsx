import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from '../Components/header/HomePage';
import TechPage from '../Components/techPage/TechPage';
import Comment from '../Components/techPage/Comment';

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
				<Route exact path='/city'>
					<Comment />
				</Route>
				<Route>
					<h1>Page not found?</h1>
				</Route>
			</Switch>
		</div>
	);
};

export default Routes;
