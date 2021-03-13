import React from 'react';
import { AiFillHome, AiOutlineSearch } from 'react-icons/ai';
import { NavLink, useHistory } from 'react-router-dom';
import styles from '../../Styles/SubNav.module.css';
// import { makeStyles } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import Button from '@material-ui/core/Button';
import { getSearch } from '../../Redux/SearchFunction/action';
import { useDispatch } from 'react-redux';

// const useStyles = makeStyles((theme) => ({
// 	// typography: {
// 	//   padding: theme.spacing(2),
// 	// },
// 	modalStyle: {
// 		// background:"black",
// 	},
// }));

const SubNav = () => {
	const dispatch = useDispatch();
	const history = useHistory();
	// const classes = useStyles();

	const [find, setFind] = React.useState('');
	// const {finding} = useSelector((state)=>state.search, shallowEqual)

	const handleSearch = () => {
		if (find !== '') {
			dispatch(getSearch(find));
			history.push(`/search/${find}`);
			setFind('');
		}
	};
	const [anchorEl, setAnchorEl] = React.useState(null);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const open = Boolean(anchorEl);
	const id = open ? 'simple-popover' : undefined;

	return (
		<>
			<div className={styles.subnav_wrapper}>
				<div>
					<p>
						<NavLink
							activeStyle={{
								color: 'rgb(122, 7, 7) ',
								backgroundColor: 'white',
								padding: '2px',
							}}
							to='/'
							exact
						>
							<AiFillHome />
						</NavLink>
					</p>
					<p>
						<NavLink
							activeStyle={{
								color: 'rgb(122, 7, 7) ',
								backgroundColor: 'white',
								padding: '2px 5px',
							}}
							to='/business'
							exact
						>
							Business
						</NavLink>
					</p>
					<p>
						<NavLink
							activeStyle={{
								color: 'rgb(122, 7, 7) ',
								backgroundColor: 'white',
								padding: '2px',
							}}
							to='/business/india-business'
							exact
						>
							India Business
						</NavLink>
					</p>
					<p>
						<NavLink
							activeStyle={{
								color: 'rgb(122, 7, 7) ',
								backgroundColor: 'white',
								padding: '2px',
							}}
							to='/business/international-business'
							exact
						>
							International Business
						</NavLink>
					</p>
					<p>Sensex</p>
					<p>Photos</p>
					<p>Videos</p>
					<p>GST</p>
					<p>Budget</p>
					<p>
						<NavLink
							activeStyle={{
								color: 'rgb(122, 7, 7) ',
								backgroundColor: 'white',
								padding: '2px',
							}}
							to='/tax-calculator'
							exact
						>
							Tax Calculator
						</NavLink>
					</p>
					<p>FAQs</p>
					<p>Banking</p>
				</div>

				<div>
					<Button
						style={{ backgroundColor: '#0270DF' }}
						aria-describedby={id}
						variant='contained'
						color='primary'
						onClick={handleClick}
					>
						<AiOutlineSearch />
					</Button>

					<Popover
						id={id}
						open={open}
						anchorEl={anchorEl}
						onClose={handleClose}
						anchorOrigin={{
							vertical: -80,
							horizontal: 65,
						}}
						transformOrigin={{
							vertical: 'center',
							horizontal: 'right',
						}}
					>
						<div className={styles.subnav_input}>
							<input
								placeholder='Search News'
								value={find}
								onChange={(e) => setFind(e.target.value)}
							/>
							<button onClick={handleSearch}>Search</button>
						</div>
					</Popover>
				</div>
			</div>

			<div className={styles.subnav_subhead}>
				<div style={{ marginLeft: '3%' }}> NEWS / BUSINESS NEWS </div>
			</div>
		</>
	);
};

export { SubNav };

// className={classes.modalStyle}
