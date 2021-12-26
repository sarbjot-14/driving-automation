import React from "react";
import {
  Container,
  Nav,
  Navbar,

} from "react-bootstrap";

import {} from "react-router-dom";


function Header({ setSearch }) {
  //const dispatch = useDispatch();


  return (
    <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
      <Container>
        <Navbar.Brand href="/">Driving Automation</Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="m-auto">
      
          </Nav>
          <Nav>
         
             
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/TechStack">Tech Stack</Nav.Link>
                <Nav.Link href="/">Pricing</Nav.Link>
                <Nav.Link href="/">Polls</Nav.Link>
                <Nav.Link href="/">Transition</Nav.Link>

               
              
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
