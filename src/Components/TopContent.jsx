
import React from 'react'
import styled from "styled-components"
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { fetchData } from '../Redux/TopContent/action';
import {NewsCard} from './NewsCard'


const MainWrapper = styled.div`

width: 100%;
display: flex;
flex-wrap: wrap;

`


const TopContent = () => {


    

     const dispatch = useDispatch();
     const{isLoading,data,error} = useSelector((state) => state.TopContent , shallowEqual);
     
     React.useEffect(() => {
         dispatch(fetchData());
     },[dispatch])
      


    return (
        <>
          
            
            {isLoading && <h3>...Loading</h3>}
            {error && <div>something went wrong</div>}
            <MainWrapper>
                {data?.map((item) => (
                   
                        <>
                           <NewsCard {...item} key={item.id}/>
                        </>
                    
                ))}
            </MainWrapper>

        </>
    )
}

export {TopContent}


