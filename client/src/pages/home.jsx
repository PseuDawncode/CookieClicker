import React from "react";
import welcomeImage from "../assets/images/welcomeImg.png";

const home = () => {
return (
<div
  style={{
    backgroundImage: `url(${welcomeImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "100vh",
    width: "100vw",
  }}
>
</div>
  );
};

export default home;