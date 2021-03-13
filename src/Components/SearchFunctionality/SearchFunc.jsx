import React from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import styles from '../../Styles/SearchFunc.module.css';
import { BannerBusiness } from '../NavbarBusiness/BannerBusiness';
import { SubNav } from '../NavbarBusiness/SubNav';
import { FaBookReader } from 'react-icons/fa';
import { BsCalendar } from 'react-icons/bs';
import GridFooter from '../footerPage/GridFooter';
import { Ring } from 'react-awesome-spinners';

const SearchFunc = () => {
	const { find } = useParams();
	const [order, setOrder] = React.useState('any');

	const { searchArray, isSearching, isError } = useSelector(
		(state) => state.search,
		shallowEqual
	);

	const handleSort = (e) => {
		setOrder(e.target.value);
		// dispatch( getOrder( e.target.value ) )
	};
	return (
		<>
			<BannerBusiness banner='https://tpc.googlesyndication.com/simgad/16057958619342960337?' />
			<SubNav />
			<div className={styles.search_content_wrapper}>
				<div className={styles.search_content_head}>
					Results - <strong>{find}</strong>
				</div>

				<div className={styles.search_content_dropDown}>
					<select value={order} onChange={handleSort}>
						<option value='any'>ANY TIME</option>
						<option value='latest'> NEWEST</option>
						<option value='oldest'> OLDEST</option>
						<option value='read'>MOST READ</option>
					</select>
				</div>
			</div>

			<div className={styles.search_content_wrapper}>
				{isSearching ? (
					<div style={{ margin: '200px 600px' }}>
						<Ring style={{ fontSize: '100px' }} />
					</div>
				) : isError ? (
					<div> Error 404</div>
				) : searchArray.length === 0 ? (
					<div style={{ margin: '10px 30px' }}>No Results Found</div>
				) : (
					searchArray
						?.sort((a, b) => {
							if (order === 'oldest') {
								return new Date(a.date) - new Date(b.date);
							} else if (order === 'latest') {
								return new Date(b.date) - new Date(a.date);
							} else if (order === 'read') {
								return b.readerCount - a.readerCount;
							} else {
								return;
							}
						})
						.map((item, i) => (
							<div key={i} className={styles.search_content_main}>
								<div></div>

								<img src={item.image_link} alt='news pic' width='80%' />
								<p>
									<Link to={`/search/${find}/${item.id}`}>{item.headline}</Link>
								</p>
								<p>
									<BsCalendar /> {item.date}{' '}
									<span>
										{' '}
										<FaBookReader /> {item.readerCount}
									</span>
								</p>
							</div>
						))
				)}
			</div>
			<div style={{ margin: '10% auto 0%', borderTop: '1px solid gray' }}>
				<GridFooter />
			</div>
		</>
	);
};

export { SearchFunc };
