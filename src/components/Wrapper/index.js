import React from "react";
import "./style.css";
import imagebg from "../../img/image26669.jpg"

function Wrapper(props) {
  const bgimage = {
    backgroundImage: `url(${imagebg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
};
  return <main className="wrapper" style={bgimage}>{props.children}</main>;
}

export default Wrapper;