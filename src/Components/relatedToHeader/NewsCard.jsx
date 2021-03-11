import React from 'react';
import styles from '../../Styles/newsCard.module.css';
const NewsCard = ({ title, urlToImage }) => {
	return (
		<div className={styles.newsCard}>
			<div className={styles.title}>
				<p>{title}</p>
			</div>
			<div className={styles.poster}>
				<img src={urlToImage} alt='pic'></img>
			</div>
		</div>
	);
};

export { NewsCard };
