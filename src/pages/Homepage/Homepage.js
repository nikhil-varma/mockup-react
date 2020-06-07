import React from "react";
import Header from "../../components/Header/Header";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import Tabs from "../../components/Tabs/Tabs";
import Table from "../../components/Table/Table";

import "./Homepage.scss";
class Homepage extends React.Component {
  render() {
    return (
      <div className="homepage">
        <Header />
        <div className="page-content">
          <div className="meta">
            <h1>Search for a job</h1>
            <h4>See search results</h4>
            <div className="search-inputs">
              <Input placeholder="Keywords (e.g. Oracle)" />
              <Input placeholder="Location" />
              <Input placeholder="Budget" />
              <Button />
            </div>
          </div>
          <div className="results-counter">23423423 results found</div>
          <div className="tabs">
            <Tabs />
          </div>

          <Table />
        </div>
      </div>
    );
  }
}

export default Homepage;
