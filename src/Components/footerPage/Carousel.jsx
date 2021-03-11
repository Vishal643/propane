import React from 'react';
import Carousel from 'react-elastic-carousel';
import styled from 'styled-components';
import '../../Styles/styles.css';

const breakPoints = [
	{ width: 1, itemsToShow: 1 },
	{ width: 550, itemsToShow: 2, itemsToScroll: 2 },
	{ width: 768, itemsToShow: 3 },
	{ width: 1200, itemsToShow: 4 },
];

function CarouselContainer() {
	const Item = styled.div`
		display: flex;
		/* justify-content: center; */
		/* align-items: center; */
		height: 200px;
		width: 100%;
		/* background-color: #683bb7; */
		border: 1px solid #d1cdcd;
		color: black;
		margin: 15px;
		font-size: 14px;
		> div {
			padding: 15px;
		}
	`;

	const ImgDiv = styled.img`
		height: 50px;
		width: 50px;
		border-radius: 25px;
		/* border: 1px solid black; */
		margin-right: 10px;
		margin-top: 10px;
	`;

	return (
		<div>
			<Carousel breakPoints={breakPoints}>
				<Item>
					<div>
						<h3>KRISHNAMURTHY SUBRAMANINAN</h3>
						<br />
						<p>
							West cares only about itself: We don’t have to pay any attention
							to what the West is saying about us
						</p>
					</div>
					<div>
						<ImgDiv
							src='https://static.toiimg.com/imagenext/toiblogs/photo/blogs/wp-content/uploads/2019/01/toiedit-logo.jpg'
							alt='toi'
						/>
					</div>
				</Item>
				<Item>
					<div>
						<h3>KRISHNAMURTHY SUBRAMANINAN</h3>
						<br />
						<p>
							West cares only about itself: We don’t have to pay any attention
							to what the West is saying about us
						</p>
					</div>
					<div>
						<ImgDiv
							src='https://static.toiimg.com/imagenext/toiblogs/photo/blogs/wp-content/uploads/2019/01/toiedit-logo.jpg'
							alt='toi'
						/>
					</div>
				</Item>

				<Item>
					<div>
						<h3>KRISHNAMURTHY SUBRAMANINAN</h3>
						<br />
						<p>
							West cares only about itself: We don’t have to pay any attention
							to what the West is saying about us
						</p>
					</div>
					<div>
						<ImgDiv
							src='https://static.toiimg.com/imagenext/toiblogs/photo/blogs/wp-content/uploads/2019/01/toiedit-logo.jpg'
							alt='toi'
						/>
					</div>
				</Item>

				<Item>
					<div>
						<h3>KRISHNAMURTHY SUBRAMANINAN</h3>
						<br />
						<p>
							West cares only about itself: We don’t have to pay any attention
							to what the West is saying about us
						</p>
					</div>
					<div>
						<ImgDiv
							src='https://static.toiimg.com/imagenext/toiblogs/photo/blogs/wp-content/uploads/2019/01/toiedit-logo.jpg'
							alt='toi'
						/>
					</div>
				</Item>

				<Item>
					<div>
						<h3>KRISHNAMURTHY SUBRAMANINAN</h3>
						<br />
						<p>
							West cares only about itself: We don’t have to pay any attention
							to what the West is saying about us
						</p>
					</div>
					<div>
						<ImgDiv
							src='https://static.toiimg.com/imagenext/toiblogs/photo/blogs/wp-content/uploads/2019/01/toiedit-logo.jpg'
							alt='toi'
						/>
					</div>
				</Item>

				<Item>
					<div>
						<h3>KRISHNAMURTHY SUBRAMANINAN</h3>
						<br />
						<p>
							West cares only about itself: We don’t have to pay any attention
							to what the West is saying about us
						</p>
					</div>
					<div>
						<ImgDiv
							src='https://static.toiimg.com/imagenext/toiblogs/photo/blogs/wp-content/uploads/2019/01/toiedit-logo.jpg'
							alt='toi'
						/>
					</div>
				</Item>

				<Item>
					<div>
						<h3>KRISHNAMURTHY SUBRAMANINAN</h3>
						<br />
						<p>
							West cares only about itself: We don’t have to pay any attention
							to what the West is saying about us
						</p>
					</div>
					<div>
						<ImgDiv
							src='https://static.toiimg.com/imagenext/toiblogs/photo/blogs/wp-content/uploads/2019/01/toiedit-logo.jpg'
							alt='toi'
						/>
					</div>
				</Item>

				<Item>
					<div>
						<h3>KRISHNAMURTHY SUBRAMANINAN</h3>
						<br />
						<p>
							West cares only about itself: We don’t have to pay any attention
							to what the West is saying about us
						</p>
					</div>
					<div>
						<ImgDiv
							src='https://static.toiimg.com/imagenext/toiblogs/photo/blogs/wp-content/uploads/2019/01/toiedit-logo.jpg'
							alt='toi'
						/>
					</div>
				</Item>
			</Carousel>
		</div>
	);
}

export { CarouselContainer };
