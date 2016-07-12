import { combineReducers } from 'redux';
import PostsReducer from './reducer_posts';
import {reducer as formReducer } from 'redux-form';
  //Import redux-form, grab reducer property, rename as formReducer

const rootReducer = combineReducers({
  posts: PostsReducer,
  form: formReducer
});
//Make sure you use form with formReducer

export default rootReducer;
