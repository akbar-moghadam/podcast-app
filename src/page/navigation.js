import React from "react";
import { Nav } from "../data/nav";
import { NavLink,Link } from "react-router-dom";
import {ImBook,ImSearch} from 'react-icons/im';
import {FaBars} from 'react-icons/fa';
import '../css/nav.scss';
function navigation() {
  return (
    <div className="nav">
        <FaBars/>
       
      <nav className="nav-list">
      <form action="" className="search">
           <span><ImSearch/></span>
           <input type="search" name="nav-search" id="search"/>
       </form>
        <ul>
          {Nav.map((item, index) => {
            return (
              <li key={index}>
                <NavLink className="navlink" to={item.link}>{item.to}</NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
      <div className="brand">
        <Link className="link" to="#"><span>Podcast</span></Link>
        <ImBook className="brand-icon"/>
      </div>
    </div>
  );
}

export default navigation;
