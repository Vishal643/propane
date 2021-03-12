import { DiscussionEmbed } from 'disqus-react';
import styled from 'styled-components';
import { AdvertiseRight } from '../Advertisment/AdvertiseRight';
const DisqueComment = styled.div`
	width: 500px;
	height: fit-content;
	margin: 30px 400px;
	margin-bottom: 0px;
	position: relative;
`;

const Comment = ({ endPoint, id, title }) => {
	return (
		<>
			<DisqueComment>
				<DiscussionEmbed
					shortname='thetimesofindia'
					config={{
						url: endPoint,
						identifier: id,
						title: title,
						language: 'en_US',
					}}
				/>
			</DisqueComment>
			<div
				style={{
					marginLeft: '380px',
					marginTop: '-48px',
					position: 'absolute',
					width: '500px',
					display: 'flex',
				}}
			>
				<AdvertiseRight />
				<AdvertiseRight />
			</div>
		</>
	);
};

export default Comment;
