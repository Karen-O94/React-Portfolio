import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

function Contact () {
    return (
        <div className="d-flex flex-column h-100">
            <main className= "wrapper portfolio flex-shrink-0">
        <br></br>
        <Container className="container contact-form" style={{backgroundColor: rgb(230, 230, 230)}}>
            <Row>
                <div className="col-md-12" style={{borderBottom: "solid 1px white"}}>
                    <h1 className="heading">Contact</h1>
                </div>
            </Row>
            <Row>
                <div className="col-md-6">
                    <label className="form-label">Name</label>
                    <input type="text" className="form-control" placeholder="Name">
                </div>
            </Row>
            <Row>
                <Col>
                    <label for="formGroupExampleInput2" class="form-label">Email</label>
                    <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Email">
                </Col>
            </Row>
            <!--Message label goes here-->
            <div class="row">
                <div class="col-md-6">
                    <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" placeholder="Message" rows="3"></textarea>
                </div>
            </div>
            <!--Submit button goes here-->
            <div class="button-container">
                <div class="row">
                    <div class="col-md-12">
                        <button type="button" class="btn btn-dark btn-lg">Submit</button>
                    </div>
                </div>
            </div>

        </Container>
        <br>
        <br>
    </main>

        </div>
    )
}






export default Contact; 