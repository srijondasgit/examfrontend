import React, {useState, useEffect} from "react";
import axios from "axios";
import { useParams, useHistory } from "react-router-dom";
import StudentTestDetail from "./StudentTestDetail";


const UpdateSubmissionHeader = () => {
    const {id} = useParams();
    const [studentName, setStudentName] = useState("");
    const [rollNo, setRollNo] = useState("");

    const [loading, setLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [data, setData] = useState(null);

    const handleSubmit = () => {
        setLoading(true);
        setIsError(false);
    
        const data = {
         studentName: studentName,
         rollNo: rollNo
        };
    
        const config = {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        };
    
        axios
          .post(`/student/testId/${id}/insertUpdateSubmissionHeader`, data, config)
          .then((res) => {
            setData(res.data);
            setStudentName("");
            setRollNo("")
    
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
          <label htmlFor="studentName">Student Name</label>
          <input
            type="text"
            className="form-control"
            id="studentName"
            placeholder="Enter Student Name"
            value={studentName}
            onChange={(e) => setStudentName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="rollNo">Roll No.</label>
          <input
            type="text"
            className="form-control"
            id="rollNo"
            placeholder="Enter Roll No."
            value={rollNo}
            onChange={(e) => setRollNo(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="btn btn-info mt-3 d-grid gap-2 col-12 mx-auto"
          onClick={handleSubmit}
          disabled={loading}
        >
          {loading ? "Loading..." : "Update Submission Header"}
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

export default UpdateSubmissionHeader;
