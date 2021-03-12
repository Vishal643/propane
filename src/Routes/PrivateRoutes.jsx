import React from "react";
import { useSelector,shallowEqual } from "react-redux";

import { Route, Redirect } from "react-router-dom";

const PrivateRoutes = ({ Mycomponent, ...rest }) => {
    const{isAuth} = useSelector((state) => state.auth , shallowEqual);
 
  console.log(isAuth, "ISAUTH");
  return (
    <div>
      {isAuth ? (
        <Route {...rest}>
              <Mycomponent />
        </Route>
      ) : (
        <Redirect to="/" />
      )}
    </div>
  );
};


export  {PrivateRoutes};
