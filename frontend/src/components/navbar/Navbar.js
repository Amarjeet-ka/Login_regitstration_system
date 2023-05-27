import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Navigation() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" fixed="top" variant="dark">
      <Container>
        <Navbar.Brand href="/home">Empower Education</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Nav.Link href="#deets">About</Nav.Link>
            <Nav.Link href="/community">Community</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Contact us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
