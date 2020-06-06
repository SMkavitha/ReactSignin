import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from "./components/login.component";
import SignUp from "./components/signup.component";
import Password from "./components/password.component";

function App() {
  return (<Router>
    <div className="App">
    

<nav class="navbar navbar-expand-md navbar-light bg-light fixed-top">
<Link className="navbar-brand" to={"/sign-in"}>LOGO</Link>
    <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
        <span class="navbar-toggler-icon"></span>
    </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
        <div className="navbar-nav ml-auto">
                <Link className="nav-link" to={"/sign-in"}>Login</Link>
                <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
        </div> 
        </div>
    </nav>

      <div className="auth-wrapper">
        <div className="auth-inner">
          <Switch>
            <Route exact path='/' component={Login} />
            <Route path="/sign-in" component={Login} />
            <Route path="/sign-up" component={SignUp} />
            <Route path="/password" component={Password} />
          </Switch>
        </div>
      </div>
    </div></Router>
  );
}

export default App;