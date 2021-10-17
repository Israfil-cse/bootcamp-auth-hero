import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';


const PrivetRoute = ({ children, ...rest}) => {
    const {user, isLoading} = useAuth();
    if (isLoading) {
        return <p>lodding</p>
    }
 
    return (
        <Route
      {...rest}
      render={({ location }) =>
        user.email? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
    );
};

export default PrivetRoute;