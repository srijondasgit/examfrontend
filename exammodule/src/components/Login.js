import React, { useState, useEffect } from "react";
import axios from "axios";
import {useHistory} from "react-router-dom";
import { Spinner, Button } from "react-bootstrap";
import Form from "./Form";

 const Login = () => {
   const [profileRole, setProfileRole] = useState([]);
  const { push } = useHistory();

  const config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  };

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const [data, setData] = useState(null);

  const handleSubmit = async() => {
    setLoading(true);
    setIsError(false);

    const data = {
      userName: userName,
      password: password,
    };

    await axios
      .post("/user/authenticate", data)
      .then(async(res) => {
        await localStorage.setItem('token', res.data);
        console.log("value in local storage : "+localStorage.getItem("token"))
        console.log("another time value in local storage : "+localStorage.getItem("token"))
        // setData(res.data);
        // setUserName("");
        // setPassword("");
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        setIsError(true);
      });

      const configNew = {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      };

    await axios
          .get("/profile/getProfileRole", configNew)
          .then(async(response) => {
          const profileRole = await response.data;
          //await setProfileRole(response.data);
        console.log(response.data)

    await profileRole.map((u)=>{
        console.log(u.authority)
        if(u.authority == 'TEACHER') {
            push('/teacher/addTestHeader')
        } else if (u.authority == 'STUDENT') {
            push('/student/allTests')
        } else {
            
        }
      })

      }).catch((err) => {
        setLoading(false);
        setIsError(true);
      });


  };

   const timer = ()=>{
    setTimeout(() => {
      {handleSubmit()}
    }, 2000);
   }

  return (
    <div className="container">
      <h5 className="d-inline-block mb-3"> </h5>
      <div style={{ padding: 10, margin: 20, background: "rgb(245 245 245)", width: '100%', borderRadius: 10, border: 1, borderColor: '#ccc'}}>
        <div className="form-group">
          <label htmlFor="userName" className="mt-2">
            Username
          </label>
          <input
            type="email"
            className="form-control"
            id="userName"
            placeholder="Enter userName"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            
          />
        </div>

        <div className="form-group">
          <label htmlFor="password" className="mt-2">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <br />

        {isError && (
          <small className="mt-3 d-inline-block text-danger">
            Check username/password, and try again later.
          </small>
        )}
        <button
          type="submit"
          className="btn btn-primary mt-3"
          onClick={timer}
          disabled={loading}
        
        >
          {loading ?"loading..." : "Log In"}
        </button>
        <a href="/register" className="btn btn-primary mt-3 ms-3">Register</a>


        <br />
        
        {/* <Link to="/Reset" className="btn btn-secondary mt-3">
          Forgot Password?
        </Link> */}

       <a href="/user/resetPassword" className="btn btn-secondary mt-3">Forgot Password?</a>


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

export default Login;
