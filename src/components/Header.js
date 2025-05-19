import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { to: '/about', label: 'About Us' },
  { to: '/guide', label: 'Guide' },
  { to: '/blog', label: 'Blog' },
  { to: '/rules', label: 'Terms & Rules' },
  { to: '/contact', label: 'Contact Us' },
];

const Header = () => {
  const location = useLocation();
  return (
    <Navbar bg="primary" variant="dark" expand="lg" className="mb-3">
      <Container>
        <Navbar.Brand as={Link} to="/">Simple Tools</Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navbar-nav" />
        <Navbar.Collapse id="main-navbar-nav">
          <Nav className="ms-auto">
            {navLinks.map(link => (
              <Nav.Link
                as={Link}
                to={link.to}
                key={link.to}
                active={location.pathname === link.to}
              >
                {link.label}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
