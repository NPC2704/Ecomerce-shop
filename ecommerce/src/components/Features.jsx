import React from "react";
import "./features.css";
import feature1 from "../assets/feature-img-1.png";
import feature2 from "../assets/feature-img-2.png";
import feature3 from "../assets/feature-img-3.png";
const Features = () => {
  return (
    <section class="features" id="features">
      <h1 class="heading">
        out <span>features</span>
      </h1>
      <div class="box-container">
        <div class="box">
          <img src={feature1} alt="" />
          <h3>fresh and organic</h3>
          <p>Ngon tuyet cu meo</p>
          <a href="#" class="btn">
            read more
          </a>
        </div>
        <div class="box">
          <img src={feature2} alt="" />
          <h3>free delivery</h3>
          <p>Free ship don tu 100$</p>
          <a href="#" class="btn">
            read more
          </a>
        </div>
        <div class="box">
          <img src={feature3} alt="" />
          <h3>easy payments</h3>
          <p>Thanh toan de dang</p>
          <a href="#" class="btn">
            read more
          </a>
        </div>
      </div>
    </section>
  );
};

export default Features;
