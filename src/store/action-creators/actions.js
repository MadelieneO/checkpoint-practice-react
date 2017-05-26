'use strict';

import { SET_MAMMAL, SET_BIRD, SET_FISH } from '../constants';
// const SET_MAMMAL = 'SET_MAMMAL';
// const SET_BIRD = 'SET_BIRD';
// const SET_FISH = 'SET_FISH';

const setMammal = mammal => ({
  type: SET_MAMMAL,
  animal: mammal
})

const setBird = bird => ({
  type: SET_BIRD,
  animal: bird
})

const setFish = fish => ({
  type: SET_FISH,
  animal: fish
})

export { setMammal, setBird, setFish };
