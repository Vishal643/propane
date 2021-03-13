import React from "react"
import styles from "../../Styles/NavbarBusiness.module.css"
import {FaTwitter, FaWifi, FaFacebookF} from "react-icons/fa"
import {AiFillYoutube} from "react-icons/ai"
import { shallowEqual, useSelector } from "react-redux"

const BannerBusiness=({banner})=>{

    const [date, setDate] = React.useState("")
    
    React.useEffect(()=>{
        const dateDetails = new Date()
        const setdate = dateDetails.toDateString()
        setDate (setdate)
    },[])

    const {currentUser} = useSelector((state)=>state.auth, shallowEqual)

    return(
       
        <div className={styles.navbar_business_wrapper}>
            <div className={styles.navbar_business_head}>
                <p style={{padding:"10px 30px"}}>{date}</p>
                <div className={styles.navbar_business_headEle}>
                    <div>
                        <p>
                        Hi {currentUser}
                        </p>
                    </div>
                    <p><FaTwitter/></p>
                    <p><FaWifi/></p>
                    <p><FaFacebookF/></p>
                    <p><AiFillYoutube/></p>
                </div>
            </div>

            <div className={styles.navbar_business_banner}>
                <div>
                    <p>THE TIMES OF INDIA</p>
                    <p style={{fontFamily:"sans-serif", paddingLeft:"3%"}}>BUSINESS</p>
                </div>
                <div><img src={banner} alt="Business Banner" width="94%"/></div>
            </div>
        </div>
      
    )
}
export {BannerBusiness}