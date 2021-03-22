import React from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap/'
import { Link } from 'react-router-dom';
import PasswordWarning from './PasswordWarning'
import { Formik } from 'formik';
import { RegisterSchema } from './validation/RegisterValidation';
import { TextField } from './TextField';
import { Helmet } from 'react-helmet';

const CreateAccount = () => {
    return (
        <Container>
            {/* for custumize title */}
            <Helmet>
                <title>Create Account </title>
            </Helmet>
            <Formik
                validationSchema={RegisterSchema}

                initialValues={{
                    email: '',
                    password: '',
                    cPassword: '',
                }}
                onSubmit={values => {
                    console.log(values)
                }}
            >
                {({ handleSubmit, handleChange, values, errors }) => (
                    <Row xm="6" sm="2" >
                        <Col>
                            <Form noValidate autoComplete="off" onSubmit={handleSubmit} style={{ marginTop: "30%" }}>
                                {/*these fields are hidden
                                
                                
                                <Row>
                                    <Col>
                                        <Form.Group controlId="formBasicFirstName">
                                            <Form.Label>First Name *</Form.Label>
                                            <TextField
                                                type="text"
                                                name="firstName"
                                                placeholder="Enter First Name"
                                                value={values.firstName}
                                                onChange={handleChange}
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group controlId="formBasicLastName">
                                            <Form.Label>Last Name *</Form.Label>
                                            <TextField
                                                type="text"
                                                name="lastName"
                                                placeholder="Enter Last Name"
                                                value={values.lastName}
                                                onChange={handleChange}
                                            />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Form.Group controlId="formBasicUserName">
                                    <Form.Label>User Name *</Form.Label>
                                    <TextField
                                        type="text"
                                        name="userName"
                                        placeholder="Enter User Name"
                                        value={values.userName}
                                        onChange={handleChange}
                                    />
                                </Form.Group>
                                <Form.Group controlId="formBasicTemporary">
                                    <Form.Label>Temporary Address </Form.Label>
                                    <Form.Control type="text" placeholder="Enter Temporary Address" />
                                </Form.Group>
                                <Form.Group controlId="formBasicPermanent">
                                    <Form.Label>Permanent Permanent *</Form.Label>
                                    <TextField
                                        type="address"
                                        name="pAddress"
                                        placeholder="Enter Permanent Permanent"
                                        value={values.pAddress}
                                        onChange={handleChange}
                                    />
                                </Form.Group> */}
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Email Address *</Form.Label>
                                    <TextField
                                        type="email"
                                        name="email"
                                        placeholder="Enter Email"
                                        value={values.email}
                                        onChange={handleChange}
                                    />
                                </Form.Group>
                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Password *</Form.Label>
                                    <TextField
                                        type="password"
                                        name="password"
                                        placeholder="Enter Password"
                                        value={values.password}
                                        onChange={handleChange}
                                    />
                                </Form.Group>
                                <Form.Group controlId="formBasicConfirmPassword">
                                    <Form.Label>Confirm Password *</Form.Label>
                                    <TextField
                                        type="password"
                                        name="cPassword"
                                        placeholder="Enter Confirm Password"
                                        onChange={handleChange}
                                    />
                                </Form.Group>
                                <Form.Group controlId="formBasicCheckbox">
                                    <span style={{ color: '999' }}>Already have an account? </span>
                                    <Link to='/' className="signup-text"> Sign in ?</Link>
                                </Form.Group>
                                <Form.Group controlId="formBasicTerms">
                                    <Form.Check
                                        type="checkbox"
                                        name="terms"
                                        label="Agree to terms and conditions"
                                        onChange={handleChange}
                                        feedback={errors.terms}
                                        id="validationFormik0"
                                    />
                                </Form.Group>
                                <Button type="submit" variant="primary" size="lg" block>Create New Account</Button>
                            </Form>

                        </Col>
                        <Col>
                            <PasswordWarning />
                        </Col>
                    </Row>
                )}
            </Formik>

        </Container>
    )
}

export default CreateAccount;
