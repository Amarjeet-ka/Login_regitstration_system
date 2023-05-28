import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Navbar.css";
function Navigation() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      fixed="top"
      variant="dark"
      bg="dark"
      style={{ backgroundColor: "#1e90ff" }}
    >
      <Container>
        <Navbar.Brand href="/home">Empower Education</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse  >
          <Nav className="me-auto" ></Nav>
          <Nav>
            <Nav.Link className="links-side" href="#deets">About</Nav.Link>
            <Nav.Link className="links-side" href="/community">Community</Nav.Link>
            <Nav.Link className="links-side"  eventKey={2} href="#memes">
              Contact us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
