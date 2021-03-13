import React from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

import styles from '../../Styles/IndividualNews.module.css';
import parse from 'html-react-parser';
import { BannerBusiness } from '../NavbarBusiness/BannerBusiness';
import { SubNav } from '../NavbarBusiness/SubNav';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import {
	getBusinessApi,
	getBusinessIndia,
	getBusinessInternational,
} from '../../Redux/BusinessPage/action';

import { FaBookReader } from 'react-icons/fa';
import { BsCalendar } from 'react-icons/bs';
import { getSearch } from '../../Redux/SearchFunction/action';
import Comment from '../techPage/Comment';
import GridFooter from '../footerPage/GridFooter';

const IndividualNews = ({ data, type }) => {
	const { id } = useParams();

	const dispatch = useDispatch();

	const { businessData, economyNews, businessIndia } = useSelector(
		(state) => state.business,
		shallowEqual
	);
	const { searchArray } = useSelector((state) => state.search, shallowEqual);

	React.useEffect(() => {
<<<<<<< HEAD
		window.scrollTo(0, 0);

		//    if(type === "general"){
		// 	dispatch(getBusinessApi());
		//    }else if(type === "India"){
		// 	dispatch(getBusinessIndia());
		//    } else if(type === "International"){
		// 	dispatch(getBusinessInternational());
		//    }else{
		// 		dispatch(getSearch(type));
		//    }

		document.title = 'Business News, Latest News';
=======
		window.scrollTo(0,0)
>>>>>>> 54059dc7731f5990a52e77e109f9303c46e74293
	}, []);

	return (
		<>
			<BannerBusiness banner='https://tpc.googlesyndication.com/simgad/17741213972995722021?' />
			<SubNav />
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

			<h2
				style={{
					width: '70%',
					margin: '10px auto 20px auto',
					textDecoration: 'underline',
					color: 'gray',
				}}
			>
				Related News
			</h2>

			{/* <div className={styles.individual_content_wrapper}> */}

			{type === 'general' ? (
				<div className={styles.individual_content_wrapper}>
					{data
						.filter((item) => item.id !== id)
						.map(
							(item, i) =>
								i < 4 && (
									<div key={i} className={styles.individual_content_main}>
										<div></div>

										<img src={item.image_link} alt='news pic' width='80%' />
										<p>
											<Link to={`/business/general/${item.id}`}>
												{item.headline}
											</Link>
										</p>
										<p>
											<BsCalendar /> {item.date}{' '}
											<span>
												{' '}
												<FaBookReader /> {item.readerCount}
											</span>
										</p>
									</div>
								)
						)}
				</div>
			) : type === 'India' ? (
				<div className={styles.individual_content_wrapper}>
					{data
						.filter((item) => item.id !== id)
						.map(
							(item, i) =>
								i < 4 && (
									<div key={i} className={styles.individual_content_main}>
										<div></div>

										<img src={item.image_link} alt='news pic' width='80%' />
										<p>
											<Link to={`/business/india/${item.id}`}>
												{item.headline}
											</Link>
										</p>
										<p>
											<BsCalendar /> {item.date}{' '}
											<span>
												{' '}
												<FaBookReader /> {item.readerCount}
											</span>
										</p>
									</div>
								)
						)}
				</div>
			) : type === 'International' ? (
				<div className={styles.individual_content_wrapper}>
					{data
						.filter((item) => item.id !== id)
						.map(
							(item, i) =>
								i < 4 && (
									<div key={i} className={styles.individual_content_main}>
										<div></div>

										<img src={item.image_link} alt='news pic' width='80%' />
										<p>
											<Link to={`/business/international/${item.id}`}>
												{item.headline}
											</Link>
										</p>
										<p>
											<BsCalendar /> {item.date}{' '}
											<span>
												{' '}
												<FaBookReader /> {item.readerCount}
											</span>
										</p>
									</div>
								)
						)}
				</div>
			) : (
				<div className={styles.individual_content_wrapper}>
					{data
						.filter((item) => item.id !== id)
						.map(
							(item, i) =>
								i < 4 && (
									<div key={i} className={styles.individual_content_main}>
										<div></div>

										<img src={item.image_link} alt='news pic' width='80%' />
										<p>
											<Link to={`/search/${type}/${item.id}`}>
												{item.headline}
											</Link>
										</p>
										<p>
											<BsCalendar /> {item.date}{' '}
											<span>
												{' '}
												<FaBookReader /> {item.readerCount}
											</span>
										</p>
									</div>
								)
						)}
				</div>
			)}
			{/* </div> */}
			<div style={{margin:"10% auto 0%", borderTop:"1px solid gray"}}>
			<GridFooter  />
		    </div>

		</>
	);
};

export { IndividualNews };
