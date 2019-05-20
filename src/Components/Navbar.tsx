import * as React from 'react';
import { Toolbar } from "reakit";
import { theme } from "@Config";
import { Icon, HamburgerIcon, SearchBar } from "@Components";

type NavbarProps = {
  /** Renders the navbar menu */
  isMenuOpen: boolean,
  /** Callback for navbar menu toggle */
  onMenuToggleClick: () => void
}

const defaultProps = {
  isMenuOpen: false
}

export const Navbar:React.FC<NavbarProps> = (props) => {
  const { isMenuOpen, onMenuToggleClick } = props;

  const { palette: { primary } } = theme;
  const brand = primary[3];
  const brandLightest = primary[6];

  return (
    <Toolbar background={brand} gutter={'8px 16px'}>
      <Toolbar.Content align="start">
        <Icon size={32} name={'instachaw'} fill={brandLightest}/>
      </Toolbar.Content>
      <Toolbar.Content align={'center'}>
        <SearchBar /> 
      </Toolbar.Content>
      <Toolbar.Content align="end">
        <Toolbar.Focusable
          use={HamburgerIcon}
          color={'#fff'}
          menuClicked={onMenuToggleClick}
          isOpen={isMenuOpen || false}
        />
      </Toolbar.Content>
    </Toolbar>
  )
}

Navbar.defaultProps = defaultProps;