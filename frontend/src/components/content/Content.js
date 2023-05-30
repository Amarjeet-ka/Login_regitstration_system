import React, { useRef } from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import './Content.css';
import Col from "react-bootstrap/Col";
import edu from '../assets/edu.mp4'

export default function Content() {
  const videoRef = useRef();

  const handlePlay = () => {
    videoRef.current.play();
  };

  const handlePause = () => {
    videoRef.current.pause();
  };

  return (
    <Container>
      <Row>
        <Col>
          <div className='grid-btn'>
            <video width={800} height={450} ref={videoRef} controls >
              <source src={edu} />
            </video>
            <button className='btn-play' onClick={handlePlay}>
              Play
            </button>
            <button className='btn-pause' onClick={handlePause}>
              Pause
            </button>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2 className="content-heading">
            Content
          </h2>
          <div className="content-text">
            <p>
              Key features of Python. Python has many reasons for being popular and in ...
            </p>
            <p>
              Fundamentals of Python. Python Indentation. Python uses indentation to ...
            </p>
            <p>
              Basics of Input/Output. Taking input from the user - Python provides us with two ...
            </p>
            <p>
              Data Types. Data types are the classification or categorization of data items. ...
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
