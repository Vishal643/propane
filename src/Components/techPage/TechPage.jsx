import React, { useState, useEffect } from 'react';
import HomePageHeader from '../header/HomePageHeader';
import styles from '../../Styles/TechPage.module.css';
import { BsChevronRight } from 'react-icons/all';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import {
	getTechNews,
	getIndivisualNewsData,
} from '../../Redux/techPage/actions';
import { AdvertiseRight } from '../Advertisment/AdvertiseRight';
// import Comment from './Comment';

//Links and styles
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
	marginLeft: '500px',
};

const TechPage = () => {
	const [query, setQuery] = useState('indian_tech_news');
	const dispatch = useDispatch();
	const history = useHistory();
	const handleChange = (value) => {
		setQuery(value);
	};
	const { isLoading, isError, newsData } = useSelector(
		(state) => state.techReducer,
		shallowEqual
	);
	useEffect(() => {
		dispatch(getTechNews(query));
	}, [query, dispatch]);

	const seeIndivisualNews = (id) => {
		dispatch(getIndivisualNewsData(query, id));
		history.push(`/tech/${id}`);
	};
	return isLoading ? (
		<div>Loading...</div>
	) : isError ? (
		<div>Somwthing Went Wrong</div>
	) : (
		<>
			<HomePageHeader
				handleChange={handleChange}
				src={`https://static.toiimg.com/photo/79512580.cms`}
				alt={`gadget_page`}
				extras={extras}
				links={links}
				style={style}
			/>
			<div>
				<img
					className={styles.below_nav_ad}
					src='https://tpc.googlesyndication.com/simgad/18161119714463865050?'
					alt='banner_img'
				/>
			</div>

			<div className={styles.technology_container_div}>
				<h2>TECHNOLOGY NEWS</h2>
				<div className={styles.top_three_cards}>
					<div className={styles.large_image}>
						<img
							className={styles.large_image_tag}
							src='https://static.toiimg.com/thumb/resizemode-4,msid-81405807,imgsize-39962,width-460/81405807.jpg'
							alt='large_image'
						/>
						<div className={styles.desc}>
							<h3 className={styles.large_image_description}>
								Qualcomm targets Apple with new audio chips: Why it’s ‘good
								news’ for Android users
							</h3>
						</div>
					</div>
					<div className={styles.small_image_conatiner}>
						<div className={styles.small_image}>
							<img
								className={styles.small_image_tag}
								src='https://static.toiimg.com/thumb/resizemode-4,msid-81306044,imgsize-18898,width-400/81306044.jpg'
								alt='small_image'
							/>

							<p className={styles.small_image_description}>
								5 reasons to have LG dishwasher in your kitchen
							</p>
						</div>

						<div className={styles.small_image}>
							<img
								className={styles.small_image_tag}
								src='https://static.toiimg.com/thumb/resizemode-4,msid-81405733,imgsize-3164415,width-400/81405733.jpg'
								alt='small_image'
							/>
							<p className={styles.small_image_description}>
								Oppo F19 Pro+ 5G launched at Rs 25,990: All details
							</p>
						</div>
					</div>
					<div>
						<div className={styles.ad_div}>
							<AdvertiseRight />
						</div>

						<div className={styles.select_div}>
							<select name='Select Category'>
								{[
									'Select Category',
									'Mobiles',
									'Laptops',
									'Camera',
									'Tablets',
									"TV's",
									'Powerbank',
									'AC',
								].map((item) => (
									<option key={item} value={item}>
										{item}
									</option>
								))}
							</select>
							<br />
							<select name='Select Brand'>
								{['Select Brand', 'Xiomi', 'Samsung', 'Apple', 'Soni'].map(
									(item) => (
										<option key={item} value={item}>
											{item}
										</option>
									)
								)}
							</select>
							<br />
							<select name='Select Budget'>
								{['Select Budget', '5000', '6000', '7000', '9000'].map(
									(item) => (
										<option key={item} value={item}>
											{item}
										</option>
									)
								)}
							</select>
							<br />
							<button disabled>SEARCH GADGETS</button>
						</div>
					</div>
				</div>
			</div>
			<div className={styles.small_image_conatiner_below_large}>
				<div className={styles.small_image_below_large}>
					<img
						className={styles.small_image_tag_below_large}
						src='https://static.toiimg.com/thumb/resizemode-4,msid-81424888,imgsize-119568,width-400/81424888.jpg'
						alt='small_image'
					/>

					<p className={styles.small_image_description_below_large}>
						What makes Galaxy M12 a #MosnterReloaded?
					</p>
				</div>

				<div className={styles.small_image_below_large}>
					<img
						className={styles.small_image_tag_below_large}
						src='https://static.toiimg.com/thumb/resizemode-4,msid-81423495,imgsize-501697,width-400/81423495.jpg'
						alt='small_image'
					/>
					<p className={styles.small_image_description_below_large}>
						Xiaomi may launch world's fastest charging smartphone...
					</p>
				</div>
				<div className={styles.small_image_below_large}>
					<img
						className={styles.small_image_tag_below_large}
						src='https://static.toiimg.com/thumb/resizemode-4,msid-81413165,imgsize-468082,width-400/81413165.jpg'
						alt='small_image'
					/>
					<p className={styles.small_image_description_below_large}>
						Reliance Jio launches affordable digital plans for small businesses
					</p>
				</div>
			</div>

			<h2 className={styles.tech_news}>
				Tech News
				<BsChevronRight style={{ fontSize: '20px', fontWeight: 'bold' }} />
			</h2>
			<div className={styles.tech_news_div}>
				{newsData?.map((item) =>
					item.map((item) => (
						<div
							onClick={() => seeIndivisualNews(item.id)}
							key={item.id}
							className={styles.tech_news_card}
						>
							<img
								className={styles.tech_news_img}
								src={item.image_link}
								alt='tech_news'
							/>
							<p className={style.tech_news_desc}>{item.description}</p>
						</div>
					))
				)}
			</div>
			{/* <Comment /> */}
		</>
	);
};

export default TechPage;
