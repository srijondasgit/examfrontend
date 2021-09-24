import React from 'react';
import Form from './components/Form';
import Login from './components/Login';
import Reset from './components/Reset';

import Route from "./components/Route";
import Header from "./components/Header";
import AddTestHeader from './components/AddTestHeader';
import AddQuestion from './components/AddQuestion';
import ShowTestList from './components/ShowTestList';

// import { BrowserRouter, Route, Switch } from 'react-router-dom';

// const App = () => {
//   return (

  //   <div className="wrapper">
    
  //   <BrowserRouter>
  //   <Navbar />
  //     <Switch>
        
  //       <Route path="/user/authenticate">
  //         <Login />
  //       </Route>

  //       <Route path="/user/register">
  //         <Form />
  //       </Route>

  //       <Route path="/password/reset">
  //         <Reset />
  //       </Route>
  //     </Switch>
  //   </BrowserRouter>
  // </div>


    // <div>
    //   <BrowserRouter>
    //     <div>
          
    //       <Route path="/" exact component={Form} />
    //       <Route path="/Login" component={Login} />
    //       <Route path="/Reset" component={Reset} />
    //     </div>
    //   </BrowserRouter>
    // </div>
//   );
// };

// export default App;

const id = localStorage.getItem('id')

function App() {
  return (
    // <div className="App">
    //   <Form />
    //   <br />
    //   <hr />
    //   <Login />
    //   <br />
    //   <hr />
    //   <Reset />
    //   <br />
    //   <hr />
    // </div>
    <div>
    <Header />
    <Route path="/">
      <Form />
    </Route>
    <Route path="/user/authenticate">
      <Login />
    </Route>
    <Route path="/user/resetPassword">
      <Reset />
    </Route>
    <Route path="/teacher/addTestHeader">
      <AddTestHeader />
    </Route>
    <Route path="/teacher/addQuestion">
      <AddQuestion />
    </Route>
    <Route path="/user/allTests">
      <ShowTestList />
    </Route>
  </div>
  );
}

export default App;
