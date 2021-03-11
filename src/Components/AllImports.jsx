
import styles from  '../Styles/App.module.css';
import { ExtraNewsPoints } from './ExtraNewsPoints';
import { HeaderImage } from './HeaderImage';
import { TopContent } from './TopContent';
import { VideoCard } from './VideoCard';
import { AdvertiseRight } from './AdvertiseRight';
import { TopAdverRedBox } from './TopAdverRedBox';

function AllImports() {
  return (
    <>
      <div>
            <TopAdverRedBox/>
      </div>
      <div className={styles.Maindiv}>
        <div className={styles.Maindiv__left}>
              <HeaderImage/>
              <TopContent/>
          </div>
          <div className={styles.Maindiv__middle}>
              <VideoCard/>
          </div>
          <div className={styles.Maindiv__right}>
                <AdvertiseRight/>
                <ExtraNewsPoints/>
          </div>
      </div>
    </>
  );
}

export default AllImports;
