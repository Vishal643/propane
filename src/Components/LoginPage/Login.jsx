import React from 'react';

import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { Ring } from 'react-awesome-spinners';
import { Redirect } from 'react-router-dom';
import { fetchLoginData } from '../../Redux/login/action';
import styles from '../../Styles/Login.module.css';
import { AdsLeftBanner } from '../Advertisment/AdsLeftBanner';
import { AdsRightBanner } from '../Advertisment/AdsRightBanner';
import { duration } from '@material-ui/core';

const Login = () => {
	const dispatch = useDispatch();
	const [username, setUsername] = React.useState('');
	const [password, setPassword] = React.useState('');
	const { loading, isAuth, error, errMessage } = useSelector(
		(state) => state.auth,
		shallowEqual
	);

	const onSubmit = (e) => {
		e.preventDefault();
		dispatch(fetchLoginData({ username, password }));
	};

	if (isAuth) {
		return <Redirect to='/' />;
	}

	return loading ? (
		<div style={{ margin: '200px 600px' }}>
			<Ring style={{ fontSize: '100px' }} />
		</div>
	) : error ? (
		<div>{errMessage}</div> && <Redirect to='/login' />
	) : (
		<>
			<div className={styles.bannerImg}>
				<img
					src='https://energasia.in/wp-content/uploads/2020/05/Times-of-india-1000X280.jpg'
					alt='Business Banner'
				/>
			</div>
			<div className={styles.container}>
				<div className={styles.left}>
					<AdsLeftBanner />
				</div>
				<div className={styles.Login}>
					<form onSubmit={onSubmit}>
						<div>
							<label htmlFor='username'>
								<input
									name='username'
									required
									id='username'
									placeholder='username'
									value={username}
									onChange={(e) => setUsername(e.target.value)}
								/>
							</label>
						</div>
						<div>
							<label htmlFor='password'>
								<input
									name='password'
									required
									type='password'
									id='password'
									placeholder='password'
									value={password}
									onChange={(e) => setPassword(e.target.value)}
								/>
							</label>
						</div>
						<button>LOGIN</button>
					</form>
				</div>
				<div className={styles.left}>
					<AdsRightBanner />
				</div>
			</div>
		</>
	);
};

export default Login;
