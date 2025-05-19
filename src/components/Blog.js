import React from 'react';
import { Card } from 'react-bootstrap';
import ReactMarkdown from 'react-markdown';

const blogContent = `
# Blog

## Latest News

### May 20, 2025
- Website launched with Space Remover tool and modern UI.
- Added About, Guide, Blog, Rules, and Contact pages.
- **New Tool:** Comment Remover is now available! Remove all comments from your code in one click. Great for code obfuscation or reducing code length for AI input.
- **New Tools:** Case Converter, Text Duplicate Remover, JSON Formatter, URL Encoder/Decoder, Password Generator, and Resistance Calculator are now available!

### Coming Soon
- More text utilities and converters
- User accounts and personalization
- Mobile app version

Stay tuned for updates and new features!
`;

const Blog = () => (
  <Card className="shadow-sm">
    <Card.Body>
      <ReactMarkdown children={blogContent} />
    </Card.Body>
  </Card>
);

export default Blog;
