import React from 'react';
import Form from './components/Form';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CreateAccount from '././components/CreateAccount';
import ResetPassword from './components/ResetPassword';
import QuestionAns from './components/quiz/QuestionAns';


const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Form} />
                <Route path='/create-account' exact component={CreateAccount} />
                <Route path='/reset-password' exact component={ResetPassword} />
                <Route path='/quizz' exact component={QuestionAns} />
            </Switch>
        </BrowserRouter>
    )
}
export default App;
