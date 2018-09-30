export default {}

export const SET_TITLE = "SET_TITLE";
export const setTitle = title => ({ type: SET_TITLE, payload: { title } });

export const SET_ACTIVE_ELEMENT_TYPE = "SET_ACTIVE_ELEMENT_TYPE";
export const setActiveElementType = activeElementType => ({ type: SET_ACTIVE_ELEMENT_TYPE, payload: { activeElementType } });

export const ADD_ELEMENT = "ADD_ELEMENT";
export const addElement = element => ({ type: ADD_ELEMENT, payload: { element } });

export const EDIT_ELEMENT = "EDIT_ELEMENT";
export const editElement = elementId => ({ type: EDIT_ELEMENT, payload: { elementId } });

export const UPDATE_ELEMENT = "UPDATE_ELEMENT";
export const updateElement = element => ({ type: UPDATE_ELEMENT, payload: { element } });

export const DELETE_ELEMENT = "DELETE_ELEMENT";
export const deleteElement = elementId => ({ type: DELETE_ELEMENT, payload: { elementId } });
