import React from 'react';
import styles from '../../Styles/PostData.module.css';
import axios from 'axios';
import { v4 as uuid } from 'uuid';
import MessageIcon from '@material-ui/icons/Message';
import ImageIcon from '@material-ui/icons/Image';
import { toast } from 'react-toastify';
import { PostNews } from './PostNews';

const PostData = () => {
	const communityList = [
		'indian_tech_news',
		'us_tech_news',
		'international_business_news',
		'general_business_news',
		'indian_business_news',
		'all_news',
		'cricket',
	];

	const [currSelectType, setCurrSelectType] = React.useState('post');

	let postStyle, imgVidStyle;
	let postStyle2, imgVidStyle2;

	if (currSelectType === 'post') {
		postStyle = `${styles.inputBoxStyle2} ${styles.inputBoxStyle}`;
		imgVidStyle = `${styles.inputBoxStyle1} ${styles.inputBoxStyle}`;
		postStyle2 = `${styles.buttonColor1}`;
		imgVidStyle2 = `${styles.buttonColor2}`;
	}

	if (currSelectType === 'imgVid') {
		imgVidStyle = `${styles.inputBoxStyle2} ${styles.inputBoxStyle}`;
		postStyle = `${styles.inputBoxStyle1} ${styles.inputBoxStyle}`;
		imgVidStyle2 = `${styles.buttonColor1}`;
		postStyle2 = `${styles.buttonColor2}`;
	}

	const [title1, setTitle1] = React.useState('');
	const [desc1, setDesc1] = React.useState('');

	const [category, setCategory] = React.useState('');
	const [imageLink2, setImageLink2] = React.useState('');

	const handleDesc1 = (value) => {
		setDesc1(value);
	};

	const handlePostSubmit1 = (e) => {
		e.preventDefault();
		let post_id = uuid();

		let categoryName = 'cricket';

		if (category !== '') {
			categoryName = category.split('/')[1];
		}

		let payload1 = {
			id: post_id,
			headline: title1,
			image_link: imageLink2,
			description: desc1,
			category: categoryName,
			username: 'vishal643',
		};

		let post_arr = [
			axios.post(`https://fake-mocker.herokuapp.com/${categoryName}`, payload1),
		];

		Promise.all(post_arr).then((res) =>
			toast.success('News created successfully')
		);
	};

	return (
		<div className={styles.mainContainer}>
			<div className={styles.mainContainer1}>
				<div className={styles.post_page_title}>
					<i>Write News</i>
				</div>
				<div>
					<select
						className={styles.selectcategory}
						onChange={(e) => setCategory(e.target.value)}
					>
						<option>Choose a News Category :</option>
						{communityList.map((item) => (
							<option value={`/${item}`} key={`/${item}`}>{`${item}`}</option>
						))}
					</select>
				</div>
				<div className={styles.selectPost}>
					<div>
						<div
							onClick={() => setCurrSelectType('post')}
							className={postStyle2}
						>
							<MessageIcon />
							&nbsp;&nbsp; Post
						</div>
						<div
							onClick={() => setCurrSelectType('imgVid')}
							className={imgVidStyle2}
						>
							<ImageIcon />
							&nbsp;&nbsp; Images & Video Link
						</div>
					</div>
					<div>
						<div className={`${postStyle} ${styles.inputArea1}`}>
							<input
								placeholder='Enter News Headline...'
								value={title1}
								onChange={(e) => setTitle1(e.target.value)}
							/>
							<div>
								<PostNews handleDesc1={handleDesc1} />
							</div>
							<button
								className={styles.publish_news_btn}
								onClick={handlePostSubmit1}
							>
								PUBLISH NEWS
							</button>
						</div>
						<div className={imgVidStyle}>
							<div>
								{window.location.href.includes('localhost') && (
									<form
										onSubmit={handlePostSubmit1}
										className={styles.inputArea2}
									>
										<input
											placeholder='Enter Image Link'
											value={imageLink2}
											onChange={(e) => setImageLink2(e.target.value)}
										/>
										<input type='submit' style={{ display: 'none' }} />
									</form>
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export { PostData };
