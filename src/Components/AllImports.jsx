import styles from '../Styles/App.module.css';
import { ExtraNewsPoints } from '../Components/relatedToHeader/ExtraNewsPoints';
import { HeaderImage } from '../Components/relatedToHeader/HeaderImage';
import { TopContent } from '../Components/relatedToHeader/TopContent';
import { VideoCard } from '../Components/relatedToHeader/VideoCard';
import { AdvertiseRight } from '../Components/Advertisment/AdvertiseRight.jsx';
import { TopAdverRedBox } from '../Components/relatedToHeader/TopAdverRedBox';

function AllImports() {
	return (
		<>
			<div>
				<TopAdverRedBox />
			</div>
			<div className={styles.Maindiv}>
				<div className={styles.Maindiv__left}>
					<HeaderImage />
					<TopContent />
				</div>
				<div className={styles.Maindiv__middle}>
					<VideoCard />
				</div>
				<div className={styles.Maindiv__right}>
					<AdvertiseRight />
					<ExtraNewsPoints />
				</div>
			</div>
		</>
	);
}

export default AllImports;
