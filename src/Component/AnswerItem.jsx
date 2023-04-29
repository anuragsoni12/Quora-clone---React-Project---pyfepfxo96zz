import React, { useState } from "react";
import AddCommentIcon from "@mui/icons-material/AddComment";

import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import { Col, Row, Container } from "react-bootstrap";

const RowStyleLikeDislike = {
  width: "50%",
  // border : '2px solid red',
  textAlign: "center",
};
const ColStyle = {
  // border : '2px solid green',
  width: "90%",
  display: "flex",
  // alignItems : 'center',
  justifyContent: "space-between",
};

export const AnswerItem = (props) => {
  const [like , setLike] = useState(true);
  const [disLike , setDisLike] = useState(true);
  const handleLikeFn = () => {
      setLike(!like);
  }
  const handleDisLikeFn = () => {
    setDisLike(!disLike);
  }
 
  return (
    <div>
      <Container>
        <Row lg="auto">
          <Col>
            <p>{props.answer}</p>
          </Col>
        </Row>
        <Row style={RowStyleLikeDislike}>
          <Col style={ColStyle}>
            <ThumbUpIcon style={  {color : like ? ''  : 'green' }}
             
              onClick={() => handleLikeFn()}
              />

            <ThumbDownIcon  
            style={{color  : disLike ? '' : 'red'}}
            onClick={() => handleDisLikeFn()} />

            <AddCommentIcon />
          </Col>

          <Col>
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
  );
};
