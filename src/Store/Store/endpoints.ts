'use strict';

import { callApi } from '@Utilities';
import { ApiConstants } from '@Constants'

const fetchStores = () => callApi({ endpoint: ApiConstants.STORES_FEED_ENDPOINT });

export default {
  fetchStores
}