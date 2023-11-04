import React from 'react'
import Frame from "../../assets/Frame.png";
import './style.css'
const MobileBanner = () => {
  return (
    <div className="mobileBannerContain">
         <img alt="mobilebannerImage" src={Frame} className="mobilebannerImage" />
      <div className="mobiletextContaine">
        <h3 className="mobilebannerHead">Track your portfolio & taxes</h3>
        <p className="bannerInfo">
        With our range of features that you can equip for free,
KoinX allows you to be more educated and aware of your tax reports.
        </p>
      </div>
      <button className="mobileBannerBtn">Sign up at KoinX for free &#8594;</button>
    </div>
  )
}

export default MobileBanner