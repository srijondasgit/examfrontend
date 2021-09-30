import React from 'react';
import Form from './components/Form';
import Login from './components/Login';
import Reset from './components/Reset';

import Route from "./components/Route";
import Header from "./components/Header";
import AddTestHeader from './components/AddTestHeader';
import AddQuestion from './components/AddQuestion';
import ShowTestList from './components/ShowTestList';
import GetTestIds from './components/GetTestIds';



function App() {
  return (
    <div>
    <Header />
    {/* <Route path="/">
      <Form />
    </Route> */}
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
      <GetTestIds />
    </Route>
  </div>
  );
}

export default App;


