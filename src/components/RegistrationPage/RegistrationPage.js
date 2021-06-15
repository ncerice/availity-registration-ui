import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';

import './style.css';

export default function RegistrationPage() {
  const [validated, setValidated] = useState(false);
  const [providerFormData, setProviderFormData] = useState({
    firstName: '',
    lastName: '',
    npiNumber: '',
    email: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    zipCode: '',
    optIn: false
  });

  const handleSubmit = event => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      alert(JSON.stringify(providerFormData));
    }
    setValidated(true);
  };

  const handleChange = event => {
    const value =
      event.target.type === 'checkbox'
        ? event.target.checked
        : event.target.value;
    setProviderFormData({
      ...providerFormData,
      [event.target.name]: value
    });
  };
  return (
    <Col className="registration-page" md={{ span: 6, offset: 3 }}>
      <h2>Availity Provider Registration</h2>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Row>
          <Col>
            <Form.Group controlId="firstName">
              <Form.Label>First name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Enter first name"
                name="firstName"
                value={providerFormData.firstName}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="lastName">
              <Form.Label>Last name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Enter last name"
                name="lastName"
                value={providerFormData.lastName}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
        </Form.Row>

        <Form.Group controlId="npiNumber">
          <Form.Label>NPI number</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="NPI number (10 digits)"
            maxlength={10}
            name="npiNumber"
            value={providerFormData.npiNumber}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="emailAddress">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            required
            type="email"
            placeholder="Enter email"
            name="email"
            value={providerFormData.email}
            onChange={handleChange}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="address1">
          <Form.Label>Address</Form.Label>
          <Form.Control
            required
            placeholder="1234 Main St"
            name="address1"
            value={providerFormData.address1}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="address2">
          <Form.Label>Address 2</Form.Label>
          <Form.Control
            placeholder="Apartment, studio, or floor"
            name="address2"
            value={providerFormData.address2}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Row>
          <Form.Group as={Col} controlId="city">
            <Form.Label>City</Form.Label>
            <Form.Control
              required
              name="city"
              value={providerFormData.city}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="state">
            <Form.Label>State</Form.Label>
            <Form.Control
              required
              as="select"
              defaultValue="Choose..."
              name="state"
              value={providerFormData.state}
              onChange={handleChange}
            >
              <option>Choose...</option>
              <option>...</option>
            </Form.Control>
          </Form.Group>

          <Form.Group as={Col} controlId="zipCode">
            <Form.Label>Zip</Form.Label>
            <Form.Control
              required
              type="number"
              name="zipCode"
              value={providerFormData.zipCode}
              onChange={handleChange}
            />
          </Form.Group>
        </Form.Row>

        <Form.Group controlId="receiveUpdatesCheckbox">
          <Form.Check
            type="checkbox"
            label="Opt in to receive Availity updates"
            name="optIn"
            checked={providerFormData.optIn}
            onChange={handleChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Col>
  );
}
