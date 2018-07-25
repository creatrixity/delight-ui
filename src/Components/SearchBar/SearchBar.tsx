'use strict';

import React from 'react'
import {
  SearchBarAddon,
  SearchBarInput,
  SearchBarWrapper
} from './SearchBarAtoms'

import { Icon } from '@Components';

type SearchBarProps = {

}

export const SearchBar:React.FC<SearchBarProps> = (props) => {
  return (
    <label>
      <SearchBarWrapper>
        <SearchBarInput width={'60vw'} placeholder={'Find food...'} />
        <SearchBarAddon>
          <Icon name="search" fill={'#b8b4ad'} />
        </SearchBarAddon>
      </SearchBarWrapper>
    </label>
  )
}