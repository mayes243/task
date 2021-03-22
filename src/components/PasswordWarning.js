import React from 'react';
import { Form } from 'react-bootstrap/';
import { BsFillExclamationCircleFill } from "react-icons/bs";
import SignUpImage from '../assets/man.jpg';

const PasswordWarning = () => {
    return (
        <div>
            <Form.Group controlId="formBasicImage">
                <img src={SignUpImage} className="image-fluid" alt="signup image to learn more about" aria-hidden="true" />
            </Form.Group>
            {/* icon with caution */}
            <h4><b>Password Must Contain : </b></h4>
            <i>< BsFillExclamationCircleFill />  Uppercase character (A-Z)</i><br />
            <i>< BsFillExclamationCircleFill />  Lower character (a-z)</i><br />
            <i>< BsFillExclamationCircleFill />  Number (0-9)</i><br />
            <i>< BsFillExclamationCircleFill />  Non-Alphanumeric character, for example ! ,$,%,#</i>
        </div>
    )
}

export default PasswordWarning;
