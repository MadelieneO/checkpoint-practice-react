'use strict';

import React, { Component } from 'react';

// exporting the constructor function (dumb component).
// what is the parameter coming in here?
export default class AnimalSelect extends Component {
  constructor(props) {
    super(props);

    this.state = {
      animals: [],
      animalSelected: ''
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    //this.setState({ animalSelected: event.target.value });
    this.props.submitAnimal(event.target.value);
  }

  render() {
    return (
      <form>
        <label for="animalSelect">Select an Animal: </label>
        <select name="animalSelect" onChange={this.handleChange}>
          {this.props.animals.map(animal => <option key={animal}>{animal}</option>)}

        </select>
      </form>
    )
  }
}
