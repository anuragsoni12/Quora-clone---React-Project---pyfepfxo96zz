import React, { useState } from "react";
import "../Component/css/homepage.css";

import { Container, Row, Col } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Feeds } from "./Feeds";
import { AddQuestion } from "./AddQuestion";
import { SideBar } from "./SideBar";
import { Widget } from "./Widget";
import { Button } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import AuthenticationComponent from "./ModalBody";
import { useEffect } from "react";

const modalHeaderStyle = {
  // backgroundColor : '#ededed',
  margin: "0px",
  width: "100",

  display: "flex",
  justifyContent: "center",
  // border : '2px solid red',

  backgroundColor: "#fff",
};

const ModalBody = {
  // backgroundColor : '#ededed',

  display: "flex",
  justifyContent: "space-evenly",
  // border : '2px solid red',
  padding: "0px",
};

export const HomePage = (props) => {
  const NavBarStyle = {
    // border : '2px solid red',
    display: "flex",
    margin: "4px 0px",
    backgroundColor: "#ffffff",
    alignItems: "center",
  };

  // console.log('props in home page', props)

  const [avatarName, setAvatarName] = useState("");

  const [showModal, setShowModal] = useState(false);
  const handleClose = () => {
    setShowModal(false);
  };
  const handleOpen = () => {
    setShowModal(true);
  };
  const handleLogoutFn = () => {
    setLogin(!login);
    setAvatarName("");
  };
  const [login, setLogin] = useState(true);
  const loginStatus = () => {
    setLogin(!login);
  };
  useEffect(() => {
    setTimeout(() => {
      handleOpen();
    }, 1000);
  }, []);
  return (
    <div className="container">
      <nav
        style={{ backgroundColor: "#ffffff" }}
        className="navbar navbar-expand-lg "
      >
        <Modal onHide={handleClose} show={showModal} size="md" centered>
          {/* style={{color : '#0d6efd', width : '100%', fontSize : '35px' ,}} */}
          <Modal.Header style={modalHeaderStyle}>
            {" "}
            <Modal.Title>
              <h2
                style={{
                  color: "#0d6efd",
                  fontSize: "45px",
                }}
              >
                Quora
              </h2>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body style={ModalBody}>
            <AuthenticationComponent
              loginStatus={loginStatus}
              handleClose={handleClose}
              setAvatarName={setAvatarName}
            />
          </Modal.Body>
          <Modal.Footer></Modal.Footer>
        </Modal>
        <div className="container-fluid  ">
          <Container>
            <Row style={NavBarStyle}>
              <Col lg="4">
                <h2
                  style={{
                    color: "#0d6efd",
                    fontSize: "45px",
                  }}
                >
                  Quora
                </h2>
              </Col>
              <Col lg="6">
                <AddQuestion
                  addQuestion={props.addQuestion}
                  login={login}
                  handleOpen={handleOpen}
                />
              </Col>
              <Col lg="2">
                {login ? (
                  <Button variant="primary" onClick={handleOpen}>
                    Login
                  </Button>
                ) : (
                  <Button variant="primary" onClick={handleLogoutFn}>
                    Logout
                  </Button>
                )}
              </Col>
            </Row>
          </Container>
        </div>
      </nav>

      <div className=" container-homepage">
        <div className="side">
          <SideBar />
        </div>

        <div className="center">
          <Card.Body>
            <Feeds
              avatarName={avatarName}
              addQuestion={props.addQuestion}
              database={props.database}
              deleteAnswer={props.deleteAnswer}
              deleteQuestion={props.deleteQuestion}
              addAnswer={props.addAnswer}
            />
          </Card.Body>
        </div>

        <div className="side widget">
          <Widget />
        </div>
      </div>
    </div>
  );
};
