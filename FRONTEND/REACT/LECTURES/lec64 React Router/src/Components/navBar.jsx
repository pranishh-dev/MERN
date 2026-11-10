import React from "react";
import { Link, Outlet } from "react-router";

export const NavBar = () => {
  return (
    <>
      <ul>
        <Link to={"/"}>Home</Link>
        <br/>
        <Link to={`/product-page`}>Product Page</Link>
        <br/>
        <Link to={"about-us"}>About Us</Link>
        <br/>
        <Link to={"contact-us"}>Contact Us</Link>
        <br/>
        <Link to={"login"}>Login</Link>
      </ul>
      <Outlet />
    </>
  );
};
