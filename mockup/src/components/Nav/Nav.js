import React from "react";
import "./Nav.scss";

class Nav extends React.Component {
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
    let { items } = this.props;
    items = items || nav;
    return (
      <div className="nav">
        {items.map((i, k) => (
          <div className="nav-item" key={i}>
            <a href="" className={!k ? "active" : ""}>
              {i}
            </a>
          </div>
        ))}
      </div>
    );
  }
}
export default Nav;
