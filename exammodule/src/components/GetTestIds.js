import React, {useState, useEffect} from "react";
import axios from "axios";
import {Link} from 'react-router-dom';

 function GetTestIds() {
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
         <h1>Students can submit their answer by selecting a particular test id.</h1>
            <ol>
                {ids.map((id) => (
                     <div key={id.id}>
                        <Link to={`/user/testId/${id.id}/getStudentTest`}>
                        {id.id}
                        </Link>
                   </div>
                ))}
            </ol>
        </div>
    )
}
export default GetTestIds;



// /user/testId/_id/getTest

