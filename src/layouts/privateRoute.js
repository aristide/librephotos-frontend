import React from "react";
import { connect } from "react-redux";
import * as reducers from "../reducers";
// Router and Switch are needed Breaks site if not in import. DW
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({
  component: Component,
  isAuthenticated,
  showSidebar,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: !reducers.isRefreshTokenExpired(state),
  showSidebar: state.ui.showSidebar,
});

export default connect(mapStateToProps, null)(PrivateRoute);
