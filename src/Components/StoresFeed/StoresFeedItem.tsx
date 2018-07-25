'use strict';

import * as React from 'react';

import {
  Box,
  Card,
  Flex
} from 'reakit';

import {
  StoresFeedItemDescription,
  StoresFeedItemFooter,
  StoresFeedItemThumbnail
} from './StoresFeedItemAtoms';

const thumbnailWidth = '30%';
const contentWidth = `${100 - parseInt(thumbnailWidth)}%`;

type StoresFeedItemProps = {
  description: string,
  isVerified: boolean,
  title: string,
  serviceHours: string,
  serviceFee: string,
  thumbnailImageSrc: string
};

export const StoresFeedItem:React.FC<StoresFeedItemProps> = ({
  description,
  title,
  serviceHours,
  serviceFee,
  isVerified,
  thumbnailImageSrc
}) => {
  return (
    <Box data-testid={'stores-feed-item'}>
      <Card>
        <Flex margin={0} width={'100%'}>
          <StoresFeedItemThumbnail
            width={thumbnailWidth}
            src={thumbnailImageSrc}
          />

          <Box style={{ width: contentWidth }}>
            <StoresFeedItemDescription
              storeDescription={description}
              storeTitle={title}
              storeIsVerified={isVerified}
            />
            <StoresFeedItemFooter
              storeHours={serviceHours}
              storeServiceFee={serviceFee}
            />
          </Box>
        </Flex>
      </Card>
    </Box>
  )
}