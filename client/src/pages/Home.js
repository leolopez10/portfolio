import React from "react";
import Container from "../components/Container";
import Jumbotron from "../components/Jumbotron";
// import Resume from "../components/Resume";
import Projects from "../components/Projects";
// import Contact from "../components/Contact";
// import Row from "../components/Row";
// import Col from "../components/Col";
import profileLogo from "../img/profilelogo.png";


function Home() {
    return (
        <div>
            <Jumbotron>
                <img className="profile-logo img-fluid" src={profileLogo} alt="profile-logo"></img>
            </Jumbotron>
            <Container>
                <Projects />
                {/* <Contact /> */}
            </Container>

        </div>
    )
}

export default Home; 

// import React from "react";
// import { Link } from "react-router-dom";
// import { Col, Row, Container } from "../components/Grid";
// import Jumbotron from "../components/Jumbotron";

// // home page will be the start of my website/portfolio


// function Home(props) {
  
//   return (
//       <Container fluid>
//         <Row>
//           <Col size="md-12">
//             <Jumbotron>
//               <h1>
//                 Hello World!!
//               </h1>
//             </Jumbotron>
//           </Col>
//         </Row>
//         <Row>
//           <Col size="md-10 md-offset-1">
//             <article>
//               <h1>Check out my Blog</h1>
//             </article>
//           </Col>
//         </Row>
//         <Row>
//           <Col size="md-2">
//             <Link to="/blog">Link to Blog</Link>
//           </Col>
//         </Row>
//       </Container>
//     );
//   }


// export default Home;
