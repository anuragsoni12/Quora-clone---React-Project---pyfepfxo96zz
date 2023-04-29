import React from 'react';
import "../Component/css/homepage.css";


import { Container, Row, Col } from "react-bootstrap";
import { Card } from 'react-bootstrap';
import { Feeds } from './Feeds';
import { AddQuestion } from './AddQuestion';
import { SideBar } from './SideBar';
import { Widget } from './Widget';

export const HomePage = (props) => {
    const NavBarStyle = {
        // border : '2px solid red',
        display : 'flex',
        margin : '4px 0px',
        backgroundColor : '#ffffff',
        alignItems : 'center'
    }
    // console.log('props in home page', props)
    
   
    return (
        <div className='container'>

            <nav style={{backgroundColor:'#ffffff'}} className="navbar navbar-expand-lg ">
                <div className="container-fluid  ">
                    <Container>
                        <Row style={NavBarStyle}>
                            <Col lg="4" >
                                <h2 style={{
                                    color: '#0d6efd',
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

                <div className='side'>
                    <SideBar/>
                </div>

                <div className='center'>
                    <Card.Body>
                        <Feeds
                            addQuestion={props.addQuestion}
                            database={props.database}
                            deleteAnswer={props.deleteAnswer}
                            deleteQuestion={props.deleteQuestion}
                            addAnswer={props.addAnswer}
                                

                        />

                    </Card.Body>

                </div>

                <div className='side widget'>
                    <Widget/>
                </div>

            </div>
        </div>

    )
}
