import * as React from 'react';
import { Box, Flex, Toolbar } from "reakit";
import { theme } from "@Config";
import { Icon } from "@Components";

type DockerBarProps = {}

const defaultProps = {
  isMenuOpen: false,
  isActive: false
}

const DockerIcon:React.FC<{ name: string, label: string, isActive?: boolean }> = ({
  name,
  label,
  isActive
}) => {
  const iconColor = isActive ? theme.palette.primary[6]: theme.palette.primary[5];

  return (
    <Flex flexDirection={'column'} alignItems={'center'}>
      <Icon size={32} name={name} fill={iconColor}/>
      <Box
        color={iconColor}
        fontSize={'8px'}
        fontWeight={'600'}
        textTransform={'uppercase'}
      >
        {label}
      </Box>
    </Flex>
  )
}

const DockerBarContainerStyles:React.CSSProperties = {
  position: 'fixed',
  bottom: 0,
  width: '100%',
  zIndex: 600
}

export const DockerBar:React.FC<DockerBarProps> = () => {
  const { palette: { primary } } = theme;
  const brand = primary[3];

  return (
    <Box style={DockerBarContainerStyles}>
      <Toolbar background={brand} gutter={'16px 32px'}>
        <Toolbar.Content align="start">
          <DockerIcon name={'home'} label={'Home'} isActive />
        </Toolbar.Content>
        <Toolbar.Content align={'center'}>
          <DockerIcon name={'shopping-basket'} label={'Basket'} />
        </Toolbar.Content>
        <Toolbar.Content align="end">
          <DockerIcon name={'profile'} label={'Account'} />
        </Toolbar.Content>
      </Toolbar>
    </Box>
  )
}

DockerBar.defaultProps = defaultProps;