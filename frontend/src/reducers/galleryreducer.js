import {
  NEW_GALLERY_REQUEST,
  NEW_GALLERY_SUCCESS,
  NEW_GALLERY_FAIL,
  NEW_GALLERY_RESET,
  ALL_GALLERY_REQUEST,
  ALL_GALLERY_SUCCESS,
  ALL_GALLERY_FAIL,
  SINGLE_GALLERY_REQUEST,
  SINGLE_GALLERY_SUCCESS,
  SINGLE_GALLERY_FAIL,
  GALLERY_DELETE_REQUEST,
  GALLERY_DELETE_SUCCESS,
  GALLERY_DELETE_FAIL,
  GALLERY_DELETE_RESET,
  CLEAR_ERRORS,
} from "../constant/gallery";

// Post new gallery --- admin
export const addToGalleryReducer = (state = { images: {} }, action) => {
  switch (action.type) {
    case NEW_GALLERY_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case NEW_GALLERY_SUCCESS:
      return {
        loading: false,
        success: action.payload.success,
        images: action.payload.images,
      };

    case NEW_GALLERY_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case NEW_GALLERY_RESET:
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

// fetch all images
export const allGalleryReducer = (state = { images: [] }, action) => {
  switch (action.type) {
    case ALL_GALLERY_REQUEST:
      return {
        loading: true,
        images: [],
      };
    case ALL_GALLERY_SUCCESS:
      return {
        loading: false,
        images: action.payload,
      };

    case ALL_GALLERY_FAIL:
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

// fetch single gallery
export const singleGalleryReducer = (state = { gallery: {} }, action) => {
  switch (action.type) {
    case SINGLE_GALLERY_REQUEST:
      return {
        loading: true,
        ...state,
      };

    case SINGLE_GALLERY_SUCCESS:
      return {
        loading: false,
        gallery: action.payload,
      };

    case SINGLE_GALLERY_FAIL:
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
export const galleryDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case GALLERY_DELETE_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case GALLERY_DELETE_SUCCESS:
      return {
        ...state,
        loading: false,
        isDeleted: action.payload,
      };

    case GALLERY_DELETE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case GALLERY_DELETE_RESET:
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
