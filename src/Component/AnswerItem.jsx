import React from 'react'

import { Col, Row, Container } from 'react-bootstrap';
export const AnswerItem = (props) => {
    return (
        <div>
            <Container>
                <Row lg="auto">
                    <Col >
                        <p>{props.answer}</p>
                    </Col>
                  
                </Row>
                <Row>
                <Col lg={1}>
                        <button
                            className="btn btn-sm btn-danger "
                            onClick={() => {
                                props.deleteAnswer(props.answer, props.item);
                            }}
                        >
                            Delete
                        </button>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}
