import React from "react";
import mobileAppImg from "../../assets/mobile-app.png";

const MobileAppImage = () => {
  return (
    <img
      src={mobileAppImg}
      alt="Mobile App"
      className="h-auto w-full object-contain p-5"
    />
  );
};

export default MobileAppImage;
