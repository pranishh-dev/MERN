import React from "react";

export const Status = ({name,isLoggedIn}) => {
  return <>{isLoggedIn? name : "Login"}</>;
};
