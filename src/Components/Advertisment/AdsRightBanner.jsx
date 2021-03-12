
import React from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { fetchAdsBannerById } from '../../Redux/AdsBanner/action';
import {AdsBannerCard} from './AdsBannerCard'


const AdsRightBanner = () => {
    
    const dispatch = useDispatch();
    const{isLoading,bannerStr,error} = useSelector((state) => state.AdsBanner , shallowEqual);
    
    React.useEffect(() => {
       setInterval(() => {
            for(let i=1;i<7;i++){
                var num = Math.floor( (Math.random() * 7)+1 );
                console.log(num+"hello")
                dispatch(fetchAdsBannerById(num))
            }
      },5000)
    },[dispatch]) 
    
    return (
        <>
            {/* {isLoading && <h3>...Loading</h3>} */}
            {error && <div>something went wrong</div>}
            <AdsBannerCard img={bannerStr} />
            
        </>
    )
}

export {AdsRightBanner}

