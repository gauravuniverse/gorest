import React, { Component } from 'react';
import axios from "axios";
import { API } from "../../../../common/constant";
import { NotificationContainer, NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';

export default class AddUsers extends Component {

  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  /*
  This function will handle form post data
  */
  handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);

    axios
      .post(API, data)
			.then(response => NotificationManager.success('User added successfully', 'Success'))
			.catch(response => NotificationManager.success('Failed to add user', 'Failed'));
  }

  render() {
          return (
            <div>
              <form onSubmit={this.handleSubmit}>
                <label htmlFor="first_name">Enter First Name: </label>
                <input id="first_name" name="first_name" type="text" />
                <br/>
                <label htmlFor="lastname">Enter Last Name: </label>
                <input id="lastname" name="lastname" type="text" />
                <br/>
                <label htmlFor="email">Enter Email: </label>
                <input id="email" name="email" type="email" />
                <br/>
                <label htmlFor="gender">Enter Gender: </label>
                <input id="gender" name="gender" type="text" />
                <br/>
                <button>Add User!</button>
              </form>
              <NotificationContainer/>
            </div>
          );
    }
}
