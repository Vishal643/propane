import React from "react"
import {AiFillHome, AiOutlineSearch} from "react-icons/ai"
import { Link } from "react-router-dom"
import styles from "../../Styles/SubNav.module.css"

const SubNav =()=>{
    return(
        <>
        <div className={styles.subnav_wrapper}>
            <div>
                <p><Link><AiFillHome/></Link></p> 
                <p><Link to="/business">Business</Link></p>
                <p><Link to="/business/india-business">India Business</Link></p>
                <p><Link to="/business/international-business">International Business</Link></p>
                <p>Sensex</p>
                <p>Photos</p>
                <p>Videos</p>
                <p>GST</p>
                <p>Budget</p>
                <p> <Link>Tax Calculator</Link></p>
                <p>FAQs</p>
                <p>Banking</p> 
            </div>
           
           <div>
                <p><AiOutlineSearch/></p>
           </div>

        </div>

        <div className={styles.subnav_subhead}>
            <div style={{marginLeft:"3%"}}> NEWS / BUSINESS NEWS </div>
        </div>
        </>
    )
}

export {SubNav}