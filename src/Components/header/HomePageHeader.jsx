import React from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import styles from '../../Styles/HomePageHeader.module.css';
import {
	GrFacebookOption,
	AiFillTwitterCircle,
	AiFillYoutube,
	BiRss,
	IoMdNotificationsOutline,
} from 'react-icons/all';

const HomePageHeader = ({ src, alt, extras, links, style, handleChange }) => {
	let date = new Date();
	return (
		<div>
			<div className={styles.top_heading}>
				<div className={styles.select_tab}>
					<label htmlFor='country_select'>EDITION</label>
					<select
						onChange={(e) => handleChange(e.target.value)}
						className={styles.select}
						name='country_select'
					>
						<option value='indian_tech_news'>IN</option>
						<option value='us_tech_news'>US</option>
					</select>
				</div>
				<div className={styles.show_time}>
					<p>{date.toDateString()}</p>
				</div>
				<div className={styles.show_temp}>
					<p>PATNA 29°C</p>
				</div>
				<div className={styles.right_content}>
					<Link className={styles.link} to='sign-in'>
						SIGN IN
					</Link>
					<span className={styles.social_medial_icon}>
						<IoMdNotificationsOutline />
					</span>
					<span className={styles.social_medial_icon}>
						<AiFillTwitterCircle />
					</span>
					<span className={styles.social_medial_icon}>
						<GrFacebookOption />
					</span>
					<span className={styles.social_medial_icon}>
						<BiRss />
					</span>
					<span className={styles.social_medial_icon}>
						<AiFillYoutube />
					</span>
				</div>
			</div>
			<div className={styles.times_of_india_img}>
				<img style={style} src={src} alt={alt} />
			</div>
			<Navbar links={links} extras={extras} />
		</div>
	);
};

export default HomePageHeader;
