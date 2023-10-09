import thunk from 'redux-thunk';
import rootReducer from '../reducer';


const { applyMiddleware, createStore } = require("redux");
const { composeWithDevTools } = require("redux-devtools-extension");



const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk))); 

export default store;
