import React from 'react';
import Form from './components/Form';
import Login from './components/Login';
import Reset from './components/Reset';

import Header from "./components/Header";
import AddTestHeader from './components/AddTestHeader';
import AddQuestion from './components/AddQuestion';
import GetTestIds from './components/GetTestIds';
import TestDetail from './components/TestDetail';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import QuestionRemoved from './components/QuestionRemoved';
import Admin from "./components/Admin";
import SubmissionsTeacher from './components/SubmissionsTeacher';
import AnswerInfo from './components/AnswerInfo';
import UpdateSubmissionHeader from './components/UpdateSubmissionHeader';
import UpsertAnswers from './components/UpsertAnswers';


function App() {
  
  return (
    <div>
    <Router>
     <Header />
      <Switch>
      <Route exact path="/" component={Form}/>
      <Route path="/user/authenticate" component={Login}/>
      <Route path="/user/resetPassword" component={Reset}/>
      <Route path="/teacher/addTestHeader" component={AddTestHeader}/>
      <Route path="/teacher/testId/:id/addQuestion" component={AddQuestion}/>
      <Route path="/user/allTests" component={GetTestIds} />
      <Route path="/user/testId/:id/getTest" component={TestDetail} />
      <Route path="/teacher/testId/:id/questionId/:qid" component={QuestionRemoved} />
      <Route path="/profile/getProfileName" component={Admin} />
      <Route path="/teacher/testId/:id/getSubmissions" component={SubmissionsTeacher} />
      <Route path="/teacher/testId/:id/submissionId/:uid/getSubmissionDetails" component={AnswerInfo} />

      <Route path="/student/testId/:id/insertUpdateSubmissionHeader" component={UpdateSubmissionHeader} />
      <Route path="/student/testId/:id/UpsertAnswers" component={UpsertAnswers} />



      </Switch>
    </Router>
    
  </div>
  );
}

export default App;


