import React, { useState } from "react";
import "../css/mNav.scss";
import { FaBars } from "react-icons/fa";
import { NavLink, Link } from "react-router-dom";
import { Nav_data } from "../data/nav_data";
import { IoMdClose } from "react-icons/io";
import { ImBook, ImSearch } from "react-icons/im";

const Nav = () => {
  const [Bar, setBar] = useState(false);

  const NavMap = Nav_data.map((item, index) => (
    <ul>
      <li key={index}>
        <NavLink className="navlink" to={item.link}>
          {item.to}
        </NavLink>
      </li>
    </ul>
  ));

  return (
    <div className="nav">
      <div className="fbars" onClick={() => setBar(!Bar)}>
        <FaBars />
      </div>
      <div className={Bar ? "mob_show" : "mob_hide"}>
        <div className="container-close">
          <IoMdClose className="close" onClick={() => setBar(!Bar)} />
        </div>
        <div className="nav-item">{NavMap}</div>
        <form action="" className="search">
          <span>
            <ImSearch />
          </span>
          <input type="search" name="nav-search" id="search" />
        </form>
      </div>
      <div className="items">
        <nav className="nav-list">
          <form action="" className="search">
            <span>
              <ImSearch />
            </span>
            <input type="search" name="nav-search" id="search" />
          </form>
          <div className="nav-item">{NavMap}</div>
        </nav>
      </div>
      <div className="brand">
        <Link className="link" to="/">
          <span>Podcast</span>
        </Link>
        <ImBook className="brand-icon" />
      </div>
    </div>
  );
};

export default Nav;
