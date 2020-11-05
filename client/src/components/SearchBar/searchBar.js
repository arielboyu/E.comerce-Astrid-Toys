import React from 'react';


    class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        
        this.handleSubmit = this.handleSubmit.bind(this);
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
              <input type="text" value={this.state.value} placeholder="Buscar..." />
              <button type= "submit"> Submit </button>
           </form>
        )
      }
    }

    export default SearchBar;