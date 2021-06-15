import React from 'react';
import RegistrationPage from '../RegistrationPage';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Col from 'react-bootstrap/Col';

import './style.css';

const App = () => {
  return (
    <Jumbotron>
      <Container className="main-content">
        <Col md={{ span: 8, offset: 2 }}>
          <RegistrationPage />
        </Col>
      </Container>
    </Jumbotron>
  );
};

export default App;
