import React from 'react';
import styled from 'styled-components';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../../Redux/TopContent/action';
import { NewsCard } from './NewsCard';
import { Ring } from 'react-awesome-spinners';
const MainWrapper = styled.div`
	width: 100%;
	display: flex;
	flex-wrap: wrap;
`;

const TopContent = () => {
	const dispatch = useDispatch();
	const { isLoading, data, error } = useSelector(
		(state) => state.TopContent,
		shallowEqual
	);

	React.useEffect(() => {
		dispatch(fetchData());
	}, [dispatch]);

	return (
		<>
			{isLoading && (
				<div style={{ margin: '200px 600px' }}>
					<Ring style={{ fontSize: '100px' }} />
				</div>
			)}
			{error && <div>something went wrong</div>}
			<MainWrapper>
				{data?.map((item) => (
					<>
						<NewsCard {...item} key={item.id} />
					</>
				))}
			</MainWrapper>
		</>
	);
};

export { TopContent };
