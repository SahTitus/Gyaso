import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	isLoading: true,
	articles: [],
	queriedArticles: [],
	error: [],


};

export const articlesSlice = createSlice({
	name: "articles",
	initialState,
	reducers: {
		getArticles: (state, action) => {
			state.articles =[...state.articles, ...action.payload];
			state.isLoading = false;
		},
		getArticlesSSR: (state, action) => {
			state.articles = action.payload;
			state.isLoading = false;
			console.log(action.payload)
		},
		search: (state, action) => {
			state.queriedArticles = action.payload;
			state.isLoading = false;
			console.log(action.payload)
		},
		searchMore: (state, action) => {
			state.queriedArticles =[...state.queriedArticles, ...action.payload];
			state.isLoading = false;
		},
		getArticlesByCategory: (state, action) => {
			state.articles = action.payload;
			state.isLoading = false;
		},
		
		getMoreArticles: (state, action) => {
			
			state.articles = [...state.articles, ...action.payload];
			state.isLoading = false;
			
  console.log('ssr> ', action.payload);
		},
		
		loading: (state) => {
			state.isLoading = true;
		},
		isError: (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
		},
		
	},
});

export const {
	getArticles,
	getArticlesSSR,
	getArticlesByCategory,
	loading,
	getMoreArticles,
	isError,
	searchMore,
	search,
} = articlesSlice.actions;
export default articlesSlice.reducer;
