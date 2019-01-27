import * as types from '../actions/actionTypes';
import {updateObject} from "../utilities";

export default function(state = {}, action) {
  switch (action.type) {
    case types.FETCH_CONTACTS:
      return {...action.payload};
    case types.UPDATE_CONTACT:
        let newState = {};
        for(let contactId in action.payload) {
            newState[contactId] = updateObject(state[contactId], {
                orderId: action.payload[contactId]
            })
        }
        return newState;
    case types.ADD_CONTACT:
      let keys = Object.keys(state);
      let newid = keys.length === 0 ? 1 : Number(keys[keys.length-1]) + 1;
      return updateObject(state, {
          [newid]: { ...action.payload, orderId: newid}
      });
    default:
      return state;
  }
}
