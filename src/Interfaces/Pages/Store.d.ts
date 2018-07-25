import { Props } from 'react';
import { IStoreData } from '@Interfaces/Redux/Store';

declare module IStorePage {
	export interface IOwnProps extends Props<{}> {}

    export interface IState { }
	
	export interface IStateProps {
		isFetchingStores: boolean,
		stores?: any
	}
	
	export interface IDispatchProps {
		Map(payload: Actions.IMapPayload): Actions.IMapResponse;
		fetchStores(): Actions.IStoresResponse
  }
    
	export type IProps = IOwnProps & IStateProps & IDispatchProps;

    module Actions {
		export interface IMapPayload { }
		
		export interface IMapResponse { }

		export interface IStoresResponse { }
	}

	export type IStoreData = {
    id: number,
    name: string,
    description: string,
    latitude: string,
    longitude: string,
    location: string,
    city: string,
    brand: string,
    service_fee: string,
    verified_at: string,
    open_at: string,
    close_at: string,
	}

	export type IStoresData = {
		stores: IStoreData[],
		storesCount: number
	}
}