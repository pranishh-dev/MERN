import { useState } from "react";
import "./App.css";

import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { Home } from "./Components/home";
import ProductPage from "./Components/productPage";
import AboutUs from "./Components/aboutUs";
import { NavBar } from "./Components/navBar";
import { Login } from "./Components/login";

function App() {
  // const [page, setPage] = useState("home");

   const products = [
    {
      id: 1,
      title: "apple",
    },
    {
      id: 2,
      title: "banana",
    },
  ];

  return (
    <>
      {/* jugaad but isnt good */}
      {/* {page == "home" && <Home />}
      {page == "product-page" && <ProductPage />}
      {page == "about-us" && <AboutUs />} */}

      {/* behaves differently and isnt optimised and breaks in most cases */}
      {/* <NavBar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="product-page" element={<ProductPage />} />
        <Route path="about-us" element={<AboutUs />} />
      </Routes> */}

      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<Home products={products}/>} />
          <Route path="product-page/:id" element={<ProductPage products={products} />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="dashboard" element={<div>Dashboard</div>} />
          <Route path="contact-us" element={<div>Contact Us</div>} />
        </Route>
        <Route path="login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
