import {
  CREATE_MESSAGE_REQUEST,
  CREATE_MESSAGE_SUCCESS,
  CREATE_MESSAGE_FAIL,
  CREATE_MESSAGE_RESET,
  GET_MESSAGES_REQUEST,
  GET_MESSAGES_SUCCESS,
  GET_MESSAGES_FAIL,
  MESSAGE_DELETE_REQUEST,
  MESSAGE_DELETE_SUCCESS,
  MESSAGE_DELETE_FAIL,
  MESSAGE_DELETE_RESET,
  CLEAR_ERRORS,
} from "../constant/messageConstant";

// create message reducer
export const createMessagereducer = (state = { message: {} }, action) => {
  switch (action.type) {
    case CREATE_MESSAGE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case CREATE_MESSAGE_SUCCESS:
      return {
        loading: false,
        success: action.payload.success,
        message: action.payload.message,
      };

    case CREATE_MESSAGE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case CREATE_MESSAGE_RESET:
      return {
        ...state,
        success: false,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};

// get all message reducer
export const getAllMessagereducer = (state = { messages: [] }, action) => {
  switch (action.type) {
    case GET_MESSAGES_REQUEST:
      return {
        loading: true,
        messages: [],
      };
    case GET_MESSAGES_SUCCESS:
      return {
        loading: false,
        messages: action.payload,
      };

    case GET_MESSAGES_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};

// Delte Message Reducer
export const messageDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case MESSAGE_DELETE_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case MESSAGE_DELETE_SUCCESS:
      return {
        ...state,
        loading: false,
        isDeleted: action.payload,
      };

    case MESSAGE_DELETE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case MESSAGE_DELETE_RESET:
      return {
        ...state,
        isDeleted: false,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};
