import React, { useState } from 'react';
import { Card, Form, Button, Alert } from 'react-bootstrap';

const convertCase = (text, type) => {
  switch (type) {
    case 'upper': return text.toUpperCase();
    case 'lower': return text.toLowerCase();
    case 'capitalize': return text.replace(/\b\w/g, c => c.toUpperCase());
    case 'camel': return text.replace(/(?:^|\s)(\w)/g, (m, c, i) => i === 0 ? c.toLowerCase() : c.toUpperCase()).replace(/\s+/g, '');
    case 'snake': return text.replace(/\s+/g, '_').toLowerCase();
    default: return text;
  }
};

const CaseConverter = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [type, setType] = useState('upper');
  const [copied, setCopied] = useState(false);

  const handleConvert = () => {
    setOutput(convertCase(input, type));
    setCopied(false);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(output);
    setCopied(true);
  };

  return (
    <Card className="shadow-sm">
      <Card.Body>
        <Card.Title>Case Converter</Card.Title>
        <Card.Text>Convert your text to UPPERCASE, lowercase, Capitalized, camelCase, or snake_case.</Card.Text>
        <Form.Group className="mb-3">
          <Form.Label>Text</Form.Label>
          <Form.Control as="textarea" rows={4} value={input} onChange={e => setInput(e.target.value)} />
        </Form.Group>
        <Form.Select className="mb-3" value={type} onChange={e => setType(e.target.value)}>
          <option value="upper">UPPERCASE</option>
          <option value="lower">lowercase</option>
          <option value="capitalize">Capitalized</option>
          <option value="camel">camelCase</option>
          <option value="snake">snake_case</option>
        </Form.Select>
        <Button variant="primary" onClick={handleConvert} className="me-2">Convert</Button>
        {output && <Button variant="outline-secondary" onClick={handleCopy} className="me-2">Copy</Button>}
        {copied && <Alert variant="success" className="mt-2 py-1">Copied!</Alert>}
        {output && (
          <Form.Group className="mt-4">
            <Form.Label>Result</Form.Label>
            <Form.Control as="textarea" rows={4} value={output} readOnly />
          </Form.Group>
        )}
      </Card.Body>
    </Card>
  );
};

export default CaseConverter;
