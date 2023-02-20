// import rootReducer from "./reducer";
// import { createStore, applyMiddleware } from 'redux';
// import thunk from "redux-thunk";
// import { composeWithDevTools } from "redux-devtools-extension";

// const composeEnhancers = composeWithDevTools()

// const store = createStore(rootReducer, applyMiddleware(thunk));

// export default store
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const enhancers = [];
const middleware = [thunk];

// Thêm middleware vào enhancers
enhancers.push(applyMiddleware(...middleware));

// Thêm enhancer của Redux DevTools (nếu có)
const composeEnhancers = composeWithDevTools({
  // options like actionSanitizer, stateSanitizer
});
enhancers.push(composeEnhancers);

// Kết hợp các enhancer lại thành một enhancer đơn
const composedEnhancers = compose(...enhancers);

const store = createStore(rootReducer, composedEnhancers);

export default store;
