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
    </div>
  );
};

export default Header;
