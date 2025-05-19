import React from 'react';
import { Navbar, Container } from 'react-bootstrap';

const Header = () => (
  <Navbar bg="primary" variant="dark" expand="lg" className="mb-3">
    <Container>
      <Navbar.Brand href="#home">Simple Tools</Navbar.Brand>
    </Container>
  </Navbar>
);

export default Header;
