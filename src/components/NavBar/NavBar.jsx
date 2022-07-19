
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";

function NavBar() {

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/" >Navbar</Navbar.Brand>
          <Nav className="me-auto">
            {/* <Nav.Link as={Link} to="/" >Home</Nav.Link>
            <Nav.Link as={Link} to="todo">ToDo</Nav.Link> */}
           <Button>logout</Button>
          </Nav>
        </Container>
      </Navbar>

    </>
  );
}

export default NavBar;