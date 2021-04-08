import React from "react";
import { Link } from "react-router-dom";
import "../css/home.scss";
import Products from "../data/products.json";
import {ImBookmarks} from 'react-icons/im'

function Home() {

  const items=Products.filter((item) => {
    if (item.new === "yes") {
      return item;
    }
  }).map((item, index) => {
    return (
      <div  className="head-item" key={index}>
        <span>{item.id}</span>
        <span>{item.title}</span>
        <h3>{item.by}</h3>
        <span><ImBookmarks/></span>
      </div>
    );
  })

  return (
    <div className="main-container">
      <div className="buy">
        <button type="button" className="bbuy">
          <Link className="link" to="/">
            مشاهده و خرید
          </Link>
        </button>
        <h1 className="hbuy">مرچندایزپادکست</h1>
      </div>
      <div className="bold-podcast-container">
        <div className="detail"></div>
        <div className="bold-items">
          <div className="items">
            {items}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
