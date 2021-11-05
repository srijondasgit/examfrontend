import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useHistory } from "react-router-dom";
import {Link} from "react-router-dom";
import ModalPoints from "./ModalPoints";
import {Button} from "react-bootstrap";

function AnswerInfo() {
  const { id, uid, handle } = useParams();
  const {push} = useHistory();

  //const [details, setDetails] = useState({});
  const [answers, setAnswers] = useState([]);
  const [notification, setNotification] = useState("");
  const [data, setData] = useState(null);

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

  const thisData = {
    notification: notification
  };

  const sendNotification = async () => {
    axios
      .post(`/teacher/testId/${id}/submissionId/${uid}/updateTotalAndEmail`,  thisData, config)
      .then((res) => {
         
          setTimeout(() => {
            alert('Successfully sent total scores to student via an email!');
            push(`/teacher/testId/${id}/getSubmissions`)
          }, 2000);
         

        console.log(res);
        setNotification("");
      })
      .catch((err) => {
        console.log(err);
      });
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
             
            </li>
          </div>
        ))}
      </ol>
      <Button onClick={sendNotification}>Send Notification</Button>
    </div>
  );
}

export default AnswerInfo;
