
import React from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { fetchAdvById } from '../Redux/Advertisement/action';
import { AdvCard } from './AdvCard';



const AdvertiseRight = () => {

    
    const dispatch = useDispatch();
    const{isLoading,randomArr,error} = useSelector((state) => state.Advertisement , shallowEqual);
    
    
  
    React.useEffect(() => {
       setInterval(() => {
            for(let i=1;i<10;i++){
                var num = Math.floor( (Math.random() * 10)+1 );
                console.log(num)
                dispatch(fetchAdvById(num))
            }
      },5000)
    },[dispatch]) 
    

    return (
        <>
            {isLoading && <h3>...Loading</h3>}
            {error && <div>something went wrong</div>}
            <AdvCard img={randomArr} />
           
        </>
    )
}

export {AdvertiseRight}

