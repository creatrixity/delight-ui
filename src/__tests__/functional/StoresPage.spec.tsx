import * as React from 'react'
import { Provider } from 'react-redux';
import { render, cleanup, wait } from 'react-testing-library'
import withRedux from 'next-redux-wrapper';

import StoreEndpoints from '@Store/Store/endpoints'
import StoresPage from '../../../pages/stores';
import storeMain from '@Store'

let App:any = ({ store }:any) => (
  <Provider store={store}>
    <StoresPage />
  </Provider>
)

App = withRedux(storeMain)(App)

const setup = () => {
  const { container, debug, queryByTestId, queryAllByTestId } = render(<App />)

  return {
    container,
    queryByTestId,
    queryAllByTestId,
    debug
  }
}

describe('Store tests', () => {
  const responsePayload = JSON.stringify(require('../../__mocks__/stores.json'))

  beforeEach(() => {
    global.fetch.resetMocks()
  })

  test('it should make a request for stores and receive fulfillment', () => {
    global.fetch.mockResponse(responsePayload)

    StoreEndpoints.fetchStores()
    .then(res => res.json())
    .then(res => {
      // We expect to find at least two stores
      expect(res.stores.length).toEqual(2)
    });

    // Expect this fetch call to have been made at least once.
    expect(global.fetch.mock.calls.length).toEqual(1)
  })

  test('it should make a request, receive fulfillment and display a list of stores on the page', async () => {
    global.fetch.mockResponseOnce(responsePayload)

    const { queryAllByTestId } = setup();

    await wait(() => {
      expect(queryAllByTestId('stores-feed-item').length).toBeGreaterThan(1);
    });

  })

  afterEach(cleanup)
});