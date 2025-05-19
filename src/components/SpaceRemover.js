import React, { useState } from 'react';
import { Card, Form, Button, Row, Col, Alert } from 'react-bootstrap';

const removeExtraSpaces = (text) => {
  return text.replace(/\s{2,}/g, ' ').replace(/\n{2,}/g, '\n').trim();
};

const SpaceRemover = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [copied, setCopied] = useState(false);
  const [inputLength, setInputLength] = useState(0);
  const [outputLength, setOutputLength] = useState(0);

  const handleProcess = () => {
    setInputLength(input.length);
    const result = removeExtraSpaces(input);
    setOutput(result);
    setOutputLength(result.length);
    setCopied(false);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(output);
    setCopied(true);
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (evt) => setInput(evt.target.result);
      reader.readAsText(file);
    }
  };

  return (
    <Card className="shadow-sm">
      <Card.Body>
        <Card.Title>Space Remover</Card.Title>
        <Card.Text>
          Remove extra spaces from your text or file. Useful for reducing character count for AI or other limits.
        </Card.Text>
        <Form.Group className="mb-3">
          <Form.Label>Paste your text here</Form.Label>
          <Form.Control
            as="textarea"
            rows={5}
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder="Paste or type your text..."
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Or upload a text file</Form.Label>
          <Form.Control type="file" accept=".txt" onChange={handleFileUpload} />
        </Form.Group>
        <Button variant="primary" onClick={handleProcess} className="me-2">Remove Spaces</Button>
        {inputLength > 0 && (
          <div className="mt-3 mb-2">
            <strong>Original length:</strong> {inputLength} characters<br />
            <strong>After processing:</strong> {outputLength} characters
          </div>
        )}
        {output && (
          <Button variant="outline-secondary" onClick={handleCopy} className="me-2">Copy Result</Button>
        )}
        {copied && <Alert variant="success" className="mt-2 py-1">Copied!</Alert>}
        {output && (
          <Form.Group className="mt-4">
            <Form.Label>Result</Form.Label>
            <Form.Control as="textarea" rows={5} value={output} readOnly />
          </Form.Group>
        )}
      </Card.Body>
    </Card>
  );
};

export default SpaceRemover;
