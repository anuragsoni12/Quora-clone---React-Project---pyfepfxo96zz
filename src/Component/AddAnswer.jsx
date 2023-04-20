import React, { useState } from 'react'

import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
export const AddAnswer = (props) => {
  const [answer, setAnswer] = useState("");
  const submit = (e) => {
    e.preventDefault();
    if (!answer) {
      alert("Answer cannot be blank!");
    }
    else {
      props.addAnswer(answer, props.item);
      setAnswer("");
    }
  };

  return (
    <div>
      <Form onSubmit={submit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Your Answer</Form.Label>
          <Form.Control onChange={(e) => setAnswer(e.target.value)} value={answer} type="text" placeholder="Enter Answer" />
          <br />
          <Container>
            <Row>
              <Col lg={2}>
                <button className="btn btn-sm btn-success" type="submit">   Add Answer
                </button>
              </Col>
            </Row>
          </Container>


        </Form.Group>







      </Form>
    </div>
  )
}
