'use strict';

import * as React from 'react';

import {
  Box,
  Card,
  Flex,
  Heading,
  Paragraph
} from 'reakit';

import { theme } from '@Config';
import { Badge, VerificationMark, Stencil } from '@Components';

const { spacing } = theme;

type StoresFeedItemThumbnailProps = {
  /** Item thumbnail source file path */
  src?: string,
  /** Thumbnail width */
  width: string
};

export const StoresFeedItemThumbnail:React.FC<StoresFeedItemThumbnailProps> = ({ src, width }) => {
  let storesFeedThumbnailStyles:React.CSSProperties = {
    width,
    flex: 1,
    borderTopLeftRadius: theme.radius[1],
    borderBottomLeftRadius: theme.radius[1],
    position: 'relative',
    minHeight: '82px',
    backgroundColor: theme.palette.grayscale[4],
    zIndex: 10
  }

  if (src) {
    storesFeedThumbnailStyles = {
      ...storesFeedThumbnailStyles,
      backgroundImage: `url("${src}")`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',  
    }
  }

  return (
    <div
      style={storesFeedThumbnailStyles}
    />
  )
}

type StoresFeedItemDescriptionProps = {
  /** Store name */
  storeTitle: string,
  /** Description for store */
  storeDescription: string,
  /** Renders <VerificationMark /> component */
  storeIsVerified?: boolean
}

export const StoresFeedItemDescription:React.FC<StoresFeedItemDescriptionProps> = ({
  storeDescription,
  storeTitle,
  storeIsVerified
}) => (
  <Box style={{ padding: `0 ${spacing[1]} ${spacing[1]} ${spacing[1]}` }}>
    <Flex alignItems={'center'}>
      <Heading
        use="h6"
        style={{
          flex: 1,
          color: theme.palette.grayscale[1]
        }}>{storeTitle}</Heading>
      { storeIsVerified && <VerificationMark /> }
    </Flex>

    <Paragraph
      fontSize={theme.fontSizes[1]}
      lineHeight={spacing[1]}
      color={theme.palette.grayscale[2]}
    >
      {storeDescription}
    </Paragraph>
  </Box>
)

type StoresFeedItemFooterProps = {
  /** Store service hours */
  storeHours: string
  /** Store service fees */
  storeServiceFee: string
}

export const StoresFeedItemFooter:React.FC<StoresFeedItemFooterProps> = ({
  storeHours,
  storeServiceFee
}) => (
  <Flex
    margin={0}
    width={'100%'}
    padding={`${spacing[0]} ${spacing[1]}`}
    background={theme.palette.grayscale[6]}
    justifyContent={'space-between'}
    alignItems={'center'}
  >
    <Paragraph
      fontSize={theme.fontSizes[0]}
      margin={0}
      fontWeight={'600'}
      color={theme.palette.grayscale[3]}
    >
      <b style={{ color: theme.palette.grayscale[1] }}>{storeServiceFee}</b> per delivery
    </Paragraph>
    <Badge
      icon={'timer'}
      text={storeHours}
    />
  </Flex>
)

export const StoresFeedItemSkeleton:React.FC = ({}) => (
  <Box data-testid={'stores-feed-item'}>
    <Card>
      <Flex margin={0} width={'100%'}>
        <StoresFeedItemThumbnail width={'30%'} />
        <Flex width={'70%'} flexDirection={'column'} alignItems={'center'} padding={`12px`}>
          <Flex
            alignItems={'center'}
            width={'100%'}
            background={'#fff'}
            justifyContent={'space-between'}
            marginBottom={spacing[0]}
          >
            <Stencil width={'45%'} />
            <Stencil width={'24px'} height={'24px'} radius={'100%'} />
          </Flex>
          <Box width={'100%'}>
            <Stencil height={'14px'} width={'70%'} />
            <Stencil height={'14px'} width={'30%'} />
          </Box>
        </Flex>
      </Flex>
    </Card>
  </Box>
)