import React, { useEffect, useState } from "react";
import axios from "axios";
import Dropdown from "./Dropdown";
//import Api from "./Api";


const token =
  "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1c2VyMiIsImV4cCI6MTYxMDgxNTMzNCwiaWF0IjoxNjEwNzc5MzM0fQ.V9cNclexa3JXvEHJge4-W6xymBMbeum798OIsw11Jcc";

let axiosConfig = {
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",

    key: "Authorization",
    value: `Bearer ${token}`,
    type: "text",
    disabled: true,
  },
};

const PersonList = () => {
  const [name, setName] = useState("");
  const [email, setemail] = useState("");
  const [role, setRole] = useState(true);

  const handleChange = (event) => {
    setName(event.target.value);
    setemail(event.target.value);
    setRole("Teacher")
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const user = {
      name: name,
      email: email,
      role: role
    };

   

    axios
      .post('/mail/register', user , axiosConfig)

      .then((res) => {
        console.log(res.data);
      });
  };

  useEffect(() => {
    axios.get('/mail/register').then(function(response){
        console.log(response);
    }).catch(function(error){
        console.log(error);
    })
});

  return (
    <form onSubmit={handleSubmit}>
      <label>Name: </label>
      <input type="text" name="name" onChange={handleChange} />

      <label>Email: </label>
      <input type="text" email="email" onChange={handleChange} />

     <Dropdown />

      <button type="submit">Add</button>
    </form>
  );
};

export default PersonList;
