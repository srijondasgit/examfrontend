import React, { useState, useEffect } from "react";
import axios from "axios";
import {useHistory} from "react-router-dom";
import { Spinner, Button } from "react-bootstrap";
import Form from "./Form";

 const Logout = () => {
   const [profileRole, setProfileRole] = useState([]);
  const { push } = useHistory();

  localStorage.removeItem("token");

  return(
    <div className="container">
              <h5 className="d-inline-block mb-3"> </h5>
      <div style={{ padding: 10, margin: 20, background: "rgb(245 245 245)", width: '100%', borderRadius: 10, border: 1, borderColor: '#ccc'}}>
        <div className="form-group">
          <label htmlFor="Logout Message" className="mt-2">
            User has been logged out
          </label>
          </div>
          </div>
    </div>
 
  );

 }

 export default Logout;