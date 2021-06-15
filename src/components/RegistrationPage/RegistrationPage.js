import React from 'react';
import RegistrationForm from '../RegistrationForm';
import Col from 'react-bootstrap/Col';

const RegistrationPage = () => {
  return (
    <Col className="registration-page" md={{ span: 8, offset: 2 }}>
      <h2>Availity Provider Registration</h2>
      <RegistrationForm />
    </Col>
  );
};

export default RegistrationPage;
