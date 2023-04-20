import React from 'react';
import "../Component/css/homepage.css";


import { Container, Row, Col } from "react-bootstrap";
import { Card } from 'react-bootstrap';
import { Feeds } from './Feeds';
import { AddQuestion } from './AddQuestion';
export const HomePage = (props) => {
    console.log('props in home page', props)

    return (
        <div className='container'>

            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid  row">
                    <Container>
                        <Row text-align-center>
                            <Col lg="4" >
                                <h2 style={{
                                    color: 'blue',
                                    fontSize: '45px'
                                }}>Quora</h2>
                            </Col>
                            <Col lg="8" >


                                <AddQuestion addQuestion={props.addQuestion} />

                            </Col>
                        </Row>
                    </Container>
                </div>

            </nav>


            <div className=' container-homepage'>



                <div className='center'>
                    <Card.Body>
                        <Feeds
                            database={props.database}
                            deleteAnswer={props.deleteAnswer}
                            deleteQuestion={props.deleteQuestion}
                            addAnswer={props.addAnswer}
                        />

                    </Card.Body>

                </div>

            </div>
        </div>

    )
}
