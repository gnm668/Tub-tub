import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import videosReducer from './videos_reducer';
import likesReducer from './likes_reducer';
import dislikesReducer from './dislikes_reducer';
import commentsReducer from './comments_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    videos: videosReducer,
    likes: likesReducer,
    dislikes: dislikesReducer,
    comments: commentsReducer
});

export default entitiesReducer;
