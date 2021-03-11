import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from '../Components/header/HomePage';
import TechPage from '../Components/techPage/TechPage';
import { IndividualTechNews } from '../Components/techPage/IndivisualTechNews';
import { shallowEqual, useSelector } from 'react-redux';
import { IndiaBusiness } from '../Components/BusinessBody/IndiaBusiness';
import { IndividualNews } from '../Components/BusinessBody/IndividualNews';
import { InternationalBusiness } from '../Components/BusinessBody/InternationalBusiness';
import { SearchFunc } from '../Components/SearchFunctionality/SearchFunc';
import { NavbarBusiness } from '../Components/NavbarBusiness/NavbarBusiness';

const Routes = () => {
	const { businessData, businessIndia, economyNews } = useSelector(
		(state) => state.business,
		shallowEqual
	);
	const { indivisualNews } = useSelector(
		(state) => state.techReducer,
		shallowEqual
	);
	const { searchArray } = useSelector((state) => state.search, shallowEqual);
	return (
		<div>
			<Switch>
				<Route path='/' exact>
					<HomePage />
				</Route>
				<Route path='/business' exact>
					<NavbarBusiness />
				</Route>
				<Route path='/tech' exact>
					<TechPage />
				</Route>
				<Route path='/tech/:id' exact>
					<IndividualTechNews data={indivisualNews} />
				</Route>
				<Route path='/business/india-business' exact>
					<IndiaBusiness />
				</Route>

				<Route path='/business/international-business' exact>
					<InternationalBusiness />
				</Route>

				<Route path='/business/general/:id' exact>
					<IndividualNews data={businessData} />
				</Route>

				<Route path='/business/india/:id' exact>
					<IndividualNews data={businessIndia} />
				</Route>

				<Route path='/business/international/:id' exact>
					<IndividualNews data={economyNews} />
				</Route>

				<Route path='/business/search/:find' exact>
					<SearchFunc />
				</Route>

				<Route path='/business/search/:find/:id' exact>
					<IndividualNews data={searchArray} />
				</Route>

				<Route>
					<h1>Page not found?</h1>
				</Route>
			</Switch>
		</div>
	);
};

export default Routes;
