import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: true,
  articles: [],
  favoriteArticles: [],
  queriedArticles: [],
  error: [],
  totalCount: 0,
};

export const articlesSlice = createSlice({
  name: "articles",
  initialState,
  reducers: {
    getArticles: (state, action) => {
      state.articles = [...state.articles, ...action.payload.articles];
      state.totalCount = action.payload.totalCount;
      state.isLoading = false;
    },
    getArticlesSSR: (state, action) => {
      state.articles = action.payload.articles;
       state.totalCount = action.payload.totalCount;
      state.isLoading = false;
    },
    getArticlesByRefresh: (state, action) => {
      state.articles = action.payload.articles;
       state.totalCount = action.payload.totalCount;
      state.isLoading = false;
    },

    search: (state, action) => {
      state.queriedArticles = action.payload.articles;
      state.totalCount = action.payload.totalCount;
      state.isLoading = false;
    },
    searchMore: (state, action) => {
      state.queriedArticles = [
        ...state.queriedArticles,
        ...action.payload.articles,
      ];
      state.isLoading = false;
    },
    getArticlesByCategory: (state, action) => {
      state.articles = action.payload.articles;
      state.totalCount = action.payload.totalCount;
      state.isLoading = false;
    },

    getMoreArticles: (state, action) => {
      state.articles = [...state.articles, ...action.payload.articles];
      state.isLoading = false;
    },

    loading: (state) => {
      state.isLoading = true;
    },
    isError: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    getFavoriteArticles: (state, action) => {
      state.favoriteArticles = action.payload;
      state.isLoading = false;
    },
    addFavoriteArticle: (state, action) => {
      state.favoriteArticles = action.payload;
      state.favoriteArticles = [...state.favoriteArticles, action.payload];
    },
    removeFromFavoriteArticles: (state, action) => {
      state.favoriteArticles = state.favoriteArticles.filter(
        (article) => article._id !== action.payload
      );
    },
  },
});

export const {
  getArticles,
  getArticlesSSR,
  getArticlesByCategory,
  getFavoriteArticles,
  addFavoriteArticle,
  removeFromFavoriteArticles,
  loading,
  getMoreArticles,
  getArticlesByRefresh,
  isError,
  searchMore,
  search,
} = articlesSlice.actions;
export default articlesSlice.reducer;
