import * as types from "./actionTypes";

export function fetchContacts() {
  return {
    type: types.FETCH_CONTACTS,
    payload: localStorage.getItem('contacts') ? JSON.parse(localStorage.getItem('contacts')) : []
  }
}

export function addContact(data) {
  return {
    type: types.ADD_CONTACT,
    payload: data
  };
}

export function updateContactOrder(data) {
    return {
        type: types.UPDATE_CONTACT_ORDER,
        payload: data
    };
}

export function updateContact(data) {
    return {
        type: types.UPDATE_CONTACT,
        payload: data
    };
}

export function deleteContact(index) {
  return {
    type: types.DELETE_CONTACT,
    payload: index
  };
}
