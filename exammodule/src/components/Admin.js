import React, { useEffect, useState } from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import {Table} from "react-bootstrap";

const Admin = () => {
  const [profileName, setProfileName] = useState("");
  const [profileRole, setProfileRole] = useState([]);
  const [ownersTestsId, setOwnersTestId] = useState([]);
  const [ownersTestsName, setOwnersTestName] = useState([]);
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
    let resultId = ownersTests.map(a => a.id);
    setOwnersTestId(resultId);
    let resultTestName = ownersTests.map(a => a.testName);
    setOwnersTestName(resultTestName);
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
      {/* <h1>My name is - {profileName}</h1> */}
      {profileRole.map((u) => {
        if(u.authority=="TEACHER"){
        return (
          <div key={u.authority}>
            <h1>Teacher update from the list of tests : </h1>
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
            {/* <h1> </h1> */}
          </div>
          {ownersTests.map((q, idx) => {
            return (

              <div key={idx}>
              <div>
                <Table striped bordered hover >
                  <thead>
                    <tr>
                      <th width={'20%'}>Id</th>
                      <th width={'20%'}>Test Name</th>
                      <th width={'20%'}>School Name</th>
                      <th width={'20%'}>Class Name</th>
                   </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><Link to={`/user/testId/${q.id}/getTest`}>{q.id}</Link></td>
                      <th>{q.testName}</th>
                      <td>{q.schoolName}</td>
                      <td>{q.className}</td>
                        {/* <td><Link>
                              <ModalUpdateSubmissionHeader id={id} qid={q.id} config={config} />
                            </Link>
                      </td> */}
                      
                      {/* <td> */}
                        {/* <Link
                          onClick={() => {
                            axios.get(
                              `/teacher/testId/${id}/getSubmissions`,
                              config
                            );
                          }}
                          to={`/teacher/testId/${id}/getSubmissions`}
                        >
                         getSubmissions
                        </Link> */}
                      {/* </td> */}
                     
                    </tr>
                  </tbody>
                </Table>
              </div>
            </div>

              // <div key={q}>
              //   <li>{q}</li>
              // </div>


              // <Link to={`/user/testId/${q.id}/getTest`}>
              //         <li>{q.id}</li>
              //         <li>{q.testName}</li>
              //         <li>{q.schoolName}</li>
              //         <li>{q.className}</li>
              // </Link>
            );
          })}
        </ol>
      </div>
    </div>
  );
};

export default Admin;
