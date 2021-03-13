import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import styles from '../../Styles/IndividualNews.module.css';
import parse from 'html-react-parser';
import Comment from './Comment';
import HomePageHeader from '../header/HomePageHeader';

const links = [
	{
		to: '/',
		title: 'Home',
	},
	{
		to: '/news',
		title: 'NEWS',
	},
	{
		to: '/compare',
		title: 'COMPARE',
	},
	{
		to: '/gadgets',
		title: 'GADGETS',
	},
	{
		to: '/slideshows',
		title: 'SLIDESHOWS',
	},
	{
		to: '/shop',
		title: 'SHOP',
	},
	{
		to: '/recharge',
		title: 'RECHARGE',
	},
	{
		to: '/videos',
		title: 'VIDEOS',
	},
	{
		to: '/more',
		title: 'MORE',
	},
];
const extras = 'Search Gadgets, Newsm Reviews, Shop...';
const style = {
	width: '1150px',
	height: '100px',
	display: 'block',
	textIndent: '-2000px',
	color: '#fff',
	backgroundColor: 'blue',
	marginLeft: '90px',
	padding: '10px',
};
const IndividualTechNews = ({ data }) => {
	const { id } = useParams();

	useEffect(() => {
		document.title = 'Technology News, Latest News';
	}, []);
	return (
		<>
			<HomePageHeader
				src={`https://static.toiimg.com/photo/68935322.cms`}
				alt={`the_times_of_india`}
				extras={extras}
				links={links}
				style={style}
			/>
			<div className={styles.individual_wrapper}>
				{data?.map(
					(item) =>
						item.id === id && (
							<>
								<div key={item.id} className={styles.individual_subWrapper}>
									<p>{item.headline}</p>

									<div className={styles.individual_content}>
										<div>
											<img src={item.image_link} alt='pic' />
										</div>

										<div>
											<p>{parse(item.description)}</p>
										</div>
									</div>
								</div>
								<Comment />
							</>
						)
				)}
			</div>
		</>
	);
};

export { IndividualTechNews };
