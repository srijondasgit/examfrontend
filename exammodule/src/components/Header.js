import React from 'react';
import Link from './Link';

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link href="/" className="item">
        Sign Up
      </Link>
      <Link href="/user/authenticate" className="item">
        Log In
      </Link>
      <Link href="/teacher/addTestHeader" className="item">
        Test Header
      </Link>
      <Link href="/teacher/addQuestion" className="item">
        Add Question
      </Link>
      <Link href="/user/allTests" className="item">
        Show all test ids
      </Link>
    </div>
  );
};

export default Header;
