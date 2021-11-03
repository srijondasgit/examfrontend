import React, { useState, useEffect } from "react";
import axios from "axios";
import {useHistory} from "react-router-dom";

 const Login = () => {
   const [profileRole, setProfileRole] = useState([]);
  const { push } = useHistory();

  const config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  };

  useEffect(async()=>{
    const response = await axios.get("/profile/getProfileRole", config);
    const profileRole = response.data;
    setProfileRole(profileRole);
  },[])


  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const [data, setData] = useState(null);

  const handleSubmit = () => {
    setLoading(true);
    setIsError(false);

    const data = {
      userName: userName,
      password: password,
    };

    axios
      .post("/user/authenticate", data)
      .then((res) => {
        localStorage.setItem('token', res.data);
        // setData(res.data);
        // setUserName("");
        // setPassword("");
        setLoading(false);
        
      })
      .catch((err) => {
        setLoading(false);
        setIsError(true);
      });
  };

  //  const timer = ()=>{
  //   setTimeout(() => {
  //     {handleSubmit()}
  //     push('/teacher/addTestHeader')
  //   }, 2000);
  //  }
  return (
    <div className="container p-3">
      <h5 className="d-inline-block mb-3"> </h5>
      <div style={{ maxWidth: 350 }}>
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
          // onClick={timer}
          disabled={loading}
          onClick={()=> profileRole.map((u)=>{
            if(u.authority == 'TEACHER'){
              return setTimeout(() => {
                  {handleSubmit()}
                  push('/teacher/addTestHeader')
                }, 2000);
               
              // return push('/teacher/addTestHeader')
            }else if(u.authority=='STUDENT'){
              return setTimeout(() => {
                {handleSubmit()}
                push('/user/alltests')
              }, 2000);
              // return push('/user/allTests')
            }else{
              return 'Something went wrong!'
            }
          })}
        
        >
          {loading ? "Loading..." : "Log In"}
        </button>

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
