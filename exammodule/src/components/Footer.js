import React from 'react';
import './Header.css';
import { AiFillLinkedin, AiFillFacebook , AiFillTwitterSquare} from "react-icons/ai";


class Footer extends React.Component  {

//   constructor(props) {
//       super(props);
//       this.state = { 
//         img: require('./../assets/img/logo-black.png')
//       }
//   }


  render (){
    return (
          <>
            <div className="mainfootr" style={{ width: '100%'}}>

                <div className="container">
                  <div class="row ">
                    <div className="col-md-4 text-center">
                      {/* <div className="row b-title text-center">
                        <img src={this.state.img} style={{ height: 60, width: 50}}/>
                      </div> */}
                      <div className="row">
                        <div className="col-md-12 text-left addre-office" >
                            <h6> Office 1: </h6>
                            <p class="mb-txt"> VRQUIN LLP, #218,3rd Floor,27th Main, 21st Cross Rd, Opposite Andhra Bank, Sector 2, HSR Layout, Bengaluru, Karnataka 560102, India.</p>
                        </div>
                      </div>
                     

                      <div className="row">
                        <div className="col-12 col-md-12 text-left" >
                            <p class="mb-txt"> Ph: (to be updated soon)</p>
                            <p class="mb-txt">Email: <a style={{ color: "blue"}} class="mb-txt">  info@gitanjali.org </a></p>
                        </div>
                      </div>


                    </div>

                    <div className="col-md-4">
                       <div className="row sb-title">
                          <div class="col-12 col-md-12">
                            <h4 className="up-case" > IMPORTANT LINKS </h4>
                          </div>
                      </div>

                      <div className="row imp-link ">
                        <div className="col-md-12"> 
                          <a href="/about" style={{ color: '#fff'}}> ABOUT US </a>
                        </div>
                      </div>
                      <div className="row imp-link ">
                        <div className="col-md-12">
                          <a href="terms" style={{ color: '#fff'}}> TERMS & CONDITION </a>
                        </div>
                      </div>
                      <div className="row imp-link ">
                        <div className="col-md-12">
                         <a  href="terms" style={{ color: '#fff'}}>  Cancellation and Return Policy </a>
                        </div>
                      </div>
                      <div className="row imp-link ">
                        <div className="col-md-12">
                          <a  href="terms" style={{ color: '#fff'}}>   Disclaimer – Fraud Alert </a>
                        </div>
                      </div>

                     
                    </div>

                    <div className="col-md-4 mg-top">
                      <div className="b-title">
                          <h4 className="up-case" > SUBSCRIBE </h4>
                      </div>
                      <div className="">
                        <span> 
                          <AiFillLinkedin  style={{ fontSize: 30, margin: 10, marginLeft: 0}}/> 
                        </span>
                        <span> 
                          <AiFillFacebook style={{ fontSize: 30, margin: 10}}/>
                        </span>
                        <span> 
                          <AiFillTwitterSquare style={{ fontSize: 30, margin: 10}}/>
                        </span>
                        
                      </div>
                    </div>

  
                  </div>
                </div>

            </div>
            <div className="footr" style={{ width: '100%'}}>
                <div className="">
                  <div className="col-md-12">
                    <p></p>
                  </div>
                </div>
            </div>
          </>
       );
  }

}

export default Footer;