import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Vediocall from "../vedio/Vediocall";
import Form from "react-bootstrap/Form";

const Discussion = () => {
  return (
    <Container  fluid style={{backgroundColor:"#f5f5f5"}}  >
      <Row>
        {" "}
        <Col />
        <Col>
          <div
            style={{
              borderRadius: "20px",
              marginTop: "100px",
              marginBottom:'0px',
              width: "800px",
              height: "auto",
              backgroundColor: "#87cefa",
              border: "1px solid white",
              textAlign: "center",
              padding: "20px",
            }}
          >
            <h2>Ask Your question</h2>

            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Connect with community</Form.Label>
                <Form.Control as="textarea" rows={3} type="text" />
              </Form.Group>
              <button style={{padding:'10px',backgroundColor:'orange',borderRadius:'10px',border:'1px solid white',fontWeight:'bold',color:'white'}}>Submit</button>
            </Form>
          </div>
          <div
      style={{
        overflowY: 'scroll',
        height: '600px',
        width: '900px',
        marginBottom: '50px',
        marginTop: '20px',
        scrollBehavior: 'smooth',
      }}
    >
            <div
              style={{
                borderRadius: "20px",
                marginTop: "30px",
                width: "800px",
                height: "100px",
                backgroundColor: "#4169e1",
                border: "1px solid black",
                textAlign: "center",
                padding: "20px",
              }}
            >
              <h3>What is your favorite color?</h3>
            </div>
            <div
              style={{
                textAlign: "center",
                marginLeft: "20px",
                marginTop: "10px",
              }}
            >
              <div
                style={{
                  borderRadius: "20px",
                  marginTop: "0px",
                  width: "750px",
                  height: "500px",
                  backgroundColor: "gray",
                  border: "1px solid black",
                }}
              >
                Answer
              </div>
            </div>
          </div>
        </Col>
        <Col style={{marginTop:'20%'}}> {<Vediocall />}</Col>
      </Row>
    </Container>
  );
};

export default Discussion;
