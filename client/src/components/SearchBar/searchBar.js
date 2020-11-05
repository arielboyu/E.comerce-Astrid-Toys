import React from 'react';


    class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
        handleChange(e) {
        this.setState({value: e.target.value});
    }

        handleSubmit(e) {
        //e.preventDefault();
        this.setState({value: e.target.value})
    }
      render() {
        return (
          <form onSubmit={this.handleSubmit}>
            <label>
              FunkoPop             
            </label>
              <input type="text" value={this.state.value} onChange={this.handleChange} placeholder="Buscar..." />
           </form>
        )
      }
    }

    export default SearchBar;