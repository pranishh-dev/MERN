import React from "react";
import { withAuth } from "../utils/withAuth";

const Dashboard = (props) => {
  // console.log(props);
  let { name } = props;

  return <p>{name}</p>;
};
export const AuthDashboard = withAuth(Dashboard);
