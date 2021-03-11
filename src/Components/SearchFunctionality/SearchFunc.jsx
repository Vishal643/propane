import React from "react"
import { shallowEqual, useSelector } from "react-redux"
import { useParams } from "react-router"
import { Link } from "react-router-dom"
import styles from "../../Styles/SearchFunc.module.css"


const SearchFunc =()=>{

    const {find} = useParams()
    const [order, setOrder] = React.useState("any")

    const {searchArray, isSearching, isError} = useSelector((state)=>state.search, shallowEqual)
    
    const handleSort=(e)=>{
        setOrder(e.target.value)
        // dispatch( getOrder( e.target.value ) )
    }
    return(
        <>


        <div className={styles.search_content_wrapper}>

        <div className={styles.search_content_head}>Results - <strong>{find}</strong></div>

        <div className={styles.search_content_dropDown}>            
            <select value={order} onChange={handleSort}>
                <option value="any">ANY TIME</option>
                <option value="latest"> NEWEST</option>
                <option value="oldest"> OLDEST</option>
                <option value="read">MOST READ</option>

            </select>
        </div>

        </div>

        <div className={styles.search_content_wrapper}>
            {
                isSearching ? <div>...Loading</div> :
                isError ? <div> Error 404</div> :
                (searchArray.length === 0) ? <div style={{margin:"10px 30px"}}>No Results Found</div> :
                searchArray?.sort((a, b) => {
                    if(order === "latest"){
                        // return a.date - b.date
                    }else if(order === "oldest"){
                        // return b.date-a.date
                    }else if(order === "read"){
                        // return b.count-a.count
                    }else if(order === "any"){
                        return
                    }
                }).map((item, i)=>
                 <div  key={i} className={styles.search_content_main}>
                     <div>
                     </div>

                     <img src={item.image_link} alt="news image" width="80%" />
                     <p><Link to={`/business/search/${find}/${item.id}`}>{item.headline}</Link></p>
               
                 </div>)
            }
             </div>
        </>
    )
}

export {SearchFunc}