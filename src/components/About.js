import React from 'react';
import { Card } from 'react-bootstrap';
import ReactMarkdown from 'react-markdown';

const aboutContent = `
# About Us

**Simple Tools** is a collection of free, modern, and user-friendly online utilities designed to help you with productivity, text processing, and more.

## Our Mission
We aim to make useful tools accessible to everyone, everywhere, with a focus on:
- Simplicity and ease of use
- Modern, responsive design
- Free access for all users

## What We Offer
- Text utilities (like Space Remover)
- File converters
- Calculators and more

We are constantly adding new tools and features based on user feedback.
`;

const About = () => (
  <Card className="shadow-sm">
    <Card.Body>
      <ReactMarkdown children={aboutContent} />
    </Card.Body>
  </Card>
);

export default About;
