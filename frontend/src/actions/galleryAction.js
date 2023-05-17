import {
  NEW_GALLERY_REQUEST,
  NEW_GALLERY_SUCCESS,
  NEW_GALLERY_FAIL,
  ALL_GALLERY_REQUEST,
  ALL_GALLERY_SUCCESS,
  ALL_GALLERY_FAIL,
  SINGLE_GALLERY_REQUEST,
  SINGLE_GALLERY_SUCCESS,
  SINGLE_GALLERY_FAIL,
  GALLERY_DELETE_REQUEST,
  GALLERY_DELETE_SUCCESS,
  GALLERY_DELETE_FAIL,
  CLEAR_ERRORS,
} from "../constant/gallery";
import axios from "axios";

// Add to gallery action
export const addToGalleryAction = (galleryData) => async (dispatch) => {
  try {
    dispatch({ type: NEW_GALLERY_REQUEST });
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };
    const { data } = await axios.post(
      `/api/v1/gallery/new`,
      galleryData,
      config
    );
    dispatch({
      type: NEW_GALLERY_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: NEW_GALLERY_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const allGalleryAction = () => async (dispatch) => {
  try {
    dispatch({ type: ALL_GALLERY_REQUEST });

    const { data } = await axios.get(`/api/v1/gallery/images`);
    dispatch({
      type: ALL_GALLERY_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ALL_GALLERY_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const singleGalleryAction = (id) => async (dispatch) => {
  try {
    dispatch({ type: SINGLE_GALLERY_REQUEST });

    const { data } = await axios.get(`/api/v1/gallery/image/${id}`);
    dispatch({
      type: SINGLE_GALLERY_SUCCESS,
      payload: data.gallery,
    });
  } catch (error) {
    dispatch({
      type: SINGLE_GALLERY_FAIL,
      payload: error.response.data.message,
    });
  }
};

// delete a gallery
export const deleteGalleryAction = (galleryId) => async (dispatch) => {
  try {
    dispatch({ type: GALLERY_DELETE_REQUEST });
    const { data } = await axios.delete(`/api/v1/gallery/image/${galleryId}`);
    dispatch({
      type: GALLERY_DELETE_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: GALLERY_DELETE_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Clearing errors
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
