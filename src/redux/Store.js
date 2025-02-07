import { createStore } from "redux";
import rootReducer from "./reducers/Index";


const store = createStore(rootReducer, {}, window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f);

export default store;