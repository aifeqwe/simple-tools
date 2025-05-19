import React from 'react';
import { Nav } from 'react-bootstrap';

const tools = [
  { name: 'Tool 1', key: 'tool1' },
  { name: 'Tool 2', key: 'tool2' },
  { name: 'Tool 3', key: 'tool3' },
];

const Sidebar = ({ onSelect, activeKey }) => (
  <Nav className="flex-column sidebar-nav bg-white border-end h-100 p-3" variant="pills" activeKey={activeKey} onSelect={onSelect}>
    {tools.map(tool => (
      <Nav.Item key={tool.key}>
        <Nav.Link eventKey={tool.key}>{tool.name}</Nav.Link>
      </Nav.Item>
    ))}
  </Nav>
);

export default Sidebar;
