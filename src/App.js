
import styles from  './Styles/App.module.css';
import { ExtraNewsPoints } from './Components/ExtraNewsPoints';
import { HeaderImage } from './Components/HeaderImage';
import { TopContent } from './Components/TopContent';
import { VideoCard } from './Components/VideoCard';
import { AdvertiseRight } from './Components/AdvertiseRight';
import { TopAdverRedBox } from './Components/TopAdverRedBox';

function App() {
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

export default App;
