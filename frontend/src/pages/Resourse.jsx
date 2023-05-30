import React,{useRef} from 'react'
import './Resource.css';
import edu from '../components/assets/edu.mp4'
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export default function Resourse() {

   const vedioref = useRef();

  const handleplay =() => {
    vedioref.current.play();
  };
  const handlepause =() => {
    vedioref.current.pause();
  }; 
  return (
      <Container>
        <Row> <Col></Col>
          <Col>
          <div className='grid-btn'>
          <video width={800} height={450}  ref={vedioref} > 
        <source src={edu}  />
      </video>
      <button className='btn-play' onClick={handleplay}>
        play
      </button>
      <button className='btn-pause' onClick={handlepause}>
        pause
      </button>
     
     </div>
          </Col><Col></Col>
        </Row> 
      </Container>
  )
}
