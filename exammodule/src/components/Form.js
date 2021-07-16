import React, { useEffect, useState } from 'react';
import axios from "axios";
import Dropdown from './Dropdown';


 
function Form() {

  
  const [name, setName] = useState('');
  const [email, setemail] = useState('');

  const [role, setRole] = useState(true);

  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState(null);
 
  const handleSubmit = () => {
    setLoading(true);
    setIsError(false);
    const data = { 
      name: name,
      email: email,
      role: role

    }
    
    const headers = {
            "key": "Authorization",
						"value": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1c2VyMiIsImV4cCI6MTYxMDgxNTMzNCwiaWF0IjoxNjEwNzc5MzM0fQ.V9cNclexa3JXvEHJge4-W6xymBMbeum798OIsw11Jcc",
						"type": "text",
						"disabled": true
    }

   


    axios.post('https://reqres.in/api/users', data, {headers}).then(res => {
      setData(res.data);
      setName('');
      setemail('');

      setRole(true);

      setLoading(false);
    }).catch(err => {
      setLoading(false);
      setIsError(true);
    });
  }
 
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
            onChange={e => setName(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="email" className="mt-2">email</label>
          <input
            type="text"
            className="form-control"
            id="email"
            placeholder="Enter email"
            value={email}
            onChange={e => setemail(e.target.value)} />
        </div>
        <br />
        <Dropdown />
        {isError && <small className="mt-3 d-inline-block text-danger">Something went wrong. Please try again later.</small>}
        <button
          type="submit"
          className="btn btn-primary mt-3"
          onClick={handleSubmit}
          disabled={loading}
        >{loading ? 'Loading...' : 'Submit'}</button>
        {data && <div className="mt-3">
          <strong>Output:</strong><br />
          <pre>{JSON.stringify(data, null, 2, )}</pre>
        </div>
        }
      </div>
    </div>
  );
}
 
export default Form;
