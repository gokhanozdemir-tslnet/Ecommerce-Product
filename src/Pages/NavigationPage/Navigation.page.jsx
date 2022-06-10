import "./Navigation.style.scss";

import React, { Fragment } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

const Navigation = () => {
  const locationPath = useLocation().pathname;
  return (
    <Fragment>
      <div className="navigation">
        <Link
          className={` ${locationPath === "/home" ? "active" : ""}`}
          to="/home"
        >
          Home
        </Link>
        <Link
          className={` ${locationPath === "/product" ? "active" : ""}`}
          to="/product"
        >
          Product
        </Link>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
