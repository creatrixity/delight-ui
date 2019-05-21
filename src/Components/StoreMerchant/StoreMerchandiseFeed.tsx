import * as React from 'react';

import Link from 'next/link';
import { Box, Heading } from 'reakit';
import {
  Col,
  Row,
  Grid
} from '@Components';
import { theme } from '@Config';
import { IStorePage } from '@Interfaces/Pages/Store';

type StoreMerchandiseFeedProps = {
  /** Displays merchandise loading animation */
  isFetchingMerchandise?: boolean,
};

/** Pool of characters corresponding to one store item within listings */
const RANGE_POOL = '12345';

export const StoreMerchandiseFeed:React.FC<StoreMerchandiseFeedProps> = ({ }) => {
  return (
    <Box padding={`${theme.spacing[0]} 0`}>
      <Grid>
        <Row>
          <Col>
            <Heading
              use="h3"
              margin={`${theme.spacing[1]} 0`}
              color={theme.palette.grayscale[2]}
              data-testid={'store-merchandise-screen-title'}
            >
              Finger Lickin' Good.
            </Heading>
          </Col>
        </Row>
      </Grid>
    </Box>
  )
}