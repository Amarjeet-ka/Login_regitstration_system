import React, { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Button from 'react-bootstrap/Button';
import Tabs from 'react-bootstrap/Tabs';
import { FormControl, InputGroup } from 'react-bootstrap';
import { FaEnvelope, FaLock, FaGoogle } from 'react-icons/fa';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
export default function Logs() {
  const [key, setKey] = useState('home');

  return (
   <Container>
    <Row><Col />
      <Col md={4}>
      <div style={{ justifyContent: 'center', marginTop: '150px' }}>
      <Tabs id="controlled-tab-example" activeKey={key} onSelect={(k) => setKey(k)} className="mb-3">
        <Tab eventKey="register" title="Register">
          <div style={{ marginTop: '30px' }}>
            <InputGroup className="mb-3">
              <InputGroup.Text>
                <FaEnvelope />
              </InputGroup.Text>
              <FormControl type="email" placeholder="Email" />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Text>
                <FaLock />
              </InputGroup.Text>
              <FormControl type="password" placeholder="Password" />
            </InputGroup>
            <Button variant="primary">Login</Button>
            <div style={{ textAlign: 'center', marginTop: '10px' }}>
              <Button variant="light">
                <FaGoogle /> Signup with Gmail
              </Button>
            </div>
          </div>
        </Tab>
        <Tab eventKey="home" title="Student">
          <div style={{ marginTop: '30px', marginRight: '0px' }}>
            <InputGroup className="mb-3">
              <InputGroup.Text>
                <FaEnvelope />
              </InputGroup.Text>
              <FormControl type="email" placeholder="Email" />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Text>
                <FaLock />
              </InputGroup.Text>
              <FormControl type="password" placeholder="Password" />
            </InputGroup>
            <Button variant="primary" href="/Home">
              Login
            </Button>
            <div style={{ textAlign: 'center', marginTop: '10px' }}>
              <Button variant="light">
                <FaGoogle /> Signin with Gmail
              </Button>
            </div>
          </div>
        </Tab>
        <Tab eventKey="master" title="Master">
          <div style={{ marginTop: '30px' }}>
            <InputGroup className="mb-3">
              <InputGroup.Text>
                <FaEnvelope />
              </InputGroup.Text>
              <FormControl type="email" placeholder="Email" />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Text>
                <FaLock />
              </InputGroup.Text>
              <FormControl type="password" placeholder="Password" />
            </InputGroup>
            <Button variant="primary">Login</Button>
            <div style={{  marginTop: '10px' ,textAlign:'center'}}>
              <Button variant="light">
                <FaGoogle /> Signin with Gmail
              </Button>
            </div>
          </div>
        </Tab>
      </Tabs>
    </div>
      </Col>
      <Col />
    </Row>
   </Container>
  );
}
