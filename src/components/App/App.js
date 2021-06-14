import React from 'react';
import './style.css';
import Container from 'react-bootstrap/Container';
import RegistrationPage from '../../components/RegistrationPage';

export default function App() {
  return (
    <Container className="mainContainer">
      <RegistrationPage />
    </Container>
  );
}
