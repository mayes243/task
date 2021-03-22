import React from 'react';
import { Link } from 'react-router-dom';
import Man from '../assets/man1.jpg';
import { Row, Col } from 'react-bootstrap'
import { BsFillCursorFill } from 'react-icons/bs'

const RightSide = () => {
    return (
        <div>

            <img src={Man} alt="right side image is comming to learn more about" aria-hidden="true" style={{ height: "60%", width: "100%", marginTop: "30%" }} />

            <Row>
                <Col>
                    {/* <h2>Safety Tips :</h2>
                    <i>< BsFillCursorFill />  Don't save your password</i><br /><br />
                    <i>< BsFillCursorFill />  Don't share your login credentials</i><br /><br />
                    <i>< BsFillCursorFill />  Log out the application before closing</i><br /><br /> */}
                    <h2>Points :</h2>
                    <i>< BsFillCursorFill />  Correct answer give you +1 point</i><br /><br />
                    <i>< BsFillCursorFill />  Incorrect answer give you none</i><br /><br />
                    <i>< BsFillCursorFill />  Total numer of Question is 10</i><br /><br />
                </Col>
                <Col>New to here ? <Link to='/create-account' className="signup-text"> Sign up now...</Link> <br />
                    <Link to='/quizz' className="signup-text"> Quiz start now </Link>
                </Col>
            </Row>
        </div>
    )
}

export default RightSide
