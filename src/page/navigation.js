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
       <form action="">
           <span><ImSearch/></span>
           <input type="search" name="nav-search" id="search"/>
       </form>
      <nav>
        <ul>
          {Nav.map((item, index) => {
            return (
              <li key={index}>
                <NavLink to={item.link}>{item.to}</NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
      <div className="brand"><ImBook/><Link to="#"><span>Podcast</span></Link></div>
    </div>
  );
}

export default navigation;
