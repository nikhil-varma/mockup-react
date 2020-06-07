import React from "react";
import "./Table.scss";
import Button from "../Button/Button";
import Pill from "../Pill/Pill";

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rows: [
        {
          title: "Frontend Developer",
          by: "Nikhil Varma",
          option: "Full time",
          budget: "233 Mars coin",
          location: "Mars",
        },
        {
          title: "Frontend Developer",
          by: "Nikhil Varma",
          option: "Full time",
          budget: "233 Mars coin",
          location: "Mars",
        },
        {
          title: "Frontend Developer",
          by: "Nikhil Varma",
          option: "Full time",
          budget: "233 Mars coin",
          location: "Mars",
        },
        {
          title: "Frontend Developer",
          by: "Nikhil Varma",
          option: "Full time",
          budget: "233 Mars coin",
          location: "Mars",
        },
        {
          title: "Frontend Developer",
          by: "Nikhil Varma",
          option: "Full time",
          budget: "233 Mars coin",
          location: "Mars",
        },
        {
          title: "Frontend Developer",
          by: "Nikhil Varma",
          option: "Full time",
          budget: "233 Mars coin",
          location: "Mars",
        },
        {
          title: "Frontend Developer",
          by: "Nikhil Varma",
          option: "Full time",
          budget: "233 Mars coin",
          location: "Mars",
        },
        {
          title: "Frontend Developer",
          by: "Nikhil Varma",
          option: "Full time",
          budget: "233 Mars coin",
          location: "Mars",
        },
        {
          title: "Frontend Developer",
          by: "Nikhil Varma",
          option: "Full time",
          budget: "233 Mars coin",
          location: "Mars",
        },
        {
          title: "Frontend Developer",
          by: "Nikhil Varma",
          option: "Full time",
          budget: "233 Mars coin",
          location: "Mars",
        },
        {
          title: "Frontend Developer",
          by: "Nikhil Varma",
          option: "Full time",
          budget: "233 Mars coin",
          location: "Mars",
        },
        {
          title: "Frontend Developer",
          by: "Nikhil Varma",
          option: "Full time",
          budget: "233 Mars coin",
          location: "Mars",
        },
        {
          title: "Frontend Developer",
          by: "Nikhil Varma",
          option: "Full time",
          budget: "233 Mars coin",
          location: "Mars",
        },
        {
          title: "Frontend Developer",
          by: "Nikhil Varma",
          option: "Full time",
          budget: "233 Mars coin",
          location: "Mars",
        },
        {
          title: "Frontend Developer",
          by: "Nikhil Varma",
          option: "Full time",
          budget: "233 Mars coin",
          location: "Mars",
        },
      ],
    };
  }
  render() {
    const { rows } = this.state;
    return (
      <table>
        <tr>
          <th>Job Title</th>
          <th>By</th>
          <th>Option</th>
          <th>Location</th>
          <th>Budget</th>
          <th></th>
        </tr>
        {rows.map((i) => (
          <tr>
            <td>{i.title}</td>
            <td>{i.by}</td>
            <td>
              <Pill />
            </td>
            <td>{i.location}</td>
            <td>{i.budget}</td>
            <td>
              <Button />
            </td>
          </tr>
        ))}
      </table>
    );
  }
}
export default Table;
