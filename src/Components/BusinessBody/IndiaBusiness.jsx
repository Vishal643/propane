import React from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getBusinessIndia } from '../../Redux/BusinessPage/action';
import styles from '../../Styles/BusinessBody.module.css';
import { BannerBusiness } from '../NavbarBusiness/BannerBusiness';
import { SubNav } from '../NavbarBusiness/SubNav';

const IndiaBusiness = () => {
	const { businessIndia, isLoadingIndia } = useSelector(
		(state) => state.business,
		shallowEqual
	);

	const dispatch = useDispatch();

	React.useEffect(() => {
		dispatch(getBusinessIndia());
	}, []);

	return (
		<>
			<BannerBusiness banner='https://tpc.googlesyndication.com/simgad/16057958619342960337?' />
			<SubNav />
			<div>
				<div className={styles.business_head}>
					<p>
						INDIA BUSINESS <strong> NEWS </strong>
					</p>
					<div></div>
				</div>

				<div className={styles.business_news_wrapper}>
					<div className={styles.business_news_main}>
						<img
							src='https://img.etimg.com/thumb/msid-76005001,width-300,imgsize-115155,,resizemode-4,quality-100/.jpg'
							alt='pic'
							width='101%'
							height='250px'
						/>
						<p>Travelers gaining confidence, time to plan for restart: IATA</p>
					</div>

					<div className={styles.business_newshead_wrapper}>
						{businessIndia?.map((item, i) => (
							<div className={styles.business_news_head} key={i}>
								<div>
									<Link to={`/business/india/${item.id}`}>{item.headline}</Link>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</>
	);
};
export { IndiaBusiness };
