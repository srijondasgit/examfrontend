import React, {useState, useEffect} from "react";
import axios from "axios";
import { useParams, useHistory } from "react-router-dom";
import TestDetail from './TestDetail';


const UpsertAnswers = () => {
   const {id} = useParams();
   const [index, setIndex] = useState("");
   const [answerText, setAnswerText] = useState("");
   const [copyQuestionText, setCopyQuestionText] = useState("");
   const [copyScoreQuestion, setCopyScoreQuestion] = useState("");
   const [copyIndexQuestion, setCopyIndexQuestion] = useState("")

    const [loading, setLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [data, setData] = useState(null);

    const handleSubmit = () => {
        setLoading(true);
        setIsError(false);
    
        const data = {
         index: index,
         answerText: answerText,
         copyIndexQuestion: copyIndexQuestion,
         copyQuestionText: copyQuestionText,
         copyScoreQuestion: copyScoreQuestion,
        };
    
        const config = {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        };
    
        axios
          .post(`/student/testId/${id}/upsertAnswers`, data, config)
          .then((res) => {
           setData(res.data);
           setIndex("");
           setAnswerText("");
           setCopyIndexQuestion("");
           setCopyScoreQuestion("");
           setCopyQuestionText("");
    
            setLoading(false);
          })
          .catch((err) => {
            setLoading(false);
            setIsError(true);
          });
      };
    
    return(
        <div className="container p-3">
            <h5 className="d-inline-block mb-3"> </h5>
            <div style={{ maxWidth: 350 }}>
            <div className="form-group">
          <label htmlFor="index">Index</label>
          <input
            type="text"
            className="form-control"
            id="index"
            placeholder="Enter Index"
            value={index}
            onChange={(e) => setIndex(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="answerText">Answer Text</label>
          <input
            type="text"
            className="form-control"
            id="answerText"
            placeholder="Enter Answer"
            value={answerText}
            onChange={(e) => setAnswerText(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="copyQuestionText">Copied Question</label>
          <input
            type="text"
            className="form-control"
            id="copyQuestionText"
            placeholder="Enter Question"
            value={copyQuestionText}
            onChange={(e) => setCopyQuestionText(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="copyScoreQuestion">Copied Score</label>
          <input
            type="text"
            className="form-control"
            id="copyScoreQuestion"
            placeholder="Enter Score"
            value={copyScoreQuestion}
            onChange={(e) => setCopyScoreQuestion(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="copyIndexQuestion">Copied Index</label>
          <input
            type="text"
            className="form-control"
            id="copyIndexQuestion"
            placeholder="Enter Index"
            value={copyIndexQuestion}
            onChange={(e) => setCopyIndexQuestion(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="btn btn-info mt-3 d-grid gap-2 col-12 mx-auto"
          onClick={handleSubmit}
          disabled={loading}
        >
          {loading ? "Loading..." : "Upsert Answer"}
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

export default UpsertAnswers;
