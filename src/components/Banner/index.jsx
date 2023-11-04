import React from "react";
import "./style.css";
import Frame from "../../assets/Frame.png";

const Banner = () => {
  return (
    <div className="bannerContain">
      <div className="textContainer">
        <h3 className="bannerHead">Get Started with KoinX for FREE</h3>
        <p className="bannerInfo">
          With our range of features that you can equip for free, KoinX allows
          you to be more educated and aware of your tax reports.
        </p>
      </div>

      <img alt="bannerImage" src={Frame} className="bannerImg" />

      <button className="bannerBtn">Get Started for FREE &#8594;</button>
    </div>
  );
};

export default Banner;
