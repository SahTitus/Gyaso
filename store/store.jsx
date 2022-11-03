import { configureStore } from '@reduxjs/toolkit';
import authSlice  from '../redux/auth';
import  articlesSlice  from '../redux/articles';
import  topicsSlice  from '../redux/topics';

export default configureStore({
	reducer: {
		articles: articlesSlice,
		auth: authSlice,
		topics: topicsSlice,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}),
});