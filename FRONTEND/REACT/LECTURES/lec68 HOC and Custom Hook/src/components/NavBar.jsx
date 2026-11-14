import React from 'react'
import { Link, Outlet } from 'react-router'

export const NavBar = () => {
  return (
    <div>
      <Link to={"/"}>Home</Link>
      <br />
      <Link to={"/profile"}>Profile</Link>
      <br />
      <Link to={"/dashboard"}>Dashboard</Link>
      <Outlet/>
    </div>
  )
}
