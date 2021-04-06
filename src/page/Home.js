import React from "react";
import { Link } from "react-router-dom";
import "../css/home.scss";
import Products from "../data/products.json";

function Home() {
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
            {Products.filter((item) => {
              if (item.new === "yes") {
                return item;
              }
            }).map((item, index) => {
              return (
                <div key={index}>
                  <span>{item.title}</span>

                  <span></span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
