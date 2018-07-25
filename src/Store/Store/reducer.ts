'use strict';

import { ActionTypes } from '@Constants';
import { IAction, IStorePage } from '@Interfaces';

/**
 * INITIAL_STATE
*/
const INITIAL_STATE: IStorePage.IStateProps = {
	isFetchingStores: false
};

type IMapPayload = IStorePage.Actions.IMapPayload;

/**
 * REDUCER
*/
export const StoreReducer = (state = INITIAL_STATE, action: IAction<IMapPayload>) => {
	switch (action.type) {
		case ActionTypes.Store.SetReducer:
			return {
				...state,
				...action.payload
			};

		case ActionTypes.Store.ResetReducer:
			return INITIAL_STATE;

		default:
			return state;
	}
};
