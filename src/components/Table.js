import axios from "axios";
import React from "react";

export default class Table extends React.Component {
  constructor() {
    super();
    this.state = { users: null };
    this.onFilterList = this.onFilterList.bind(this);
  }

  async componentWillMount() {
    const response = await axios.get("https://randomuser.me/api/?results=200&nat=us");
    const result = await response.data.results;
    console.log(result);
    this.setState({ users: result });
  }

  headings = [
    { name: "Image" },
    { name: "name" },
    { name: "cell" },
    { name: "email" },
    { name: "DOB" }
  ];

  onFilterList(columnName) {
    if (this.state.users) {
      const tempList = this.state.users;
      const sortedList = tempList.sort(function (a, b) {
        return a[columnName] - b[columnName];
      });
      console.log(sortedList);
      this.setState({ users: sortedList });
    }

  }

  render() {
    return (
      <table className="ui celled table">
        <thead>
          <tr>
            {this.headings.map(({ name }) => {
              return (
                <th key={name} onClick={this.onFilterList}>
                  {name}
                </th>
              );
            })}
          </tr>
        </thead>

        <tbody>
          {!!this.state.users ? this.state.users.map(({ login, name, picture, phone, email, dob }, index) => {
            return (<tr key={index}>
              <td data-th="Image">
                <img
                  src={picture.medium}
                  alt={"profile image for " + name.first + " " + name.last}
                />
              </td>
              <td data-th="Name" >
                {name.first} {name.last}
              </td>
              <td data-th="Phone">
                {phone}
              </td>
              <td data-th="Email" >
                <a href={"mailto:" + email} target="__blank">
                  {email}
                </a>
              </td>
              <td data-th="DOB" >
                {dob.date}
              </td>
            </tr>);
          }) : <tr></tr>}
        </tbody>
      </table>
    );
  }
}