import React, { Component } from 'react';
import axios from "axios";
import * as R from 'ramda';
import { API } from "../../../../common/constant";

const mapIndexed = R.addIndex(R.map);

export default class ListUsers extends Component {

  constructor() {
    super();
    this.state = {
      data: [],
      dataKeys: ["name","email","gender"],
      headerMain: ["Full Name", "Email", "Gender"]
    }
  }

  componentDidMount() {
    axios
      .get(API)
			.then(response => this.setData(response.data))
			.catch(response => console.log("API failed"));
  }

  /*
  This function will set user list data
  */
  setData(response) {
    console.log(response);
    this.setState({
      data: response.result
    });
  }

  /*
  This function will return table headers
  */
  renderHeadings() {
		const headersListing = mapIndexed((header, index) => {
			return (
				<th key={"head" + index}>
					{header}
				</th>
			);
		}, this.state.headerMain);
		return headersListing;
	}

  /*
  This function will return table row
  */
  renderData() {
		const dataListing = mapIndexed((row, index) => {
			return (
				<tr key={"row" + index}>
					{this.renderValues(row)}
				</tr>)
		}, this.state.data);
		return dataListing;
	}

  /*
  This function will return table row data
  */
  renderValues(row) {
		const rowValues = mapIndexed((header, index) => {
			const value = row[header];
			return <td key={"cell" + index}> {value} </td>;
		}, this.state.dataKeys);
		return rowValues;
	}

  render() {
          return (
              <div>
                  <table>
                    <thead>
                      <tr>
                        {
                          this.renderHeadings()
                        }
                      </tr>
                    </thead>
                    <tbody>
                    {
                      this.renderData()
                    }
                    </tbody>
                  </table>
              </div>
          );
    }
}
