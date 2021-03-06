import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';
// eslint-disable-next-line import/no-cycle
import counterReducer from './features/counter/counterSlice';
// eslint-disable-next-line import/no-cycle
import buyReducer from './features/buy/buySlice';
// eslint-disable-next-line import/no-cycle
import homeReducer from './components/homeSlice';

export default function createRootReducer(history: History) {
  return combineReducers({
    router: connectRouter(history),
    counter: counterReducer,
    buy: buyReducer,
    home: homeReducer,
  });
}
