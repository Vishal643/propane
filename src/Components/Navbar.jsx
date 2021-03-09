import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineSearch, GiHamburgerMenu } from 'react-icons/all';
import styles from '../Styles/Navbar.module.css';
const links = [
	{
		to: '/briefs',
		title: 'Briefs',
	},
	{
		to: '/videos',
		title: 'Videos',
	},
	{
		to: '/city',
		title: 'City',
	},
	{
		to: '/india',
		title: 'India',
	},
	{
		to: '/world',
		title: 'World',
	},
	{
		to: '/business',
		title: 'Business',
	},
	{
		to: '/tech',
		title: 'Tech',
	},
	{
		to: '/sports',
		title: 'Sports',
	},
	{
		to: '/entertainment',
		title: 'Entertainment',
	},
	{
		to: '/tv',
		title: 'TV',
	},
	{
		to: '/web-series',
		title: 'Web Series',
	},
	{
		to: '/Life-and-style',
		title: 'Life & Style',
	},
	{
		to: '/education',
		title: 'Education',
	},
	{
		to: '/photos',
		title: 'Photos',
	},
	{
		to: '/blogs',
		title: 'Blogs',
	},
];
const Navbar = () => {
	return (
		<div className={styles.link_container}>
			{links?.map(({ to, title }) => (
				<Link className={styles.links} key={to} to={to}>
					{title}
				</Link>
			))}

			<span className={styles.toi_plus}>
				<p>TOI+</p>
			</span>
			<span className={styles.search_bar_container}>
				<AiOutlineSearch />
				<GiHamburgerMenu />
			</span>
		</div>
	);
};

export default Navbar;
