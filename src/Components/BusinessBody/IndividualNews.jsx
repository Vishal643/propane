import React from 'react';
import { useParams } from 'react-router';
import styles from '../../Styles/IndividualNews.module.css';
import parse from 'html-react-parser';
import { BannerBusiness } from '../NavbarBusiness/BannerBusiness';
import { SubNav } from '../NavbarBusiness/SubNav';
const IndividualNews = ({ data }) => {
	const { id } = useParams();

	return (
		<>
			<BannerBusiness banner='https://tpc.googlesyndication.com/simgad/16057958619342960337?' />
			<SubNav />
			<div className={styles.individual_wrapper}>
				{data?.map(
					(item) =>
						item.id === +id && (
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
						)
				)}
			</div>
		</>
	);
};

export { IndividualNews };
