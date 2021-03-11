import React from 'react'
import styles from '../Styles/HeaderImage.module.css'

const HeaderImage = () => {


    return (
        <div className={styles.headImg}>
          <div>
              <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOsRr0swxE1WbQVLvf-6W3odHXx_6fTD-MuQ&usqp=CAU' alt="headerImg"></img>
          </div>
          <h1>EPS fires on all cylinders: Rs <br/> 1,500 for women family head,<br/>free LPG</h1>
        </div>
    )
}

export {HeaderImage}