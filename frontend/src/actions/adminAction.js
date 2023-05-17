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
import axios from "axios";

// Config
const config = {
  headers: {
    "Content-Type": "application/json",
    Authorization: localStorage.getItem("token"),
    // "Authorization": JSON.parse(localStorage.getItem("token")),asd
  },
};
// login admin
export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: ADMIN_LOGIN_REQUEST });
    const { data } = await axios.post(
      `/api/v1/admin/login`,
      { email, password },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    localStorage.setItem("token", data.token);
    dispatch({ type: ADMIN_LOGIN_SUCCESS, payload: data.admin });
  } catch (error) {
    dispatch({
      type: ADMIN_LOGIN_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Get all Admin
export const getAllAdmin = () => async (dispatch) => {
  try {
    dispatch({ type: ALL_ADMIN_REQUEST });
    console.log("toke is diss .>> ", localStorage.getItem("token"));
    const { data } = await axios.get(`/api/v1/admins`, config);
    console.log(data);
    dispatch({
      type: ALL_ADMIN_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ALL_ADMIN_FAIL,
      payload: error.response.data.message,
    });
  }
};

// LogOut Admin
// export const logout = () => async (dispatch) => {
//   try {
//     // await axios.get("/api/v1/admin/refresh");
//     dispatch({ type: ADMIN_LOGOUT_SUCCESS });
//     localStorage.removeItem();
//   } catch (error) {
//     dispatch({
//       type: ADMIN_LOGOUT_FAIL,
//       // payload: error.response.data.message,
//     });
//   }
// };

// Clearing errors
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
