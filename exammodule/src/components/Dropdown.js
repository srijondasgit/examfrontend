import React from "react";

const Dropdown = () => {
  return (
   
    <div>
      <select
        className="form-select form-select-lg mb-3"
        aria-label=".form-select-lg example"
        id="dropdown"
      >
        <option select="default">Select Role</option>
        <option value="1">Teacher</option>
        <option value="2">Student</option>
      </select>
    </div>
  );
};

export default Dropdown;
