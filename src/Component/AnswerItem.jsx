import React from 'react'
import AddCommentIcon from '@mui/icons-material/AddComment';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon  from '@mui/icons-material/ThumbDownOffAlt';
import { Col, Row, Container } from 'react-bootstrap';

const RowStyleLikeDislike = {
 
    width : '50%',
    // border : '2px solid red',
    textAlign : 'center'
}
const ColStyle = {
    // border : '2px solid green',
    width : '90%',
    display : 'flex',
    // alignItems : 'center',
    justifyContent : 'space-between'
}
export const AnswerItem = (props) => {
    return (
        <div>
            <Container>
                <Row lg="auto">
                    <Col >
                        <p>{props.answer}</p>
                        
                    </Col>
                  
                </Row>
                <Row style={RowStyleLikeDislike}>
                    <Col style={ColStyle} >
                     
                        <ThumbUpOffAltIcon/>

                     

                        <ThumbDownOffAltIcon/>
                       
                        <AddCommentIcon/>
                    </Col>
                    
                <Col >
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
