import React, { useEffect, useState } from "react";
import axios from "axios";

const Admin = () => {
  const [profileName, setProfileName] = useState("");
  const [profileRole, setProfileRole] = useState([]);

  const config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  };

  useEffect(async()=>{
      const response = await axios.get('/profile/getProfileRole', config)
      const profileRole = response.data;
      setProfileRole(profileRole);
  },[])

  useEffect(async()=>{
    const res = await axios.get('/profile/getProfileName', config)
    const profileName = res.data;
    setProfileName(profileName);
},[])

  // axios
  //   .get("/profile/getProfileName", config)
  //   .then((res) => {
  //     const profileName = res.data;
  //     setProfileName(profileName);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });

  //   axios
  //   .get("/profile/getProfileRole", config)
  //   .then((res) => {
  //     const profileRole = res.data;
  //     setProfileRole(profileRole);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });

  return (
    <div>
      <h1>My name is - {profileName}</h1>
      {profileRole.map((u)=>{
        return(
          <div><h1>My role is - {u.authority}</h1></div>
        )
      })}
    </div>
  );
}

export default Admin;
