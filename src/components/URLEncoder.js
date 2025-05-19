import React, { useState } from 'react';
import { Card, Form, Button, Alert, Row, Col } from 'react-bootstrap';

const urlEncode = (text) => encodeURIComponent(text);
const urlDecode = (text) => {
  try {
    return decodeURIComponent(text);
  } catch {
    return 'Invalid encoded string!';
  }
};

const URLEncoder = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [mode, setMode] = useState('encode');
  const [copied, setCopied] = useState(false);

  const handleProcess = () => {
    setOutput(mode === 'encode' ? urlEncode(input) : urlDecode(input));
    setCopied(false);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(output);
    setCopied(true);
  };

  return (
    <Card className="shadow-sm">
      <Card.Body>
        <Card.Title>URL Encoder / Decoder</Card.Title>
        <Card.Text>Encode or decode URLs for safe web use.</Card.Text>
        <Form.Group className="mb-3">
          <Form.Label>Text</Form.Label>
          <Form.Control as="textarea" rows={3} value={input} onChange={e => setInput(e.target.value)} />
        </Form.Group>
        <Row className="mb-3">
          <Col>
            <Form.Check
              type="radio"
              label="Encode"
              name="mode"
              value="encode"
              checked={mode === 'encode'}
              onChange={() => setMode('encode')}
            />
          </Col>
          <Col>
            <Form.Check
              type="radio"
              label="Decode"
              name="mode"
              value="decode"
              checked={mode === 'decode'}
              onChange={() => setMode('decode')}
            />
          </Col>
        </Row>
        <Button variant="primary" onClick={handleProcess} className="me-2">{mode === 'encode' ? 'Encode' : 'Decode'}</Button>
        {output && <Button variant="outline-secondary" onClick={handleCopy} className="me-2">Copy</Button>}
        {copied && <Alert variant="success" className="mt-2 py-1">Copied!</Alert>}
        {output && (
          <Form.Group className="mt-4">
            <Form.Label>Result</Form.Label>
            <Form.Control as="textarea" rows={3} value={output} readOnly />
          </Form.Group>
        )}
      </Card.Body>
    </Card>
  );
};

export default URLEncoder;
