import React from "react";
import Hero from "../components/Hero";
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
      <Hero backgroundImage="https://images.unsplash.com/photo-1500246432024-efe3c9116a56?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2064&q=80">
        <br></br>
        <img src={profileimg} className="rounded-circle mx-auto d-block" alt="profile" style={{width: 200, height: 220 ,border: "solid white"}}/>
        <h1 className="display-4">Karen Opoku</h1>
        <h2 className="lead" style={{color: "white", fontSize: 40}}>Full Stack Web Developer</h2>
      </Hero>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h1>Hi my name is Karen!</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <p>
            I am a E-Rostering Advisor working within the NHS and based near Birmingham.
          Currently I am enrolled in the Full Stack Flex Coding Bootcamp course with the University of Birmingham with the hopes of
          upskilling and carving a path in the tech industry.
            </p>
            <p className="social">Feel free to check out my GitHub and LinkedIn profiles by clicking the icons below: </p>
        <ul className="social-icons">
          <li>
            <a href="https://github.com/Karen-O94" target="_blank" rel="noreferrer"><img className="github-icon" src={githubicon} alt="" style={{width:50, height: 54}}/>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/karen-opoku-3b4581133/" target="_blank" rel="noreferrer"><img className="linkedin-icon" alt="linkedin icon"
                src={linkedinicon} style={{width: 50, height: 54}}/> 
            </a>
          </li>
        </ul>

        <p style={{marginBottom: 0}}>Contact Links</p>
        <ul className="contact-links">
          <li>
            <img src={emailicon} alt="" className="email-icon" style={{ width: 40, height: 44}}></img>
            <a href="mailto:karenyaa@live.co.uk" className="email" rel="noreferrer" target="_blank">karenyaa@live.co.uk</a>
          </li>
          <li>
            <img src={phoneicon} alt="" style={{marginBottom: 2, width: 40, height: 38}}></img><span class="phone"> 079 XXXX XXXX</span>
          </li>
          <li>
            <img src={resumeicon} alt="" style={{marginBottom: 2, width: 40, height: 38}}></img><a href="https://docs.google.com/document/d/1lxsyG0mFL2IT55qlsz7lis0yRII_Au9o8sQSZ9yzThE/edit?usp=sharing" rel="noreferrer" class="resume"target="_blank">Curriculum Vitae/Resume</a>
          </li>
        </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
