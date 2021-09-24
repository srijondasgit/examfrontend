import React from "react";
import axios from "axios";
import { useState } from "react";
import Table from "react-bootstrap/Table";

const ShowTestList = () => {
  const [tests, setTest] = useState([]);

  axios
    .get("/user/allTests")
    .then((res) => {
      const tests = res.data;
      setTest(tests);
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });

  return (
    <div>
      <ul>
        {tests.map((test) => {
          return (
            <Table striped bordered hover key={test.id}>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Class Name</th>
                  <th>School Name</th>
                  <th>Test Name</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{test.id}</td>

                  <td>
                    <a href="/teacher/addQuestion">{test.className}</a>
                  </td>
                  <td>{test.schoolName}</td>
                  <td>{test.testName}</td>
                </tr>
              </tbody>
            </Table>
          );
        })}
      </ul>
    </div>
  );
};

export default ShowTestList;
