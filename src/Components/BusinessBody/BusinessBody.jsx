import React from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
	getBusinessApi,
	getBusinessIndia,
	getBusinessInternational,
} from '../../Redux/BusinessPage/action';
import styles from '../../Styles/BusinessBody.module.css';
import { IndiaBusiness } from './IndiaBusiness';
import { InternationalBusiness } from './InternationalBusiness';

const BusinessBody = () => {
	const dispatch = useDispatch();
	const { businessData, businessIndia, economyNews } = useSelector(
		(state) => state.business,
		shallowEqual
	);

	React.useEffect(() => {
		dispatch(getBusinessApi());
		dispatch(getBusinessIndia());
		dispatch(getBusinessInternational());
	}, []);

	return (
		<>
			<div>
				<div className={styles.business_head}>
					<p>
						BUSINESS <strong> NEWS </strong>
					</p>
					<div></div>
				</div>

				<div className={styles.business_news_wrapper}>
					<div className={styles.business_news_main}>
						<img
							src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWo57KWzxLfQB23iF7mYtmDa9XYwljnST96Q&usqp=CAU'
							alt='pic'
							width='100%'
						/>
						<p>Oil flirting with $70 challenges economic recovery</p>
					</div>

					<div className={styles.business_newshead_wrapper}>
						{businessData?.map((item, i) => (
							<div className={styles.business_news_head} key={i}>
								<div>
									<Link to={`/business/general/${item.id}`}>
										{item.headline}
									</Link>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
			<IndiaBusiness />
			<InternationalBusiness />
		</>
	);
};

export { BusinessBody };
