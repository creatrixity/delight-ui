import { Props } from 'react';

import {
    IHomePage,
    IStorePage,
    IEntity
} from '@Interfaces';

export type IStore = {
    home: IHomePage.IStateProps,
    store: IStorePage.IStateProps,
    entities: IEntity.IStateProps,
}