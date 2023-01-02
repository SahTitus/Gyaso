import axios from "axios";
import {
  getArticles,
  getArticlesByRefresh,
  getArticlesByCategory,
  getMoreArticles,
  loading,
  isError,
  search,
  getArticlesSSR,
  removeFromFavoriteArticles,
  searchMore,
  getFavoriteArticles,
} from "../redux/articles";

export const fetchArticles = (skip) => async (dispatch) => {
  dispatch(loading());

  try {
    const { data } = await axios.get(`/api/articles?skip=${skip}`);

    dispatch(getArticlesSSR(data));
  } catch (error) {
    dispatch(isError(error));
  }
};
export const fetchArticlesSSR = (skip) => async (dispatch) => {
  // dispatch(loading());

  try {
    const { data } = await axios.get(`/api/articles?skip=${skip}`);

    dispatch(getArticlesByRefresh(data));
  } catch (error) {
    dispatch(isError(error));
  }
};

export const fetchMoreArticles = (skip) => async (dispatch) => {

  try {
    const { data } = await axios.get(`/api/articles?skip=${skip}`);

    dispatch(getMoreArticles(data));
  } catch (error) {
    dispatch(isError(error));
  }
};

export const fetchByCategory = (category, skip) => async (dispatch) => {
  dispatch(loading);

  try {
    const { data } = await axios.get(
      `/api/articles/category?queryCategory=${category}&skip=${skip}`
    );
    dispatch(getArticlesByCategory(data));
  } catch (error) {
    dispatch(isError(error));
  }
};
export const fetchMoreByCategory = (category) => async (dispatch) => {
  try {
    const { data } = await axios.get(
      `/api/articles/category?queryCategory=${category}`
    );

    dispatch(getMoreArticles(data));
  } catch (error) {
    dispatch(isError(error));
  }
};

export const searchArticles = (searchTerm, skip) => async (dispatch) => {
  dispatch(loading);
  try {
    const { data } = await axios.get(
      `/api/articles/search?searchTerm=${searchTerm}&skip=${skip}`
    );
    dispatch(search(data));
  } catch (error) {
    dispatch(isError(error));
  }
};
export const searchMoreArticles = (searchTerm, skip) => async (dispatch) => {
  try {
    const { data } = await axios.get(
      `/api/articles/search?searchTerm=${searchTerm}&skip=${skip}`
    );
    dispatch(searchMore(data));

  } catch (error) {
    dispatch(isError(error));
  }
};

export const saveArticles = (id, articleId) => async (dispatch) => {
  try {
    const { data } = await axios.patch(
      `/api/users/${id}?articleId=${articleId}`
    );

    dispatch(getUser(data));
  } catch (error) {
    dispatch(isError(error));
  }
};

export const fetchSavedArticles = (userId) => async (dispatch) => {
  dispatch(loading());

  try {
    const { data } = await axios.get(`/api/users/${userId}`);

    dispatch(getFavoriteArticles(data));
  } catch (error) {
    dispatch(isError(error));
  }
};

export const deleteFromFavorites = (id) => async (dispatch) => {
  try {
    dispatch(removeFromFavoriteArticles(id));
  } catch (err) {
    dispatch(isError(err));
  }
};
