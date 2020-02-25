import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";


function Home(props) {
  
  return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>
                Hello World!!
              </h1>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-10 md-offset-1">
            <article>
              <h1>Check out my Blog</h1>
            </article>
          </Col>
        </Row>
        <Row>
          <Col size="md-2">
            <Link to="/blog">Link to Blog</Link>
          </Col>
        </Row>
      </Container>
    );
  }


export default Home;