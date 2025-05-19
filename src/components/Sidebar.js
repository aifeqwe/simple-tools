import React from 'react';
import { Nav } from 'react-bootstrap';
import { useNavigate, useLocation } from 'react-router-dom';

const tools = [
  { name: 'Space Remover', key: 'spaceRemover' },
  { name: 'Comment Remover', key: 'commentRemover' },
  { name: 'Case Converter', key: 'caseConverter' },
  { name: 'Text Duplicate Remover', key: 'duplicateRemover' },
  { name: 'JSON Formatter', key: 'jsonFormatter' },
  { name: 'URL Encoder/Decoder', key: 'urlEncoder' },
  { name: 'Password Generator', key: 'passwordGenerator' },
  { name: 'Resistance Calculator', key: 'resistanceCalculator' },
];

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <Nav className="flex-column sidebar-nav bg-white border-end h-100 p-3" variant="pills" activeKey={location.pathname.replace('/', '') || 'spaceRemover'}>
      {tools.map(tool => (
        <Nav.Item key={tool.key}>
          <Nav.Link
            eventKey={tool.key}
            onClick={() => navigate(tool.key === 'spaceRemover' ? '/' : `/${tool.key}`)}
            active={location.pathname === (tool.key === 'spaceRemover' ? '/' : `/${tool.key}`)}
          >
            {tool.name}
          </Nav.Link>
        </Nav.Item>
      ))}
    </Nav>
  );
};

export default Sidebar;
