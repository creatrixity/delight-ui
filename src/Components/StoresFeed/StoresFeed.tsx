import * as React from 'react';

import { Box, Heading } from 'reakit';
import {
  Col,
  Row,
  Grid
} from '@Components';
import { theme } from '@Config';
import { IStorePage } from '@Interfaces/Pages/Store';

import { StoresFeedItem } from './StoresFeedItem';
import { StoresFeedItemSkeleton } from './StoresFeedItemAtoms';
import { formatServiceHour } from '@Utilities';

type StoresFeedProps = {
  /** Displays stores loading animation */
  isFetchingStores?: boolean,
  /** Array list of stores */
  stores: IStorePage.IStoreData[]
};

const defaultProps = {
  isFetchingStores: false,
  stores: []
}

export const StoresFeed:React.FC<StoresFeedProps> = ({ stores, isFetchingStores }) => {
  return (
    <Box padding={`${theme.spacing[0]} 0`}>
      <Grid>
        <Row>
          <Col>
            <Heading
              use="h3"
              margin={`${theme.spacing[1]} 0`}
              color={theme.palette.grayscale[2]}
              data-testid={'stores-screen-title'}
            >Quick & Delightful.</Heading>
            {isFetchingStores && 
              <Box>
                {Array.from('12345').map((item:any, key:number) => (
                  <Box key={key} marginBottom={theme.spacing[1]}>
                    <StoresFeedItemSkeleton />
                  </Box>
                ))}
              </Box>
            }

            {(stores.length > 0 && !isFetchingStores) && (
            <>
              {stores.map(({
                brand,
                description,
                id,
                name,
                service_fee,
                open_at,
                close_at,
                verified_at
              }:IStorePage.IStoreData) => 
                <Box key={id} marginBottom={'8px'}>
                  <StoresFeedItem
                    description={description}
                    thumbnailImageSrc={`/static/img/${brand}`}
                    title={name}
                    serviceHours={`${formatServiceHour(open_at)} am - ${formatServiceHour(close_at)} pm`}
                    serviceFee={`N${service_fee}`}
                    isVerified={verified_at !== null}
                  />
                </Box>
                )}
              </>
            )}
          </Col>
        </Row>
      </Grid>
    </Box>
  )
}

StoresFeed.defaultProps = defaultProps;