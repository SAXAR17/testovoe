import {applyMiddleware, combineReducers, createStore} from "redux";
import testsReducer from "./Reducers/task-reducer";
import thunkMiddleware from 'redux-thunk'
import sitesReducer from "./Reducers/sites-reducer";

const reducers = combineReducers({
    test: testsReducer,
    sites: sitesReducer,
})

const store = createStore(reducers,
    applyMiddleware(thunkMiddleware))
window.store = store
export default store;
