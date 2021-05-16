import React from "react";
import "./style.css";
import profileimg from "../../img/FirstSept2020.jpg";

function Header(props) {
  return (
    <div className="hero text-center" style={{ backgroundImage: `url("https://images.unsplash.com/photo-1500246432024-efe3c9116a56?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2064&q=80")` }}>
      <br></br>
                <img src={profileimg} className="rounded-circle mx-auto d-block" alt="profile" style={{ width: 200, height: 220, border: "solid white" }} />
                <h1 className="display-4">Karen Opoku</h1>
                <h2 className="lead" style={{ color: "white", fontSize: 40 }}>Full Stack Web Developer</h2>
      {props.children}
    </div>
  );
}

export default Header;