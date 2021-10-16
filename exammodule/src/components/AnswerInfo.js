import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useHistory } from "react-router-dom";

function AnswerInfo() {
  const { id, uid } = useParams();

  const [details, setDetails] = useState([]);

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
        setDetails(details);
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
        {details.map((t) => {
          return (
            <div>
              <h1>{t.answers[0].answerText}</h1>
            </div>
          );
        })}
      </ol>
    </div>
  );
}

export default AnswerInfo;
