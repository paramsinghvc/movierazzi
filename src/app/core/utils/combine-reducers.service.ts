import { combineReducers } from "redux";
import { AppReducer } from "../../app.reducer";
import { DiscoverReducer } from "../../discover/discover.reducer";

export const rootReducer =  combineReducers({
	app: AppReducer,
	discover: DiscoverReducer
});
