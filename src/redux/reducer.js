import dotProp from 'dot-prop-immutable';

import {
  SET_TITLE,
  SET_ACTIVE_ELEMENT_TYPE,
  ADD_ELEMENT,
  EDIT_ELEMENT,
  UPDATE_ELEMENT,
  DELETE_ELEMENT,
} from './actions';

const initialState = {
  title: null,
  activeElementType: null,
  editingElementId: null,
  elementList: [
    {
      id: 'jmpfrix6',
      type: 'string',
      formData: {
        fieldName: 'String field name',
        title: 'String Display name',
        isRequired: true,
        minLength: 5,
        maxLength: 5463,
        pattern: '/asdfasdf/',
        renderAsTextArea: true
      }
    },
    {
      id: 'jmpft6vu',
      type: 'array',
      formData: {
        fieldName: 'My list name',
        title: 'My list Display Name',
        listOfStrings: [
          'herisafield',
          'anotherfield'
        ],
        isRequired: true
      }
    },
    {
      id: 'jmpfupx1',
      type: 'boolean',
      formData: {
        fieldName: 'Bollean  field Name',
        title: 'Boolean display Name',
        isRequired: true,
        isCheckbox: true
      }
    },
    {
      id: 'jmpfwc2n',
      type: 'integer',
      formData: {
        fieldName: 'Integer Field Name',
        title: 'Integer Display Name',
        isRequired: true,
        minimumValue: 5,
        maximumValue: 20
      }
    },
    {
      id: 'jmpb39xj',
      type: 'number',
      formData: {
        fieldName: 'fdsaf',
        title: 'asdfasf',
        isRequired: true
      }
    },
  ],
}

export default (state = initialState, { type, payload }) => {

  switch (type) {

    case SET_TITLE: {
      console.log(payload)
      return {
        ...state,
        title: payload.title.trim().replace(/\s/g, '_'),
      }
    }
    case SET_ACTIVE_ELEMENT_TYPE: {
      console.log(payload)
      return {
        ...state,
        activeElementType: payload.activeElementType,
      }
    }
    case ADD_ELEMENT: {
      return {
        ...state,
        elementList: state.elementList.concat(payload.element),
        activeElementType: null,
      }
    }
    case EDIT_ELEMENT: {
      return {
        ...state,
        editingElementId: payload.elementId,
      }
    }
    case UPDATE_ELEMENT: {
      const newState = {
        ...state,
        editingElementId: null,
      }

      const updatedElement = payload.element;
      const idList = newState.elementList.map(e => e.id);
      console.log(idList);
      const idx = idList.indexOf(updatedElement.id);
      return dotProp.set(newState, `elementList.${idx}`, updatedElement)
    }
    case DELETE_ELEMENT: {
      const newState = {
        ...state,
        editingElementId: null,
      }

      const elementId = payload.elementId;
      const idList = newState.elementList.map(e => e.id);
      console.log(idList);
      const idx = idList.indexOf(elementId);

      return dotProp.delete(newState, `elementList.${idx}`)
    }
    default:
      return state;
  }
};