
import { Accordion, Badge, Table } from "react-bootstrap";
import {Avatar} from "@mui/material"
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Card } from 'react-bootstrap';
import { AnswerItem } from './AnswerItem';
import { AddAnswer } from './AddAnswer';
import { useState } from "react";
// import { useState } from "react";




const QuestionItem = ({
  item,
  deleteQuestion,
    deleteAnswer,
    addAnswer,
    
    

}) => {

  console.log('item in quesList' , item)

  const [currDate, setCurrDate] = useState(() => {
    return Date.now()
  });
  const RowStyle = {
                  
                    
                    padding :' 0px 10px'
                    
                    }
  const ColStyle = {
    display : 'flex',
    padding : '10px 0px',
    // border : '2px solid red',
    alignItems : 'center',
    // flexDirection : 'colum style={{fontSize : '20px' , marginTop 0 '18px' }}n'
  }

  
  setTimeout(() => {
    setCurrDate(Date.now())
  }, 60000);
  
  return (
    <div>
          

            <Accordion >
                <Card>
                    <Accordion.Item  eventKey='1'>
                        <Accordion.Header >
                            <Container fluid>
                              <Row style={RowStyle}>
                                <Col style={ColStyle}>
                                <Avatar/>
                                <h5 style={{fontSize : '25px' , margin : '10px 10px'   }}> Test user </h5>{Math.ceil((currDate-item.createdAt)/60000)} min ago{" "}
                                  <h5 style={{fontSize : '15px' , margin : '6px 1px 0px 12px ' , color : 'blue' }}>Follow</h5>
                                 
                                </Col>
                              </Row>
                              
                                <Row>
                                    <Col>{item.question}</Col>
                                    
                                </Row>
                                <br />
                                <Row>
                                <Col>
                                        <Button size="sm" variant="success">
                                            Answers{" "}{item.answers.length}
                                        </Button>
                                    </Col>
                                    <Col>
                                        <Button size="sm"
                                            variant="danger"
                                            onClick={() => {
                                                deleteQuestion(item);
                                            }}
                                        >
                                            Delete
                                        </Button>
                                    </Col>
                                </Row>
                            </Container>



                        </Accordion.Header>

                        <Accordion.Body>
                        <Card.Body>
                        <Table bordered hover responsive>
                        <AddAnswer item={item} addAnswer={addAnswer}></AddAnswer>
                <thead>
                  <tr>
                    <th>
                      Posted Answers{" "}
                      <Badge variant="info">{item.answers.length}</Badge>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {item.answers.length === 0
                    ? ""
                    : item.answers.map((answer) => {
                        return (
                          <tr>
                            <td>
                              <AnswerItem
                                key={answer}
                                item={item}
                                answer={answer}
                                deleteAnswer={deleteAnswer}
                              ></AnswerItem>
                            </td>
                          </tr>
                        );
                      })}
                </tbody>
              </Table>
              
                        </Card.Body>
                        </Accordion.Body>
                    </Accordion.Item>
                </Card>
            </Accordion>
        </div>
    )
}

export default QuestionItem;