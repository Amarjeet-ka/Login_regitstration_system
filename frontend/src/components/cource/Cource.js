import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import './Course.css';
import { FaBook, FaBookOpen, FaRegBook } from 'react-icons/fa';
import { Link } from 'react-router-dom';
export default function Cource() {



  return (
    <Container   style={{backgroundColor:'#f1f9ff',padding:'8%'}} fluid >
      <Row>
        <Col md={6} style={{textAlign:'center',marginTop:'80px'}} >
          <h1 className="font-h1">This is Why We have Solid Idea</h1>
          <h4 className="font-h4">
            There is a moment in the life of any aspiring astronomer that it is
            time to buy that first telescope. It’s exciting to think about
            setting up your own viewing station. In the life of any aspiring
            astronomer that it is time to buy that first telescope. It’s    
            exciting to think about setting up your own viewing station.
          </h4 >
          <div>
              <Col md={2}></Col> <Col md={4} > <h4 className="font-h4-h4">Explore Courses</h4></Col>
          </div> 
        </Col> <Col md={1} />
        <Col md={3} style={{textAlign:'center'}}>
         <div className="box-parent" >
            
               <Link to={'/tutorials'}> <button >  <FaBookOpen/> Cyber Sequrity </button></Link>
               <Link to={'/tutorials'}> <button >  <FaBookOpen/> Full Stack  </button></Link>
               <Link to={'/tutorials'}> <button >  <FaBookOpen/> Java Developer </button></Link>
               <Link to={'/tutorials'}> <button >  <FaBookOpen/> Blockchain </button></Link>
               <Link to={'/tutorials'}> <button >  <FaBookOpen/> Django </button></Link>
         </div>
        </Col>
      
      </Row>
    </Container>
  );
}
