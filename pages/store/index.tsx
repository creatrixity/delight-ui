import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import Head from 'next/head'

import { StoresFeed } from '@Components';
import { IStorePage, IStore } from '@Interfaces';
import { StoreActions } from '@Store/Store/actions';
import { getStores, getIsFetchingStores } from '@Store/Store/selectors';

export class StoreItemPage extends React.Component<IStorePage.IProps, IStorePage.IState> {
	componentDidMount() {}

	public render(): JSX.Element {    
		return (
			<>
				<Head>
					<title>Deliveries from Kilimanjaro, Choba on Instachaw</title>
				</Head>
			</>
		);
	}
}

const mapStateToProps = (state: IStore) => {
  return {
		stores: getStores(state)
  }
};

const mapDispatchToProps = (dispatch: Dispatch) => (
	{
		Map: bindActionCreators(StoreActions.Map, dispatch)
	}
);

export default connect(mapStateToProps, mapDispatchToProps)(StoreItemPage);