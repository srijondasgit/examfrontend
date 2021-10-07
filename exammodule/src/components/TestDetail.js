import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";
import { Table } from "react-bootstrap";
import ModalAddQuestion from "./ModalAddQuestion";

const TestDetail = () => {
  const { id } = useParams();
  const { push } = useHistory();
  const [test, setTest] = useState({});
  // within useState square brackets must be used to recognize questions as an array
  const [questions, setQuestions] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      try {
        const { data } = await axios.get(`/user/testId/${id}/getTest`);
        setTest(data);
        setQuestions(data.questions);
      } catch (err) {
        console.error(err);
      }
    };
    fetch();
  }, []);
  return (
    <article>
      <h1>ID - {test.id}</h1>
      <p>Test Name - {test.testName}</p>
      <p>School Name - {test.schoolName}</p>
      <p>Class Name - {test.className}</p>
      <br />
      <div><ModalAddQuestion /></div>
      <br />
      <button onClick={() => push("/user/allTests")}>Go back</button>
      <hr />
      <div><h1>Questions</h1></div>
      {/* Div below returns all the questions */}
      <div>
        {questions.map(function (q, idx) {
          return (
            <div key={idx}>
              <div>
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>Index</th>
                      <th>Question Text</th>
                      <th>Score</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{q.index}</td>
                      <td>{q.questionText}</td>
                      <td>{q.score}</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </div>
          );
        })}
      </div>
    </article>
  );
};

export default TestDetail;
