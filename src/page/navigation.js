import React,{useState} from "react";
import { NavLink,Link } from "react-router-dom";
import {ImBook,ImSearch} from 'react-icons/im';
import {FaBars} from 'react-icons/fa';
import {IoMdClose} from 'react-icons/io';
import { Nav } from "../data/nav";
import '../css/nav.scss';



function Navigation() {

  const [Bar, setBar] = useState(false);

 const NavMap=  Nav.map((item, index) => 
    <ul>
    <li key={index}>
    <NavLink className="navlink" to={item.link}>{item.to}</NavLink>
    </li>
    </ul>
  );
    
  return (
    <div className="nav">
        <FaBars className="fbars" onClick={()=> setBar(!Bar)}/>
       
      <nav className="nav-list">
      <form action="" className="search">
           <span><ImSearch/></span>
           <input type="search" name="nav-search" id="search"/>
       </form>
       <div className="nav-item">{NavMap}</div>
         
        
      </nav>
      <div className="brand">
        <Link className="link" to="#"><span>Podcast</span></Link>
        <ImBook className="brand-icon"/>
      </div>
      <div className={Bar ? "mobile" : "desktop"}>

          <IoMdClose className="close" onClick={()=> setBar(!Bar)}/>
          <div className="mobile-nav-items">{NavMap}</div>
      </div>
    </div>
  );
}

export default Navigation;

