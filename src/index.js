import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './assets/css/main.scss'
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import * as serviceWorker from './serviceWorker';
import AdminLayout from './layouts/Admin';
import LoginLayout from './layouts/Login';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route 
          path="/login" 
          render={(props) => <LoginLayout {...props} />}
          />
        <Route 
          path="/admin" 
          render={(props) => <AdminLayout {...props} />}
          />
          <Redirect from="/" to="/login" />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
