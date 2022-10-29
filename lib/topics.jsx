import axios from "axios";
import {
  getTopics,
  getTopicsSSR,
  getTopicsByCategory,
  getMoreTopics,
  loading,
  isError,
  search,
  searchMore,
} from "../redux/topics";

export const fetchTopics = (skip) => async (dispatch) => {
  dispatch(loading());

  try {
    const { data } = await axios.get(`/api/topics?skip=${skip}`);


    dispatch(getTopics(data));
  } catch (error) {
    dispatch(isError(error));
  }
};

export const fetchMoreTopics = (skip) => async (dispatch) => {
  dispatch(loading());

  try {
    const { data } = await axios.get(`/api/topics?skip=${skip}`);
   
    dispatch(getMoreTopics(data));
  } catch (error) {
    dispatch(isError(error));
  }
};

// export const fetchByCategory = (category, skip) => async (dispatch) => {

//   dispatch(loading);

//   try {
//     const { data } = await axios.get(
//       `/api/topics/category?queryCategory=${category}&skip=${skip}`
//     );
//     dispatch(getTopicsByCategory(data));
//   } catch (error) {
//     dispatch(isError(error));
//   }
// };
// export const fetchMoreByCategory = (category) => async (dispatch) => {
//   try {
//     const { data } = await axios.get(
//       `/api/topics/category?queryCategory=${category}&skip=${skip}`
//     );
//     dispatch(getMoreTopics(data));
//   } catch (error) {
//     dispatch(isError(error));
//   }
// };

export const searchTopics = (searchTerm, skip) => async (dispatch) => {
  dispatch(loading)

  try {
    const { data } = await axios.get(
      `/api/topics/search?searchTerm=${searchTerm}&skip=${skip}`
    );
    dispatch(search(data));
  } catch (error) {
    dispatch(isError(error));
  }
};
export const searchMoreTopics = (searchTerm, skip) => async (dispatch) => {

  try {
    const { data } = await axios.get(
      `/api/topics/search?searchTerm=${searchTerm}&skip=${skip}`
    );
    dispatch(searchMore(data));
  } catch (error) {
    dispatch(isError(error));
  }
};
