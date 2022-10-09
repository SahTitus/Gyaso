import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	isLoading: false,
	articles: [],
	
	error: [],


};

export const articlesSlice = createSlice({
	name: "articles",
	initialState,
	reducers: {
		getArticles: (state, action) => {
			state.articles = action.payload;
			state.isLoading = false;
		},
		
		getMoreArticles: (state, action) => {
			
			state.articles = [...state.articles, ...action.payload];
			state.isLoading = false;
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
	loading,
	getMoreArticles,
	isError,
} = articlesSlice.actions;
export default articlesSlice.reducer;
