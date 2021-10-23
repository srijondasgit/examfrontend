import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useHistory } from "react-router-dom";
import {Link} from "react-router-dom";
import ModalPoints from "./ModalPoints";
import {Button} from "react-bootstrap";

function AnswerInfo() {
  const { id, uid, handle } = useParams();

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

  const data = {};

  const sendNotification = () => {
    axios.post(
      `/teacher/testId/${id}/submissionId/${uid}/updateTotalAndEmail`,
      config,
      data
    );
  };

  return (
    <div>
      <ol>
        {answers.map((answer) => (
          <div>
            <li>
              <h1>AnswerID - {answer.id}</h1>
              <h1>Answer Provided - {answer.answerText}</h1>
              <h1>Answer Index - {answer.index}</h1>
              <h1><Link><ModalPoints aid={answer.id} id={id} uid={uid} /> - {answer.pointScored}</Link></h1>
              <Button onClick={sendNotification}>Send Notification</Button>
            </li>
          </div>
        ))}
      </ol>
    </div>
  );
}

export default AnswerInfo;
