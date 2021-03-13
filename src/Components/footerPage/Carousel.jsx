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
		height: 200px;
		width: 100%;
		background-color: none;
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
						<h3>PRABAL BASU ROY</h3>
						<br />
						<p>
							It's not just election alone: What the world's largest democracy
							can learn from the world's oldest democracy
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
						<h3>TOI EDIT</h3>
						<br />
						<p>
							Quad summit: Delji must drop its hesitations about platforms that
							push back against Beijing
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
						<h3>FREE AIR</h3>
						<br />
						<p>
							What India's Supreme Court said in 1950, on sedition and freedom
							of expression
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
						<h3>TOI EDIT</h3>
						<br />
						<p>
							How to keep FIT: FLexible inflation targeting has worked. We must
							stick to the 4% target
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
						<h3>JUG SURAIYA</h3>
						<br />
						<p>
							Home truths: A contoversial medical treatment which had been known
							to cure even sceptics
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
						<h3>FREE TO AIR</h3>
						<br />
						<p>
							Overall, the film remains true to its genre and packs a good dose
							of entertainment, which makes it worth a trip to the theatre
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
						<h3>TOI EDIT</h3>
						<br />
						<p>
							Overall, it's a novel idea with a fresh and breezy storyline that
							has its moments. But with more depth and soul
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
