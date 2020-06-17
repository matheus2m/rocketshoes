import { createStore } from 'redux';
import rootReducer from './modules/rootReducer';

const enhance =
  process.NODE_ENV === 'development' ? console.tron.createEnhancer() : null;

const store = createStore(rootReducer);

export default store;
