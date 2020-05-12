import React, { Component } from "react";

const data = ["Coconuts", "Cherries", "Pears"];

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fruits: data,
      newFruit: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    //cool place to do some real time validation
    //trim
    this.setState({ newFruit: event.target.value });
  }

  handleSubmit(event) {
    //if you want to clear the state, and clear our input field we can reset input to an empty string.
    event.preventDefault();
    //A good place to make your ajax request!
    // await axios.post('/api/fruits', this.state.input)
    this.setState({
      fruits: [...this.state.fruits, event.target.fruit.value],
      input: "",
    });
  }

  render() {
    return (
      <div>
        <form id="form" onSubmit={this.handleSubmit}>
          <p>Submit New Fruits Below: </p>
          <input
            type="text"
            name="fruit"
            onChange={this.handleChange}
            value={this.state.input}
          ></input>
          <br />
          <button type="submit">Submit</button>
        </form>
        <ul className="list-container">
          <h3>Current List Of Fruits: </h3>
          {this.state.fruits.map((fruit, index) => (
            <div className="list" key={index}>
              <li>{fruit}</li>
            </div>
          ))}
        </ul>
      </div>
    );
  }
}

export default Form;
