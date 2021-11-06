import React, {useState, useEffect} from "react";
import axios from "axios";
import {Link} from 'react-router-dom';
import {Table} from "react-bootstrap";

 function GetStudentTestIds() {
    const [ids, setIds] = useState([]);
    const getUsersData = () => {
        axios.get('/user/allTests')
        .then((res) => {
            const ids = res.data;
            setIds(ids);
            console.log(ids);
        }).catch((err) => {
            console.log(err)
        })
    }
    useEffect(() => {
        getUsersData();  
       },[])
    return (
        <div>
            <ol>
                {ids.map((id, idx) => (
                     <div key={idx}>
                     <div>
                       <Table striped bordered hover>
                         <thead>
                           <tr>
                             <th>Id</th>
                             <th>Test Name</th>
                             <th>School Name</th>
                             <th>Class Name</th>
                          </tr>
                         </thead>
                         <tbody>
                           <tr>
                             <td><Link to={`/user/testId/${id.id}/getStudentTest`}>{id.id}</Link></td>
                             <th>{id.testName}</th>
                             <td>{id.schoolName}</td>
                             <td>{id.className}</td>
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
       
                //      <div key={id.id}>
                //         <Link to={`/user/testId/${id.id}/getStudentTest`}>
                //         {id.id}
                //         </Link>
                //    </div>
                ))}
            </ol>
        </div>
    )
}
export default GetStudentTestIds;




