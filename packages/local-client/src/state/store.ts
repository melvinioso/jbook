import { legacy_createStore as createstore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import { ActionTypes } from './action-types';

export const store = createstore(reducers, {}, applyMiddleware(thunk));

store.dispatch({
  type: ActionTypes.INSERT_CELL_AFTER,
  payload: {
    id: null,
    type: 'code',
  },
});

store.dispatch({
  type: ActionTypes.INSERT_CELL_AFTER,
  payload: {
    id: null,
    type: 'code',
  },
});
