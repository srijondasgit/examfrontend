import React, { useState } from "react";
import axios from "axios";

function AddQuestion() {
  const [index, setIndex] = useState("");
  const [questionText, setQuestionText] = useState("");

  const [score, setScore] = useState("");

  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState(null);

  const token = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJha2FzaG1vcmU4MzM4NkBnbWFpbC5jb20iLCJleHAiOjE2Mjc1MjM3MDgsImlhdCI6MTYyNzQ4NzcwOH0.4Cg58w7VAnzPWP78eOZrsToVfsoP6QtEkbTonAu0vJY";

 

  const handleSubmit = () => {
    setLoading(true);
    setIsError(false);

    const data = {
      index: index,
      questionText: questionText,
      score: score,
    };

    const headers = {
      "Content-Type": "application/json",
      Authorization:
        `Bearer ${token}`,
      type: "text",
    };

    axios
      .post("/teacher/addTestHeader", data, { headers })
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
          {loading ? "Loading..." : "Add Question"}
        </button>
        {data && (
          <div className="mt-3">
            <strong>Output:</strong>
            <br />

            <pre>{JSON.stringify(data, null, 2)}</pre>
          </div>
        )}
      </div>
    </div>
  );
}

export default AddQuestion;

