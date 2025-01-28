import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router";
import { ASSETS } from "../assets/Data";

const Navbar = () => {
  const navRef = useRef();
  const [show,setShow] = useState(true);

  const handelSoso = () => {
    setShow(!show);
  }

  useEffect(() => {
    const handelNav = () => {
      if(window.innerWidth > 992){

      if (window.scrollY > 40) {
        navRef.current.classList.add("position-fixed");
      } else {
        navRef.current.classList.remove("position-fixed");
      }}
      else{
        navRef.current.classList.add("position-fixed");
      }
    }

      
      console.log(window.innerWidth);
      window.addEventListener("scroll", handelNav);

  },[]);

  
  return (
    <div className="pt-2 father">
      {/* Top Nav  */}
      <div className="border-bottom sub-nav pb-1">
        <div className="container">
          <div className="row d-flex justify-content-between">
            <div className="col-md-6">
              <ul className="d-flex nav-info">
                <li className="d-flex align-items-center">
                  <i class=" mr-1 fa fa-envelope"></i> info@company.com
                </li>
                <div className="hr"></div>
                <li className="d-flex align-items-center">
                  <i class=" mr-1 fa fa-map"></i> Sunny Isles Beach, FL 33160
                </li>
              </ul>
            </div>
            <div className="col-md-6 text-right">
              <ul class="Links-nav d-flex justify-content-end">
                <li>
                  <a href="#">
                    <i class="fab fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="https://x.com/minthu" target="_blank">
                    <i class="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fab fa-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fab fa-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className=""></div>
        </div>
      </div>
      {/* Top Nav  */}

      {/* Main Nav  */}
      <div className="hop">
      <nav className="navbar navbar-expand-lg navbar-light py-3" ref={navRef}>
        <div className="container">
          <a className="navbar-brand" href="/">
            VILLA
          </a>
          <button
            className="navbar-toggler icon-btn"
            onClick={handelSoso}
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
           <img className="img-fluid w-100 h-50" src={`${show ? ASSETS.bars : ASSETS.close}`} alt="" />
          </button>
          <div className="collapse navbar-collapse on" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink to={"/"}>Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to={"/properties"}>Properties</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to={"/details"}>Property Details</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to={"/contact"}>Contact Us</NavLink>
              </li>
            </ul>
            <form className="form-inline ml-4 my-2 my-lg-0">
              <button className="btn btn-villa my-2 my-sm-0 position-relative" type="submit">
                <span className="position-absolute">
                  <i class="fa fa-calendar"></i>
                </span>
                Schedule a visit
              </button>
            </form>
          </div>
        </div>

      </nav>
        <div className="drop">
        <ol className={`${show ? "d-none":"d-flex flex-column"}`}>
              <li onClick={handelSoso} className="nav-item">
                <NavLink to={"/"}>Home</NavLink>
              </li>
              <li onClick={handelSoso} className="nav-item">
                <NavLink to={"/properties"}>Properties</NavLink>
              </li>
              <li onClick={handelSoso} className="nav-item">
                <NavLink to={"/details"}>Property Details</NavLink>
              </li>
              <li onClick={handelSoso} className="nav-item">
                <NavLink to={"/contact"}>Contact Us</NavLink>
              </li>
            </ol>
            </div>
            </div>
      {/* Main Nav  */}
    </div>
  );
};

export default Navbar;
