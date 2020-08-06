import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import * as serviceWorker from './serviceWorker';
import AdminLayout from './layouts/Admin';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route 
          path="/admin/dashboard" 
          render={(props) => <AdminLayout {...props} />}
          />
          <Redirect from="/" to="admin/dashboard" />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
