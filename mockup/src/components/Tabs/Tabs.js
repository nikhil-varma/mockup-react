import React from "react";
import "./Tabs.scss";
import Nav from "../Nav/Nav";

class Tabs extends React.Component {
  render() {
    return (
      <Nav items={["For Job Seekers", "For Companies", "For Candidates"]} />
    );
  }
}
export default Tabs;
