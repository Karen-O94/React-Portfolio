import React from "react";
import Project from "../components/Project";
import projectinfo from "../../src/utils/projects.json";
import Row from "../components/Row"

function Portfolio() {
    return (
        <div>
            <div className="container">
                <Row>
                <div className="col-xs-12 col-md-12" style={{borderBottom: "solid 1px white"}}>
                    <h1 className="heading">Portfolio</h1>
                    <Row>
                    {projectinfo.map((project, index) => {
                        console.log(project);
                        return <Project key={project._id} name={project.name} desc={project.desc} git_url={project.git_url} app_url={project.app_url} thumbnail={project.thumbnail} />
                    })}
                    </Row>
                </div>
                </Row>
            </div>
        </div>
    );
};

export default Portfolio;