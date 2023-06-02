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
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      console.log(data); // Handle the response from the backend

      // Reset the form inputs
      setEmail('');
      setPassword('');
    } catch (error) {
      console.log('Error occurred while sending data:', error);
    }
  };

  return (
    <Container>
      <Row>
        <Col />
        <Col md={4}>
          <div style={{ justifyContent: 'center', marginTop: '150px' }}>
            <Tabs
              id="controlled-tab-example"
              activeKey={key}
              onSelect={(k) => setKey(k)}
              className="mb-3"
            >
              <Tab eventKey="register" title="Register">
                <div style={{ marginTop: '30px' }}>
                  <InputGroup className="mb-3">
                    <InputGroup.Text>
                      <FaEnvelope />
                    </InputGroup.Text>
                    <FormControl
                      type="email"
                      placeholder="Email"
                      value={email}
                      onChange={handleEmailChange}
                    />
                  </InputGroup>
                  <InputGroup className="mb-3">
                    <InputGroup.Text>
                      <FaLock />
                    </InputGroup.Text>
                    <FormControl
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={handlePasswordChange}
                    />
                    
                  </InputGroup>
                  <InputGroup className="mb-3">
                    <InputGroup.Text>
                      <FaLock />
                    </InputGroup.Text>
                    <FormControl
                      type="password"
                      placeholder="Re-Enter Password"
                      value={password}
                      onChange={handlePasswordChange}
                    />
                    
                  </InputGroup>
                  <Button variant="primary" onClick={handleFormSubmit}>
                    Login
                  </Button>
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
                    <FormControl
                      type="email"
                      placeholder="Email"
                      value={email}
                      onChange={handleEmailChange}
                    />
                  </InputGroup>
                  <InputGroup className="mb-3">
                    <InputGroup.Text>
                      <FaLock />
                    </InputGroup.Text>
                    <FormControl
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={handlePasswordChange}
                    />
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
                    <FormControl
                      type="email"
                      placeholder="Email"
                      value={email}
                      onChange={handleEmailChange}
                    />
                  </InputGroup>
                  <InputGroup className="mb-3">
                    <InputGroup.Text>
                      <FaLock />
                    </InputGroup.Text>
                    <FormControl
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={handlePasswordChange}
                    />
                  </InputGroup>
                  <Button variant="primary" onClick={handleFormSubmit}>
                    Login
                  </Button>
                  <div style={{ marginTop: '10px', textAlign: 'center' }}>
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
