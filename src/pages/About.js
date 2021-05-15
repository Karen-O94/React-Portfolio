import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

function About() {
  return (
    <div>
      <Hero backgroundImage="https://images.unsplash.com/photo-1500246432024-efe3c9116a56?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2064&q=80">
        <h1>Karen O</h1>
        <p class="lead">Full Stack Web Developer</p>
      </Hero>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h1>Karen Opoku!</h1>
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
            <a href="https://github.com/Karen-O94" target="_blank"><img> id="github-icon" src="img/GitHub-Mark-64px.png" width="50px" height="54px"</img>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/karen-opoku-3b4581133/" target="_blank"><img>id="linkedin-icon"
                src="img/linkedinicon.png" width="50px" height="54px"</img> 
            </a>
          </li>
        </ul>

        <p style="margin-bottom: 0px;">Contact Links</p>
        <ul className="contact-links">
          <li>
            <img src="img/email.png" class="email-icon" width="40px" height="44px"></img>
            <a href="mailto:karenyaa@live.co.uk" class="email" target="_blank">karenyaa@live.co.uk</a>
          </li>
          <li>
            <img src="img/phone.png" width="40px" height="38px" style="margin-bottom: 2px;"></img><span class="phone"> 079 XXXX XXXX</span>
          </li>
          <li>
            <img src="img/resume-and-cv.png" width="40px" height="38px" style="margin-bottom: 2px;"></img><a href="https://docs.google.com/document/d/1lxsyG0mFL2IT55qlsz7lis0yRII_Au9o8sQSZ9yzThE/edit?usp=sharing" class="resume"target="_blank">Curriculum Vitae/Resume</a>
          </li>
        </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
