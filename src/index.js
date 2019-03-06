import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import AddUsers from "./main/users/components/js/addusers";
import ListUsers from "./main/users/components/js/listusers";

ReactDOM.render(<Router>
      <div>
        <ul>
          <li>
            <Link to="/add_user">Add User</Link>
          </li>
          <li>
            <Link to="/users">List Users</Link>
          </li>
        </ul>
        <hr />

        <Route path="/add_user" component={AddUsers} />
        <Route path="/users" component={ListUsers} />
      </div>
    </Router>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
