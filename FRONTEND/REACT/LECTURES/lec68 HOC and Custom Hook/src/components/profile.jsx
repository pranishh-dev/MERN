import React from "react";
import { withAuth } from "../utils/withAuth";

const Profile = (props) => {
  let { name, role } = props;
  return (
    <div>
      <p>Name : {name}</p>
      <p>Role : {role}</p>
    </div>
  );
};
export const AuthProfile = withAuth(Profile);
