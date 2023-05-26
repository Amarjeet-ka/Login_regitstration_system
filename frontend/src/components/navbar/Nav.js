import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

export default  function Nav() {
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
           
          Empower Education
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

