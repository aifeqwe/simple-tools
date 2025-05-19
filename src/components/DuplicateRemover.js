import React, { useState } from 'react';
import { Card, Form, Button, Alert } from 'react-bootstrap';

const removeDuplicates = (text) => {
  const lines = text.split(/\r?\n/);
  const unique = Array.from(new Set(lines));
  return unique.join('\n');
};

const DuplicateRemover = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [copied, setCopied] = useState(false);

  const handleProcess = () => {
    setOutput(removeDuplicates(input));
    setCopied(false);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(output);
    setCopied(true);
  };

  return (
    <Card className="shadow-sm">
      <Card.Body>
        <Card.Title>Text Duplicate Remover</Card.Title>
        <Card.Text>Remove duplicate lines from your text. Useful for cleaning lists or data.</Card.Text>
        <Form.Group className="mb-3">
          <Form.Label>Text</Form.Label>
          <Form.Control as="textarea" rows={5} value={input} onChange={e => setInput(e.target.value)} />
        </Form.Group>
        <Button variant="primary" onClick={handleProcess} className="me-2">Remove Duplicates</Button>
        {output && <Button variant="outline-secondary" onClick={handleCopy} className="me-2">Copy</Button>}
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

export default DuplicateRemover;
