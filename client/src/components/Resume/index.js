import React from "react";
import ProfilePic from "../../img/profile-pic.png";
import Row from "../Row";
import Col from "../Col";

function Resume() {
    return (
        <div>
            <section id="about-me" className="section-feature">
                <Row>
                    <Col size="sm">
                        <h2>About Me</h2>
                    </Col>
                </Row>
                <Row>
                    <Col size="sm-2">
                        <img className="img-fluid" src={ProfilePic} alt="profile-pic"></img>
                    </Col>
                    <Col size="sm-10">
                        <p>
                            Hi my name is Leo. I love to play soccer, go on hikes and build websites. I have a degree in Public Health and enjoy helping people become the best individual that they can be. I enjoy creating websites for other health professionals. I also have a degree
                            in Architecture, and have a passion for design. I enjoy learning how things are put together, and it shows in all of my projects. Please look around my website to discover some projects I have been working on. I enjoy coding in
                            HTML, CSS and Javascript. I have a strong set of front end skills, but I am looking to master the backend as well. My goal for 2020 is to become a full stack web developer.
                    </p>
                    </Col>
                </Row>
            </section>
        </div >
    )
}

export default Resume;