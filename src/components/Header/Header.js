import React from "react";
import "./Header.scss";
import Input from "../Input/Input";
import Nav from "../Nav/Nav";
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nav: [
        "Home",
        "How it works?",
        "Blog",
        "Job Seeker",
        "Employees",
        "Contact",
      ],
    };
  }
  render() {
    const { nav } = this.state;
    return (
      <div className="header">
        <div className="content">
          <div className="logo"></div>
          <Nav />
          <Input placeholder="Search for.." />
        </div>
      </div>
    );
  }
}
export default Header;
