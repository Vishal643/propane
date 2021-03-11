import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineSearch, GiHamburgerMenu } from 'react-icons/all';
import styles from '../../Styles/Navbar.module.css';

const Navbar = ({ links, extras }) => {
	return (
		<div className={styles.link_container}>
			{links?.map(({ to, title }) => (
				<Link className={styles.links} key={to} to={to}>
					{title}
				</Link>
			))}

			<span className={styles.toi_plus}>
				<p>{extras}</p>
			</span>
			<span className={styles.search_bar_container}>
				<AiOutlineSearch />
				<GiHamburgerMenu />
			</span>
		</div>
	);
};

export default Navbar;
