
import React from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { fetchAdsBannerById} from '../../Redux/AdsBanner/action';
import {AdsBannerCard} from './AdsBannerCard'


const AdsLeftBanner = () => {
    
    const dispatch = useDispatch();
    const{bannerStr,error} = useSelector((state) => state.AdsBanner , shallowEqual);

    
    
    React.useEffect(() => {
      let intervalId = setInterval(() => {
            for(let i=1;i<7;i++){
                var num = Math.floor( (Math.random() * 7)+1 );
                console.log(num+"hey")
                dispatch(fetchAdsBannerById(num))
            }
      },5000)

      return(() => {
        clearInterval(intervalId)
    })
    },[dispatch]) 
    
    

    return (
        <>
            {/* {isLoading && <h3>...Loading</h3>} */}
            {error && <div>something went wrong</div>}
            <AdsBannerCard img={bannerStr} />
            
           
        </>
    )
}

export {AdsLeftBanner};

