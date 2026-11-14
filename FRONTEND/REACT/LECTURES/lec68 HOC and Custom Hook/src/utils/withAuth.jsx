import React from "react";

function withAuth(Component) {
  return function AuthComponent(props) {
    console.log(props);
    let isLoggedIn = true;
    if (isLoggedIn) {

      return <Component {...props}/>;
    }
    return <p>Please Log In</p>;
  };
}

export { withAuth };
