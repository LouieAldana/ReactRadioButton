import React, { Component } from 'react';

class App extends Component {
  state = {
    value: "odin",
    value2: "zeus"
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    const { value, value2 } = this.state;
    return (
      <form>
        <h1>Current Value is : {value}</h1>
        <h1>Current Value2 is : {value2}</h1>
        <label>
          odin
          <input type="radio"
            value="odin"
            name="value"
            checked={value === "odin"}
            onChange={this.onChange} />
        </label>
        <label>
          Thor
          <input type="radio"
            value="thor"
            name="value"
            checked={value === "thor"}
            onChange={this.onChange} />
        </label>
        <br />
        <br />
        <label>
          Zues
          <input type="radio"
            value="zues"
            name="value2"
            checked={value2 === "zues"}
            onChange={this.onChange} />
        </label>
        <label>
          Hercules
          <input type="radio"
            value="hercules"
            name="value2"
            checked={value2 === "hercules"}
            onChange={this.onChange} />
        </label>
      </form>
    )
  }
}

export default App;