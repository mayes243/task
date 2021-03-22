import React from 'react';
import { Container, Row, Col } from 'react-bootstrap/';
import LeftSide from './LeftSide'
import RightSide from './RightSide'

const Form = () => {
    return (
        <Container >
            <Row xm="6" sm="2">
                <Col><RightSide /></Col>
                <Col><LeftSide /></Col>
            </Row>
        </Container>
    )
}

export default Form
