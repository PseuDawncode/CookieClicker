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
          maxWidth: "550px",
          color: "white",
          
        }}
      >
        <p
            style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: "16px",
            lineHeight: "1.6",
            fontWeight: "300",
            letterSpacing: "0.3px",
            marginBottom: "15px",
            
          }}
        >
            This is a simple cookie clicker game demo. Where you click the cookie to earn cookies. 
            With the earned cookies you can buy upgrades to increase your cookie production. 
            For the purpose of this demo, we have added only two upgrades. The first one is a simple 'Auto Clicker' 
            upgrade that counts as one click every second increasing the cookie production by one. 
            The second one is a 'Double Click' upgrade that doubles the amount of cookies you earn per click. 
            (does not stack with the auto clicker). Please note that to play the game you need to be logged in. 
            If you are not logged in, please login or register to play the game. Have fun!
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