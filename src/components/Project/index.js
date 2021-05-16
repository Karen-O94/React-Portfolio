import React from "react";
import "./style.css";

function Project(props) {
    return (
        <div className="col-12 col-md-4 col-lg-4 ml-4 my-4">
            <div className="card" style={{ backgroundColor:"#adb5bd", width: "18rem" }}>
                <h5 className="card-title">{props.name}</h5>
                <img src={`${props.thumbnail}`} className="card-img-top"
                    alt="" />
                <div className="card-body">

                    <p className="card-text"> {`${props.desc}`}</p>
                    <li>
                        <a href={`${props.git_url}`} className="btn btn-dark">GitHub
                Repo</a>
                    </li>
                    <li>
                        <a href= {`${props.app_url}`} className="btn btn-dark">Live
                App</a>
                    </li>
                </div>
            </div>
        </div>
    )
}

export default Project