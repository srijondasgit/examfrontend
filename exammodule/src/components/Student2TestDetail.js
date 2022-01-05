import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";
import { Table, Button } from "react-bootstrap";
import ModalAddQuestion from "./ModalAddQuestion";
import { Link } from "react-router-dom";
import QuestionRemoved from "./QuestionRemoved";
import ModalInsertAnswer from "./ModalInsertAnswer";
import ModalUpdateSubmissionHeader from "./ModalUpdateSubmissionHeader";

const Student2TestDetail = () => {
  const { id, qid } = useParams();

  const { push } = useHistory();
  const [test, setTest] = useState({});
  // within useState square brackets must be used to recognize questions as an array
  const [questions, setQuestions] = useState([]);
  const [previousAnswers, setPreviousAnswers] = useState([]);
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

  const config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  };
  
  // function refreshPage() {
  //   window.location.reload(false);
  // }
  const previous = (id,qid)=>{
     axios.get(`/student/testId/${id}/questionId/${qid}/getAnswer`, config).then(async(res)=>{
      const previousAnswers = await res.data;
      document.getElementById('td').innerHTML = previousAnswers.answerText;
      // setPreviousAnswers(previousAnswers);
    })
  }

  return (
    <article>
      <div className="container">
        <h5 className="d-inline-block mb-3"></h5>
        <div
          style={{
            padding: 10,
            margin: 20,
            background: "rgb(245 245 245)",
            width: "100%",
            borderRadius: 10,
            border: 1,
            borderColor: "#ccc",
          }}
        >
          <h1>ID - {test.id}</h1>
          <p>Test Name - {test.testName}</p>
          <p>School Name - {test.schoolName}</p>
          <p>Class Name - {test.className}</p>

          {/* <Link><ModalUpdateSubmissionHeader id={test.id} config={config} /></Link> */}
          <Button disabled>Start Submitting Answers</Button>

          {/* <p><Link to={`/teacher/testId/${id}/getSubmissions`}>Submissions</Link></p> */}
          <br />
          {/* <div>
        <Link>
          <ModalInsertAnswer />
        </Link>   
      </div> */}
          <br />
          {/* <div>
        <Button onClick={() => push("/student/allTests")}>Go back</Button>
      </div> */}
        </div>
      </div>
      <hr />
      <div>
        <h1>Questions</h1>
      </div>
      {/* Div below returns all the questions */}
      <div>
        {questions.map(function (q, idx) {
          return (
            <div key={idx}>
              <div>
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th width={"20%"}>Index</th>
                      <th width={"20%"} hidden>
                        Question Id
                      </th>
                      <th width={"20%"}>Question Text</th>
                      <th width={"20%"}>Score</th>
                      <th width={"20%"}>Previous answer</th>
                      {/* <th>Update Submission Header</th> */}
                      <th>Answer</th>

                      {/* <th>Submissions</th> */}
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{q.index}</td>
                      <th hidden>{q.id}</th>
                      <td>{q.questionText}</td>
                      <td>{q.score}</td>
                      <td id="td">
                        {previous(id,q.id)}
                      </td>
                      {/* <td><Link>
                              <ModalUpdateSubmissionHeader id={id} qid={q.id} config={config} />
                            </Link>
                      </td> */}

                      <td>
                        <Link>
                          <ModalInsertAnswer
                            id={id}
                            qid={q.id}
                            config={config}
                          />
                        </Link>
                      </td>
                      {/* <td> */}
                      {/* <Link
                          onClick={() => {
                            axios.get(
                              `/teacher/testId/${id}/getSubmissions`,
                              config
                            );
                          }}
                          to={`/teacher/testId/${id}/getSubmissions`}
                        >
                         getSubmissions
                        </Link> */}
                      {/* </td> */}
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

export default Student2TestDetail;
