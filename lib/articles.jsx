import axios from "axios";
import {
  getArticles,
  getMoreArticles,
  loading,
  isError,
} from "../redux/articles";

export const fetchArticles = (skip) => async (dispatch) => {
  dispatch(loading());

  try {
    const { data } = await axios.get(`/api/articles?skip=${skip}`);

    dispatch(getArticles(data));
  } catch (error) {
    dispatch(isError(error));
  }
};

export const fetchMoreArticles = (skip) => async (dispatch) => {
  dispatch(loading());
  try {
    const { data } = await axios.get(`/api/articles?skip=${skip}`);

    dispatch(getMoreArticles(data));
  } catch (error) {
    dispatch(isError(error));
  }
};
