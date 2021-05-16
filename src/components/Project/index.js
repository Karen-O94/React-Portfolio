import React from "react";
import "./style.css";

function Project(props) {
    return (
        <div className="col-12 col-md-4 col-lg-4 ml-4 my-4">
            <div className="card" style={{ backgroundColor:"#F5F5F5", width: "18rem", border:"solid black", padding: 5}}>
                <h5 className="card-title text-center">{props.name}</h5>
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