import React from "react";
import "./Input.scss";

class Input extends React.Component {
  render() {
    const { placeholder } = this.props;

    return <input className="input" type="text" placeholder={placeholder} />;
  }
}
export default Input;
