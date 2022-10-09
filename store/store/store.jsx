import { configureStore } from '@reduxjs/toolkit';
// import authSlice  from '../redux/auth';
import  articlesSlice  from '../../redux/articles';
// import  commentsSlice  from '../redux/comments';

export default configureStore({
	reducer: {
		articles: articlesSlice,
		// auth: authSlice,
		// comments: commentsSlice,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}),
});