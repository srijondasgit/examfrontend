import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";

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
      {/* Div below returns all the questions */}
      <div>
        {questions.map(function(q, idx){
           return (<li key={idx}>{q.questionText}</li>)
         })}
      </div>
      <br />
      <button onClick={() => push("/user/allTests")}>Go back</button>
    </article>
  );
};

export default TestDetail;
