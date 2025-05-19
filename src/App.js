import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import SpaceRemover from './components/SpaceRemover';
import About from './components/About';
import Guide from './components/Guide';
import Blog from './components/Blog';
import Rules from './components/Rules';
import Contact from './components/Contact';
import CommentRemover from './components/CommentRemover';
import CaseConverter from './components/CaseConverter';
import DuplicateRemover from './components/DuplicateRemover';
import JSONFormatter from './components/JSONFormatter';
import URLEncoder from './components/URLEncoder';
import PasswordGenerator from './components/PasswordGenerator';
import ResistanceCalculator from './components/ResistanceCalculator';
// Removed duplicate Bootstrap CSS import as it is already present in src/index.js
import './App.css';

const toolContents = {
  spaceRemover: <SpaceRemover />,
  tool2: <div><h2>Tool 2</h2><p>This is Tool 2. Select a tool from the sidebar.</p></div>,
  tool3: <div><h2>Tool 3</h2><p>This is Tool 3. Select a tool from the sidebar.</p></div>,
};

function App() {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <Header />
        <Container fluid className="flex-grow-1">
          <Row>
            <Col xs={12} md={3} lg={2} className="sidebar-col p-0">
              <Sidebar onSelect={() => {}} activeKey={null} />
            </Col>
            <Col xs={12} md={9} lg={10} className="main-content py-4">
              <Routes>
                <Route path="/" element={<SpaceRemover />} />
                <Route path="/spaceRemover" element={<SpaceRemover />} />
                <Route path="/commentRemover" element={<CommentRemover />} />
                <Route path="/caseConverter" element={<CaseConverter />} />
                <Route path="/duplicateRemover" element={<DuplicateRemover />} />
                <Route path="/jsonFormatter" element={<JSONFormatter />} />
                <Route path="/urlEncoder" element={<URLEncoder />} />
                <Route path="/passwordGenerator" element={<PasswordGenerator />} />
                <Route path="/resistanceCalculator" element={<ResistanceCalculator />} />
                <Route path="/about" element={<About />} />
                <Route path="/guide" element={<Guide />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/rules" element={<Rules />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </Col>
          </Row>
        </Container>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
