import React from 'react';
import HomePageHeader from './HomePageHeader';
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
const extras = 'TOI+';
const HomePage = () => {
	return (
		<HomePageHeader
			src={`https://static.toiimg.com/photo/79638690.cms`}
			alt={`the_times_of_india`}
			extras={extras}
			links={links}
		/>
	);
};

export default HomePage;
