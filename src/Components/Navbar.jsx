import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function Navbar1() {
  return (
    <>
      <Navbar bg="dark" expand="lg">
        <Container fluid>
          <Nav className="me-auto">
            <Link className="nav-link text-white" to="">Home</Link>
            <Link className="nav-link text-white" to="/about">About us</Link>
            <Link className="nav-link text-white" to="/contact">Contact us</Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Navbar1;
