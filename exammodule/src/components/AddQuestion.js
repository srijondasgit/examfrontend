import React, { useState } from "react";
import axios from "axios";
import { useParams, useHistory } from "react-router-dom";
import {Spinner} from "react-bootstrap";


function AddQuestion() {
  const { id } = useParams();
  const { push } = useHistory();
  const [index, setIndex] = useState("");
  const [questionText, setQuestionText] = useState("");

  const [score, setScore] = useState("");

  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState(null);

  const handleSubmit = () => {
    setLoading(true);
    setIsError(false);

    const data = {
      index: index,
      questionText: questionText,
      score: score,
    };

    const config = {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    };

    axios
      .post(`/teacher/testId/${id}/addQuestion`, data, config)
      .then((res) => {
        setData(res.data);
        setQuestionText("");
        setIndex("");

        setScore("");

        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        setIsError(true);
      });
  };

 

  return (
    <div className="container p-3">
      <h5 className="d-inline-block mb-3"> </h5>
      <div style={{ maxWidth: 350 }}>
        <div className="form-group">
          <label htmlFor="index">Index of Question</label>
          <input
            type="text"
            className="form-control"
            id="index"
            placeholder="Enter Index of Question"
            value={index}
            onChange={(e) => setIndex(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="questionText" className="mt-2">
            Question
          </label>
          <input
            type="text"
            className="form-control"
            id="questionText"
            placeholder="Question"
            value={questionText}
            onChange={(e) => setQuestionText(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="score" className="mt-2">
            Score
          </label>
          <input
            type="text"
            className="form-control"
            id="score"
            placeholder="Score"
            value={score}
            onChange={(e) => setScore(e.target.value)}
          />
        </div>

        {isError && (
          <small className="mt-3 d-inline-block text-danger">
            Something went wrong. Please try again later.
          </small>
        )}
        <button
          type="submit"
          className="btn btn-info mt-3 d-grid gap-2 col-12 mx-auto"
          onClick={handleSubmit}
          disabled={loading}
        >
          {loading ? <Spinner animation="border" variant="info" /> : "Add Question"}
        </button>
        {data && (
          <div className="mt-3">
            <strong>Output:</strong>
            <br />

            <pre>{JSON.stringify(data, null, 2)}</pre>
          </div>
        )}
        <br />
        {/* <div><Button onClick={() => push(`/user/testId/${id}/getTest`)}>Go back</Button></div> */}
      </div>
    </div>
  );
}

export default AddQuestion;
