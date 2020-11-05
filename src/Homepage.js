import React from "react";
import "./Homepage.scss";

const homepage = () => {
  return (
    <div className="homepage">
      <div className="directoryMenu">
        <div className="menu-items">
          <div className="content">
            <h1 className="title">Hats</h1>
            <span className="subtitle">Buy Now</span>
          </div>
        </div>
        <div className="menu-items">
          <div className="content">
            <h1 className="title">Clothes</h1>
            <span className="subtitle">Buy Now</span>
          </div>
        </div>
        <div className="menu-items">
          <div className="content">
            <h1 className="title">Watches</h1>
            <span className="subtitle">Buy Now</span>
          </div>
        </div>
        <div className="menu-items">
          <div className="content">
            <h1 className="title">Laptops</h1>
            <span className="subtitle">Buy Now</span>
          </div>
        </div>
        <div className="menu-items">
          <div className="content">
            <h1 className="title">Bags</h1>
            <span className="subtitle">Buy Now</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default homepage;
