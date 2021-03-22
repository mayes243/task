import React from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap/'
import Fblogo from '../assets/fb-logo.png';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Formik } from 'formik';
import { userSchema } from './validation/LoginValidation';
import { TextField } from './TextField';
import { Helmet } from 'react-helmet';

const LeftSide = () => {

    return (
        <div className="form-container">
            {/* for custumize title */}
            <Helmet>
                <title>App | Home</title>
            </Helmet>
            <Formik
                validationSchema={userSchema}
                onSubmit={console.log}
                initialValues={{
                    email: '',
                    password: '',
                }}
            >
                {({ handleSubmit, handleChange, values }) => (
                    <div style={{ width: "80%", marginLeft: "10%", marginTop: "28%" }}>
                        <h2>Let's start with a quiz </h2>
                        <Form noValidate autoComplete="off" onSubmit={handleSubmit}>
                            <Form.Group controlId="formBasicEmail" className="input-container">
                                <Form.Label>Email address *</Form.Label>
                                <TextField
                                    type="text"
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
                            <Button type="submit" variant="success" size="lg" block>Log In</Button> <br />
                            <Row>
                                <Col>
                                    <Form.Group controlId="formBasicCheckbox">
                                        <Form.Check type="checkbox" label="Remember me " />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <i>Forgot Password ??? No problem,<Link to='/reset-password' className="signup-text"> CLICK HERE </Link>to get a new password.</i>
                                </Col>
                            </Row><br />
                            <Form.Group controlId="formBasicCreate">
                                <Link to="/create-account"><Button variant="primary" size="lg" block>Create New Account</Button> </Link>
                            </Form.Group>
                            <ImageWrapper className="bottom-form">
                                <img src={Fblogo} alt="facebook_logo" aria-hidden="true" />
                                <Link to='/' target="blank" className="signup-text">    Login With Facebook</Link>
                            </ImageWrapper>
                        </Form>
                    </div>
                )}
            </Formik>
        </div>
    );
}

export default LeftSide;


const ImageWrapper = styled.div`
// bottom-from
.bottom-form img{
    width:70px;
    height:50px;
    margin-top:10px;
}
.login-fb{
    color:#828282;
    font-size:0.9rem;
}
}
`













