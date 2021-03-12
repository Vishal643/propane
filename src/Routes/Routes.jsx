import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from '../Components/header/HomePage';
import TechPage from '../Components/techPage/TechPage';
import { shallowEqual, useSelector } from 'react-redux';
import { IndiaBusiness } from '../Components/BusinessBody/IndiaBusiness';
import { IndividualNews } from '../Components/BusinessBody/IndividualNews';
import { InternationalBusiness } from '../Components/BusinessBody/InternationalBusiness';
import { SearchFunc } from '../Components/SearchFunctionality/SearchFunc';
import { NavbarBusiness } from '../Components/NavbarBusiness/NavbarBusiness';

const Routes = () => {
	const { businessData, businessIndia, economyNews,typeGen, typeIn, typeInt } = useSelector(
		(state) => state.business,
		shallowEqual
	);
	const { searchArray, finding} = useSelector((state) => state.search, shallowEqual);
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
					You are viewing single news
				</Route>
				<Route path='/business/india-business' exact>
					<IndiaBusiness />
				</Route>

				<Route path='/business/international-business' exact>
					<InternationalBusiness />
				</Route>

				<Route path='/business/general/:id' exact>
					<IndividualNews data={businessData} type={typeGen} />
				</Route>

				<Route path='/business/india/:id' exact>
					<IndividualNews data={businessIndia} type={typeIn} />
				</Route>

				<Route path='/business/international/:id' exact>
					<IndividualNews data={economyNews} type={typeInt} />
				</Route>

				<Route path='/search/:find' exact>
					<SearchFunc />
				</Route>

				<Route path='/search/:find/:id' exact>
					<IndividualNews data={searchArray} type={finding}/>
				</Route>

				<Route>
					<h1>Page not found?</h1>
				</Route>
			</Switch>
		</div>
	);
};

export default Routes;
