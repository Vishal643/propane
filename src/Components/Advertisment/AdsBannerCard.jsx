import React from 'react' 
import styles from '../../Styles/AdsBannerCard.module.css'
const AdsBannerCard = ({id,img}) => {
   const [close, setClose] = React.useState(false)


    return !close ? (
        <div className={styles.adsBannerCard}>
            <img src={img} alt="adsBanner"></img>
            <button onClick= {()=>{setClose(!close)}}>&#10005;</button>
      </div>
    ): <div className={styles.emtyBanner}>
            
      </div>
     
       
}

export {AdsBannerCard}