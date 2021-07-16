import React from 'react';

const Dropdown = () => {
    return ( 

        <div className="dropdown">
  <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    Select Role
  </button>
  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a className="dropdown-item" >Teacher</a></li>
    <li><a className="dropdown-item" >Student</a></li>
    
  </ul>
</div>

     );
}
 
export default Dropdown;
