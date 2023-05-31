import React from "react";
import Alert from "react-bootstrap/Alert";
import { FaArrowRight } from "react-icons/fa";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import w from '../assets/wll.jpg';
import './Homegrid.css'

const Homegrid = () => {
  return (
   <Container>
    <Row style={{textAlign:'center'}}>
      <Col>
      <div
      style={{
        textAlign: "center",
        marginLeft: "10%",
        marginTop: "10%",
        width: "500px",
        justifyItems: "space-between",
        paddingTop: "30px",
        height: "500px",
        listStyleType: "none",
        border: "1px solid white",
        borderRadius: "15px",
        backgroundColor: "#ff9e01",
        padding: "20px",
        marginBottom:'50px'
      }}
    >
   <Alert style={{ backgroundColor: "#1fa9b3" }}>
        <li>
          <a
            href="/community"
            style={{
              color: "white",
              textDecoration: "none",
              fontSize: "26px",
            }}
          >
            Community <FaArrowRight />
          </a>
        </li>
      </Alert>

      <Alert style={{ backgroundColor: "#43b3fb" }}>
        <li>
          <a
            href="/resource"
            style={{
              color: "white",
              textDecoration: "none",
              fontSize: "26px",
            }}
          >
            Resource Hub <FaArrowRight />
          </a>
        </li>
      </Alert>

      <Alert style={{ backgroundColor: "#1fa9b3" }}>
        <li>
          <a
            href="/skills"
            style={{
              color: "white",
              textDecoration: "none",
              fontSize: "26px",
            }}
          >
            Skill development <FaArrowRight />
          </a>
        </li>
      </Alert>

      <Alert style={{ backgroundColor: "#43b3fb" }}>
        <li>
          <a
            href="/career"
            style={{
              color: "white",
              textDecoration: "none",
              fontSize: "26px",
            }}
          >
            Career Exploration <FaArrowRight />
          </a>
        </li>
      </Alert>

      <Alert style={{ backgroundColor: "#1fa9b3" }}>
        <li>
          <a
            href="/personal"
            style={{
              color: "white",
              textDecoration: "none",

              fontSize: "26px",
            }}
          >
            Personalized learning <FaArrowRight />
          </a>
        </li>
      </Alert>
    </div>
      </Col>
      <Col>
       <img className="image-h" src={w} height={300} alt="figure not found" />
       <h2 className="image-text">Empower Your Career</h2>
      </Col>
    </Row>
   </Container>
  );
};

export default Homegrid;
