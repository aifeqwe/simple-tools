import React, { useState } from 'react';
import { Card, Form, Button, Row, Col, Alert } from 'react-bootstrap';

// Remove single-line and multi-line comments for C, C++, Java, JavaScript, Python, etc.
function removeComments(code) {
  // Remove /* ... */ (multi-line), //... (single-line), #... (Python, shell), --... (SQL)
  return code
    // Remove multi-line comments (/* ... */)
    .replace(/\/\*[\s\S]*?\*\//g, '')
    // Remove single-line comments (//...)
    .replace(/(^|\s)\/\/.*$/gm, '')
    // Remove hash comments (#...)
    .replace(/(^|\s)#.*$/gm, '')
    // Remove SQL-style comments (--...)
    .replace(/(^|\s)--.*$/gm, '')
    .replace(/\n{2,}/g, '\n')
    .trim();
}

const CommentRemover = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [copied, setCopied] = useState(false);
  const [inputLength, setInputLength] = useState(0);
  const [outputLength, setOutputLength] = useState(0);

  const handleProcess = () => {
    setInputLength(input.length);
    const result = removeComments(input);
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
        <Card.Title>Comment Remover</Card.Title>
        <Card.Text>
          Remove all comments from your code (supports C, C++, Java, JavaScript, Python, and more). Useful for reducing code length or obfuscating logic before sharing with AI.
        </Card.Text>
        <Form.Group className="mb-3">
          <Form.Label>Paste your code here</Form.Label>
          <Form.Control
            as="textarea"
            rows={7}
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder="Paste or type your code..."
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Or upload a code file</Form.Label>
          <Form.Control type="file" accept=".js,.ts,.cpp,.c,.java,.py,.txt" onChange={handleFileUpload} />
        </Form.Group>
        <Button variant="primary" onClick={handleProcess} className="me-2">Remove Comments</Button>
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
            <Form.Control as="textarea" rows={7} value={output} readOnly />
          </Form.Group>
        )}
      </Card.Body>
    </Card>
  );
};

export default CommentRemover;
