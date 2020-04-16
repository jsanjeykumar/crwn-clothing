import {createStore,applyMiddleware} from 'redux';
import logger from 'redux-logger';

//middleware =========action->middleware->root reducer->store->DOM
//middleware get  data from action & do something with it and gives it to root reducer
import rootReducer from './root-reducer';

const middlewares=[logger]

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
