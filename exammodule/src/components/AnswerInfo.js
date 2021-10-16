import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useHistory } from "react-router-dom";

function AnswerInfo() {
  const { id, uid } = useParams();

  //const [details, setDetails] = useState({});
  const [answers, setAnswers] = useState([]);

  const config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  };

  const getAnswersData = () => {
    axios
      .get(
        `/teacher/testId/${id}/submissionId/${uid}/getSubmissionDetails`,
        config
      )
      .then((res) => {
        const details = res.data;
       // setDetails(details);
        setAnswers(details.answers);
        console.log(details);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getAnswersData();
  }, []);

  return (
    <div>
      <ol>
          {answers.map((answer) => (
              <div>
                <h1>Answer Provided - {answer.answerText}</h1>
              </div>
          ))}
      </ol>
    </div>
  );
}

export default AnswerInfo;
