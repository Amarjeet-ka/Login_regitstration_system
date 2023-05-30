import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import w from "../assets/wlp.jpg";
import "./Header.css";
export default function Header() {
  const [imageSize, setImageSize] = useState({ width: "100%", height: "auto" });

  useEffect(() => {
    const handleResize = () => {
      setImageSize({ width: "100%", height: "100%" });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const containerStyle = {
    backgroundImage: `url(${w})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <Container fluid style={containerStyle}>
      <Row>
        <Col />
        <Col md={6} style={{textAlign:'center'}} >
          <h1 className="head-font">We Rank the Best Courses on the Web</h1>
          <h3 className="head-small-font">
            In the history of modern astronomy, there is probably no one greater
            leap forward than the building and launch of the space telescope.
          </h3>
          <h2 className="head-cor">Top Courses</h2>
          <h2 className="head-cor">Top Courses</h2>
        </Col>
        <Col />
      </Row>
    </Container>
  );
}
