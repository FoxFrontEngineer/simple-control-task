import { createStore, combineReducers } from "redux";
import rootReducer from "./reducers/index";
import { reducer as formReducer } from "redux-form";

const reducers = {
  rootReducer,
  form: formReducer,
};

const reducer = combineReducers(reducers);
const store = createStore(
  reducer,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
