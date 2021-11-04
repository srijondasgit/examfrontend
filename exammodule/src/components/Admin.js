import React, { useEffect, useState } from "react";
import axios from "axios";
import {Link} from "react-router-dom";

const Admin = () => {
  const [profileName, setProfileName] = useState("");
  const [profileRole, setProfileRole] = useState([]);
  const [ownersTests, setOwnersTest] = useState([]);

  const config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  };

  useEffect(async () => {
    const response = await axios.get("/profile/getProfileRole", config);
    const profileRole = response.data;
    setProfileRole(profileRole);
  }, []);

  useEffect(async () => {
    const res = await axios.get("/profile/getProfileName", config);
    const profileName = res.data;
    setProfileName(profileName);
  }, []);

  useEffect(async () => {
    const re = await axios.get("/teacher/getOwnersTestsList", config);
    const ownersTests = re.data;
    setOwnersTest(ownersTests);
  }, []);

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
      {profileRole.map((u) => {
        if(u.authority=="TEACHER"){
        return (
          <div key={u.authority}>
            <h1>My role is - {u.authority}</h1>
          </div>
        );
        } else if (u.authority=="STUDENT"){
          return (
            <div key={u.authority}>
              <h1>This is a different return block for role - {u.authority}</h1>
            </div>
          );
        } else {
          return (
            <div key={u.authority}>
              <h1>Something went wrong here - {u.authority}</h1>
            </div>
          );
        }

      })}
      <div>
        <ol>
          <div>
            <h1>My Test List:-</h1>
          </div>
          {ownersTests.map((q) => {
            return (
              // <div key={q}>
              //   <li>{q}</li>
              // </div>
              <Link to={`/user/testId/${q}/getTest`}>
                      <li>{q}</li>
              </Link>
            );
          })}
        </ol>
      </div>
    </div>
  );
};

export default Admin;
