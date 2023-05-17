import {
  NEW_EVENT_REQUEST,
  NEW_EVENT_SUCCESS,
  NEW_EVENT_FAIL,
  NEW_EVENT_RESET,
  ALL_EVENT_REQUEST,
  ALL_EVENT_SUCCESS,
  ALL_EVENT_FAIL,
  SINGLE_EVENT_REQUEST,
  SINGLE_EVENT_SUCCESS,
  SINGLE_EVENT_FAIL,
  EVENT_DELETE_REQUEST,
  EVENT_DELETE_SUCCESS,
  EVENT_DELETE_FAIL,
  EVENT_DELETE_RESET,
  CLEAR_ERRORS,
} from "../constant/eventConstant";

// POST NEW EVENT
export const addEvents = (state = { newEvent: {} }, action) => {
  switch (action.type) {
    case NEW_EVENT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case NEW_EVENT_SUCCESS:
      return {
        loading: false,
        success: action.payload.success,
        newEvent: action.payload.newEvent,
      };
    case NEW_EVENT_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case NEW_EVENT_RESET:
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

// GET ALL EVENTS
export const allEventReducer = (state = { events: [] }, action) => {
  switch (action.type) {
    case ALL_EVENT_REQUEST:
      return {
        loading: true,
        events: [],
      };
    case ALL_EVENT_SUCCESS:
      return {
        loading: false,
        events: action.payload,
      };

    case ALL_EVENT_FAIL:
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

// GET SINGLE EVENTS
export const singleEventReducer = (state = { event: {} }, action) => {
  switch (action.type) {
    case SINGLE_EVENT_REQUEST:
      return {
        loading: true,
        ...state,
      };

    case SINGLE_EVENT_SUCCESS:
      return {
        loading: false,
        event: action.payload,
      };

    case SINGLE_EVENT_FAIL:
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

// Delte Event Reducer
export const eventDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case EVENT_DELETE_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case EVENT_DELETE_SUCCESS:
      return {
        ...state,
        loading: false,
        isDeleted: action.payload,
      };

    case EVENT_DELETE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case EVENT_DELETE_RESET:
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
