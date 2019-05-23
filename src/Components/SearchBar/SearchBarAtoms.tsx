import styled from 'styled-components';
import { Flex } from 'rebass';
import { theme } from '@Config';

const { space, radius } = theme;

const searchBarHeight:string = space[3];
const searchBarPaddingHorizontal:string = space[3];
const searchBarIconSize:number = parseInt(space[2], 10);
const searchBarAddonWidth:number = searchBarIconSize + parseInt(searchBarPaddingHorizontal, 10);

export const SearchBarAddon = styled(Flex)`
    height: ${searchBarHeight};
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: ${searchBarAddonWidth}px;
    left: 0;
`;

export const SearchBarInput = styled('input')`
    background: #fff;
    border-color: #fff;
    height: ${searchBarHeight};
    box-shadow: 0 0 0 1px #eee;
    border-radius: ${radius[2]};
    padding-left: ${searchBarAddonWidth}px;

    :focus {
      border-color: #333;
      box-shadow: 0 0 0 2px #eee;
    }
    ::placeholder {
      color: #ccc;
    }  
`;

export const SearchBarWrapper = styled(Flex)`
  position: relative;
`;
