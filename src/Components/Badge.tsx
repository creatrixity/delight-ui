import * as React from 'react';
import { Flex } from 'reakit';
import { theme } from '@Config';
import { Icon } from '@Components';

type BadgeProps = {
  background?: string,
  color?: string,
  icon?: string,
  text: string
}

const defaultProps = {
  color: theme.palette.green[0],
  background: theme.palette.green[6],
  icon: undefined
}

export const Badge:React.FC<BadgeProps> = ({ background, color, icon, text }) => {
  return (
    <Flex
      alignItems={'center'}
      background={background}
      borderRadius={theme.radius[3]}
      color={color}
      fontSize={theme.fontSizes[0]}
      fontWeight={'600'}
      margin={0}
      padding={`${parseInt(theme.spacing[0]) / 2}px ${theme.spacing[0]}`}
      textTransform={'uppercase'}
    >
      {icon && <Icon name={icon} size={theme.spacing[1]}/>}
      <span style={{ paddingLeft: theme.spacing[0] }}>{text}</span>
    </Flex>
  )
}

Badge.defaultProps = defaultProps;