import {actionTypes} from '../constants/actionTypes';

const INITIAL_STATE = {
  data: [],
};

export default (state = INITIAL_STATE, action: {type: any; payload: any}) => {
  switch (action.type) {
    case actionTypes.PLANETS_DATA:
      return {...state, planetsData: action.payload};
    default:
      return state;
  }
};
