import React from 'react';
import {Table , Badge} from "react-bootstrap";
import QuestionItem  from './QuestionItem';
export const Feeds = (props) => {
  console.log('props in feed', props)
  return (
    <div>
        <Table striped bordered >
            <thead>
              <tr>
                <th>Posted Question{""} <Badge variant="info">{props.database.length}</Badge></th>
               
              </tr>
            </thead>
            <tbody>
              {
                props.database.length === 0 ? "" : 
                props.database.map((questionItem , index)=>(
                  <tr key = {index}>
                    <td>
                      <QuestionItem
                        key={questionItem.question}
                        // key={index}
                        item={questionItem}
                        deleteQuestion={props.deleteQuestion}
                        addAnswer={props.addAnswer}
                        deleteAnswer={props.deleteAnswer}
                      />
                    </td>
                  </tr>
                ))
              }
            </tbody>
        </Table>
    </div>
  )
}
