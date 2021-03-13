
import React from 'react';
import { BusinessBody } from '../BusinessBody/BusinessBody';
import GridFooter from '../footerPage/GridFooter';
import { BannerBusiness } from './BannerBusiness';
import { SubNav } from './SubNav';

const NavbarBusiness = () => {
	return (
		<div>
			<BannerBusiness banner='https://tpc.googlesyndication.com/simgad/17741213972995722021?' />
			<SubNav />
			<BusinessBody />
			
			<GridFooter />

		
		</div>
	);
};
export { NavbarBusiness };
