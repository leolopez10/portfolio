import React from "react";
import "./style.css"
import ProfilePic from "../../img/profile-pic.png";
import Container from "../Container";
import Row from "../Row";
import Col from "../Col";

function ResumeTemplate() {
    return (
        <div>
            <Container>
                <section id="resume" className="section-feature">
                    <div id="address">Austin, Texas</div>
                    <h1 className="resume-h1">Leonel Lopez</h1>
                    <div id="contact"><a href="https://www.linkedin.com/in/leo-lopez10/">linkedin.com/in/leo-lopez10</a> | <a href="https://github.com/leolopez10">github.com/leolopez10</a> | <a href="mailto:leo@leo-lopez.com">leo@leo-lopez.com</a></div>

                    <div className="resume-section">
                        <h2 className="resume-h2">Summary</h2>
                        <div className="summary">
                            <p>I am a highly motivated, self-starter, and enthusiastic developer looking to enter the fast-paced and ever-changing world of web design. I have excellent communication skills with the ability to interact with individuals and teams from a wide range of professions. I have a creative mindset, with the ability to think outside the box. I have the aptitude for learning any task on the fly while having excellent attention to detail.</p>
                        </div>
                    </div>

                    <div className="resume-section">
                        <h2 className="resume-h2">Work Experience</h2>
                        <div className="content">
                            <span className="date">August 2019 &raquo; January 2020</span>
                            <h3 className="resume-h3">Geek Squad Agent</h3>
                            <address>Best Buy, Austin, TX</address>
                            <ul className="resume-ul">
                                <li className="resume-li">Met with about 30 clients a day, during a 20-minute appointment, to discuss issues the client is experiencing with their computer.</li>
                                <li className="resume-li">Provided clients with a quick fix: software or applications setting issues, accessing networks, or getting computers to boot on.</li>
                                <li className="resume-li">In the back of the precinct, I would resolve malware issues, file transfers, email syncs, download client software, perform cleanups and tune-ups, and set up new PCs.</li>
                                <li className="resume-li">I provided client education sessions on different software applications: Microsoft Office (Word, PowerPoint, Excel), Adobe Applications (Photoshop, InDesign, Illustrator), and the process of beginning a personal website.</li>
                            </ul>

                            <span className="date">February 2016 &raquo; July 2019</span>
                            <h3 className="resume-h3">Youth Soccer Coach/Club Administrator</h3>
                            <address>River City Rangers Soccer Club, Austin, TX</address>
                            <ul className="resume-ul">
                                <li className="resume-li">Coached a select team of boys ages 9-12, and four youth development teams ages 6-9.</li>
                                <li className="resume-li">Produced 4 step training sessions to develop spatial and predictive awareness for multiple teams.</li>
                                <li className="resume-li">Coordinated team schedules through Microsoft Office Suite, Teamsnap application, and emails.</li>
                                <li className="resume-li">Created training, match day, and individual player reports to present to players and parents.</li>
                                <li className="resume-li">Organized player and parent try-out portals using Sports Engine and custom HTML and CSS edits.</li>
                            </ul>

                            <span className="date">July 2018 &raquo; December 2018</span>
                            <h3 className="resume-h3">Stronger Austin Intern</h3>
                            <address>It's Time Texas, Austin, TX</address>
                            <ul className="resume-ul">
                                <li className="resume-li">Provided support in research, development, implementation, and promotion of the Stronger Austin Initiative and its components.</li>
                                <li className="resume-li">Developed protocol documents, evaluations, and data collection strategies for Stronger Austin.</li>
                                <li className="resume-li">Conducted research and wrote literature reviews about peer-led exercise intervention programs in low-income communities.</li>
                                <li className="resume-li">Organized outreach and recruitment efforts for Stronger Austin, and built relationships with organizations and community leaders.</li>
                                <li className="resume-li">Educated program participants in English and Spanish about physical health and nutrition at various Stronger Austin programming sites.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="resume-section">
                        <h2 className="resume-h2">Web Development</h2>
                        <div className="content">
                            <span className="date"><span className="project-title"><a href="https://github.com/JayDub21/TheBookUp">the BookUp</a></span> &raquo; March 2020</span>
                            <h3 className="resume-h3">Back-End Developer</h3>
                            <address>Technology: JavaScript, React, Axios, Express.js, Node.js, MongoDB, Mongoose,  API: Google Books</address>
                            <ul className="resume-ul">
                                <li className="resume-li">Lead a team of 4  using Agile development strategies.</li>
                                <li className="resume-li">Built the back-end server code using Express.js to manage user sessions and authentication routes Mongoose to create and update user data, and Node.js to run the application.</li>
                                <li className="resume-li">Used React Hooks to manage user sessions and user interaction.</li>
                                <li className="resume-li"> Styled the application using the bootstrap framework and Material UI component library.</li>
                            </ul>

                            <span className="date"><span className="project-title"><a href="https://github.com/leolopez10/Livdin">Livdin</a></span> &raquo; Feburary 2020</span>
                            <h3 className="resume-h3">Back-End Developer/API Researcher</h3>
                            <address>Technology: HTML5, CSS3, JavaScript, JQuery, Ajax, Express.js, Node.js, eslint, Travis-ci, SQL database, API: MapQuest and Realtor Property Resource.</address>
                            <ul className="resume-ul">
                                <li className="resume-li">Utilized Mapquest API to build a map that uses reverse Geolocation to get an address, parse the address, and store it into an SQL database.</li>
                                <li className="resume-li">Handled search input to locate address using Geolocation.</li>
                                <li className="resume-li">Used node.js and axios.js to get information from Realtors Property Resource API to dynamically render the content in an aside element on top of the map.</li>
                            </ul>

                            <span className="date"><span className="project-title"><a href="https://github.com/hhawm/projectOne">Brew Near You</a></span> &raquo; January 2020</span>
                            <h3 className="resume-h3">Front-End Developer/API researcher</h3>
                            <address>Technology: HTML5, CSS3, Bulma,  JavaScript, JQuery, Ajax, API: Leaflet, OpenBreweryDB, Yelp Fusion.</address>
                            <ul className="resume-ul">
                                <li className="resume-li">Used AJAX calls to GET Yelp Fusion API to populate the markers on the map with Brewery details.</li>
                                <li className="resume-li">Used AJAX calls to GET brewery address from OpenBreweryDB and dynamically created a list of results.</li>
                                <li className="resume-li">Used CSS framework Bulma to style to page.</li>

                            </ul>

                            <span className="date"><span className="project-title"><a href="https://myquantumheal.com">QuantumHeal</a></span> &raquo; November 2019</span>
                            <h3 className="resume-h3">Web Administrator and Designer</h3>
                            <address>Technology: WebFlow browser-based web design application</address>
                            <ul className="resume-ul">
                                <li className="resume-li">Designed a scope of work, contract, and invoice for the client.</li>
                                <li className="resume-li">Designed user experience studies to increase website retention rates.</li>
                                <li className="resume-li">Monitoring website with Google Analytics.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="resume-section">
                        <h2 className="resume-h2">Education</h2>
                        <ul className="resume-ul">
                            <li className="resume-li">Certificate of Web Development,The University of Texas, Austin, TX,  Graduated - March 2020</li>
                            <li className="resume-li">Bachelor of Science in Public Health, Texas State University, San Marcos, TX,  Graduated - December 2018</li>
                            <li className="resume-li">Professional Degree in Architecture, Virginia Polytechnic Institute and State University, Blacksburg, VA,  August 2010 - December 2013</li>
                        </ul>
                    </div>

                    <div className="resume-section">
                        <h2 className="resume-h2">Skills</h2>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Browser-Based Technologies</th>
                                    <th>API Interaction</th>
                                    <th>Deployment/Command-Line</th>
                                    <th>Server-Side Development</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>HTML5</td>
                                    <td>API</td>
                                    <td>Heroku</td>
                                    <td>Node.js</td>
                                </tr>
                                <tr>
                                    <td>CSS3</td>
                                    <td>JSON</td>
                                    <td>C-Panel</td>
                                    <td>Express.js</td>
                                </tr>
                                <tr>
                                    <td>JavaScript</td>
                                    <td>AJAX</td>
                                    <td>Git</td>
                                    <td>Passport.js</td>
                                </tr>
                                <tr>
                                    <td>JQuery</td>
                                    <td>MySQL</td>
                                    <td>GitBash</td>
                                    <td>Progressive Web Applications</td>
                                </tr>
                                <tr>
                                    <td>React.js</td>
                                    <td>MongoDB</td>
                                    <td>GitHub Pages</td>
                                    <td>bcrypt.js</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>
            </Container>
        </div>
    )
}

export default ResumeTemplate;
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