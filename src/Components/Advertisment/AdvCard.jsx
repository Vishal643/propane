import React from 'react' 
import styles from '../../Styles/AdvertiseRight.module.css'
const AdvCard = ({id,img}) => {
   const [close, setClose] = React.useState(false)


    return !close ? (
        <div className={styles.advertiseBox}>
            <p>ADVERTISEMENT</p>
            <img src={img} alt="advertise"></img>
            <button onClick= {()=>{setClose(!close)}}>&#10005;</button>
    </div>
    ): <div className={styles.advertiseBox}>
            <p>ADVERTISEMENT</p>
            <p style={{fontSize:"large"}}>Add Closed by Google</p>
      </div>
     
       
}

export {AdvCard}