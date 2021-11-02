// import React from 'react';
// import {Link} from 'react-router-dom';

// const Header = () => {
//   return (
//     <div className="ui secondary pointing menu">
//       <Link to="/" className="item">
//         Sign Up
//       </Link>
//       <Link to="/user/authenticate" className="item">
//         Log In
//       </Link>
//       <Link to="/teacher/addTestHeader" className="item">
//         Test Header
//       </Link>
//       {/* <Link to={`/teacher/testId/${id}/addQuestion`} className="item">
//         Add Question
//       </Link> */}
//       <Link to="/user/allTests" className="item">
//         Show all test ids
//       </Link>
//       <Link to="/profile/getProfileName" className="item">
//         My detail
//       </Link>
//       <Link to="/student/allTests" className="item">
//         Student all tests
//       </Link>
//     </div>
//   );
// };

// export default Header;


import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css'
import { AiFillLinkedin, AiFillFacebook , AiFillTwitterSquare} from "react-icons/ai";


class Header extends React.Component  {

  // constructor(props) {
  //     super(props);
  //     this.state = {
  //       img: require('./../assets/img/logo-color.png')
  //     }
      
  // }

  render (){
    return (
      <>
        <div className="topbar">
            <div className="container">
            <div className="row">
                <div className="col-12 col-md-9"  style={{ padding: 5}}>
                  <p className="top-text" style={{ marginBottom: 0}}>
                    <a href="http://vrquin.in" className="top-btn-text" target="_blank" > VRQUIN LLP </a> 
                     presents Gitanjali.org. India's first non-profit e-learning software. 
                  </p>
                </div>
                <div className="col-4 col-md-1 text-center " style={{ padding: 5}}>
                  <a href="/volunteer" className="top-btn"> 
                      Volunteer 
                  </a>
                </div>
                <div className="col-4 col-md-1 text-center" style={{ padding: 5}}>
                 
                </div>
                <div className="col-4 col-md-1 text-center" style={{ padding: 5}}>
                  <AiFillFacebook> </AiFillFacebook> 
                  <AiFillTwitterSquare />   
                  <AiFillLinkedin />
                </div>
            </div>
            </div>
        </div>
        <Navbar expand="lg" className="yello-dark">
            {/* <Navbar.Brand  href="/school" style={{ marginLeft: 50}}> 
              <img src={this.state.img} style={{ height: '48px', width: '48px'}}/> 
            </Navbar.Brand> */}
            <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ float: 'right'}} />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="mr-auto">
                    <Nav.Link href="/"> Register </Nav.Link>
                    <Nav.Link href="/user/authenticate" className="rightBorder"> Log in </Nav.Link>

                    <Nav.Link href="https://www.youtube.com/channel/UCd6FQ7_X5U5bpWjxDizqyxQ" className="rightBorder" target="_blank"> 
                        Online Classes
                    </Nav.Link>
                    <Nav.Link href="/teacher/addTestHeader" className="rightBorder"> Test Header </Nav.Link>
                    <Nav.Link href="/user/allTests" className="rightBorder"> Show all test ids </Nav.Link>
                    <Nav.Link href="/student/allTests" className="rightBorder"> Student all tests </Nav.Link>
                    <Nav.Link href="/profile/getProfileName" className="rightBorder"> My details </Nav.Link>
                    {/* <Nav.Link href="/contact-us" className="rightBorder"> Contact Us </Nav.Link> */}
                    {/* <Nav.Link href="#" style={{ display: 'none'}}   onClick={() => this._onSave('Zoe')} className="borderLeft"> Bunny Story </Nav.Link>
                    <Nav.Link href="#" style={{ display: 'none'}}  onClick={() => this._onSave('more')} > More </Nav.Link> */}
                  </Nav>
                </Navbar.Collapse>
        </Navbar>
      </>
       );
  }

  _onSave = (text) => {
    const { onSelect } = this.props;
    onSelect(text);
  }

}

export default Header;
