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
          <div
        style={{
          position: "absolute",
          top: "85%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          backgroundColor: "rgba(0, 48, 24, 0.95)",
          padding: "2rem",
          borderRadius: "8px",
          textAlign: "center",
          maxWidth: "450px",
          color: "white",
        }}
      >
        <p>
          Lorem ipsum Lorem ipsum Lorem Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
          Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
          Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
          Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
          Lorem ipsumipsum Lorem ipsum Lorem ipsum Lorem ipsum.
        </p>
        
        <button
          style={{
            marginTop: "20px",
            padding: "10px 30px",
            backgroundColor: "transparent",
            color: "white",
            border: "2px solid #FFDD00",
            borderRadius: "25px",
            fontSize: "16px",
            cursor: "pointer",
            transition: "all 0.3s ease",
          }}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = "#FFDD00";
            e.target.style.color = "#003018";
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = "transparent";
            e.target.style.color = "white";
          }}
        >
          Play Now
        </button>
      </div>

</div>
    

  );
};

export default home;