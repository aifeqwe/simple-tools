import React from 'react';
import { Card } from 'react-bootstrap';
import ReactMarkdown from 'react-markdown';

const rulesContent = `
# Terms & Rules

- The use of this website and its tools for any illegal purposes is strictly prohibited.
- Users are responsible for ensuring their activities comply with all applicable laws and regulations.
- The website is provided as-is, and the owners are not liable for misuse.
- We do not store your data or text inputs.
- By using this website, you agree to these terms.
`;

const Rules = () => (
  <Card className="shadow-sm">
    <Card.Body>
      <ReactMarkdown children={rulesContent} />
    </Card.Body>
  </Card>
);

export default Rules;
