import React from "react"
import { useParams } from "react-router"
import styles from "../../Styles/IndividualNews.module.css"
import parse from "html-react-parser"

const IndividualNews=({data})=>{

    const {id} = useParams()
  
    return(
        <>
      
        <div className={styles.individual_wrapper}>

        {
           
            data?.map((item)=> item.id === +id && 
            <div key={item.id}  className={styles.individual_subWrapper}>

               <p>{item.headline}</p> 

               <div className={styles.individual_content}>
                    <div>
                    <img src={item.image_link} alt="pic"/>
                    </div>

                    <div>

                    <p>{parse(item.description)}</p>
                    </div>
                </div>

            </div>)
        }
        </div>

        </>
    )
}

export {IndividualNews}