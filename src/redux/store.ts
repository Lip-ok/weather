import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk, {ThunkMiddleware} from "redux-thunk";
import weatherReducer from "./weatherReducer";

const rootReducer = combineReducers({
    weatherReducer
})

export type RootState = ReturnType<typeof rootReducer>;
const store = createStore(rootReducer, applyMiddleware(thunk as ThunkMiddleware<RootState, any>));

export default store;

