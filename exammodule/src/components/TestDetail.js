import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";

const TestDetail = () => {
  const { id } = useParams();
  const { push } = useHistory();
  const [test, setTest] = useState({});
  useEffect(() => {
    const fetch = async () => {
      try {
        const { data } = await axios.get(`/user/testId/${id}/getTest`);
        setTest(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetch();
  }, []);
  return (
    <article>
      <h1>ID - {test.id}</h1>
      <p>Test Name - {test.testName}</p>
      <p>School Name - {test.schoolName}</p>
      <p>Class Name - {test.className}</p>
      <br />
      <button onClick={() => push("/user/allTests")}>Go back</button>
    </article>
  );
};

export default TestDetail;
