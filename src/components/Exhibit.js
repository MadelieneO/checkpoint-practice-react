'use strict';

import React, {Component} from 'react';
import AnimalSelect from './AnimalSelect';
import Cage from './Cage';


export default class Exhibit extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedAnimal: props.selectedAnimal
    }
    this.setAnimal = this.setAnimal.bind(this);
  }

  // componentDidMount() {
  //   console.log('IN componentDidMount...')
  //   this.unsubsribe = store.subscribe(() => this.setState(store.getState()))
  // }

  setAnimal(newAnimal) {
    this.setState({selectedAnimal: newAnimal});
  }

  render () {
  	return (
	    <div className="exhibit">
        <AnimalSelect animals={this.props.animals} submitAnimal={this.setAnimal} />
        <Cage selectedAnimal={this.state.selectedAnimal} />
	    </div>
  		)
  }
};
