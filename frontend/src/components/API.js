import React, { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import com from '../components/assets/wlp.jpg';

const API = () => {
  const [value, setValue] = useState('');
  const navigate = useNavigate();

  const handleRoomJoin = useCallback(() => {
    navigate(`/room/${value}`);
  }, [navigate, value]);

  const containerStyle = {
    backgroundImage: `url(${com})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const inputStyle = {
    padding: '10px',
    fontSize: '16px',
    marginRight: '10px',
  };

  const buttonStyle = {
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: 'lightblue',
    border: 'none',
    cursor: 'pointer',
  };

  return (
    <Container fluid style={containerStyle}>
      <Row> <Col> Colloborate with our community </Col>
        <Col>
          <div>
            <input type="text" value={value} onChange={(e) => setValue(e.target.value)} style={inputStyle} placeholder="Enter Room code" />
            <button onClick={handleRoomJoin} style={buttonStyle}>Join</button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default API;
