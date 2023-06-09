import "../Component/css/sidebar.css";
import { Table, Badge } from "react-bootstrap";
import QuestionItem from "./QuestionItem";

export const Feeds = (props) => {
  // console.log('props in feed', props)
  // console.log(props.database)

  return (
    <div className="homepage-container">
      <div className="feeds">
        <Table striped bordered>
          <thead>
            <tr style={{ backgroundColor: "#ffffff" }}>
              <th>
                Posted Question{""}{" "}
                <Badge variant="info">{props.database.length}</Badge>
              </th>
            </tr>
          </thead>
          <tbody>
            {props.database.length === 0
              ? ""
              : props.database.map((questionItem, index) => (
                  <tr key={index}>
                    <td>
                      <QuestionItem
                        key={questionItem.question}
                        // key={index}

                        avatarname={props.avatarname}
                        item={questionItem}
                        deleteQuestion={props.deleteQuestion}
                        addAnswer={props.addAnswer}
                        deleteAnswer={props.deleteAnswer}
                      />
                    </td>
                  </tr>
                ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};
