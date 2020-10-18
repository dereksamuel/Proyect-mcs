import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { AuthContext } from './Auth.jsx';

const PrivateRoutes = ({ component: RouteComponent, ...rest_data }) => {
  const { currentUser } = useContext(AuthContext);
  return (
    <Route
      {...rest_data}
      render={(routeProps) =>
        currentUser ? (
          <RouteComponent { ...routeProps } />
        ) : (
          <Redirect to="/signin" />
        )
      }
    />
  );
}

export default PrivateRoutes;
