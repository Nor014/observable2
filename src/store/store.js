import { createStore, combineReducers, applyMiddleware, compose, } from 'redux';
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import listReducer from '../reducers/listReducer';
import detailsReducer from '../reducers/detailsReducer';
import { getListEpic } from '../epics/epics'

const reducers = combineReducers({
  listState: listReducer,
  detailsState: detailsReducer
});

const epic = combineEpics(getListEpic);
const epicMiddleware = createEpicMiddleware();

const store = createStore(reducers, applyMiddleware(epicMiddleware));
epicMiddleware.run(epic);

export default store;