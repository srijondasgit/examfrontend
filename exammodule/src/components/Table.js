import React from 'react';


function Table(props) {
    return (
        <div>
            <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">id</th>
      <th scope="col">Test Name</th>
      <th scope="col">Class Name</th>
      <th scope="col">School Name</th>
      <th scope="col">Owner</th>
      
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>{props.id}</td>
      <td>{props.testName}</td>
      <td>{props.className}</td>
      <td>{props.schoolName}</td>
      <td>{props.owner}</td>
      
    </tr>
  
  </tbody>
</table>
        </div>
    );
}

export default Table;
