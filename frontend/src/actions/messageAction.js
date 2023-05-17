import axios from "axios";
import {
  CREATE_MESSAGE_REQUEST,
  CREATE_MESSAGE_SUCCESS,
  CREATE_MESSAGE_FAIL,
  GET_MESSAGES_REQUEST,
  GET_MESSAGES_SUCCESS,
  GET_MESSAGES_FAIL,
  MESSAGE_DELETE_REQUEST,
  MESSAGE_DELETE_SUCCESS,
  MESSAGE_DELETE_FAIL,
  CLEAR_ERRORS,
} from "../constant/messageConstant";

// Post new message action
export const createMessage = (newMessage) => async (dispatch) => {
  try {
    dispatch({ type: CREATE_MESSAGE_REQUEST });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      `/api/v1/message/new`,
      newMessage,
      config
    );

    dispatch({
      type: CREATE_MESSAGE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CREATE_MESSAGE_FAIL,
      payload: error.response.data.message,
    });
  }
};

// get all messages action
export const getAllMessage = () => async (dispatch) => {
  try {
    dispatch({ type: GET_MESSAGES_REQUEST });

    const { data } = await axios.get(`/api/v1/messages/all`);

    dispatch({
      type: GET_MESSAGES_SUCCESS,
      payload: data.messages,
    });
  } catch (error) {
    dispatch({
      type: GET_MESSAGES_FAIL,
      payload: error.response.data.message,
    });
  }
};

// delete a message
export const deleteMessageAction = (messageId) => async (dispatch) => {
  try {
    dispatch({ type: MESSAGE_DELETE_REQUEST });
    const { data } = await axios.delete(`/api/v1/messages/delete/${messageId}`);
    dispatch({
      type: MESSAGE_DELETE_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: MESSAGE_DELETE_FAIL,
      payload: error.response.data.message,
    });
  }
};
// Clearing errors
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
