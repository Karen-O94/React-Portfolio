import React from "react";
// import Header from "../components/Header";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import linkedinicon from "../img/linkedinicon.png";
import githubicon from "../img/GitHub-Mark-64px.png";
import phoneicon from "../img/phone.png";
import resumeicon from "../img/resume-and-cv.png";
import emailicon from "../img/email.png";
import profileimg from "../img/FirstSept2020.jpg";

function About() {
    return (
        <div>
            <Container>
            <div className="px-5" style={{backgroundColor: "#D3D3D3", color: "black", fontSize: 25}}>
                <Row>
                    <Col size="md-12">
                    <img src={profileimg} className="img-thumbnail" alt="Karen Opoku" style= {{width: 300, height: 350, float: "left", margin: 10 }}/>
                    <h1>Hi my name is Karen!</h1>
                            <p>
                                I am a E-Rostering Advisor working within the NHS and based near Birmingham.
                                Currently I am enrolled in the Full Stack Flex Coding Bootcamp course with the University of Birmingham with the hopes of
                                upskilling and carving a path in the tech industry.
            </p>
                            <p className="social">Feel free to check out my GitHub and LinkedIn profiles by clicking the icons below: </p>
                            <ul className="social-icons">
                                <li>
                                    <a href="https://github.com/Karen-O94" target="_blank" rel="noreferrer"><img className="github-icon" src={githubicon} alt="" style={{ width: 50, height: 54 }} />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/in/karen-opoku-3b4581133/" target="_blank" rel="noreferrer"><img className="linkedin-icon" alt="linkedin icon"
                                        src={linkedinicon} style={{ width: 50, height: 54 }} />
                                    </a>
                                </li>
                            </ul>
                            <p style={{ marginBottom: 0 }}>Contact Links</p>
                            <ul className="contact-links">
                                <li>
                                    <img src={emailicon} alt="" className="email-icon" style={{ width: 40, height: 44 }}></img>
                                    <a href="mailto:karenyaa@live.co.uk" className="email" rel="noreferrer" target="_blank">karenyaa@live.co.uk</a>
                                </li>
                                <br></br>
                                <li>
                                    <img src={phoneicon} alt="" style={{ marginBottom: 2, width: 40, height: 38 }}></img><span class="phone"> 079 XXXX XXXX</span>
                                </li>
                                <br></br>
                                <li>
                                    <img src={resumeicon} alt="" style={{ marginBottom: 2, width: 40, height: 38 }}></img><a href="https://docs.google.com/document/d/1lxsyG0mFL2IT55qlsz7lis0yRII_Au9o8sQSZ9yzThE/edit?usp=sharing" rel="noreferrer" class="resume" target="_blank">Curriculum Vitae/Resume</a>
                                </li>
                            </ul>
                    </Col>
                </Row>
                </div>
            </Container>
        </div>
    );
}

export default About;
