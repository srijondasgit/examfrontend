import React, { useState } from "react";
import axios from "axios";
// import { Link } from "react-router-dom";

function Form() {
  const [name, setName] = useState("");
  const [email, setemail] = useState("");

  const [role, setRole] = useState("");

  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState(null);

  const handleSubmit = () => {
    setLoading(true);
    setIsError(false);

    const data = {
      name: name,
      email: email,
      role: role,
    };

   
    axios
      .post("/mail/register", data)
      .then((res) => {
        setData(res.data);
        setName("");
        setemail("");

        setRole(selected);

        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        setIsError(true);
      });
  };

  const selected = document.querySelector("#dropdown");

  return (
    <div className="container p-3">
      <h5 className="d-inline-block mb-3"> </h5>
      <div style={{ maxWidth: 350 }}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email" className="mt-2">
            Email
          </label>
          <input
            type="text"
            className="form-control"
            id="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setemail(e.target.value)}
          />
        </div>
        <br />

        <div>
          <select
            className="form-select form-select-lg mb-3"
            aria-label=".form-select-lg example"
            id="dropdown"
            type="dropdown"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option select="default">Select Role</option>
            <option value="TEACHER">Teacher</option>
            <option value="STUDENT">Student</option>
          </select>
        </div>

        {isError && (
          <small className="mt-3 d-inline-block text-danger">
            Something went wrong. Please try again later.
          </small>
        )}
        <button
          type="submit"
          className="btn btn-primary mt-3"
          onClick={handleSubmit}
          disabled={loading}
        >
          {loading ? "Loading..." : "Submit"}
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

export default Form;
