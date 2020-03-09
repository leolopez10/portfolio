import React from "react";
import ProfilePic from "../../img/profile-pic.png";
import Row from "../Row";
import Col from "../Col";

function Resume() {
    return (
        <div>
            <div id="address">335 Name Street, Unit #, Town, Province, N2H 3Y6</div>
            <h1>First Last</h1>
            <div id="contact">3A, Your Major, <abbr title="University of Waterloo">UW</abbr>, 1-519-500-8252, <a href="mailto:YOUREMAILADDRESS@uwaterloo.ca">emailaddress@uwaterloo.ca</a></div>

            <div className="section">
                <h2>Summary of Qualifications</h2>
                <ul>
                    <li>Bullet one Bullet one</li>
                    <li>Bullet two Bullet two</li>
                    <li>Bullet three Bullet three</li>
                    <li>Bullet four Bullet four</li>
                    <li>Bullet five Bullet Five</li>
                </ul>
            </div>

            <div className="section">
                <h2>Work Experience</h2>
                <div className="content">
                    <span className="date">Start &raquo; End Year</span>
                    <h3>Job Title One</h3>
                    <address>Company Name, Address, City Province</address>
                    <ul>
                        <li>Bullet one Bullet one</li>
                        <li>Bullet two Bullet two</li>
                        <li>Bullet three Bullet three</li>
                        <li>Bullet four Bullet four</li>
                    </ul>

                    <span className="date">Start &raquo; End Year</span>
                    <h3>Job Title Two</h3>
                    <address>Company Name, Address, City Province</address>
                    <ul>
                        <li>Bullet one Bullet one</li>
                        <li>Bullet two Bullet two</li>
                        <li>Bullet three Bullet three</li>
                        <li>Bullet four Bullet four</li>
                    </ul>

                    <span className="date">Start &raquo; End Year</span>
                    <h3>Job Title Three</h3>
                    <address>Company Name, Address, City Province</address>
                </div>
            </div>

            <div className="section">
                <h2>Volunteer Experience</h2>
                <div className="content">
                    <span className="date">Start &raquo; End Year</span>
                    <h3>Volunteer Job Title</h3>
                    <address>Company Name, Address, City Province</address>
                    <ul>
                        <li>Bullet one Bullet one</li>
                        <li>Bullet two Bullet two</li>
                        <li>Bullet three Bullet three</li>
                    </ul>
                </div>
            </div>

            <div className="section">
                <h2>Education</h2>
                <ul>
                    <li>Candidate for Bachelor of Major, University, Province,  StartYear - Present</li>
                    <li>OSSD, Highschool, Town, Province, StartYear-EndYear</li>
                </ul>
            </div>

            <div className="section">
                <h2>Academic Awards</h2>
                <ul>
                    <li>Year, Year, Name of award/Scholarship</li>
                </ul>
            </div>
        </div>
    )
}

export default Resume;
    // <div>
    //     <section id="about-me" className="section-feature">
    //         <Row>
    //             <Col size="sm">
    //                 <h2>About Me</h2>
    //             </Col>
    //         </Row>
    //         <Row>
    //             <Col size="sm-2">
    //                 <img className="img-fluid" src={ProfilePic} alt="profile-pic"></img>
    //             </Col>
    //             <Col size="sm-10">
    //                 <p>
    //                     Hi my name is Leo. I love to play soccer, go on hikes and build websites. I have a degree in Public Health and enjoy helping people become the best individual that they can be. I enjoy creating websites for other health professionals. I also have a degree
    //                     in Architecture, and have a passion for design. I enjoy learning how things are put together, and it shows in all of my projects. Please look around my website to discover some projects I have been working on. I enjoy coding in
    //                     HTML, CSS and Javascript. I have a strong set of front end skills, but I am looking to master the backend as well. My goal for 2020 is to become a full stack web developer.
    //             </p>
    //             </Col>
    //         </Row>
    //     </section>
    // </div >