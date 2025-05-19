import React, { useState } from 'react';
import { Card, Form, Button, Alert, Row, Col } from 'react-bootstrap';

function generatePassword(length, useUpper, useLower, useNumbers, useSymbols) {
  const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lower = 'abcdefghijklmnopqrstuvwxyz';
  const numbers = '0123456789';
  const symbols = '!@#$%^&*()_+-=[]{}|;:,.<>?';
  let chars = '';
  if (useUpper) chars += upper;
  if (useLower) chars += lower;
  if (useNumbers) chars += numbers;
  if (useSymbols) chars += symbols;
  if (!chars) return '';
  let pass = '';
  for (let i = 0; i < length; i++) {
    pass += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return pass;
}

const PasswordGenerator = () => {
  const [length, setLength] = useState(12);
  const [useUpper, setUseUpper] = useState(true);
  const [useLower, setUseLower] = useState(true);
  const [useNumbers, setUseNumbers] = useState(true);
  const [useSymbols, setUseSymbols] = useState(false);
  const [password, setPassword] = useState('');
  const [copied, setCopied] = useState(false);

  const handleGenerate = () => {
    setPassword(generatePassword(length, useUpper, useLower, useNumbers, useSymbols));
    setCopied(false);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(password);
    setCopied(true);
  };

  return (
    <Card className="shadow-sm">
      <Card.Body>
        <Card.Title>Password Generator</Card.Title>
        <Card.Text>Generate a strong password with custom options.</Card.Text>
        <Row className="mb-3">
          <Col><Form.Label>Length</Form.Label></Col>
          <Col><Form.Control type="number" min={4} max={64} value={length} onChange={e => setLength(Number(e.target.value))} /></Col>
        </Row>
        <Form.Check type="checkbox" label="Uppercase" checked={useUpper} onChange={e => setUseUpper(e.target.checked)} />
        <Form.Check type="checkbox" label="Lowercase" checked={useLower} onChange={e => setUseLower(e.target.checked)} />
        <Form.Check type="checkbox" label="Numbers" checked={useNumbers} onChange={e => setUseNumbers(e.target.checked)} />
        <Form.Check type="checkbox" label="Symbols" checked={useSymbols} onChange={e => setUseSymbols(e.target.checked)} />
        <Button variant="primary" onClick={handleGenerate} className="me-2 mt-3">Generate</Button>
        {password && <Button variant="outline-secondary" onClick={handleCopy} className="me-2 mt-3">Copy</Button>}
        {copied && <Alert variant="success" className="mt-2 py-1">Copied!</Alert>}
        {password && (
          <Form.Group className="mt-4">
            <Form.Label>Password</Form.Label>
            <Form.Control as="textarea" rows={2} value={password} readOnly />
          </Form.Group>
        )}
      </Card.Body>
    </Card>
  );
};

export default PasswordGenerator;
