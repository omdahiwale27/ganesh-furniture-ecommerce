import { Navbar, Nav, Form, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "./assets/logo.png";

function Navbrr() {
  return (
    <Navbar expand="lg" bg="white" className="shadow-sm py-2"> 
      <Container fluid>
       <Navbar.Brand as={Link} to="/">
  <img src={logo} width="40" style={{ marginRight: "10px" }} />
  Ganesh Furniture
</Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll" />

        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" navbarScroll>
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/catalog">Catalog</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
            <Nav.Link as={Link} to="/address">Address</Nav.Link>
          </Nav>

          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search products"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="warning">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbrr;