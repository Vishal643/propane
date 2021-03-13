
import React from 'react';
import { BusinessBody } from '../BusinessBody/BusinessBody';
import GridFooter from '../footerPage/GridFooter';
import { BannerBusiness } from './BannerBusiness';
import { SubNav } from './SubNav';

const NavbarBusiness = () => {
	return (
		<div>
			<BannerBusiness banner='https://tpc.googlesyndication.com/simgad/16057958619342960337?' />
			<SubNav />
			<BusinessBody />
			
			<GridFooter />

		
		</div>
	);
};
export { NavbarBusiness };
