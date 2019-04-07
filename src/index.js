import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import logger from 'redux-logger';



const feelingsReducer = (state=[], action) => {
    if (action.type === 'ADD_FEELINGS'){
        return action.payload;
    }
    return state;
}

const commentsReducer = (state=[], action) => {
    if (action.type === 'ADD_COMMENTS'){
        return action.payload;
    }
    return state;
}

const understandingReducer = (state=[], action) => {
    if (action.type === 'ADD_UNDERSTANDING'){
        return action.payload;
    }
    return state;
}

const supportReducer = (state=[], action) => {
    if (action.type === 'ADD_SUPPORT'){
        return action.payload;
    }
    return state;
}


let storeInstance = createStore(
    combineReducers({
        //reducers here
        feelingsReducer,
        supportReducer,
        understandingReducer,
        commentsReducer,
    }),
    applyMiddleware(logger),
)



ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
