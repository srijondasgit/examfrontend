import React from 'react';
import Form from './components/Form';
import Login from './components/Login';
import Reset from './components/Reset';
import AddTestHeader from './components/AddTestHeader';
import AddQuestion from './components/AddQuestion';
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

function App() {
  return (
    <div className="App">
      <Form />
      <br />
      <hr />
      <Login />
      <br />
      <hr />
      <Reset />
      <br />
      <hr />
      <AddTestHeader />
      <br />
      <hr />
      <AddQuestion />
    </div>
  );
}

export default App;
