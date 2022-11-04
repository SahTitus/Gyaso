import {
  userData,
  isError,
  getUser,
  isLoading,
} from "../redux/auth";
import axios from 'axios'

export const fetchUser = (id) => async (dispatch) => {
  dispatch(isLoading());

  try {
    const { data } = await axios.post(`/api/users/${userId}`);

    dispatch(getUser(data));

    dispatch(userData(data));
  } catch (error) {
    dispatch(isError(error?.response?.data));
  }
};


export const logWithGoogle = (formData, router) => async (dispatch) => {
  try {
    const { data } = await axios.post(`/api/users`, formData);

    dispatch(userData(data));

    router.push("/");
  } catch (error) {
    dispatch(isError(error));
  }
};

export const register = (formData, router) => async (dispatch) => {
  try {
    const { data } = await axios.post(`/api/users`, formData);

    dispatch(userData(data));

    router.push("/");
  } catch (error) {
    dispatch(isError(error));
  }
};