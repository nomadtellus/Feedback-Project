import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import logger from 'redux-logger';


//Going into my reducer function we have the previous state, and an action
const feedbackReducer = (state=[], action) => {
    if (action.type === 'ADD_FEEDBACK'){
        //Don't need to spread because we are getting a new array from the server
        //and all it has are the things we want in it (don't want doubles)
        return action.payload;
    }
    //if this isn't the reducer's action, just return what came in as state
    //no changes so no need to update state and cause re-rendering
    return state;
}


let storeInstance = createStore(
    combineReducers({
        //reducers here
        feedbackReducer,
    }),
    applyMiddleware(logger),
)



ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
