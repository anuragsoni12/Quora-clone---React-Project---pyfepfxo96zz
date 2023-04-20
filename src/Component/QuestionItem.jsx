import React from 'react'
import { Accordion, Badge, Table } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Card } from 'react-bootstrap';
import { AnswerItem } from './AnswerItem';
import { AddAnswer } from './AddAnswer';
const QuestionItem = ({
    item,
    deleteQuestion,
    deleteAnswer,
    addAnswer
}) => {
    return (
        <div>

            <Accordion defaultActiveKey="1">
                <Card>
                    <Accordion.Item  eventKey='0'>
                        <Accordion.Header >
                            <Container>
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
              <AddAnswer item={item} addAnswer={addAnswer}></AddAnswer>
                        </Card.Body>
                        </Accordion.Body>
                    </Accordion.Item>
                </Card>
            </Accordion>
        </div>
    )
}

export default QuestionItem;