import React from 'react';
import './style.css';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Col from 'react-bootstrap/Col';
import RegistrationPage from '../../components/RegistrationPage';

export default function App() {
  return (
    <Jumbotron>
      <Container className="main-content">
        <Col md={{ span: 8, offset: 2 }}>
          <RegistrationPage />
        </Col>
      </Container>
    </Jumbotron>
  );
}
