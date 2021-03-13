
import React from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { fetchAdvById } from '../../Redux/Advertisement/action';

import { AdvCard } from './AdvCard';

const AdvertiseRight = () => {
    
    const dispatch = useDispatch();
    const{isLoading,randomStr,error} = useSelector((state) => state.Advertisement , shallowEqual);
    
    React.useEffect(() => {
     let intervalId =  setInterval(() => {
            for(let i=1;i<11;i++){
                var num = Math.floor( (Math.random() * 11)+1 );
                console.log(num)
                dispatch(fetchAdvById(num))
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
            <AdvCard img={randomStr} />
           
        </>
    )
}

export {AdvertiseRight}

