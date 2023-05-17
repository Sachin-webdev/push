import {
  NEW_EVENT_REQUEST,
  NEW_EVENT_SUCCESS,
  NEW_EVENT_FAIL,
  ALL_EVENT_REQUEST,
  ALL_EVENT_SUCCESS,
  ALL_EVENT_FAIL,
  SINGLE_EVENT_REQUEST,
  SINGLE_EVENT_SUCCESS,
  SINGLE_EVENT_FAIL,
  EVENT_DELETE_REQUEST,
  EVENT_DELETE_SUCCESS,
  EVENT_DELETE_FAIL,
  CLEAR_ERRORS,
} from "../constant/eventConstant";

import axios from "axios";

// Add Event
export const postEvent = (eventData) => async (dispatch) => {
  try {
    dispatch({ type: NEW_EVENT_REQUEST });
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };
    const { data } = await axios.post(`/api/v1/event/new`, eventData, config);
    dispatch({
      type: NEW_EVENT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: NEW_EVENT_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Get all Event
export const getAllEvent = () => async (dispatch) => {
  try {
    dispatch({ type: ALL_EVENT_REQUEST });

    const { data } = await axios.get(`/api/v1/events/all`);
    dispatch({
      type: ALL_EVENT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ALL_EVENT_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Get Single Event
export const getSingleEvent = (id) => async (dispatch) => {
  try {
    dispatch({ type: SINGLE_EVENT_REQUEST });

    const { data } = await axios.get(`/api/v1/event/${id}`);

    dispatch({
      type: SINGLE_EVENT_SUCCESS,
      payload: data.event,
    });
  } catch (error) {
    dispatch({
      type: SINGLE_EVENT_FAIL,
      payload: error.response.data.message,
    });
  }
};

// delete a event
export const deleteEventAction = (eventId) => async (dispatch) => {
  try {
    dispatch({ type: EVENT_DELETE_REQUEST });
    const { data } = await axios.delete(`/api/v1/event/${eventId}`);
    dispatch({
      type: EVENT_DELETE_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: EVENT_DELETE_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Clearing errors
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
