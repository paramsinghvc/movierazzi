import { IReducer, IAction } from "./shared/models";
import { Map } from "immutable";
import { AppConstants } from "./app.constants";

const initialState = Map({
	isLoading: false,
})

export const AppReducer: IReducer<Map<string, any>> = (state: Map<string, any> = initialState, action: IAction) => {
	switch (action.type) {
		case AppConstants.SHOW_LOADER:
			return state.merge({
				isLoading: action.payload
			})

		default:
			return state;
	}
}
