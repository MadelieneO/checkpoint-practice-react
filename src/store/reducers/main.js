'use strict';

import { SET_MAMMAL, SET_BIRD, SET_FISH } from '../constants';

const initialState = {
	selectedMammal: 'Tiger',
	selectedBird: 'Eagle',
	selectedFish: 'Seahorse',
	mammals: ['Tiger', 'Panda', 'Pig'],
	birds: ['Eagle', 'Flamingo', 'Penguin'],
	fish: ['Seahorse', 'Octopus', 'Stingray']
}

// make sure you understand the parameters here!
	// with any reducer we expect 2 arguments
	// we are able to give a default value to a parameter in the way seen below
export default (state = initialState, action) => {
  let newState;
  switch (action.type) {
		case SET_MAMMAL:
		  newState = Object.assign({}, state, {selectedMammal: action.animal})
		  return newState;
		case SET_BIRD:
		  newState = Object.assign({}, state, {selectedBird: action.animal})
		  return newState;
		case SET_FISH:
		  newState = Object.assign({}, state, {selectedFish: action.animal})
		  return newState
		default:
		  return state;
	}
};
