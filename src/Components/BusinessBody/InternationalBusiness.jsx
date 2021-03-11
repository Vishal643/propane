import React from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getBusinessInternational } from '../../Redux/BusinessPage/action';
import styles from '../../Styles/BusinessBody.module.css';
import { BannerBusiness } from '../NavbarBusiness/BannerBusiness';
import { SubNav } from '../NavbarBusiness/SubNav';
const InternationalBusiness = () => {
	const { economyNews, isLoadingIndia } = useSelector(
		(state) => state.business,
		shallowEqual
	);

	const dispatch = useDispatch();

	React.useEffect(() => {
		dispatch(getBusinessInternational());
	}, []);

	return (
		<>
			<BannerBusiness banner='https://tpc.googlesyndication.com/simgad/16057958619342960337?' />
			<SubNav />
			<div>
				<div className={styles.business_head}>
					<p>
						INTERNATIONAL BUSINESS <strong> NEWS </strong>
					</p>
					<div style={{ width: '60%' }}></div>
				</div>

				<div className={styles.business_news_wrapper}>
					<div className={styles.business_news_main}>
						<img
							src='https://vid.alarabiya.net/images/2020/09/30/9fd1390d-fabc-493f-a0eb-6fb51a05c828/9fd1390d-fabc-493f-a0eb-6fb51a05c828_16x9_600x338.jpg'
							alt='pic'
							width='100%'
							height='230px'
						/>
						<p>
							Joe Biden flashes warning to big tech as antitrust team takes
							shape
						</p>
					</div>

					<div className={styles.business_newshead_wrapper}>
						{economyNews?.map((item, i) => (
							<div className={styles.business_news_head} key={i}>
								<div>
									<Link to={`/business/international/${item.id}`}>
										{item.headline}
									</Link>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</>
	);
};
export { InternationalBusiness };
