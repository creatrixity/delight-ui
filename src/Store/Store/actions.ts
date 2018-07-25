'use strict';
import { normalize } from 'normalizr';

import { Dispatch } from 'redux';

import { ActionTypes } from "@Constants";
import { IStorePage } from '@Interfaces';

import { EntityActions } from '@Store/Entity/actions';
import { storeSchema } from '@Store/schema';

/**
 * ACTIONS
*/
export const StoreActions = {
	Map : (payload:any) => ({
		payload,
		type: ActionTypes.Store.SetReducer
	}),

	Reset : () => ({
		type: ActionTypes.Store.ResetReducer
	}),

	toggleStoresFetchingStatus: (isFetchingStores:boolean) => {
		return StoreActions.Map({
			isFetchingStores: !isFetchingStores
		})
	},

	fetchStores: () => {
		return (dispatch:Dispatch, getState:any, api:any) => {	
			dispatch(StoreActions.toggleStoresFetchingStatus(
					getState().store.isFetchingStores
				)
			);

			api.fetchStores()
				.then(api.checkStatus)
				.then(api.toJSON)
        .then(({ stores }:IStorePage.IStoresData) => {
					const { entities } = normalize(stores, [ storeSchema ]);

					dispatch(StoreActions.toggleStoresFetchingStatus(
							getState().store.isFetchingStores
						)
					);
					dispatch(EntityActions.Map({ ...entities }))
				})
        .catch((e:any) => api.errorHandler(dispatch, e))
		}
	}
}