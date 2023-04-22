import React, { useState } from 'react';
import { Container ,Row , Col ,  } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

import Form  from "react-bootstrap/Form";
export const AddQuestion = (props) => {
    // console.log('props', props)
    const [question , setQuestion] = useState("");
    // const [timeStamp , setTimeStamp] = useState(new Date());
    const submit = (e) =>{
        e.preventDefault();
        if(!question){
            alert("Question can'not be blank!");
        }
        // setTimeStamp(Date.now());
        
        props.addQuestion(question )
        setQuestion("")
    }
   
    return (
    <div>
        <Form onSubmit={submit} >
        <Form.Group  controlId="formBasicEmail">
            <Container>
                <Row>
                    <Col>
                    <Form.Control
            type="text"
            placeholder='type your question'
            value = {question}
            onChange={(e)=> setQuestion(e.target.value)}
            />
                    </Col>
                    <Col style={{margin : '2px', textAlign:'center'}}>
                    <Button type='submit' variant="primary">Add Question</Button>
                    </Col>
                </Row>
            </Container>
       
           

        </Form.Group>
        </Form>
    </div>
  )
}
