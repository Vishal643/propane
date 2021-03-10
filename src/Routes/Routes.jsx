import Recat from "react"
import { shallowEqual, useSelector } from "react-redux"
import { Switch, Route } from "react-router"
import { BusinessBody } from "../Components/BusinessBody/BusinessBody"
import { IndiaBusiness } from "../Components/BusinessBody/IndiaBusiness"
import { IndividualNews } from "../Components/BusinessBody/IndividualNews"
import { InternationalBusiness } from "../Components/BusinessBody/InternationalBusiness"


const Routes=()=>{

    const {businessData, businessIndia, economyNews} = useSelector((state)=>state.business, shallowEqual)

    return(
        <>
         <Switch>
             <Route path="/business" exact>
                 <BusinessBody/>
             </Route>

             <Route path="/business/india-business" exact>
                <IndiaBusiness/>
             </Route>

             <Route path="/business/international-business" exact>
               <InternationalBusiness/>
             </Route>

             <Route path="/business/general/:id" exact>
                <IndividualNews data = {businessData}/>
             </Route>

             <Route path="/business/india/:id" exact>
                <IndividualNews data = {businessIndia}/>
             </Route>

             <Route path="/business/international/:id" exact>
                <IndividualNews data = {economyNews}/>
             </Route>

             <Route>
                Page Not Found
            </Route>
         </Switch>
        </>
    )
}

export {Routes}