import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
// Removed duplicate Bootstrap CSS import as it is already present in src/index.js
import './App.css';

const toolContents = {
  tool1: <div><h2>Tool 1</h2><p>This is Tool 1. Select a tool from the sidebar.</p></div>,
  tool2: <div><h2>Tool 2</h2><p>This is Tool 2. Select a tool from the sidebar.</p></div>,
  tool3: <div><h2>Tool 3</h2><p>This is Tool 3. Select a tool from the sidebar.</p></div>,
};

function App() {
  const [activeTool, setActiveTool] = useState('tool1');

  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <Container fluid className="flex-grow-1">
        <Row>
          <Col xs={12} md={3} lg={2} className="sidebar-col p-0">
            <Sidebar onSelect={setActiveTool} activeKey={activeTool} />
          </Col>
          <Col xs={12} md={9} lg={10} className="main-content py-4">
            {toolContents[activeTool]}
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
