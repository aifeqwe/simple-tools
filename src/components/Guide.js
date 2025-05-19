import React from 'react';
import { Card } from 'react-bootstrap';
import ReactMarkdown from 'react-markdown';

const guideContent = `
# Guide

Welcome to Simple Tools! Here is how to use each section:

## Space Remover
- Paste your text or upload a .txt file.
- Click **Remove Spaces**.
- The tool will reduce all consecutive spaces to a single space.
- Useful for reducing character count for AI or other limits.

## Comment Remover
- Paste or upload your code.
- Click **Remove Comments**.
- All code comments will be removed (supports C, C++, Java, JS, Python, ...).

## Case Converter
- Paste your text.
- Select the desired case (UPPERCASE, lowercase, etc.).
- Click **Convert** to get the result.

## Text Duplicate Remover
- Paste your text (one item per line).
- Click **Remove Duplicates** to get unique lines only.

## JSON Formatter & Validator
- Paste your JSON.
- Click **Format & Validate** to see pretty output or errors.

## URL Encoder/Decoder
- Paste your text.
- Select Encode or Decode.
- Click the button to process.

## Password Generator
- Set your desired options (length, character types).
- Click **Generate** to get a strong password.

## Resistance Calculator
- Select the number of bands and their colors.
- Set multiplier and tolerance.
- Click **Calculate Resistance** to see the value.
- For SMD resistors, enter the code and click **Decode SMD**.

## General Tips
- All tools are free and require no registration.
- For best experience, use the latest version of your browser.
`;

const Guide = () => (
  <Card className="shadow-sm">
    <Card.Body>
      <ReactMarkdown children={guideContent} />
    </Card.Body>
  </Card>
);

export default Guide;
