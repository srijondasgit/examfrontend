import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";
import { Table, Button } from "react-bootstrap";
import ModalAddQuestion from "./ModalAddQuestion";
import { Link } from "react-router-dom";
import QuestionRemoved from "./QuestionRemoved";

const TestDetail = () => {
  const { id, qid } = useParams();

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

  const config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  };

  function refreshPage() {
    window.location.reload(false);
  }

  


  return (
    <article>
       <div className="container">
      <h5 className="d-inline-block mb-3"> </h5>
      <div style={{ padding: 10, margin: 20, background: "rgb(245 245 245)", width: '100%', borderRadius: 10, border: 1, borderColor: '#ccc'}}>
       
      <h1>ID - {test.id}</h1>
      <p>Test Name - {test.testName}</p>
      <p>School Name - {test.schoolName}</p>
      <p>Class Name - {test.className}</p>
      <p><Link to={`/teacher/testId/${id}/getSubmissions`}>Submissions</Link></p>
      <br />
      <div>
        <Link>
          <ModalAddQuestion />
        </Link>
       
      </div>

      <br />
      <div>
        <Button onClick={() => push("/teacher/addTestHeader")}>Go back</Button>
      </div>
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
                      <th>Index</th>
                      <th hidden>Question Id</th>
                      <th>Question Text</th>
                      <th>Score</th>
                      <th>Delete</th>
                      {/* <th>Submissions</th> */}
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{q.index}</td>
                      <th hidden>{q.id}</th>
                      <td>{q.questionText}</td>
                      <td>{q.score}</td>
                      <td>
                        <Link
                        onClick={()=>{
                          const deleteQuestion = async () => {
                            axios
                              .delete(`/teacher/testId/${id}/questionId/${q.id}`, config)
                              .then((res) => {
                                 
                                  setTimeout(() => {
                                    alert('Question removed successfully!');
                                    refreshPage();
                                  }, 1000);
                              })
                              .catch((err) => {
                                console.log(err);
                              });
                          };
                          deleteQuestion();
                        }}

                          // onClick={() => {
                          //   axios.delete(
                          //     `/teacher/testId/${id}/questionId/${q.id}`,
                          //     config
                          //   );
                          // }}

                          // to={`/teacher/testId/${id}/questionId/${qid}`}
                        >
                         {/* <QuestionRemoved id={id} qid={q.id} config={config} /> */}
                         <Button>Delete</Button>
                        
                        </Link>
                      </td>
                      <td>
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
                      </td>
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
