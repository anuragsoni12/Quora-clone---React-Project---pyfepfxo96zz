import React, { useState } from 'react';
import { Container ,Row , Col ,  } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import SearchIcon from '@mui/icons-material/Search';
import Form  from "react-bootstrap/Form";



const InputColStyle = {
    // border : '2px solid red',
    borderRadius : '6px',
    // width : '40%',
    display : 'flex',
    // justifyContent : 'space-between',
    alignItems : 'center',
    backgroundColor : "#b2b2b2"
}
const ChangeInput = {
    
    width : '100%',
    padding : '6px 5px',
    // border  : '2px ssxolid red',
    // color : '#fff',
    backgroundColor : '#b2b2b2',
    outline : 'none',
    border : 'none',
    
   

}

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
        <Form.Group  >
            <Container>
                <Row>
                    <Col style={InputColStyle}>
                    <SearchIcon/>
                    <input style={ChangeInput}
            type="text"
            placeholder='Type your question....'
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
