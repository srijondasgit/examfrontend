import React,{useState,useEffect} from "react";
import axios from "axios";
import { useParams, useHistory } from "react-router-dom";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import AnswerInfo from "./AnswerInfo";


function SubmissionsTeacher() {
   
    const { id, uid } = useParams();

    const [submissions, setSubmissions] = useState([]);

    const config = {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      };

    useEffect(async()=>{
        const response = await axios.get(`/teacher/testId/${id}/getSubmissions`, config);
        const submissions = response.data;
        console.log(submissions)
        setSubmissions(submissions);
    },[])
    return (
        <div>
            <ol>
                {submissions.map((u)=>{
                     return (
                        <div key={id}>
                          <div>
                            <Table striped bordered hover>
                              <thead>
                                <tr>
                                  <th>Id</th>
                                  <th>Student Name</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td><Link to={`/teacher/testId/${id}/submissionId/${u.id}/getSubmissionDetails`}>{u.id}</Link></td>
                                  <td>{u.studentName}</td>
                                </tr>
                              </tbody>
                            </Table>
                          </div>
                        </div>
                      );
                })}
            </ol>
        </div>
    )
}

export default SubmissionsTeacher;
