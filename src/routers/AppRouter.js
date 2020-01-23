import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from '../components/Header';
import LoginPage from '../components/LoginPage'
import SignUpPage from '../components/SignUpPage'
import Welcome from '../components/Welcome'
import About from '../components/About'
import NotFoundPage from '../components/NotFoundPage'
import SignOut from '../components/SignOut'

const AppRouter = () => (
    <Router>
        <div>
            <Header />
            <Switch>
                <Route exact path="/" component={LoginPage} />
                <Route path={`/SignUp`} component={SignUpPage} />
                <Route path="/About" component={About} />
                <Route path={`/Welcome`} component={Welcome} />
                <Route path="/SignOut" component={SignOut} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </Router>

);


export default AppRouter;     