import { IReducer, IAction } from "../shared/models";
import { fromJS } from "immutable";
import { DiscoverConstants } from "./discover.constants";

const initialState = fromJS({
	movies: []
})

export const DiscoverReducer: IReducer<Map<string, any>> = (state: Map<string, any> = initialState, action: IAction) => {
	switch (action.type) {
		case DiscoverConstants.SET_MOVIES:
			return state.set('movies', fromJS(action.payload));

		default:
			return state;
	}
}
