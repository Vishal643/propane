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
import { PrivateRoutes } from './PrivateRoutes';
import Register from '../Components/RegisterPage/Register';

import AllImports from '../Components/AllImports';
import { PostStory1 } from '../Components/PostNews/PostStory1';

const Routes = () => {
	const {
		businessData,
		businessIndia,
		economyNews,
		typeGen,
		typeIn,
		typeInt,
	} = useSelector((state) => state.business, shallowEqual);
	const { indivisualNews } = useSelector(
		(state) => state.techReducer,
		shallowEqual
	);
	const { searchArray, finding } = useSelector(
		(state) => state.search,
		shallowEqual
	);
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
					<IndividualNews data={searchArray} type={finding} />
				</Route>
				<Route path='/register'>
					<Register />
				</Route>

				<PrivateRoutes exact path='/' Mycomponent={AllImports} />

				<Route path='/city' exact>
					<PostStory1 />
				</Route>
				<Route>
					<h1>Page not found?</h1>
				</Route>
			</Switch>
		</div>
	);
};

export default Routes;
