/**
 * Combine all reducers in this file and export the combined reducers.
 */
import { combineReducers } from "redux-immutable";

// global reducers
import { routesReducer } from "../routes/reducer";
import { appReducer } from "../containers/app/reducer";
import { headerReducer } from "../containers/header/reducer";
import { homeReducer } from "../screens/home/reducer";
import { pageReducer } from "../screens/page/reducer";

export default function createReducer(injectedReducers) {
  return combineReducers({
    routes: routesReducer,
    app: appReducer,
    page: pageReducer,
    home: homeReducer,
    header: headerReducer,
    ...injectedReducers
  });
}
