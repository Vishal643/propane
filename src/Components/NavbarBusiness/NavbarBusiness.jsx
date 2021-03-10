import React from "react"
import { useHistory } from "react-router"
import { Routes } from "../../Routes/Routes"
import { BusinessBody } from "../BusinessBody/BusinessBody"
import { BannerBusiness } from "./BannerBusiness"
import { SubNav } from "./SubNav"


const NavbarBusiness=()=>{

    const history = useHistory()

    React.useEffect(()=>{
    history.push("/business")
    },[])

    
    return(
        
        <div >
         <BannerBusiness banner="https://tpc.googlesyndication.com/simgad/16057958619342960337?"/>
         <SubNav/>
         {/* <BusinessBody/> */}
         <Routes/>
        </div>
      
    )
}
export {NavbarBusiness}