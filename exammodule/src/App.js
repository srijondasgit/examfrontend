import React from 'react';
import Form from './components/Form';
import Login from './components/Login';
import Reset from './components/Reset';
import AddTestHeader from './components/AddTestHeader';



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
   
    </div>
  );
}

export default App;
