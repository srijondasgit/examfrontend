import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link to="/" className="item">
        Sign Up
      </Link>
      <Link to="/user/authenticate" className="item">
        Log In
      </Link>
      <Link to="/teacher/addTestHeader" className="item">
        Test Header
      </Link>
      {/* <Link to={`/teacher/testId/${id}/addQuestion`} className="item">
        Add Question
      </Link> */}
      <Link to="/user/allTests" className="item">
        Show all test ids
      </Link>
     
    </div>
  );
};

export default Header;
