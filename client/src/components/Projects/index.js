import React from "react";
import BookUpImg from "../../img/books-header.jpg"
import BrewImg from "../../img/three-display-beers.png";
import LivdinImg from "../../img/Livdin_Logo_white.png";
import QuantumImg from "../../img/QuantumHeal-Logo.png";
import UDGImg from "../../img/UDG_still.jpg"
import "./style.css";
import Row from "../Row";
import Col from "../Col";

function Projects() {
    return (
        <div>
            <section id="projects" className="section-feature">
                <h2>Projects</h2>
                <Row>
                <Col size="md-4 project">
                        <a target="_blank" rel="noopener noreferrer" href="https://the-bookup-dev.herokuapp.com/">
                            <div className="photo-div">
                                <img className="project-img" src={BookUpImg} alt="logo" />
                            </div>
                        </a>
                        <span>the BookUp</span>
                    </Col>
                    <Col size="md-4 project">
                        <a target="_blank" rel="noopener noreferrer" href="https://livdin.herokuapp.com/">
                            <div className="photo-div">
                                <img className="project-img" src={LivdinImg} alt="logo" />
                            </div>
                        </a>
                        <span>Livdin</span>
                    </Col>
                    <Col size="md-4 project">
                        <a target="_blank" rel="noopener noreferrer" href="https://leolopez10.github.io/brew-near-you/">
                            <div className="photo-div">
                                <img className="project-img" src={BrewImg} alt="beer" />
                            </div>
                        </a>
                        <span>Brew Near You</span>
                    </Col>
                    <Col size="md-4 project">
                        <a target="_blank" rel="noopener noreferrer" href="https://www.myquantumheal.com/">
                            <div className="photo-div">
                                <img className="project-img" src={QuantumImg} alt="logo" />
                            </div>
                        </a>
                        <span>Quantum Heal</span>
                    </Col>
                    <Col size="md-4 project">
                        <a target="_blank" rel="noopener noreferrer" href="https://leolopez10.github.io/ugly-duckling-gang/">
                            <div className="photo-div">
                                <img className="project-img" src={UDGImg} alt="logo" />
                            </div>
                        </a>
                        <span>Ugly Duckling Gang</span>
                    </Col>

                </Row>
            </section>
        </div >
    )
}

export default Projects;