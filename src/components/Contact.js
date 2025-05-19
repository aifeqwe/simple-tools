import React from 'react';
import { Card, Form, Button, Alert } from 'react-bootstrap';
import { useState } from 'react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSubmitted(true);
    // Here you can add logic to send the message to your backend or email service
  };

  return (
    <Card className="shadow-sm">
      <Card.Body>
        <h1>Contact Us</h1>
        <p>If you have any questions, suggestions, or feedback, please fill out the form below. We value your input!</p>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control name="name" value={form.name} onChange={handleChange} required />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" name="email" value={form.email} onChange={handleChange} required />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" name="message" rows={4} value={form.message} onChange={handleChange} required />
          </Form.Group>
          <Button type="submit" variant="primary">Send Message</Button>
        </Form>
        {submitted && <Alert variant="success" className="mt-3">Thank you for contacting us! We will get back to you soon.</Alert>}
      </Card.Body>
    </Card>
  );
};

export default Contact;
