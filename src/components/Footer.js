import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => (
  <footer className="bg-light text-center text-lg-start mt-auto py-3 border-top">
    <Container>
      <span className="text-muted">&copy; {new Date().getFullYear()} Simple Tools. All rights reserved.</span>
    </Container>
  </footer>
);

export default Footer;
