import "../Component/css/homepage.css";

import { Container, Row, Col } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Feeds } from "./Feeds";
import { AddQuestion } from "./AddQuestion";
import { SideBar } from "./SideBar";
import { Widget } from "./Widget";
import { Button } from "react-bootstrap";

export const HomePage = (props) => {
  const NavBarStyle = {
    // border : '2px solid red',
    display: "flex",
    margin: "4px 0px",
    backgroundColor: "#ffffff",
    alignItems: "center",
  };

  // console.log('props in home page', props)

  const handleLogoutFn = () => {
    let isAlert = window.confirm(
      `Are you sure want to logout as ${props.avatarname}!!`
    );
    if (isAlert) {
      props.setLoginStatus(false);
    }
  };
  return (
    <div className="container">
      <nav
        style={{ backgroundColor: "#ffffff" }}
        className="navbar navbar-expand-lg "
      >
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
                <AddQuestion addQuestion={props.addQuestion} />
              </Col>
              <Col lg="2">
                <Button variant="primary" onClick={handleLogoutFn}>
                  Logout
                </Button>
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
              avatarname={props.avatarname}
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
