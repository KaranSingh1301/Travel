import React from "react";
import "./SignUp.css";

function SignUp() {
  const sign = {
    backgroundImage:
      " url('https://scx2.b-cdn.net/gfx/news/hires/2018/2-ocean.jpg')",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    color: "#fff",
    fontSize: "100px",
    height: "700px",
  };
  return (
    <div style={sign} className="signUp">
      <h1>SIGN UP</h1>
    </div>
  );
}

export default SignUp;
