import React from "react";
// import { NavLink } from "react-router-dom";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  handleSubmit(e) {
    //e.preventDefault();
    this.setState({ value: e.target.value });
  }
  render() {
    return (
      <div className="row">
        <div className="col-2 d-flex justify-content-around">
          <span>Home</span>
          <span>Ingresar</span>
        </div>
        <div className="col-10 d-flex justify-content-end pr-4">
          <form onSubmit={this.handleSubmit}>
            <label className="pr-2">Funko: </label>
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
              placeholder="Buscar..."
            />
          </form>
        </div>
      </div>
    );
  }
}

export default SearchBar;
