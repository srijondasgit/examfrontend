import React, { useState } from "react";
import axios from "axios";
import {useHistory} from "react-router-dom";
import Admin from "./Admin"
import { Link } from "react-router-dom";

function AddTestHeader() {
  const [testName, setTestName] = useState("");
  const [schoolName, setSchoolName] = useState("");

  const [className, setClassName] = useState("");

  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState(null);
  const {push} = useHistory();

  const handleSubmit = () => {
    setLoading(true);
    setIsError(false);

    const data = {
      testName: testName,
      schoolName: schoolName,
      className: className,
    };

    // const headers = {
    //   "Content-Type": "application/json",
    //   "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzcmlqb25kYXNAZ21haWwuY29tIiwiZXhwIjoxNjI3MTM5MzQzLCJpYXQiOjE2MjcxMDMzNDN9.2EN5Azf_6T-yOdEFQt--csSOOxbUDlL2l25s1f_rEIU",
    //   type: "text"
    // };
    const config = {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token')
      }
    }

    axios
      .post("/teacher/addTestHeader", data, config)
      .then((res) => {
        localStorage.setItem('id', res.data.id);
        setData(res.data);
        setSchoolName("");
        setTestName("");

        setClassName("");

        setLoading(false);
        console.log(res.data)
      })
      .catch((err) => {
        setLoading(false);
        setIsError(true);
      });
  };

    const timer = ()=>{
    setTimeout(() => {
      {handleSubmit()}
      push('/profile/getProfileName')
    }, 3000);
   }

  return (
    <div className="container p-3">
      <h5 className="d-inline-block mb-3"> </h5>
      <div style={{ maxWidth: 350 }}>
        <div className="form-group">
          <label htmlFor="testName">Test Name</label>
          <input
            type="text"
            className="form-control"
            id="testName"
            placeholder="Enter Test Name"
            value={testName}
            onChange={(e) => setTestName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="schoolName" className="mt-2">
            School Name
          </label>
          <input
            type="text"
            className="form-control"
            id="schoolName"
            placeholder="Enter School Name"
            value={schoolName}
            onChange={(e) => setSchoolName(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="className" className="mt-2">
            Class Name
          </label>
          <input
            type="text"
            className="form-control"
            id="className"
            placeholder="Enter Class Name"
            value={className}
            onChange={(e) => setClassName(e.target.value)}
          />
        </div>

        {isError && (
          <small className="mt-3 d-inline-block text-danger">
            Something went wrong. Please try again later.
          </small>
        )}
        <button
          type="submit"
          className="btn btn-secondary mt-3"
          onClick={timer}
          disabled={loading}
        >
          {loading ? "Loading..." : "Create Test"}
        </button>
        {data && (
          <div className="mt-3">
            <strong>Output:</strong>
            <br />
            <pre>{JSON.stringify(data, null, 2)}</pre>
          </div>
        )}
      </div>

      <div>
          <Link><Admin/></Link>    
      </div>

    </div>
  );
}

export default AddTestHeader;


