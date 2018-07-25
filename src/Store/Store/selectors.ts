import { denormalize } from 'normalizr';

import { IStore } from '@Interfaces/Redux/Store';
import { createSelector } from 'reselect';
import { getEntities } from '@Store/App/selectors'
import { storeSchema } from '@Store/schema'

export const getStores = createSelector([ getEntities ], (entities:any) => denormalize(
    Object.keys(entities.stores),
    [ storeSchema ],
    entities
  )
)

export const getIsFetchingStores = (state:IStore):boolean => state.store.isFetchingStores;