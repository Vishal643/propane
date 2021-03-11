import { DiscussionEmbed } from 'disqus-react';
import styled from 'styled-components';
const DisqueComment = styled.div`
	width: 500px;
	height: fit-content;
	margin: 30px 400px;
`;
const Comment = ({ endPoint, id, title }) => {
	return (
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
	);
};

export default Comment;
