import {combineReducers} from 'redux';

import language from './language';

const appReducer = combineReducers ({
    language
});

const rootReducer = (state, action) => {
  return appReducer(state, action)
}

export default rootReducer;
