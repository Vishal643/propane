import React from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import styles from '../Styles/HomePageHeader.module.css';
import {
	GrFacebookOption,
	AiFillTwitterCircle,
	AiFillYoutube,
	BiRss,
	IoMdNotificationsOutline,
} from 'react-icons/all';
const HomePageHeader = () => {
	return (
		<div>
			<div className={styles.top_heading}>
				<div className={styles.select_tab}>
					<label htmlFor='country_select'>EDITION</label>
					<select className={styles.select} name='country_select'>
						<option value='IN'>
							{/* {' '} */}
							{/* <img
								className={styles.flag}
								src='https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg'
								alt='indian_flag'
							/> */}
							IN
						</option>
						<option value='US'>US</option>
					</select>
				</div>
				<div className={styles.show_time}>
					<p>TUE, MAR 09, 2021 | UPDATED 02.09PM IST</p>
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
				<img
					src='https://static.toiimg.com/photo/79638690.cms'
					alt='the_times_of_india'
				/>
			</div>
			<Navbar />
		</div>
	);
};

export default HomePageHeader;
