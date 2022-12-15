import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	isLoading: false,
	topics: [],
	queriedTopics: [],
	error: [],
	totalCount: 0,
};

export const topicsSlice = createSlice({
	name: "topics",
	initialState,
	reducers: {
		getTopics: (state, action) => {
			state.topics =[...state.topics, ...action.payload];
			state.isLoading = false;
		},
		getTopicsSSR: (state, action) => {
			state.topics = action.payload;
			state.isLoading = false;
		},
		search: (state, action) => {
			state.queriedTopics = action.payload.topics;
            state.totalCount = action.payload.totalCount;;
			state.isLoading = false;
		},
		searchMore: (state, action) => {
			state.queriedTopics =[...state.queriedTopics, ...action.payload.topics];
			state.isLoading = false;
		},
		
		getMoreTopics: (state, action) => {
			state.topics = [...state.topics, ...action.payload];
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
	getTopics,
	getTopicsSSR,
	getTopicsByCategory,
	loading,
	getMoreTopics,
	isError,
	searchMore,
	search,
} = topicsSlice.actions;
export default topicsSlice.reducer;
