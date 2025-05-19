import React, { useState } from 'react';
import { Card, Form, Button, Alert } from 'react-bootstrap';

const validateJSON = (text) => {
  try {
    const obj = JSON.parse(text);
    return { valid: true, formatted: JSON.stringify(obj, null, 2) };
  } catch (e) {
    return { valid: false, error: e.message };
  }
};

const JSONFormatter = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState({ valid: null });
  const [copied, setCopied] = useState(false);

  const handleFormat = () => {
    setResult(validateJSON(input));
    setCopied(false);
  };

  const handleCopy = () => {
    if (result.valid) {
      navigator.clipboard.writeText(result.formatted);
      setCopied(true);
    }
  };

  return (
    <Card className="shadow-sm">
      <Card.Body>
        <Card.Title>JSON Formatter & Validator</Card.Title>
        <Card.Text>Format and validate your JSON. See errors and get pretty output.</Card.Text>
        <Form.Group className="mb-3">
          <Form.Label>JSON</Form.Label>
          <Form.Control as="textarea" rows={7} value={input} onChange={e => setInput(e.target.value)} />
        </Form.Group>
        <Button variant="primary" onClick={handleFormat} className="me-2">Format & Validate</Button>
        {result.valid === false && <Alert variant="danger" className="mt-2 py-1">Error: {result.error}</Alert>}
        {result.valid && (
          <>
            <Button variant="outline-secondary" onClick={handleCopy} className="me-2">Copy</Button>
            {copied && <Alert variant="success" className="mt-2 py-1">Copied!</Alert>}
            <Form.Group className="mt-4">
              <Form.Label>Formatted JSON</Form.Label>
              <Form.Control as="textarea" rows={7} value={result.formatted} readOnly />
            </Form.Group>
          </>
        )}
      </Card.Body>
    </Card>
  );
};

export default JSONFormatter;
