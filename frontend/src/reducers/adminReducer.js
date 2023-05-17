import {
  ALL_ADMIN_REQUEST,
  ALL_ADMIN_SUCCESS,
  ALL_ADMIN_FAIL,
  ADMIN_LOGIN_REQUEST,
  ADMIN_LOGIN_SUCCESS,
  ADMIN_LOGIN_FAIL,
  ADMIN_LOGOUT_SUCCESS,
  ADMIN_LOGOUT_FAIL,
  CLEAR_ERRORS,
} from "../constant/adminConstant";

// Get all admins

export const allAdminReducer = (state = { admins: [] }, action) => {
  switch (action.type) {
    case ALL_ADMIN_REQUEST:
      return {
        loading: true,
        admins: [],
      };
    case ALL_ADMIN_SUCCESS:
      return {
        loading: false,
        admins: action.payload,
      };

    case ALL_ADMIN_FAIL:
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

// login admin
export const adminReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case ADMIN_LOGIN_REQUEST:
      return {
        loading: true,
        isLogin: false,
      };

    case ADMIN_LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        isLogin: true,
        user: action.payload,
      };

    // case ADMIN_LOGOUT_SUCCESS:
    //   return {
    //     loading: false,
    //     isLogin: false,
    //     user: null,
    //   };

    case ADMIN_LOGIN_FAIL:
      return {
        ...state,
        loading: true,
        isLogin: false,
        admin: null,
        error: action.payload,
      };

    // case ADMIN_LOGOUT_FAIL:
    //   return {
    //     ...state,
    //     loading: false,
    //     error: action.payload,
    //   };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};
