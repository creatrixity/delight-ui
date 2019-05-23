import * as React from 'react';
import { Box, Flex } from "rebass";
import { theme } from "@Config";
import { Icon, HamburgerIcon, SearchBar, Grid, Row, Col } from "@Components";

type NavbarProps = {
  /** Renders the navbar menu */
  isMenuOpen: boolean,
  /** Callback for navbar menu toggle */
  onMenuToggleClick: () => void
}

type NavbarState = {
  isMenuOpen: boolean
}

export class Navbar extends React.Component<NavbarProps, NavbarState> {
  state = {
    isMenuOpen: false
  }

  constructor(props:NavbarProps) {
    super(props)
  }
  
  render() {
    const { isMenuOpen } = this.state;

    const { palette: { primary } } = theme;
    const brand = primary[3];
    const brandLightest = primary[6];

    console.log('Rendering Navbar');

    return (
      <Box bg={brand} py={1}>
        <Grid>
          <Row>
            <Col sm={2} gutterWidth={0}>
              <Icon size={32} name={'instachaw'} fill={brandLightest}/>          
            </Col>
            <Col sm={8} gutterWidth={0}>
              <SearchBar />
            </Col>
            <Col sm={2} gutterWidth={0} style={{
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Flex flexDirection={'row'} justifyContent={'center'} onClick={this.handleMenuToggleClick}>
                <HamburgerIcon
                  color={brandLightest}
                  isOpen={isMenuOpen || false}
                />
              </Flex>
            </Col>
          </Row>
        </Grid>
      </Box>
    )
  }
}